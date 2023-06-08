<script setup>
  import { routes } from '../../data';
  const route = useRoute();
  const detail = routes.find(item => item.id == route.params.id);
</script>

<template>
  <div class="detail">
    <div class="detail-content container">
      <div class="detail-content-text">
        <h2 class="detail-content-title title">{{ detail.name }}</h2>
        <Subtitle class="detail-content-subtitle" :text="`Маршрут номер ${detail.id}`" />
        <p class="detail-content-paragraph">{{ detail.text }}</p>
      </div>
      <img
        :src="detail.src"
        alt="Almaty"
        class="detail-content-image"
      />
    </div>
  </div>
</template>

<style scoped>
  .detail {
    padding-top: 230px;
  }
  .detail-content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 120px;
  }
  .detail-content-text {
    margin: 30px 0 0 7.928%;
  }
  .detail-content-title {
    line-height: 53px;
    letter-spacing: .09em;
    margin-bottom: 21px;
  }
  .detail-content-subtitle {
    width: 313px;
    margin: 0 0 64px .2083%;
  }
  .detail-content-paragraph {
    width: 530px;
    line-height: 25px;
  }
</style>
