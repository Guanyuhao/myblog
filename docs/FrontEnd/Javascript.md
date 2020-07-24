# javascript

## 模拟实现 JS 的 bind 方法

```js
function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // 参数 length 继承
  boundFn._length = fn.length
  return boundFn
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind ? nativeBind : polyfillBind
```

## 检查 2 个数据是否相等

```js
function isObject(obj) {
  return obj !== null && typeof obj === "object"
}

function looseEqual(a, b) {
  if (a === b) {
    return true
  }
  var isObjectA = isObject(a)
  var isObjectB = isObject(b)
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a)
      var isArrayB = Array.isArray(b)
      if (isArrayA && isArrayB) {
        return (
          a.length === b.length &&
          a.every(function (e, i) {
            return looseEqual(e, b[i])
          })
        )
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a)
        var keysB = Object.keys(b)
        return (
          keysA.length === keysB.length &&
          keysA.every(function (key) {
            return looseEqual(a[key], b[key])
          })
        )
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}
```

## Tool

### 设备识别

```js
// can we use __proto__?
var hasProto = "__proto__" in {}

// Browser environment sniffing
var inBrowser = typeof window !== "undefined"
var inWeex = typeof WXEnvironment !== "undefined" && !!WXEnvironment.platform
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase()
var UA = inBrowser && window.navigator.userAgent.toLowerCase()
var isIE = UA && /msie|trident/.test(UA)
var isIE9 = UA && UA.indexOf("msie 9.0") > 0
var isEdge = UA && UA.indexOf("edge/") > 0
var isAndroid = (UA && UA.indexOf("android") > 0) || weexPlatform === "android"
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || weexPlatform === "ios"
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge
var isPhantomJS = UA && /phantomjs/.test(UA)
var isFF = UA && UA.match(/firefox\/(\d+)/)
```
