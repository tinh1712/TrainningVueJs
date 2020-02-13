Vue.component('app-user', {
    data: function() {
        return {
            users: [
                {userName: 'AAA'},
                {userName: 'BBB'}
            ]
        }
    },
    template: '<div><div class="user" v-for="user in users"><h1>Username: {{ user.userName }}</h1></div></div>'
}),
new Vue ({
    el: '#app',
    data: {
        title: 'Hello World',
    }
})