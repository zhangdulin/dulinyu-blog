/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-16 14:17:37
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-06-29 16:03:38
 * @Description:
 */
module.exports = {
	lang: "zh-CN",
	title: "dulinyu",
	description: "blog",
	base: "/dulinyu-blog", // 设置站点根路径
	// dest: './ROOT',  // 设置输出目录
	// port: 8086,
	plugins: [
		[
			"@vuepress/plugin-search",
			{
				locales: {
					"/": {
						placeholder: "搜索",
					},
					"/en/": {
						placeholder: "Search",
					},
				},
			},
		],
	],
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }], // 增加一个自定义的 favicon
		// [("link", { rel: "manifest", href: "/manifest.json" })], //PWA 插件需要引入的manifest
		// ["meta", { name: "theme-color", content: "#3eaf7c" }], //<meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词。
		// ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
		// [
		// 	"meta",
		// 	{ name: "apple-mobile-web-app-status-bar-style", content: "black" },
		// ],
		// [
		// 	"link",
		// 	{ rel: "apple-touch-icon", href: "/icons/apple-touch-icon-152x152.png" },
		// ],
		// [
		// 	"link",
		// 	{
		// 		rel: "mask-icon",
		// 		href: "/icons/safari-pinned-tab.svg",
		// 		color: "#3eaf7c",
		// 	},
		// ],
		// [
		// 	"meta",
		// 	{
		// 		name: "msapplication-TileImage",
		// 		content: "/icons/msapplication-icon-144x144.png",
		// 	},
		// ],
		// ["meta", { name: "msapplication-TileColor", content: "#000000" }],
	],
	// 原文链接：https://blog.csdn.net/loveshanqian/article/details/106332636
	themeConfig: {
		home: "/",
		// displayAllHeaders: true, // 默认值：false
		logo: "/images/home.jpg",
		// 如果你按照 `organization/repository` 的格式设置它
		// 我们会将它作为一个 GitHub 仓库
		// repo: "vuejs/vuepress",
		// 你也可以直接将它设置为一个 URL
		// repo: "https://github.com/zhangdulin/dulinyu-blog",
		// locales: {
		// 	"/": {
		// 		lang: "zh-CN",
		// 	},
		// 	"/en/": {
		// 		lang: "en-US",
		// 	},
		// },
		navbar: [
			// NavbarItem
			// {
			// 	text: "博客文章",
			// 	link: "/guide/",
			// 	icon: "reco-blog",
			// },
			{
				text: "CSDN",
				link: "https://blog.csdn.net/mrzhangdulin",
			},
			{
				text: "Github",
				link: "https://github.com/zhangdulin",
			},
			{
				text: "npm",
				link: "https://www.npmjs.com/package/jslib-tools",
			},
			{
				text: "今日头条",
				link: "",
			},
			// reco-zhihu
			// reco-juejin

			// NavbarGroup
			// {
			// 	text: "Group",
			// 	children: ["/group/foo.md", "/group/bar.md"],
			// },
			// 嵌套 Group - 最大深度为 2
			// {
			// 	text: "Group",
			// 	children: [
			// 		{
			// 			text: "SubGroup",
			// 			children: ["/group/sub/foo.md", "/group/sub/bar.md"],
			// 		},
			// 	],
			// },
			// 字符串 - 页面文件路径
			// "/bar/README.md",
		],
		// 侧边栏数组
		// 所有页面会使用相同的侧边栏
		sidebar: [
			// SidebarItem
			{
				isGroup: true,
				text: "目录",
				link: "/guide/",
				children: [
					// SidebarItem
					{
						text: "文章列表",
						link: "/guide/index.md",
						// children: [],
					},
				],
			},
			// SidebarGroup
			{
				isGroup: true,
				text: "前端",
				link: "/frondend/",
				// collapsable: false, // 可选的, 默认值是 true,
				// sidebarDepth: 2, // 可选的, 默认值是 1
				children: [
					// SidebarItem
					{
						text: "工具类",
						link: "/frondend/utils.md",
						// children: [],
					},
				],
			},
			// 字符串 - 页面文件路径
			// "/bar/README.md",
			{
				isGroup: true,
				text: "随笔",
				link: "/essay/",
				children: [
					{
						text: "工具类",
						link: "/essay/index.md",
					},
				],
			},
			{
				isGroup: true,
				text: "复盘",
				link: "/summarize/",
				children: [
					{
						text: "工具类",
						link: "/summarize/index.md",
					},
				],
			},
			{
				isGroup: true,
				text: "关于我",
				link: "/me/",
				children: [
					{
						text: "前时间",
						link: "/me/index.md",
					},
				],
			},
		],
		// 为以下路由添加左侧边栏
		// sidebarDepth: 1, //左侧导航显示的层级
		// lastUpdated: "Last Updated",
	},
};
