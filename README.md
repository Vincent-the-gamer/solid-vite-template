# 个人定制化Solid.js + Vite工程模板

由于Solid.js在create-vite脚手架中没有给定模板，所以我就自己做一个吧233。

这是我根据Solid.js官方库进行个人定制化的工程模板。喜欢的可以克隆下来自己用23333。

~~~shell
git clone https://github.com/Vincent-the-gamer/solid-vite-template
~~~

## 特点
### 使用yarn
我默认使用yarn来进行依赖管理
~~~shell
  yarn run serve # 启动项目
  yarn run build # 打包项目
  yarn add xxx # 安装依赖
  yarn remove xxx # 删除依赖
~~~

### 使用sass库的.scss文件来编写样式
本模板默认不使用原生css, 而是用sass, 样式文件后缀使用`.scss`

scss类似于less, 支持css嵌套和全局变量
~~~scss
$common-height: 50px;

.xxx{
    height: $common-height;
    &:hover{
        background-color: pink;
    }
}
~~~

### 默认build打包会拆分css和js
普通vite模板默认会将所有css打包到一个css文件中，js亦如此，这样在你的工程很大的时候，部署上去就比较那啥。
所以我默认配置了拆分打包。