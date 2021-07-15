<!--
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-28 10:40:43
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-07-15 15:32:22
 * @Description:
-->

## 广度优先和深度优先

### 广度优先搜索

广度优先搜索（BFS）是一种遍历或搜索数据结构（如树或图）的算法，也可以在更抽象的场景中使用。

它的特点是越是接近根结点的结点将越早地遍历。

例如，我们可以使用 BFS 找到从起始结点到目标结点的路径，特别是最短路径。

在 BFS 中，结点的处理顺序与它们添加到队列的顺序是完全相同的顺序，即先进先出，所以广度优先搜索一般使用队列实现。

- [ 从上到下打印二叉树](/arithmetic/find/array.md)
- [ 单词接龙](/arithmetic/find/array.md)
- [ 员工的重要性](/arithmetic/find/array.md)
- [ 岛屿数量](/arithmetic/find/array.md)

### 深度优先搜索

和广度优先搜索一样，深度优先搜索（DFS）是用于在树/图中遍历/搜索的一种重要算法。

与 BFS 不同，更早访问的结点可能不是更靠近根结点的结点。因此，你在 DFS 中找到的第一条路径可能不是最短路径。

![BFS&DFS](/dulinyu-blog/arithmetic/uNAkPfLY9HRjVQU.png "深度优先搜索")

在 DFS 中，结点的处理顺序是完全相反的顺序，就像它们被添加到栈中一样，它是后进先出。所以深度优先搜索一般使用栈实现。

- [ 二叉树的中序遍历](/arithmetic/find/array.md)
- [ 路径总和](/arithmetic/find/array.md)
- [ 课程表](/arithmetic/find/array.md)
- [ 二叉树的中序遍历](/arithmetic/find/array.md)
- [ 岛屿数量](/arithmetic/find/array.md)

<Gitalk />
