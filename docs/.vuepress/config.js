/*
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-16 14:17:37
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-07-02 13:48:05
 * @Description:
 */
const { path } = require("@vuepress/utils");

module.exports = {
	lang: "zh-CN",
	title: "dulinyu",
	description: "blog",
	base: "/dulinyu-blog/", // 设置站点根路径
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
		[
			"vuepress-plugin-comment",
			{
				choosen: "valine",
				// options选项中的所有参数，会传给Valine的配置
				options: {
					el: "#valine-vuepress-comment",
					appId: "wswYS4Vyz0qAfrBgTd5lQHlf-gzGzoHsz",
					appKey: "c8WEum2mcW0BodAEeVlOGmvK",
					visitor: true, // 阅读量统计
				},
			},
		],
		[
			"@vuepress/plugin-google-analytics",
			{
				id: "G-EGBB3CFNDF",
			},
		],
		[
			"@vuepress/register-components",
			{
				componentsDir: path.resolve(__dirname, "./components"),
			},
		],
	],
	head: [
		["link", { rel: "icon", href: "/dulinyu-blog/favicon.ico" }], // 增加一个自定义的 favicon
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
			{
				text: "javaScript",
				link: "/javaScript/guide/index.md",
			},
			{
				text: "关于我的",
				link: "/me/guide/index.md",
			},
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
				link: "https://www.toutiao.com/c/user/token/MS4wLjABAAAAxCsnlFn8SrtzOHSdeJV7WiXPLkw_OcjBL6pDIak2JUk/?tab=video",
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
		sidebar: {
			// SidebarItem
			"/me/": [
				{
					isGroup: true,
					text: "目录",
					link: "/me/guide/",
					children: [
						// SidebarItem
						{
							text: "文章列表",
							link: "/me/guide/index.md",
							// children: [],
						},
					],
				},
				// 字符串 - 页面文件路径
				{
					isGroup: true,
					text: "随笔",
					link: "/me/essay/",
					children: [
						{
							text: "随笔1",
							link: "/me/essay/index.md",
						},
					],
				},
				{
					isGroup: true,
					text: "复盘",
					link: "/me/summarize/",
					children: [
						{
							text: "2021",
							link: "/me/summarize/index.md",
						},
					],
				},
				{
					text: "我就是我",
					link: "/me/index.md",
				},
			],
			"/javaScript/": [
				{
					isGroup: true,
					text: "目录",
					link: "/javaScript/guide/",
					children: [
						// SidebarItem
						{
							text: "文章列表",
							link: "/javaScript/guide/index.md",
							// children: [],
						},
					],
				},
				// SidebarGroup
				{
					isGroup: true,
					text: "前端",
					link: "/javaScript/frondend/",
					// collapsable: false, // 可选的, 默认值是 true,
					// sidebarDepth: 2, // 可选的, 默认值是 1
					children: [
						// SidebarItem
						{
							text: "工具类",
							link: "/javaScript/frondend/utils.md",
							// children: [],
						},
					],
				},
			],
		},
		// 为以下路由添加左侧边栏
		// sidebarDepth: 1, //左侧导航显示的层级
		// lastUpdated: "Last Updated",
	},
};
