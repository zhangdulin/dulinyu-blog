(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4278],{8777:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-4e6bd73e",path:"/arithmetic/huisu/%E7%9F%A9%E9%98%B5%E4%B8%AD%E7%9A%84%E8%B7%AF%E5%BE%84.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"题目",slug:"题目",children:[]},{level:3,title:"思路",slug:"思路",children:[]},{level:3,title:"代码",slug:"代码",children:[]},{level:3,title:"考察点",slug:"考察点",children:[]}],filePathRelative:"arithmetic/huisu/矩阵中的路径.md",git:{updatedTime:1667996632e3,contributors:[{name:"zhangyu2207",email:"zhangyu2207@yundasys.com",commits:2}]}}},7800:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>g});var t=a(6252);const e=a.p+"assets/img/juzheng.c7d5ca20.png",o=(0,t.Wm)("h3",{id:"题目",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),(0,t.Uk)(" 题目")],-1),c=(0,t.Wm)("p",null,"请设计一个函数，用来判断在一个矩阵中是否存在一条包含某字符串所有字符的路径。",-1),p=(0,t.Wm)("p",null,"路径可以从矩阵中的任意一个格子开始，每一步可以在矩阵中向左，向右，向上，向下移动一个格子。 如果一条路径经过了矩阵中的某一个格子，则之后不能再次进入这个格子。",-1),l=(0,t.Wm)("p",null,'例如 a b c e s f c s a d e e 这样的 3 X 4 矩阵中包含一条字符串"bcced"的路径，但是矩阵中不包含"abcb"路径，因为字符串的第一个字符 b 占据了矩阵中的第一行第二个格子之后，路径不能再次进入该格子。',-1),m=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,"a b c e\ns f c s\na d e e\n")]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br")])],-1),k=(0,t.Wm)("h3",{id:"思路",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#思路","aria-hidden":"true"},"#"),(0,t.Uk)(" 思路")],-1),u=(0,t.Wm)("p",null,"回溯算法 问题由多个步骤组成，并且每个步骤都有多个选项。",-1),W=(0,t.Wm)("p",null,"依次验证 path 中的每个字符（多个步骤），每个字符可能出现在多个方向（多个选项）",-1),r=(0,t.Wm)("ol",null,[(0,t.Wm)("li",null,"根据给定的行列，遍历字符，根据行列数计算出字符位置"),(0,t.Wm)("li",null,"判断当前字符是否满足递归终止条件"),(0,t.Wm)("li",null,"递归终止条件：(1).行列越界 (2).与路径不匹配 (3).已经走过(需设定一个数组标识当前字符是否走过)"),(0,t.Wm)("li",null,"若路径中的字符最后一位匹配成功，则到达边界且满足约束条件，找到合适的解"),(0,t.Wm)("li",null,"递归不断寻找四个方向是否满足条件，满足条件再忘更深层递归，不满足向上回溯"),(0,t.Wm)("li",null,"如果回溯到最外层，则当前字符匹配失败，将当前字符标记为未走")],-1),i=(0,t.Wm)("p",null,[(0,t.Wm)("img",{src:e,alt:"矩阵中的路径.!",title:"矩阵中的路径."})],-1),U=(0,t.Wm)("h3",{id:"代码",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#代码","aria-hidden":"true"},"#"),(0,t.Uk)(" 代码")],-1),b=(0,t.Wm)("p",null,"记录一个当前排列字符 temp",-1),d=(0,t.Wm)("div",{class:"language-javascript ext-js line-numbers-mode"},[(0,t.Wm)("pre",{class:"language-javascript"},[(0,t.Wm)("code",null,[(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"hasPath"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Uk)("matrix"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" rows"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" cols"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" path")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n\t"),(0,t.Wm)("span",{class:"token keyword"},"const"),(0,t.Uk)(" flag "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token class-name"},"Array"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("matrix"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("length"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Wm)("span",{class:"token function"},"fill"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token boolean"},"false"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\t"),(0,t.Wm)("span",{class:"token keyword"},"for"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token keyword"},"let"),(0,t.Uk)(" i "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"0"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)(" i "),(0,t.Wm)("span",{class:"token operator"},"<"),(0,t.Uk)(" rows"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)(" i"),(0,t.Wm)("span",{class:"token operator"},"++"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n\t\t"),(0,t.Wm)("span",{class:"token keyword"},"for"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token keyword"},"let"),(0,t.Uk)(" j "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"0"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)(" j "),(0,t.Wm)("span",{class:"token operator"},"<"),(0,t.Uk)(" cols"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)(" j"),(0,t.Wm)("span",{class:"token operator"},"++"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n\t\t\t"),(0,t.Wm)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token function"},"hasPathCore"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("matrix"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" i"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" j"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" rows"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" cols"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" path"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" flag"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"0"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n\t\t\t\t"),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token boolean"},"true"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\t\t\t"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\t\t"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\t"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\t"),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token boolean"},"false"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t.Wm)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"hasPathCore"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Wm)("span",{class:"token parameter"},[(0,t.Uk)("matrix"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" i"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" j"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" rows"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" cols"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" path"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" flag"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" k")]),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n\t"),(0,t.Wm)("span",{class:"token keyword"},"const"),(0,t.Uk)(" index "),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(" i "),(0,t.Wm)("span",{class:"token operator"},"*"),(0,t.Uk)(" cols "),(0,t.Wm)("span",{class:"token operator"},"+"),(0,t.Uk)(" j"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\t"),(0,t.Wm)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("\n\t\ti "),(0,t.Wm)("span",{class:"token operator"},"<"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"0"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"||"),(0,t.Uk)("\n\t\tj "),(0,t.Wm)("span",{class:"token operator"},"<"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"0"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"||"),(0,t.Uk)("\n\t\ti "),(0,t.Wm)("span",{class:"token operator"},">="),(0,t.Uk)(" rows "),(0,t.Wm)("span",{class:"token operator"},"||"),(0,t.Uk)("\n\t\tj "),(0,t.Wm)("span",{class:"token operator"},">="),(0,t.Uk)(" cols "),(0,t.Wm)("span",{class:"token operator"},"||"),(0,t.Uk)("\n\t\tmatrix"),(0,t.Wm)("span",{class:"token punctuation"},"["),(0,t.Uk)("index"),(0,t.Wm)("span",{class:"token punctuation"},"]"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"!="),(0,t.Uk)(" path"),(0,t.Wm)("span",{class:"token punctuation"},"["),(0,t.Uk)("k"),(0,t.Wm)("span",{class:"token punctuation"},"]"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"||"),(0,t.Uk)("\n\t\tflag"),(0,t.Wm)("span",{class:"token punctuation"},"["),(0,t.Uk)("index"),(0,t.Wm)("span",{class:"token punctuation"},"]"),(0,t.Uk)("\n\t"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n\t\t"),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token boolean"},"false"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\t"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\t"),(0,t.Wm)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("k "),(0,t.Wm)("span",{class:"token operator"},"==="),(0,t.Uk)(" path"),(0,t.Wm)("span",{class:"token punctuation"},"."),(0,t.Uk)("length "),(0,t.Wm)("span",{class:"token operator"},"-"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n\t\t"),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token boolean"},"true"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\t"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\tflag"),(0,t.Wm)("span",{class:"token punctuation"},"["),(0,t.Uk)("index"),(0,t.Wm)("span",{class:"token punctuation"},"]"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token boolean"},"true"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\t"),(0,t.Wm)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("\n\t\t"),(0,t.Wm)("span",{class:"token function"},"hasPathCore"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("matrix"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" i "),(0,t.Wm)("span",{class:"token operator"},"+"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" j"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" rows"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" cols"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" path"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" flag"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" k "),(0,t.Wm)("span",{class:"token operator"},"+"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"||"),(0,t.Uk)("\n\t\t"),(0,t.Wm)("span",{class:"token function"},"hasPathCore"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("matrix"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" i "),(0,t.Wm)("span",{class:"token operator"},"-"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" j"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" rows"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" cols"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" path"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" flag"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" k "),(0,t.Wm)("span",{class:"token operator"},"+"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"||"),(0,t.Uk)("\n\t\t"),(0,t.Wm)("span",{class:"token function"},"hasPathCore"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("matrix"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" i"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" j "),(0,t.Wm)("span",{class:"token operator"},"+"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" rows"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" cols"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" path"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" flag"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" k "),(0,t.Wm)("span",{class:"token operator"},"+"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"||"),(0,t.Uk)("\n\t\t"),(0,t.Wm)("span",{class:"token function"},"hasPathCore"),(0,t.Wm)("span",{class:"token punctuation"},"("),(0,t.Uk)("matrix"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" i"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" j "),(0,t.Wm)("span",{class:"token operator"},"-"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" rows"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" cols"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" path"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" flag"),(0,t.Wm)("span",{class:"token punctuation"},","),(0,t.Uk)(" k "),(0,t.Wm)("span",{class:"token operator"},"+"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token number"},"1"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)("\n\t"),(0,t.Wm)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n\t\t"),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token boolean"},"true"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\t"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\tflag"),(0,t.Wm)("span",{class:"token punctuation"},"["),(0,t.Uk)("index"),(0,t.Wm)("span",{class:"token punctuation"},"]"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t.Wm)("span",{class:"token boolean"},"false"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\t"),(0,t.Wm)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token boolean"},"false"),(0,t.Wm)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t.Wm)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n")])]),(0,t.Wm)("div",{class:"line-numbers"},[(0,t.Wm)("span",{class:"line-number"},"1"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"2"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"3"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"4"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"5"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"6"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"7"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"8"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"9"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"10"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"11"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"12"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"13"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"14"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"15"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"16"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"17"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"18"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"19"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"20"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"21"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"22"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"23"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"24"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"25"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"26"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"27"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"28"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"29"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"30"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"31"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"32"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"33"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"34"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"35"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"36"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"37"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"38"),(0,t.Wm)("br"),(0,t.Wm)("span",{class:"line-number"},"39"),(0,t.Wm)("br")])],-1),h=(0,t.Wm)("h3",{id:"考察点",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#考察点","aria-hidden":"true"},"#"),(0,t.Uk)(" 考察点")],-1),f=(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,"回溯算法"),(0,t.Wm)("li",null,"二维数组")],-1),g={render:function(n,s){const a=(0,t.up)("Gitalk");return(0,t.wg)(),(0,t.j4)(t.HY,null,[o,c,p,l,m,k,u,W,r,i,U,b,d,h,f,(0,t.Wm)(a)],64)}}}}]);