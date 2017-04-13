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

近几年互联网高速发展，海量用户涌入，刺激厂商和开发者绞尽脑汁以网页为平台提供商品。

这些商品多半功能丰富、交互复杂，对 UI 要求很高。

创造好的 UI 需要善用 CSS 布局，然而不知道为什么，CSS 布局有着各种奇奇怪怪的设定，早期开发者只有随着这些诡异的节奏起舞……

Note:
创造 HTML，是为了阅读文献。但随着越来越多的用户涌入互联网，网页必须承载更多内容，更多功能。

<!-- page -->

#### 早期 CSS 布局

## Box & inline

<!-- page -->

## 块级元素 Box

1. `display:block`
2. `<div>` `<table>` `<h1>` `<p>` 以及大部分我们会拿来做布局的元素
3. 占据独立的四方形空间

<!-- section -->

## 行内元素 inline

1. `display:inline`
2. `<strong>` `<i>` `<em>`
3. 与其它行内元素顺序排列，排满一行，自动换行。

Note:
很少拿来做布局，所以就不讲了

<!-- page -->

## 块级元素

### `display: block;`

<!-- section -->

## 块级元素的构成

<div class="margin-box" id="layout-sample">
  <h4>margin</h4>
  <div class="border-box">
    <h4>border</h4>
    <div class="padding-box">
      <h4>padding</h4>
      <div class="content">
        <h4>Content</h4>
      </div>
    </div>
  </div>
</div>

<!-- page -->

它有以下特点：

1. 默认宽度为父元素的宽度，`width:100%`
2. 默认高度为子元素的高度
3. `float` 不为 `none`，`position` 为 `absolute` 或 `fixed`，均成为 Box

<!-- section -->

<iframe height="500" scrolling='no' title='bfg-normal-box' src='//codepen.io/meathill/embed/ybLqYK/?height=500&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/meathill/pen/ybLqYK/'>bfg-normal-box</a> by Meathill (<a href='http://codepen.io/meathill'>@meathill</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<!-- page -->

### 理想状态的盒子

1. 默认宽度 100%
2. 设置宽度后，按设置的宽度呈现
3. 一行没占满，自动往后续，续的方向由 CSS 指定
4. 占满一行自动换行
5. 父元素的高度由自元素总高度决定
6. 严格占据自己的盒子空间

<!-- section -->

#### 事实上……

<!-- section -->

<iframe height='500' scrolling='no' title='bfg-ideal-box' src='//codepen.io/meathill/embed/MmWBjB/?height=500&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/meathill/pen/MmWBjB/'>bfg-ideal-box</a> by Meathill (<a href='http://codepen.io/meathill'>@meathill</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<!-- page -->

### [Block Formatting Context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)

1. 内部的 Box 垂直放置
2. 垂直方向的距离由 `margin` 决定，属于同一 BFC 的相邻 Box 的 `margin` 会叠加
3. 每个元素的 `margin-box` 左边与包含块 `border-box` 的左边相接，即使存在浮动也如此
4. BFC 不与 float box 叠加
5. BFC 相对独立，内外户不影响
6. 计算 BFC 高度时，浮动元素也参加计算

<!-- section -->

#### 我也不知道为什么……

<!-- section -->

<iframe height='500' scrolling='no' title='bfg-bfc' src='//codepen.io/meathill/embed/RVwBxo/?height=500&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/meathill/pen/RVwBxo/'>bfg-bfc</a> by Meathill (<a href='http://codepen.io/meathill'>@meathill</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<!-- page -->

## 定位 `position`

<!-- section -->

1. `static` 静态文档流
2. `relative` 相对定位
3. `absolute` 绝对定位
4. `fixed` 相对于屏幕绝对定位
5. `sticky` 相对于滚动条绝对定位

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


随着浏览器技术的发展，布局技术也在不断进步。

本节课除了回顾传统上常见的盒模型，还会展示新布局功能的使用。

<!-- page -->

#### 小 Tips：

想象你是一名浏览器开发工程师，你需要实现现在的 HTML + CSS 渲染机制，你会怎么做？

这样有助于你理解这套规则。

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
[http://www.w3.org/TR/CSS2/visuren.html#block-formatting](http://www.w3.org/TR/CSS2/visuren.html#block-formatting)
[Block formatting context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)