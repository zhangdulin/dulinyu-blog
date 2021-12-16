<!--
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-28 10:40:43
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-12-16 10:54:47
 * @Description:
-->

### 回溯 概念

从解决问题每一步的所有可能选项里系统选择出一个可行的解决方案。

在某一步选择一个选项后，进入下一步，然后面临新的选项。重复选择，直至达到最终状态。

回溯法解决的问题的所有选项可以用树状结构表示。

![回溯!](/dulinyu-blog/arithmetic/GZkQ7gx9CHsb2hd.png "回溯图示")

在某一步有 n 个可能的选项，该步骤可看作树中一个节点。
节点每个选项看成节点连线，到达它的 n 个子节点。
叶节点对应终结状态。
叶节点满足约束条件，则为一个可行的解决方案。
叶节点不满足约束条件，回溯到上一个节点，并尝试其他叶子节点。
节点所有子节点均不满足条件，再回溯到上一个节点。
所有状态均不能满足条件，问题无解。

回溯算法适合由多个步骤组成的问题，并且每个步骤都有多个选项。

- [二叉树中和为某一值的路径](/arithmetic/huisu/二叉树中和为某一值的路径.md)
- [字符串的排列](/arithmetic/huisu/字符串的排列.md)
- [和为 sum 的 n 个数](/arithmetic/huisu/和为sum的n个数.md)
- [矩阵中的路径](/arithmetic/huisu/矩阵中的路径.md)
- [机器人的运动范围](/arithmetic/huisu/机器人的运动范围.md)
- [N 皇后问题](/arithmetic/huisu/N皇后问题.md)

<Gitalk />
