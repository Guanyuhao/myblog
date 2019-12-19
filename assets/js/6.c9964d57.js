(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{254:function(a,t,s){"use strict";s.r(t);var v=s(2),e=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"区块链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#区块链"}},[a._v("#")]),a._v(" 区块链")]),a._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),s("p",[a._v("区块链技术中涌现很多新的概念，而这对于初入区块链领域的人来说，相当不友好，我在很长一段时间里，都没有搞清楚区块链是什么，虚拟钱包是什么，为什么交易有 gas 费用等等，所以本文首先会给出一些概念的解释，方便后面的探讨")]),a._v(" "),s("blockquote",[s("p",[a._v("区块链其实就是一种链表结构，链表中的元素就是一个区块，每一个区块结构如下：")])]),a._v(" "),s("ul",[s("li",[a._v("timestamp: 区块产生时间戳")]),a._v(" "),s("li",[a._v("nonce: 与区块头的 hash 值共同证明计算量（工作量）")]),a._v(" "),s("li",[a._v("data: 区块链上存储的数据")]),a._v(" "),s("li",[a._v("prevHash: 上一个区块的 hash")]),a._v(" "),s("li",[a._v("hash: 本区块链的 hash，由上述几个属性进行哈希计算而得")])]),a._v(" "),s("p",[a._v("区块链本质是一种分布式的交易账本，所有用户都在本地存有完整账本信息。如果有用户想改变某一个区块信息，由于区块 hash 的计算过程使用了 prevHash 作为参数，那么该区块后的所有区块，都会变得不合法，需要重新计算 hash ，想让系统承认这个更改，必须同步更改 51% 的用户的账本信息，所以篡改区块链上的账本信息十分困难，这就保证了它的安全性")]),a._v(" "),s("h2",{attrs:{id:"矿工与挖矿-⛏"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#矿工与挖矿-⛏"}},[a._v("#")]),a._v(" 矿工与挖矿 ⛏")]),a._v(" "),s("p",[a._v("挖矿本质上是一组节点（矿机）使用他们的计算资源去创建一个包含有效交易的区块的过程，参与这个过程的节点（矿机）被称为矿工。一个矿工想要提交一个区块到区块链上，就必须更快的计算出一个 nonce，nonce 和区块头信息能共同证明，一个区块是有效的。")]),a._v(" "),s("h2",{attrs:{id:"工作量证明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工作量证明"}},[a._v("#")]),a._v(" 工作量证明")]),a._v(" "),s("p",[a._v("上面提到，挖矿的过程中，矿工必须更快的计算出一个 nonce，这个 nonce 如何计算呢？nonce 是一个整数值，一般先把区块头信息后面加上 nonce 得到的字符串，进行 SHA256 哈希运算，得到的结果如果开头 0 的个数小于设定的难度值，则验证不通过，把 nonce 值加 1 重复上述操作，直到计算出来的 nonce 满足得到的哈希值开头 0 的个数不小于设定的难度值。而 nonce 的值，就是挖矿过程中工作量的证明。而系统为了鼓励更多矿工参与进来，会给参与挖矿的每个矿工一定代币的奖励。")]),a._v(" "),s("h2",{attrs:{id:"钱包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#钱包"}},[a._v("#")]),a._v(" 钱包")]),a._v(" "),s("p",[a._v("钱包本质是一个包含私钥的文件。通常会包含一个软件客户端，钱包的地址，是由私钥计算出来的，也就是公钥。每一次交易，发送方必须要提供私钥，才能把该公钥地址下所拥有的代币转帐到其他公钥地址，所以私钥决定了比特币的所有权。这里要注意一点，一个钱包地址拥有多少代币，不是存储在私钥里，而是存在区块链上，区块链上有着所有历史交易账目，可以根据账目计算出每个地址所拥有的代币。")]),a._v(" "),s("h2",{attrs:{id:"比特币-vs-以太坊"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#比特币-vs-以太坊"}},[a._v("#")]),a._v(" 比特币 VS 以太坊")]),a._v(" "),s("p",[a._v("区块链目前最火的两个应用就是比特币系统和以太坊系统，这两个系统都是公共区块链平台，都有自己自己的虚拟货币（比特币 和 以太坊）。但是他们是有很多区别的，其中一个重要区别就是，以太坊通过智能合约使平台具有图灵完备性，相对于比特币，未来更具有扩展性。当然这也和他们本身的目标有关，比特币想成为纯粹的虚拟货币，以太坊想成为一个纯粹的图灵完备的开发平台。")]),a._v(" "),s("h2",{attrs:{id:"智能合约"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#智能合约"}},[a._v("#")]),a._v(" 智能合约")]),a._v(" "),s("p",[a._v("-- 有时间再写")])])}),[],!1,null,null,null);t.default=e.exports}}]);