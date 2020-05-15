# hw-website

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install
```
``` javascript
// 修改依赖flexible.js
    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 540) {
            width = width * dpr;
        }
        var rem = width / 100;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }
```
``` bash
# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
