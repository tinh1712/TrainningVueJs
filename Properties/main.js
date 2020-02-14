Vue.component ('blog-post',{
    props: [
        'myprop'
    ],
    template: '<h1>{{myprop}}</h1>'
})

new Vue ({
    el: '#app',
    data:{

    }
})