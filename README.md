# vue-layout-flex

<h1 align="center">vue-layout-flex</h1>

vue-layout-flex是一个flex布局系统。


### 安装

#### npm    
npm install vue-layout-flex --save

#### yarn    
yarn add vue-layout-flex


#### 在 main.js 中。

```javascript
import VueLayoutFlex from 'vue-layout-flex';
import 'vue-layout-flex/lib/styles/layout-flex.css';

Vue.use(VueLayoutFlex)

``` 


### 使用

```html
<div
    v-row
    layout="between center"
    wrap="between"
    v-col-flow:200:500="0"
>
    <div v-row-flow:80:80="0"></div>
    <div v-row-flow:50:50="0"></div>
    <div
        v-row
        layout="center center"
        v-row-flow:50::30-80:40-60="1"
        v-self:stretch
    >
        center
    </div>
    <div v-row-flow:50:50="0" v-self:end></div>
    <div v-row-flow:50:50="0" v-self:start></div>
    <div v-row-flow:50="0" v-self:stretch></div>
    <div v-row-flow:50:50="0" v-self:center></div>
    <div v-row-flow:50:50="0"></div>
    <div v-row-flow:50:50="0"></div>
    <div v-row-flow:50:50="0"></div>
    <div v-row-flow:50:50="0"></div>
</div>
```


### 文档

#### 指令

##### v-row | v-col | v-row-rvs | v-col-rvs

- layout="justify-content align-items"

- wrap="align-content rvs"

##### v-self="align-self"


##### v-row-flow:basis:cross:mainMin-mainMax:crossMin-crossMax="grow-shrink"

在 v-row 和 v-row-rvs中使用

- basis: 主轴宽度。
- cross: 纵轴宽度。
- mainMin: 主轴最大宽度。
- mainMax: 纵轴最小宽度。
- crossMin: 主轴最大宽度。
- crossMax: 纵轴最小宽度。
- grow: flex-grow
- shrink: flex-shrink

##### v-col-flow:basis:cross:mainMin-mainMax:crossMin-crossMax="grow-shrink"

在 v-col 和 v-col-rvs中使用

- basis: 主轴宽度。
- cross: 纵轴宽度。
- mainMin: 主轴最大宽度。
- mainMax: 纵轴最小宽度。
- crossMin: 主轴最大宽度。
- crossMax: 纵轴最小宽度。
- grow: flex-grow
- shrink: flex-shrink
