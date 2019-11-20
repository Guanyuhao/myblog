/**
 * 文件名字的获取
 */

const fs = require('fs');
// 排除检查的文件
const excludes = ['.DS_Store', '.vuepress']

class filehelper {
  constructor() {

  }
  getFileName(rpath) {
    let filenames = [];
    fs.readdirSync(rpath).forEach(file => {
      if (excludes.indexOf(file) < 0) {
        let fullpath = rpath + "/" + file
        let fileinfo = fs.statSync(fullpath)
        if (fileinfo.isFile()) {
          if (file === 'README.md') {
            file = '';
          } else {
            file = file.replace('.md', '');
          }
          filenames.push(file);
        }
      }
    })
    // console.log(filenames)
    filenames.sort(); // 排序
    return filenames;
  }
  getFileDirectory(rpath) {
    let fileDirectoryName = [];
    fs.readdirSync(rpath).forEach(file => {
      let fullpath = (rpath + "/" + file);
      if (excludes.indexOf(file) < 0 && this.isDir(fullpath)) {
        fileDirectoryName.push(file)
      }
    })
    fileDirectoryName.sort(); // 排序
    return fileDirectoryName
  }
  exists(path) {
    return fs.existsSync(path) || path.existsSync(path)
  }
  isDir(path) {
    return this.exists(path) && fs.statSync(path).isDirectory()
  }
}


module.exports = new filehelper();