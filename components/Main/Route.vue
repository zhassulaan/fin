<template>
  <div class="main-route_content container">
    <h3 class="main-route_content-title title">Увлекательный маршрут по городу</h3>
    <ul class="main-route_content-box">
      <li v-for="routes, idx in combinedData" :key="idx">
        <NuxtLink :to="`${city}/${routes.id}`">
          <img
            :src="routes.src"
            :alt="routes.name || 'line'"
            :class="routes.name ? `main-route_content-box-place main-route_content-box-image${ idx }` : `main-route_content-box-line main-route_content-box-image${ idx }`"
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
  import { routes, lines } from '../../data';

  export default {
    props: ['city'],
    data() {
      return {
        lines: lines,
        routes: routes,
        combinedData: [],
      };
    },
    created() {
      this.combineData();
    },
    methods: {
      combineData() {
        const combined = [];
        const last_index = this.routes.length - 1;

        for (let i = 0; i < last_index; i++) {
          if (this.routes[i]) {
            combined.push(this.routes[i]);
          }
          if (this.lines[i]) {
            combined.push(this.lines[i]);
          }
        }
        combined.push(this.routes[last_index]);

        this.combinedData = combined;
      },
    },
  };
</script>

<style scoped lang="scss">
  .main-route_content {
    position: relative;
    width: 61.875vw;
    height: 2172px;
    margin: 157px 18.54167vw 0 19.58333vw;

    &-title {
      text-align: center;
      line-height: 31px;
      margin-bottom: 41px;
    }

    &-box {
      &-place,
      &-line {
        position: absolute;
      }

      &-place {
        z-index: 2;
      }

      &-line {
        z-index: 1;
      }

      &-image0 {
        top: 72px;
        left: 1.71875vw;
      }

      &-image1 {
        top: 157.98px;
        left: 10.20156vw;
      }
      
      &-image2 {
        top: 132px;
        left: 30.26042vw;
      }
      
      &-image3 {
        top: 362.01px;
        left: 15.77448vw;
      }

      &-image4 {
        top: 545px;
        left: 1.35417vw;
      }

      &-image5 {
        top: 737.23px;
        left: 18.77448vw;
      }

      &-image6 {
        top: 601px;
        left: 39.89583vw;
      }

      &-image7 {
        top: 889.89px;
        left: 24.27348vw;
      }

      &-image8 {
        top: 902px;
        left: 21.92708vw;
      }

      &-image9 {
        top: 1100.03px;
        left: 11.87648vw;
      }

      &-image10 {
        top: 1092px;
        left: 0;
      }

      &-image11 {
        top: 1333.96px;
        left: 14.77448vw;
      }

      &-image12 {
        top: 1315px;
        left: 41.66667vw;
      }
      
      &-image13 {
        top: 1468.01px;
        left: 21.2742vw;
      }

      &-image14 {
        top: 1632px;
        left: 8.125vw;
      }

      &-image15 {
        top: 1873.55px;
        left: 23.775vw;
      }

      &-image16 {
        top: 1752px;
        left: 33.28125vw;
      }
    }
  }
</style>
