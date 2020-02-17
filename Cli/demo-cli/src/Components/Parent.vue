<template>
<div>
    <app-user v-bind:name="name"></app-user>
    <button v-on:click="change">Change</button>
</div>
</template>

<script>
import Child from './Child';
export default {
    data() {
        return {
            name: 'Parent'
        }
    },
    methods: {
        change() {
            this.name = 'Child';
        }
    },
    components: {
        appUser: Child,
    }
}
</script>