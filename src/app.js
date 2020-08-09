import Vue from 'vue'//所有的依赖都通过import引入
import Button from './button'

Vue.component('g-button',Button)//一个全局的g-button组件,声明g-button为Button组件

//初始化页面，app这个div
new Vue({
    el:'#app'
})