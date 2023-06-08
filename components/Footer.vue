<template>
  <img
    src="@/footer_line.svg"
    alt="footer line"
    class="footer_line"
  />
  <footer class="footer container">
    <img
      src="@/logo.svg"
      alt="Logo"
      class="footer-logo"
    />
    <div class="footer-links">
      <ul class="footer-links-city">
        <li class="footer-links-city-item">
          <NuxtLink to="/almaty">Алматы</NuxtLink>
        </li>
        <li class="footer-links-city-item">
          <NuxtLink to="/petropavlovsk">Петропавловск</NuxtLink>
        </li>
        <li class="footer-links-city-item">
          <NuxtLink to="/taraz">Тараз</NuxtLink>
        </li>
        <li class="footer-links-city-item">
          <NuxtLink to="/astana">Астана</NuxtLink>
        </li>
        <li class="footer-links-city-item">
          <NuxtLink to="/semey">Семей</NuxtLink>
        </li>
        <li class="footer-links-city-item">
          <NuxtLink to="/ust-kamenogorsk">Усть-Каменогорск</NuxtLink>
        </li>
        <li class="footer-links-city-item">
          <NuxtLink to="/pavlodar">Павлодар</NuxtLink>
        </li>
        <li class="footer-links-city-item">
          <NuxtLink to="/karaganda">Караганда</NuxtLink>
        </li>
        <li class="footer-links-city-item">
          <NuxtLink to="/aktobe">Актобе</NuxtLink>
        </li>
      </ul>
      <div class="footer-links-menu">
        <NuxtLink to="/about" class="footer-links-menu-item">О нас</NuxtLink>
        <p class="footer-links-menu-privacy">Все права защищены © 2022</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .footer_line {
    width: 100vw;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 64.65px 0 51px;
    z-index: 5;
  }
  .footer-logo {
    background-blend-mode: darken;
  }
  .footer-links {
    display: grid;
    gap: 50px;
  }
  .footer-links-city {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 9px;
    width: 602px;
  }
  .footer-links-city-item,
  .footer-links-menu-item {
    line-height: 22px;
    font-size: 18px;
    font-weight: 500;
  }
  .footer-links-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .footer-links-menu-privacy {
    line-height: 17px;
    font-size: 14px;
    font-weight: 500;
  }
</style>