<template>
  <div class="main">
    <div class="main-hero_content">
      <div class="main-hero_content-text">
        <h1 class="main-hero_content-title title">{{ title }}</h1>
        <Subtitle class="main-hero_content-subtitle title" :text="'прогулка по «немецкой» истории города'" />
      </div>
      <img
        src="~/public/almaty1.svg"
        :alt="id"
        class="main-hero_content-image"
      />
    </div>
    <About />
    <div class="main-route_content container">
      <h3 class="main-route_content-title title">Увлекательный маршрут по городу</h3>
      <Route :city="id"/>
    </div>
    <Info />
  </div>
</template>

<script>
  import Info from '~/components/Main/Info.vue';
  import About from '~/components/Main/About.vue';
  import Subtitle from '~/components/Subtitle.vue';
  import Route from '~/components/Route.vue';

  export default {
    props: ['title', 'id'],
    components: {
      Info, About, Subtitle, Route,
    },
    data() {
      return {
        path: '~/assets/document.pdf',
      };
    },
  };
</script>

<style scoped lang="scss">
  .main {
    &-hero_content {
      background: url("@/banner.svg") no-repeat center center fixed; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 25.1765vh 17.0834vw 11.7647vh 19.21875vw;

      &-text {
        margin: 30px 0 0 .8854vw;
      }
      
      &-title {
        line-height: 88px;
        letter-spacing: .09em;
        margin: 0 0 9px .41666vw;
      }

      &-image {
        width: 37.76042vw;
      }
    }

    &-route_content {
      margin-top: 157px;

      &-title {
        text-align: center;
        line-height: 31px;
        margin-bottom: 41px;
      }
    }
  }

  @media screen and (min-width: 1600px) {
    .main {
      &-hero_content {
        padding: 25.1765vh 14.5625vw 11.7647vh 16.69785vw;
        
        &-image {
          width: 40.28132vw;
        }
      }
    }
  }
</style>
