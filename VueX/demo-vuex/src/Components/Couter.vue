<template>
    <div>
        <button v-on:click="increment">Increment</button>
        <button v-on:click="decrement">Decrement</button>   
    </div>    
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        increment () {
            this.$store.state.result++;
        },
        decrement () {
            this.$store.state.result--;
        }
    }
}
</script>

<style>

</style>