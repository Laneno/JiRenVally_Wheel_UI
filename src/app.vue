<body>
<div id="app">
    {{message}}
</div>

<script src="./node_modules/vue/dist/vue.min.js"></script>
<script src="."></script>
<script>
    new Vue({
        el:'#app',
        data:{
            message: 'B-UI'
        }
    })
</script>
</body>