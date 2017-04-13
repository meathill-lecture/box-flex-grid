<!--
title: Box, Flex, Grid
description: review the history of CSS layout, learn how to use flex and grid
-->

## Web 永恒不变的主题：布局

# Box > Flex > Grid

<!-- page -->

[author]

<!-- page -->

### 课程简介

* 回顾盒模型
* 回顾定位属性
* 学习 Flex
* 介绍 Grid

<!-- page -->

### 前言

互联网高速发展，海量用户涌入，刺激厂商和开发者绞尽脑汁以网页为平台提供商品。

这些商品多半功能丰富、交互复杂，对 UI 要求很高。

创造好的 UI 需要善用 CSS 布局，然而 CSS 布局却有着各种奇奇怪怪的设定，早期开发者只有随着这些诡异的节奏起舞……

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

1. 默认宽度为父元素的宽度
2. 默认高度为子元素的高度

<!-- section -->

<iframe height="500" scrolling='no' title='bfg-normal-box' src='//codepen.io/meathill/embed/ybLqYK/?height=500&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/meathill/pen/ybLqYK/'>bfg-normal-box</a> by Meathill (<a href='http://codepen.io/meathill'>@meathill</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<!-- page -->

### 我理想中的盒模型

1. 默认宽度 100%
2. 设置宽度后，按设置的宽度呈现
3. 一行没占满，自动往后续，续的方向由 CSS 指定
4. 占满一行自动换行
5. 父元素的高度由自元素总高度决定
6. 严格占据自己的盒子空间

<!-- section -->

#### 事实上……

<!-- section -->

<iframe height='500' scrolling='no' title='bfg-ideal-box' src='//codepen.io/meathill/embed/MmWBjB/?height=500&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/meathill/pen/MmWBjB/'>bfg-ideal-box</a> by Meathill (<a href='http://codepen.io/meathill'>@meathill</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<!-- page -->

### [Block Formatting Context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)

块级元素格式化上下文，BFC

1. 内部的 Box 垂直放置
2. 垂直方向的距离由 `margin` 决定，属于同一 BFC 的相邻 Box 的 `margin` 会叠加
3. 每个元素的 `margin-box` 左边与包含块 `border-box` 的左边相接，即使存在浮动也如此
4. BFC 不与 float box 叠加
5. BFC 相对独立，内外元素互不影响
6. 计算 BFC 高度时，浮动元素也参加计算

<!-- section -->

#### BFC 最奇葩的一点

## 要解决问题，一定要手工触发……

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

<!-- page -->

### 绝对定位 
### `position:absolute`

1. 相对于最近的上级非 `position:static` 元素相对定位
2. 不在文档流，不影响其它元素渲染
3. 不产生 reflow 和 repaint

<!-- section -->

#### 解决“圣杯布局”

<div id="cup">
  <aside>定宽</aside>
  <div class="content">自适应</div>
  <aside>定宽</aside>
</div>

<!-- section -->

```stylus
aside
  position absolute
  top 0
  bottom 0
  width 200px

  &.left
    left 0
    
  &.right
    right 0
    
.content
  margin 0 200px
```

<small>范例文件：`./sample/shengbei.html`</small>

<!-- page -->

### 固定定位
### `position:fixed`

1. 相对于窗口相对定位
2. 类似 `absolute`，脱离文档流
3. 通常用来做顶部菜单

<!-- page -->

### 滚动定位
### `position:sticky`

1. 当父元素显示，其常规位置也处于视口中，则随窗口滚动，形似 `static`
2. 当父元素显示，它滚出视口，则固定在窗口特定位置，形似 `fixed`
3. 当其父元素滚出视口，它也随之消失

<!-- section -->

<iframe height='500' scrolling='no' title='Sticky positioning' src='//codepen.io/meathill/embed/RVwevw/?height=500&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/meathill/pen/RVwevw/'>Sticky positioning</a> by Meathill (<a href='http://codepen.io/meathill'>@meathill</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<!-- page -->

## `box-sizing`

再看一眼 [盒模型](#/6/1)

1. 早年默认 `content-box`
2. 如今通常重置为 `border-box`

<!-- page -->

## 其它常用布局

<!-- section -->

### 默认全屏

```css
html, body {
  height: 100%;
}
```

<!-- section -->

<!-- page -->

## 浮动

### 不到万不得已，不要使用浮动。

<!-- section -->

### 不用浮动，我用什么呢？

Note:
可能有些同学会说，不让用浮动，我用什么呢？遇到横向布局应该怎么解决呢？

<!-- section -->

## Flex-box

作为前端开发者，我们必须与时俱进，眼下这个时刻，flexbox 无疑是比浮动好得多得多的选择。

<!-- page -->

我先臆断一下 CSS 布局混乱的原因：

1. 创造网页的目的是阅读文献，`<a>` 是它的标志
2. 早期浏览器事实标准太强，IE 统治很多年，很多 Bug 被当成 Feature 保留下来
3. 早期没有前端，互联网产品以图文阅读为主，浏览器做成啥鬼样子都可以

Note:
这里我们总结一下，早期的 CSS 布局混乱，有各种难以名状的问题。这些问题的原因是：

<!-- page -->

## Flex-box

随着 Web 产品的丰富，越来越多的浏览器参与竞争，标准制定也向有益于前端的方向进行。

<!-- section -->

现实中布局需求：

1. 各种居中
2. 列表中平均分配空间

<!-- page -->

### Flex-box 案例

<!-- section -->

### 圣杯布局

<iframe height='500' scrolling='no' title='bfg-flex-cup' src='//codepen.io/meathill/embed/dWyQKM/?height=500&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/meathill/pen/dWyQKM/'>bfg-flex-cup</a> by Meathill (<a href='http://codepen.io/meathill'>@meathill</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<!-- section -->

### 图片列表

<iframe height='500' scrolling='no' title='bfg-flex-cup' src='//codepen.io/meathill/embed/PmoxyJ/?height=500&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/meathill/pen/dWyQKM/'>bfg-flex-cup</a> by Meathill (<a href='http://codepen.io/meathill'>@meathill</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<!-- section -->

### 完全居中

<iframe height='500' scrolling='no' title='bfg-flex-all-center' src='//codepen.io/meathill/embed/zwYMQY/?height=500&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/meathill/pen/zwYMQY/'>bfg-flex-all-center</a> by Meathill (<a href='http://codepen.io/meathill'>@meathill</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<!-- page -->

## Grid

史上最强大的布局系统，以二维为基础的布局系统。

1. Grid 先把一个区域划分为 N x M 的网格
2. 然后声明每个格子的尺寸
3. 页面元素声明自己占几个格子来实现布局

<!-- section -->

### 简单范例

<iframe height='500' scrolling='no' title='bfg-grid-started' src='//codepen.io/meathill/embed/VbwgYB/?height=500&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/meathill/pen/VbwgYB/'>bfg-grid-started</a> by Meathill (<a href='http://codepen.io/meathill'>@meathill</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<!-- section -->

### 给网格命名

<iframe height='500' scrolling='no' title='bfg-grid-area' src='//codepen.io/meathill/embed/LyYapK/?height=500&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/meathill/pen/LyYapK/'>bfg-grid-area</a> by Meathill (<a href='http://codepen.io/meathill'>@meathill</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

<!-- page -->

### Grid 会取代 Flex 么？

我认为不会。原因有三：

1. Grid 还很新，需要时间普及，还有很多浏览器不支持
2. Flex 和 Grid 各有所长，有些地方并不是那么好画格子
3. 移动互联网时代，我们对 Grid 的需求并不强烈……

<!-- page -->

## 注意事项：

1. CSS 布局是一套非常复杂的系统。有很多属性会影响布局，比如 `float`、`postition:abosulut` 的元素自动转化为块级元素。限于篇幅，本教程中未全面介绍这些会互相影响的属性，希望大家自行查阅文档。
2. 同样限于篇幅，很多 Flex、Grid 的属性这里也没有展开介绍，请大家认真阅读后面的相关资料，并在使用中学习记忆。

<!-- page -->

Q&A

<!-- page -->

## 参考文章

* [CSS之BFC详解](http://www.html-js.com/article/1866)
* [http://www.w3.org/TR/CSS2/visuren.html#block-formatting](http://www.w3.org/TR/CSS2/visuren.html#block-formatting)
* [Block formatting context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)
* [CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)
* [A Guide To Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
* [Complete Guide Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [MDN CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)