<template>
  <div>
    <NuxtLayout>
      <no-ssr v-if="show">
        <Header />
      </no-ssr>
      <NuxtPage />
      <no-ssr v-if="show">
        <Footer />
      </no-ssr>
    </NuxtLayout>
  </div>
</template>

<script>
  import Header from '~/components/Header.vue';
  import Footer from '~/components/Footer.vue';
  
  export default {
    components: {
      Header,
      Footer,
    },
    data() {
      return {
        show: true,
      };
    },
    created() {
      // Customize the logic to determine whether to show or hide the header and footer
      if (this.$route.path === '/about') {
        this.show = false;
      }
    },
  };
</script>
