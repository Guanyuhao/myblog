const path = require("path");
const rootpath = path.dirname(__dirname); //执行一次dirname将目录定位到docs的上级目录，也就是博客根目录
const docs = rootpath + "/docs/";
const {
  genSidebar,
} = require(rootpath + "/utils/index.js");
const filehelper = require(rootpath + "/utils/getFilenames.js");

/**
 * 生成自动侧边栏
 * @param {Array} cnDocNameArr - 中文目录名称数组
 * @returns {Object} - 侧边栏配置对象
 */
function generateSidebar(cnDocNameArr) {
  let obj = {};
  let docDirArr = filehelper.getFileDirectory(docs);
  
  docDirArr.forEach((element, index) => {
    let val = cnDocNameArr[index];
    
    // 特殊处理guide目录，为其创建多级结构
    if (element === 'guide') {
      obj[`/${element}/`] = [
        {
          title: '指南',
          path: '/guide/',
          collapsable: false,
          children: [
            {
              title: '前端基础',
              path: '/guide/frontend-basics/',
              collapsable: true,
              children: getGuideChildren('frontend-basics')
            },
            {
              title: '前端框架',
              path: '/guide/frameworks/',
              collapsable: true,
              children: getGuideChildren('frameworks')
            },
            {
              title: '工程化实践',
              path: '/guide/engineering/',
              collapsable: true,
              children: getGuideChildren('engineering')
            },
            {
              title: '全栈开发',
              path: '/guide/fullstack/',
              collapsable: true,
              children: getGuideChildren('fullstack')
            },
            {
              title: '区块链与Web3',
              path: '/guide/blockchain/',
              collapsable: true,
              children: getGuideChildren('blockchain')
            },
            {
              title: '小程序',
              path: '/guide/miniprogram/',
              collapsable: true,
              children: getGuideChildren('miniprogram')
            },
            {
              title: '博客搭建',
              path: '/guide/blogbuild/',
              collapsable: true,
              children: getGuideChildren('blogbuild')
            },
            // 可以继续添加其他技术指南分类
          ]
        }
      ];
    } else {
      // 其他目录使用原有的自动生成方式
      obj[`/${element}/`] = genSidebar(
        val,
        filehelper.getFileName(`${docs}${element}/`),
        false
      );
    }
  });
  
  return obj;
}

/**
 * 获取指南子目录下的文章
 * @param {String} subDir - 子目录名称
 * @returns {Array} - 文章路径数组
 */
function getGuideChildren(subDir) {
  const subDirPath = `${docs}guide/${subDir}/`;
  
  try {
    const files = filehelper.getFileName(subDirPath);
    
    // 确保README.md排在最前面
    return files.sort((a, b) => {
      if (a === 'README.md') return -1;
      if (b === 'README.md') return 1;
      return a.localeCompare(b);
    }).map(file => {
      // 将文件名转换为路径
      const name = file.replace('.md', '');
      return name === 'README' ? 
        `/guide/${subDir}/` : 
        `/guide/${subDir}/${name}`;
    });
  } catch (error) {
    console.warn(`Warning: Could not find directory ${subDirPath}`);
    return [];
  }
}

// 关于我
//  '/About/': genSidebar('关于我', filehelper.getFileName(docs + "/About/"), false),
// 一定要放在最后！！！
// 根目录下的 sidebar, 对于所有未匹配到的都会应用该 sidebar
// '/': [''] // 此处选择禁用

module.exports = {
  sidebar: generateSidebar(["关于我", "算法", "文章", "计算机通识", "指南"]),
  enArr: filehelper.getFileDirectory(docs)
};
