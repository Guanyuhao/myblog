# 思考

## node.js 实现阻塞

```js
/*
fs.readdir(path[, options], callback)

fs.readdirSync(path[, options])

*/
const fs = require("path");
const path = require("path");
const rootpath = path.dirname(__dirname);
const docs = rootpath + "/docs/";
let fileDirectoryName = [];
fs.readdir(docs, (err, files) => {
  fileDirectoryName = files;
});
console.log(fileDirectoryName); // []
fileDirectoryName = fs.readdirSync(docs);
console.log(fileDirectoryName); // [...目录]
```

::: success
👆 结果出现的原因很简单，因为异步了。readdirSync 发生了阻塞了而 readdir 没有。
❓ 引出一个问题 node.js 实现阻塞？
:::

---

### 说一说

node.js 的单线程仅仅指 javascript 引擎是单线程的，无论如何我们没有办法在 javascript 中实现多线程和阻塞；但对于 node.js 的其他方面不代表不能多线程，例如 IO。如果现在 node.js 遭受大量请求，而这些请求都是 IO 密集型的，那么此时 node 每接受一个请求，在遇到耗时较长的 IO 操作时，javascript 线程并不会一直在此等待，而是交出控制，在回调堆栈里添加 IO 操作完成后要执行的操作。

而在这段时间内，node.js 又可以处理其他请求了。所以对于 node.js 而言，虽然 javascript 是单线程的，每次只能处理一个请求，但 javascript 处理一个请求的时间往往较短（对于 IO 密集型应用而言），只要可以异步处理，那么在处理的过程中，此次请求都会释放控制，使 node.js 能处理其他请求。

这并发请求的同时，IO 其实一直处于并发状态，减少处理请求的线程数，节约资源以增加 IO 的线程数，对于通常耗时很长的 IO 密集型请求来说，无疑能带来性能上的提升。

前面啰啰嗦嗦地一直在强调 IO 密集型，其实是在强调 node.js 的强项。相应的，它的短板就是 CPU 密集型的请求。道理很简单，javascript 不会并发，只能一个请求完成后才能处理其他请求。一个请求处理的时间越长，其他请求等待的时间越长。同一时间只会有一个请求被处理，并发性能很低。

话说到这儿，我想申明一点：node.js 不应该被阻塞；能异步处理的方法异步处理（如使用 fs.readFile()，而非 fs.syncReadFile()fs.readFileSync()方法）。

node 中不能阻塞，并不代表 node 外不能阻塞[原文](/http://www.nodeclass.com/articles/310731)。

```js
/*
  用 async 来搞一个
  再搞 在 fibers中实现阻塞

*/
const async = require("async");
console.log("async start");
(async () => {
  console.log(1);
  await new Promise(reslove => {
    setTimeout(() => {
      reslove();
    }, 2000);
  });
  console.log(2);
})();
console.log("async end", "--");

// 搞个成熟点的
var Fiber = require("fibers");
var http = require("http");
var html = "";
Fiber(function() {
  var httpFiber = Fiber.current;
  html = "";
  http.get("http://www.baidu.com", function(res) {
    var dataFiber = Fiber.current;
    res.on("data", function(data) {
      html += data;
    });
    res.on("end", function(data) {
      httpFiber.run();
    });
  });
  Fiber.yield();
  console.log(html);
}).run();
console.log(html);
```

fibers 的运行并不在 node 进程中，所以在 fibers 内部实现阻塞对 node 整体的性能并没有影响。而且实现起来也是相当容易，只需要在想阻塞的时候，把 fiber yield 掉。需要继续运行，则执行 run()恢复 fiber。在上面的例子中，我们希望当 http.get 请求发起时阻塞当前程序，当所有数据接收完成时，恢复程序。

于是我们在调用 http.get 后使用 Fiber.yield()中断此 fiber。在对 response 的监听中，如果触发 end 事件表明数据传输完成，于是在 end 的回调函数中，调用 Fiber.current.run()恢复 fiber，这样，后续的代码就以同步的方式拿到 http.get 请求的数据

::: warning
👆 很顺利我们实现了，但是上面两种方法都只是一个环境中阻塞并不像 readdir 与 readdirSync
❓ 如何让他像上门以异可以在全局环境中阻塞呢？
:::
