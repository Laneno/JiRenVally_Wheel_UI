<template>
    <!--如果iconPosition有值且为left，icon 在左侧，其他值(right)在右侧-->
    <button class="g-button" v-if="!iconPosition || iconPosition === 'left'">
        <!--v-if="icon" 当不传 icon 时，icon 的占位消失-->
        <svg v-if="icon" class="icon">
            <!--:是 v-bind 缩写，动态赋值-->
            <!--`#i-${icon}` 是一个js 字符串-->
            <!--${data}是一个模板字符串的插值，来自props-->
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <slot></slot>
    </button>
    <button class="g-button" v-else>
        <slot></slot>
        <svg v-if="icon" class="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
    </button>
</template>
<script>
    // props:组件通信
    export default {
        props:['icon', 'iconPosition']// left、right
    }
</script>
<style lang="scss">
        .g-button{
            //.g-button 简写成&，且包在.g-button里 就是sass的写法啦
            font-size: var(--font-size);
            height: var(--button-height);
            padding: 0 1em;         /*按钮左侧空一个字，不在按钮上加宽度width*/
            border-radius: var(--border-radius);
            border: 1px solid var(--border-color);
            background: var(--button-bg);
            &:hover{            /*hover悬停时，边框变深*/
                border-color: var(--border-color-hover);
            }
            &:active{           /*active点击时，背景变深*/
                background-color: var(--button-active-bg);
            }
            &:focus{            /*去掉按钮点击的蓝色边框*/
                outline: none;
            }
        }        
</style>
