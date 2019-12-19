const path = require("path");
const rootpath = path.dirname(__dirname); //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录
const docs = rootpath + "/docs/";
const {
  genSidebar,
} = require(rootpath + "/utils/index.js");
const filehelper = require(rootpath + "/utils/getFilenames.js");

function generateObj(cnDocNameArr) {
  let obj = {};
  let docDirArr = filehelper.getFileDirectory(docs);
  docDirArr.forEach((element, index) => {
    let val = cnDocNameArr[index];
    obj[`/${element}/`] = genSidebar(
      val,
      filehelper.getFileName(`${docs}${element}/`),
      false
    );
  });
  return obj;
}

console.log(filehelper.getFileDirectory(docs))
module.exports = {
  sidebar: generateObj(["区块链", "前端", "算法", "计算机通识", "指南"]),
  enArr: filehelper.getFileDirectory(docs)
};

// 关于我
//  '/About/': genSidebar('关于我', filehelper.getFileName(docs + "/About/"), false),
// 一定要放在最后！！！
// 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
// '/': [''] // 此处选择禁用
