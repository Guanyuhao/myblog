const path = require("path")
const rootpath = path.dirname(__dirname) //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录
const docs = rootpath + "/docs/"
const utils = require(rootpath + '/utils/index.js');
const filehelper = require(rootpath + '/utils/getFilenames.js');


module.exports = {
  '/guide/': utils.genSidebar('介绍', filehelper.getFileName(docs + "/guide/"), false),
  '/interview/': utils.genSidebar('前端面试', filehelper.getFileName(docs + "/interview/"), false),
  '/BlockChain/': utils.genSidebar('区块链', filehelper.getFileName(docs + "/BlockChain/"), false),
  // 关于我
  //  '/About/': utils.genSidebar('关于我', filehelper.getFileName(docs + "/About/"), false),
  // 一定要放在最后！！！
  // 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
  // '/': [''] // 此处选择禁用
};