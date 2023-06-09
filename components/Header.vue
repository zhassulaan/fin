<template>
  <header class="header" :class="{ 'active': scrolled }">
    <Logo class="header-logo" />
    <ul class="header-list">
      <li class="header-list-item">
        <NuxtLink to="/almaty">Алматы</NuxtLink>
      </li>
      <li class="header-list-item">
        <NuxtLink to="/astana">Астана</NuxtLink>
      </li>
      <li class="header-list-item">
        <Dropdown />
      </li>
      <li class="header-list-item">
        <NuxtLink to="/about">О нас</NuxtLink>
      </li>
    </ul>
  </header>
</template>

<script>
  import Dropdown from '~/components/Dropdown.vue';

  export default {
    components: {
      Dropdown,
    },
    data() {
      return {
        scrolled: false,
      }
    },
    mounted() {
      window?.addEventListener('scroll', this.handle_scroll);
    },
    beforeDestroy() {
      window?.removeEventListener('scroll', this.handle_scroll);
    },
    methods: {
      handle_scroll(event) {
        event.preventDefault(); 
        const scroll_position = window?.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.scrolled = scroll_position > 15;
      },
    }
  };
</script>

<style scoped lang="scss">
  .header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: .5em 18.3334%;
    height: 182px;
    margin-top: 1.375em;
    z-index: 5;
    transition: all .25s;

    &-list {
      display: flex;
      gap: 2.55208vw;

      &-item {
        display: flex;
        gap: .68802vw;
        line-height: 22px;
        text-transform: uppercase;
        font-size: 18px;
        font-weight: 600;
      }
    }
  }
  .active {
    margin-top: 0;
    background: #fff;
  }

  @media screen and (min-width: 1600px) {
    .header {
      padding: 0 13.125vw;
    }
  }
</style>
