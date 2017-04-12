<!--
title: Box, Flex, Grid
description: review the history of CSS layout, learn how to use flex and grid
-->

## Web 永恒不变的主题：布局

# Box > Flex > Grid

<!-- page -->

[author]

<!-- page -->

### 前言

创造 HTML 的目的是为了更好的阅读文献。但互联网发展到现在，网页的功能却早已不是简单的展示文字内容。随着各种在线产品的涌现，网页已经成为最重要的产品 UI 容器。

创造好的 UI 需要善用各种布局，随着浏览器技术的发展，布局技术也在不断进步。

本节课除了回顾传统上常见的盒模型，还会展示新布局功能的使用。

<!-- page -->

#### 小 Tips：

想象你是一名浏览器开发工程师，你需要实现现在的 HTML + CSS 渲染机制，你会怎么做？

这样有助于你理解这套规则。

<!-- page -->

## Box & inline

<!-- page -->

## 块级元素 Box

1. `display:block`
2. `<div>` `<table>` `<h1>` `<p>` 以及大部分我们会拿来做布局的元素
3. 占据独立的四方形空间

## 行内元素 inline

1. `display:inline`
2. `<strong>` `<i>` `<em>`
3. 与其它行内元素顺序排列

Note:
最传统的布局元素，目前仍在服役。

<!-- page -->

### 行内元素

Note:
这个比较简单，而且很少拿来做布局，所以就不讲了

<!-- page -->

## 块级元素

<!-- section -->

## 块级元素的构成

<div class="margin-box">
  <div class="border-box">
    <div class="padding-box">
      <div class="content"></div>
    </div>
  </div>
</div>

<!-- page -->

它有以下特点：

1. 默认宽度为父元素的宽度，`width:100%`
2. 默认高度为子元素的高度
3. `float` 不为 `none`，`position` 为 `absolute` 或 `fixed`，均成为 Box

[看一下演示](./sample/box.html)

<!-- section -->

### 默认全屏

```css
html, body {
  height: 100%;
}
```

<!-- page -->

### `width` 与 `box-sizing`

### 左右布局

### `position`

<!-- page -->

### 浮动与清除浮动

`float` 属性可以使元素向一侧浮动

<!-- page -->

## Flexbox

普通块级元素的问题：

1. 没有弹性
2. 不好做垂直居中

<!-- page -->

### 等分布局

```stylus
.container
  display: flex

.item
  flex: 1
```

<!-- page -->

## 参考文章

[CSS之BFC详解](http://www.html-js.com/article/1866)
[Block formatting context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)