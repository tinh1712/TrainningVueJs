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
            this.$store.dispatch('increment', 1)
        },
        decrement () {
            this.$store.dispatch('decrement', 2)
        }
    }
}
</script>

<style>

</style>