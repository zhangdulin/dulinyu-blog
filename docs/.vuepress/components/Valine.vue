<!--
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-07-02 11:13:32
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-07-02 13:59:51
 * @Description: 
-->
<template>
	<div>
		<hr />
		<div id="vcomments"></div>
	</div>
</template>

<script>
export default {
	name: "Valine",
	mounted: function () {
		// require window
		const Valine = require("valine");
		if (typeof window !== "undefined") {
			this.window = window;
			window.AV = require("leancloud-storage");
		}

		new Valine({
			el: "#vcomments",
			appId: "wswYS4Vyz0qAfrBgTd5lQHlf-gzGzoHsz", // your AppId
			appKey: "c8WEum2mcW0BodAEeVlOGmvK", // your AppKey
			notify: true,
			visitor: true, // 阅读量统计
			avatar: "dulinyu",
			placeholder: "来了就说点什么吧~~~",
		});
	},
};
</script>
