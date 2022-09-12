(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5081],{5748:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>p});const p={key:"v-055da69e",path:"/arithmetic/find/min.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"题目",slug:"题目",children:[]},{level:3,title:"基本思路",slug:"基本思路",children:[]},{level:3,title:"代码",slug:"代码",children:[]},{level:3,title:"扩展",slug:"扩展",children:[]},{level:3,title:"考察点",slug:"考察点",children:[]}],filePathRelative:"arithmetic/find/min.md",git:{updatedTime:1639623583e3,contributors:[{name:"zhangyu2207",email:"zhangyu2207@yundasys.com",commits:3}]}}},1154:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>t});var p=s(6252);const e=(0,p.uE)('<h3 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h3><p>把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为 1。</p><p>NOTE：给出的所有元素都大于 0，若数组大小为 0，请返回 0。</p><h3 id="基本思路" tabindex="-1"><a class="header-anchor" href="#基本思路" aria-hidden="true">#</a> 基本思路</h3><p>肯定不能直接遍历，失去了这道题的意义</p><p>旋转数组其实是由两个有序数组拼接而成的，因此我们可以使用二分法，只需要找到拼接点即可。</p><p>(1)array[mid] &gt; array[high]:</p><p>出现这种情况的 array 类似[3,4,5,6,0,1,2]，此时最小数字一定在 mid 的右边。 low = mid + 1</p><p>(2)array[mid] == array[high]:</p><p>出现这种情况的 array 类似 [1,0,1,1,1]或者[1,1,1,0,1]，此时最小数字不好判断在 mid 左边 还是右边,这时只好一个一个试 。 high = high - 1</p><p>(3)array[mid] &lt; array[high]:</p><p>出现这种情况的 array 类似[2,2,3,4,5,6,6],此时最小数字一定就是 array[mid]或者在 mid 的左 边。因为右边必然都是递增的。 high = mid</p><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function minNumberInRotateArray(arr) {\n  let len = arr.length;\n  if (len == 0) return 0;\n  let low = 0, high = len - 1;\n  while (low &lt; high) {\n    let mid = low + Math.floor((high - low) / 2);\n    if (arr[mid] &gt; arr[high]) {\n      low = mid + 1;\n    } else if (arr[mid] == arr[high]) {\n      high = high - 1;\n    } else {\n      high = mid;\n    }\n  }\n\n  return arr[low];\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h3><p>二分查找</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> arr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">var</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>end <span class="token operator">+</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">==</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> mid<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> arr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> arr<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h3><p>查找 数组</p>',19),t={render:function(n,a){const s=(0,p.up)("Gitalk");return(0,p.wg)(),(0,p.j4)(p.HY,null,[e,(0,p.Wm)(s)],64)}}}}]);