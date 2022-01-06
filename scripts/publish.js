"use strict";
const fs = require("fs");
const path = require("path");

const packagePath = path.resolve(__dirname, "../package.json");
const packageData = JSON.parse(fs.readFileSync(packagePath));

const defaultConf = {
  meta: [
    [
      { key: "name", value: "version" },
      { key: "content", value: packageData.version },
    ],
    [
      { key: "name", value: "name" },
      { key: "content", value: packageData.name },
    ],
    [
      { key: "name", value: "author" },
      {
        key: "content",
        value: `${packageData.author.name} || ${packageData.author.email}`,
      },
    ],
    [
      { key: "name", value: "keyword" },
      { key: "content", value: packageData.keywords.join(", ") },
    ],
    [
      { key: "name", value: "description" },
      { key: "content", value: packageData.description },
    ],
  ],
};

// 遍历目录下的所有文件，生成数组对象
function getFileList(path) {
  function readFileList(path, filesList) {
    var files = fs.readdirSync(path);
    files.forEach((itme) => {
      var stat = fs.statSync(path + itme);
      if (stat.isDirectory()) {
        //递归读取文件
        readFileList(path + itme + "/", filesList);
      } else {
        filesList.push({
          filepath: path, //路径
          filename: itme, //名字
        });
      }
    });
  }

  var filesList = [];
  readFileList(path, filesList);
  return filesList;
}

let tempString = "";
for (let key in defaultConf) {
  const temp1 = defaultConf[key].reduce((total, item, index) => {
    const temp2 = item.reduce((childTotal, childItem) => {
      return (childTotal += `${childItem.key}="${childItem.value}" `);
    }, "");
    return (total += `    <${key} ${temp2} />${
      index !== defaultConf[key].length - 1 ? "\n" : ""
    }`);
  }, "");
  tempString += temp1;
}

const filesList = getFileList("./dist/");
const htmlList = filesList.filter((item) => {
  return /.html$|.htm$/i.test(item.filename);
});
if (htmlList && htmlList.length) {
  htmlList.forEach((item) => {
    const indexPath = path.resolve(
      __dirname,
      `.${item.filepath}${item.filename}`
    );
    // 获取原index.html文件内容
    let indexContent = fs.readFileSync(indexPath, "utf-8");
    indexContent = indexContent.replace(
      '<meta charset="utf-8" />',
      `<meta charset="utf-8" />\n${tempString}`
    );
    // 写入模式打开index.html
    const fd = fs.openSync(indexPath, "w");
    // 写入新内容
    fs.writeFile(fd, indexContent, "utf8", function (writeErr) {
      if (!writeErr) {
        fs.closeSync(fd);
        console.log(`${item.filepath + item.filename} 文件 Publish 成功！`);
      } else {
        console.log(chalk.red(writeErr));
      }
    });
  });
}
