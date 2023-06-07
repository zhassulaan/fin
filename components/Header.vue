<template>
  <header class="header">
    <img
      src="@/public/logo.svg"
      alt="Logo"
      class="header-logo"
    />
    <ul class="header-list">
      <li class="header-list-item">
        <NuxtLink to="/">Алматы</NuxtLink>
      </li>
      <li class="header-list-item">
        <NuxtLink to="/">Астана</NuxtLink>
      </li>
      <li class="header-list-item">
        <NuxtLink to="/">Другие</NuxtLink>
        <img
          src="@/public/arrow.svg"
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
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 152px;
    margin-top: 30px;
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