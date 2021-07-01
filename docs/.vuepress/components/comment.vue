<!--
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-07-01 11:11:58
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-07-01 13:40:43
 * @Description: 
-->
<template>
	<div class="gitalk-container">
		<div id="gitalk-container"></div>
	</div>
</template>
<script>
export default {
	name: "comment",
	data() {
		return {};
	},
	mounted() {
		let body = document.querySelector(".gitalk-container");
		let script = document.createElement("script");
		script.src = "https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js";
		body.appendChild(script);
		script.onload = () => {
			const commentConfig = {
				clientID: "46ef387a515197291c9e", // YOUR_CLINENT_ID
				clientSecret: "79b756aa81153e44074782d30de3f1b9090e8616", // YOUR_CLINENT_SECRET
				repo: "dulinyu-blog",
				owner: "zhangdulin", // 你的 GitHub 用户名，注意是用户名！！！
				// 这里接受一个数组，可以添加多个管理员
				admin: ["zhangdulin"], //你的 GitHub 用户名
				// id 用于当前页面的唯一标识，一般来讲 pathname 足够了，

				// 但是如果你的 pathname 超过 50 个字符，GitHub 将不会成功创建 issue，此情况可以考虑给每个页面生成 hash 值的方法.
				id: location.pathname, // 你可以使用较短的字符来作为 id，例如我自己是使用 document.title.replace(/\s\|\s去冲浪鸭|《|》/g, "") 来作为 id 的，即使用我的文章标题作为 id。
				distractionFreeMode: false,
			};
			const gitalk = new Gitalk(commentConfig);
			gitalk.render("gitalk-container");
		};
	},
};
</script>
<style>
@import "../css/gitalk.css";
</style>
