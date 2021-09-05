<template>
  <div>Foo page</div>
</template>

<script>
export default {
  name: 'McvFoo',
  mounted() {
    console.log('initialized foo comp')
    this.$store.commit('foo/getArticleStart')
  }
}
</script>
