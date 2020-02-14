new Vue ({
    el: '#app',
    data: {
        title: 'VueJS Lifecycle'
    },
    created: function(){
        alert('created');
    },
    mounted: function(){
        alert('mounted');
    },
    updated: function(){
        alert('updated');
    },
    destroyed: function(){
        alert('destroyed');
    },
    methods: {
        destroyedEvent: function(){
            this.$destroy();
        }
    }
})