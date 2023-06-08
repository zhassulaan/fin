<template>
  <ul>
    <li v-for="routes, idx in combinedData" :key="idx">
      <NuxtLink :to="`${city}/${routes.id}`">
        <img
          :src="routes.src"
          :alt="routes.name || 'line'"
          :class="routes.name ? `route-place route-image${ idx }` : `route-line route-image${ idx }`"
        />
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
  import { routes } from '../data';
  export default {
    props: ['city'],
    data() {
      return {
        lines: [
          {
            id: 1,
            src: `/line1.svg`,
          },
          {
            id: 2,
            src: `/line2.svg`,
          },
          {
            id: 3,
            src: `/line3.svg`,
          },
          {
            id: 4,
            src: `/line4.svg`,
          },
          {
            id: 5,
            src: `/line5.svg`,
          },
          {
            id: 6,
            src: `/line6.svg`,
          },
          {
            id: 7,
            src: `/line7.svg`,
          },
          {
            id: 8,
            src: `/line8.svg`,
          },
        ],
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

<style scoped>
  .route-place {
    z-index: 2;
  }
  .route-line {
    z-index: 1;
  }
  .route-line {
    position: absolute;
  }
  .route-image0 {
    margin-left: 2.96875vw;
  }
  .route-image1 {
    margin-left: 10.20156vw;
    margin-top: -334.02px;
  }
  .route-image2 {
    margin-left: 31.51042vw;
    margin-top: -360px;
  }
  .route-image3 {
    margin-left: 15.77448vw;
    margin-top: -188px;
  }
  .route-image4 {
    margin-left: 2.60417vw;
    margin-top: -7px;
  }
  .route-image5 {
    margin-left: 18.77448vw;
    margin-top: -228px;
  }
  .route-image6 {
    margin-left: 41.14583vw;
    margin-top: -364px;
  }
  .route-image7 {
    margin-left: 24.27348vw;
    margin-top: -124px;
  }
  .route-image8 {
    margin-left: 23.17708vw;
    margin-top: -119px;
  }
  .route-image9 {
    margin-left: 11.87648vw;
    margin-top: -213px;
  }
  .route-image10 {
    margin-left: 1.25vw;
    margin-top: -230px;
  }
  .route-image11 {
    margin-left: 14.77448vw;
    margin-top: -165px;
  }
  .route-image12 {
    margin-left: 42.91667vw;
    margin-top: -197px;
  }
  .route-image13 {
    margin-left: 21.2742vw;
    margin-top: -278px;
  }
  .route-image14 {
    margin-left: 9.375vw;
    margin-top: -103px;
  }
  .route-image15 {
    margin-left: 23.775vw;
    margin-top: -195px;
  }
  .route-image16 {
    margin-left: 34.53125vw;
    margin-top: -300px;
  }
</style>
