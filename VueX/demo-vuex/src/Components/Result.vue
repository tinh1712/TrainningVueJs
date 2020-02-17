<template>
   <div>
        <p>This is Result: {{ result }}</p>
         <p>This is Result: {{ $store.getters.changeResult }}</p>
   </div>
</template>

<script>
export default {
    computed: {
        result() {
            return this.$store.state.result
        }
    }
}
</script>

<style>

</style>