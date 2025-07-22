# 前端算法题 - LeetCode 风格

::: tip 提示
本页面收集了常见的前端算法面试题，按难度分为初级、中级和高级。
:::

<div class="navigation-links">
  <a href="/interview/">返回面试题目录</a>
</div>

## 目录
- [1. 数组: 两数之和 (初级)](#1-数组-两数之和-初级)
- [2. 字符串: 有效的括号 (初级)](#2-字符串-有效的括号-初级)
- [3. 链表: 反转链表 (初级)](#3-链表-反转链表-初级)
- [4. 树: 二叉树的最大深度 (初级)](#4-树-二叉树的最大深度-初级)
- [5. 动态规划: 爬楼梯 (初级)](#5-动态规划-爬楼梯-初级)
- [6. 数组: 合并区间 (中级)](#6-数组-合并区间-中级)
- [7. 字符串: 字符串解码 (中级)](#7-字符串-字符串解码-中级)
- [8. 链表: 环形链表 II (中级)](#8-链表-环形链表-ii-中级)
- [9. 树: 二叉树的层序遍历 (中级)](#9-树-二叉树的层序遍历-中级)
- [10. 动态规划: 最长递增子序列 (高级)](_#10-动态规划-最长递增子序列-高级)

## 1. 数组: 两数之和 (初级)

### 题目描述
给定一个整数数组 `nums` 和一个目标值 `target`，找出数组中和为目标值的两个数的索引。你可以假设每种输入只会对应一个答案，且同样的元素不能使用两遍。

### 示例
**输入**: nums = [2, 7, 11, 15], target = 9
**输出**: [0, 1]
**解释**: nums[0] + nums[1] = 2 + 7 = 9

### 代码示例
```javascript
function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        
        map.set(nums[i], i);
    }
    
    return [];
}
```

### 考察点
- 哈希表的应用
- 时间复杂度优化
- 数组遍历

### 优化思路
- 暴力解法需要两层循环，时间复杂度为 O(n²)
- 使用哈希表可将时间复杂度降至 O(n)，空间复杂度为 O(n)

## 2. 字符串: 有效的括号 (初级)

### 题目描述
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。有效字符串需满足：
1. 左括号必须用相同类型的右括号闭合
2. 左括号必须以正确的顺序闭合

### 示例
**输入**: "()"
**输出**: true

**输入**: "()[]{}"
**输出**: true

**输入**: "(]"
**输出**: false

### 代码示例
```javascript
function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (map[char]) {
            // 如果是左括号，入栈
            stack.push(char);
        } else {
            // 如果是右括号，出栈并检查是否匹配
            const lastChar = stack.pop();
            
            if (map[lastChar] !== char) {
                return false;
            }
        }
    }
    
    // 如果栈为空，说明所有括号都匹配了
    return stack.length === 0;
}
```

### 考察点
- 栈的应用
- 字符串遍历
- 括号匹配逻辑

### 优化思路
- 时间复杂度为 O(n)，其中 n 是字符串的长度
- 空间复杂度为 O(n)，最坏情况下需要将所有字符入栈

## 3. 链表: 反转链表 (初级)

### 题目描述
反转一个单链表。

### 示例
**输入**: 1->2->3->4->5->NULL
**输出**: 5->4->3->2->1->NULL

### 代码示例
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}
```

### 考察点
- 链表操作
- 指针操作
- 迭代思想

### 优化思路
- 时间复杂度为 O(n)，其中 n 是链表的长度
- 空间复杂度为 O(1)，只使用常数级别的额外空间
- 也可以使用递归解法，但空间复杂度为 O(n)

## 4. 树: 二叉树的最大深度 (初级)

### 题目描述
给定一个二叉树，找出其最大深度。二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

### 示例
**输入**:
```
    3
   / \
  9  20
    /  \
   15   7
```
**输出**: 3

### 代码示例
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function maxDepth(root) {
    if (root === null) {
        return 0;
    }
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return Math.max(leftDepth, rightDepth) + 1;
}
```

### 考察点
- 二叉树遍历
- 递归思想
- 深度优先搜索

### 优化思路
- 递归解法的时间复杂度为 O(n)，其中 n 是树中的节点数
- 空间复杂度为 O(h)，其中 h 是树的高度，最坏情况下为 O(n)
- 也可以使用广度优先搜索（BFS）实现

## 5. 动态规划: 爬楼梯 (初级)

### 题目描述
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

### 示例
**输入**: 2
**输出**: 2
**解释**: 有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶

**输入**: 3
**输出**: 3
**解释**: 有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶

### 代码示例
```javascript
function climbStairs(n) {
    if (n <= 2) {
        return n;
    }
    
    let prev1 = 1;  // 爬1阶的方法数
    let prev2 = 2;  // 爬2阶的方法数
    
    for (let i = 3; i <= n; i++) {
        const current = prev1 + prev2;
        prev1 = prev2;
        prev2 = current;
    }
    
    return prev2;
}
```

### 考察点
- 动态规划基础
- 斐波那契数列
- 状态转移方程

### 优化思路
- 递归解法会导致重复计算，时间复杂度为 O(2^n)
- 使用动态规划可以优化为 O(n) 时间复杂度和 O(1) 空间复杂度
- 数学解法可以使用斐波那契数列的通项公式，但需要注意浮点数精度问题

## 6. 数组: 合并区间 (中级)

### 题目描述
给出一个区间的集合，请合并所有重叠的区间。

### 示例
**输入**: [[1,3],[2,6],[8,10],[15,18]]
**输出**: [[1,6],[8,10],[15,18]]
**解释**: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

### 代码示例
```javascript
function merge(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }
    
    // 按照区间的起始位置排序
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [intervals[0]];
    
    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = result[result.length - 1];
        
        // 如果当前区间的起始位置小于等于上一个区间的结束位置，说明有重叠
        if (current[0] <= last[1]) {
            // 合并区间，更新结束位置为两个区间结束位置的较大值
            last[1] = Math.max(last[1], current[1]);
        } else {
            // 没有重叠，直接添加到结果中
            result.push(current);
        }
    }
    
    return result;
}
```

### 考察点
- 区间合并逻辑
- 排序算法
- 贪心思想

### 优化思路
- 时间复杂度为 O(n log n)，主要在于排序操作
- 空间复杂度为 O(n)，存储结果数组
- 如果输入数据已经有序，可以优化为 O(n) 时间复杂度

## 7. 字符串: 字符串解码 (中级)

### 题目描述
给定一个经过编码的字符串，返回它解码后的字符串。编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。

### 示例
**输入**: s = "3[a]2[bc]"
**输出**: "aaabcbc"

**输入**: s = "3[a2[c]]"
**输出**: "accaccacc"

**输入**: s = "2[abc]3[cd]ef"
**输出**: "abcabccdcdcdef"

### 代码示例
```javascript
function decodeString(s) {
    const stack = [];
    
    for (let char of s) {
        if (char !== ']') {
            // 如果不是右括号，直接入栈
            stack.push(char);
        } else {
            // 如果是右括号，开始解码
            let currStr = '';
            
            // 弹出栈中的字符，直到遇到左括号
            while (stack[stack.length - 1] !== '[') {
                currStr = stack.pop() + currStr;
            }
            
            // 弹出左括号
            stack.pop();
            
            // 获取重复次数
            let k = '';
            while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
                k = stack.pop() + k;
            }
            
            // 将解码后的字符串重新入栈
            stack.push(currStr.repeat(Number(k)));
        }
    }
    
    return stack.join('');
}
```

### 考察点
- 栈的应用
- 字符串处理
- 递归结构处理

### 优化思路
- 时间复杂度为 O(n)，其中 n 是输入字符串的长度
- 空间复杂度为 O(n)
- 也可以使用递归方法解决，但栈方法通常更直观

## 8. 链表: 环形链表 II (中级)

### 题目描述
给定一个链表，返回链表开始入环的第一个节点。如果链表无环，则返回 null。

### 示例
**输入**:
```
3 -> 2 -> 0 -> -4
     ^         |
     |_________|
```
**输出**: 返回节点 2

### 代码示例
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function detectCycle(head) {
    if (!head || !head.next) {
        return null;
    }
    
    // 使用快慢指针检测环
    let slow = head;
    let fast = head;
    
    // 第一步：检测是否有环
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        
        // 如果快慢指针相遇，说明有环
        if (slow === fast) {
            // 第二步：找出环的入口
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }
    
    return null;
}
```

### 考察点
- 链表遍历
- 双指针技巧
- Floyd 环检测算法

### 优化思路
- 时间复杂度为 O(n)，其中 n 是链表中的节点数
- 空间复杂度为 O(1)，只使用了有限的指针
- 可以使用哈希表记录访问过的节点，但空间复杂度会变为 O(n)

## 9. 树: 二叉树的层序遍历 (中级)

### 题目描述
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

### 示例
**输入**:
```
    3
   / \
  9  20
    /  \
   15   7
```
**输出**: [[3], [9, 20], [15, 7]]

### 代码示例
```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function levelOrder(root) {
    if (!root) {
        return [];
    }
    
    const result = [];
    const queue = [root];
    
    while (queue.length > 0) {
        const level = [];
        const levelSize = queue.length;
        
        // 处理当前层的所有节点
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            
            // 将当前节点的值加入当前层的结果
            level.push(node.val);
            
            // 将下一层的节点加入队列
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        
        result.push(level);
    }
    
    return result;
}
```

### 考察点
- 二叉树遍历
- 广度优先搜索
- 队列的应用

### 优化思路
- 时间复杂度为 O(n)，其中 n 是树中的节点数
- 空间复杂度为 O(n)，在最坏情况下，队列中最多会包含树的最后一层的所有节点
- 对于 JavaScript 来说，使用 shift() 操作队列的前端可能效率较低，可以考虑使用双端队列或维护队列的起始索引

## 10. 动态规划: 最长递增子序列 (高级)

### 题目描述
给定一个无序的整数数组，找到其中最长上升子序列的长度。

### 示例
**输入**: [10, 9, 2, 5, 3, 7, 101, 18]
**输出**: 4
**解释**: 最长的上升子序列是 [2, 3, 7, 101]，它的长度是 4。

### 代码示例
```javascript
function lengthOfLIS(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    // dp[i] 表示以 nums[i] 结尾的最长上升子序列的长度
    const dp = new Array(nums.length).fill(1);
    
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    
    return Math.max(...dp);
}

// 二分查找优化版本
function lengthOfLISOptimized(nums) {
    if (nums.length === 0) {
        return 0;
    }
    
    // tails[i] 表示长度为 i+1 的所有上升子序列中，结尾元素的最小值
    const tails = [];
    
    for (let num of nums) {
        // 在 tails 中查找第一个大于等于 num 的位置
        let left = 0;
        let right = tails.length;
        
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (tails[mid] < num) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        
        // 如果找不到，则添加到 tails 的末尾
        if (left === tails.length) {
            tails.push(num);
        } else {
            // 否则，更新 tails[left]
            tails[left] = num;
        }
    }
    
    return tails.length;
}
```

### 考察点
- 动态规划
- 二分查找
- 贪心算法

### 优化思路
- 动态规划解法的时间复杂度为 O(n²)，空间复杂度为 O(n)
- 使用二分查找可以将时间复杂度优化到 O(n log n)
- 问题还可以转化为"最长公共子序列"问题的特例