# vue-layout-flex

vue-layout-flex是一个flex布局系统，它使布局与表现分开，在vue的模板中进行布局甚至设置元素大小，剩下的工作只需要在css中写好表现样式。


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

#### 容器指令

##### v-row | v-col | v-row-rvs | v-col-rvs

v-row等同于
```css
    display:flex;
    flex-direction: row;
```
v-row-rvs等同于
```css
    display:flex;
    flex-direction: row-reverse;
```

v-col等同于
```css
    display:flex;
    flex-direction: column;
```

v-col等同于
```css
    display:flex;
    flex-direction: column-reverse;
```

#### 容器属性。

##### layout="justify-content align-items"
- justify-content参数支持5个值: center、end、start、between、around。
1. center:center,
2. end: flex-end,
3. start: flex-start,
4. between: space-between,
5. around: space-around,

- align-items参数支持5个值：center、start、end、stretch、baseline。

1. center: center,
2. start: flex-start,
3. end: flex-end,
4. stretch: stretch,
5. baseline: baseline,

##### wrap="align-content rvs"

- align-content参数支持六个值：center、end、start、between、around、stretch
1. center: center,
2. end: flex-end, 
3. start: flex-start, 
4. between: pace-between,
5. around: space-around, 
6. stretch: stretch

- rvs 非必须的参数。
它的作用等同于flex-wrap: wrap-reverse。

#### 子项指令

##### v-self="align-self"

- align-self参数和 layout的align-items参数一样。


##### v-row-flow:basis:cross:mainMin-mainMax:crossMin-crossMax="grow-shrink"

必须在 v-row 和 v-row-rvs容器中中使用

- basis: 主轴宽度。
- cross: 纵轴宽度。
- mainMin: 主轴最大宽度。
- mainMax: 纵轴最小宽度。
- crossMin: 主轴最大宽度。
- crossMax: 纵轴最小宽度。
- grow: flex-grow
- shrink: flex-shrink

``` html
 <div v-row-flow:300:200:200-400:100-300="1-1"></div>
```
等同于
``` css
flex-flow: 300 1 1;
min-width:200px;
max-width:400px;
min-height: 100px;
max-height: 300px;
```

以下写法都合法
```html
    <div v-row-flow:300="1"></div>
    <div v-row-flow:300::100-300></div>
    <div v-row-flow::::100-300="1-1"></div>
```

##### v-col-flow:basis:cross:mainMin-mainMax:crossMin-crossMax="grow-shrink"

必须在 v-col 和 v-col-rvs容器中使用

- basis: 主轴宽度。
- cross: 纵轴宽度。
- mainMin: 主轴最大宽度。
- mainMax: 纵轴最小宽度。
- crossMin: 主轴最大宽度。
- crossMax: 纵轴最小宽度。
- grow: flex-grow
- shrink: flex-shrink

### 注意

v-row-flow 和 v-col-flow的参数对应的都是主轴纵轴而不是宽和高。
