<template>
  <header class="header" :class="{ 'active': scrolled }">
    <img
      src="~/public/logo.svg"
      alt="Logo"
      class="header-logo"
    />
    <ul class="header-list">
      <li class="header-list-item">
        <NuxtLink to="/almaty">Алматы</NuxtLink>
      </li>
      <li class="header-list-item">
        <NuxtLink to="/astana">Астана</NuxtLink>
      </li>
      <li class="header-list-item">
        <NuxtLink to="/">Другие</NuxtLink>
        <img
          src="~/public/arrow.svg"
          alt="arrow"
        />
      </li>
      <li class="header-list-item">
        <NuxtLink to="/about">О нас</NuxtLink>
      </li>
    </ul>
  </header>
</template>

<style scoped>
  .header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 15px 18.3334%;
    height: 182px;
    margin-top: 30px;
    z-index: 5;
    transition: all .3s;
  }
  .active {
    margin-top: 0;
    background: #fff;
  }
  .header-logo {
    background-blend-mode: darken;
  }
  .header-list {
    display: flex;
    gap: 49px;
  }
  .header-list-item {
    display: flex;
    gap: 13px;
    line-height: 22px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
  }
</style>

<script>
  export default {
    data() {
      return {
        scrolled: false,
      }
    },
    mounted() {
      window?.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window?.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll(event) {
        event.preventDefault(); 
        const scrollPosition = window?.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.scrolled = scrollPosition > 15;
      }
    }
  };
</script>
