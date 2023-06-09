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
      if (this.$route.path === '/about') {
        this.show = false;
      }
    },
  };
</script>
