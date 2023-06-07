<template>
	<h5 class="subtitle">{{ text }}</h5>
</template>

<script>
  export default {
    name: 'subtitle',
    props: ['text'],
  }
</script>

<style scoped>
  .subtitle {
    line-height: 22px;
  }
</style>
