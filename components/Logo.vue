<template>
	<img
		src="~/public/logo.svg"
		alt="Logo"
		class="logo"
		@click="reloadPage"
	/>
</template>

<style scoped>
  .logo {
    background-blend-mode: darken;
  }
</style>

<script>
  export default {
    methods: {
      reloadPage() {
        this.$nuxt.$router.go();
      },
    }
  };
</script>
