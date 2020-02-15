<template>
    <p>This is Result: {{ result }}</p>
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