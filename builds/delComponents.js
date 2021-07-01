/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-07-01 11:17:27
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-07-01 13:20:49
 * @Description:
 */
// delComponents.js
const fs = require("fs");
const findMarkdown = require("./findMarkdown");
const rootDir = "./docs";

findMarkdown(rootDir, delComponents);

function delComponents(dir) {
	fs.readFile(dir, "utf-8", (err, content) => {
		if (err) throw err;

		fs.writeFile(dir, content.replace(/\n \n <comment\/> \n /g, ""), (err) => {
			if (err) throw err;
			console.log(`del components from ${dir}`);
		});
	});
}
