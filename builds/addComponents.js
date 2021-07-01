/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-07-01 11:17:27
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-07-01 13:20:27
 * @Description:
 */
// addComponents.js
const fs = require("fs");
const findMarkdown = require("./findMarkdown");
const rootDir = "./docs";

findMarkdown(rootDir, writeComponents);

function writeComponents(dir) {
	if (!/README/.test(dir)) {
		fs.appendFile(dir, `\n \n <comment/> \n `, (err) => {
			if (err) throw err;
			console.log(`add components to ${dir}`);
		});
	}
}
