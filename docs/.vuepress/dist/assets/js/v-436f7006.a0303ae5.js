(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6311],{1905:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-436f7006",path:"/arithmetic/find/num.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:3,title:"题目",slug:"题目",children:[]},{level:3,title:"思路",slug:"思路",children:[]},{level:3,title:"代码",slug:"代码",children:[]},{level:3,title:"考察点",slug:"考察点",children:[]}],filePathRelative:"arithmetic/find/num.md",git:{updatedTime:1639623583e3,contributors:[{name:"zhangyu2207",email:"zhangyu2207@yundasys.com",commits:2}]}}},7097:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});var p=a(6252);const t=(0,p.uE)('<h3 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h3><p>统计一个数字在排序数组中出现的位置。</p><h3 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h3><p>本道题有好几种解法</p><ol><li>直接遍历数组，判断前后的值是否相同，找到元素开始位置和结束位置，时间复杂度 O(n)</li><li>使用二分查找找到目标值，在向前向后遍历，找到所有的数，比上面略优，时间复杂度也是 O(n)</li><li>使用二分查找分别找到第一个目标值出现的位置和最后一个位置，时间复杂度 O(logn)</li></ol><h3 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h3><p>在排序数组中找元素，首先考虑使用二分查找</p><p>下面是使用二分查找在数组中寻找某个数</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> arr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">var</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>end <span class="token operator">+</span> start<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">==</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> mid<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> arr<span class="token punctuation">,</span> start<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> arr<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>找到第一次和最后一次出现的位置我们只需要对上面的代码进行稍加的变形</p><p>第一次位置：找到目标值，并且前一位的数字和当前值不相等</p><p>最后一次位置：找到目标值，并且后一位的数字和当前值不相等</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">GetNumberOfK</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>data <span class="token operator">&amp;&amp;</span> data<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> k <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">const</span> firstIndex <span class="token operator">=</span> <span class="token function">getFirstK</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">const</span> lastIndex <span class="token operator">=</span> <span class="token function">getLastK</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>firstIndex <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">&amp;&amp;</span> lastIndex <span class="token operator">!=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">return</span> lastIndex <span class="token operator">-</span> firstIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">getFirstK</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> first<span class="token punctuation">,</span> last<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">&gt;</span> last<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token punctuation">(</span>first <span class="token operator">+</span> last<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">return</span> mid<span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">return</span> <span class="token function">getFirstK</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> first<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token function">getFirstK</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> first<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token function">getFirstK</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> last<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">getLastK</span><span class="token punctuation">(</span><span class="token parameter">data<span class="token punctuation">,</span> first<span class="token punctuation">,</span> last<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">&gt;</span> last<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\t<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token punctuation">(</span>first <span class="token operator">+</span> last<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">return</span> mid<span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n\t\t\t<span class="token keyword">return</span> <span class="token function">getLastK</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> last<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token function">getLastK</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> first<span class="token punctuation">,</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token function">getLastK</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> last<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h3 id="考察点" tabindex="-1"><a class="header-anchor" href="#考察点" aria-hidden="true">#</a> 考察点</h3><p>数组 二分查找</p>',15),e={render:function(n,s){const a=(0,p.up)("Gitalk");return(0,p.wg)(),(0,p.j4)(p.HY,null,[t,(0,p.Wm)(a)],64)}}}}]);