<template>
	<img
		src="~/public/logo.svg"
		alt="Logo"
		class="logo"
		@click="reloadPage"
	/>
</template>

<script>
  export default {
    methods: {
      reloadPage() {
        this.$nuxt.$router.go();
      },
    }
  };
</script>

<style scoped>
  .logo {
    background-blend-mode: darken;
  }
</style>
