<template>
  <header class="header container">
    <img
      src="@/logo.svg"
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
          src="@/arrow.svg"
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
    width: 63.3334%;
    height: 152px;
    margin-top: 30px;
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