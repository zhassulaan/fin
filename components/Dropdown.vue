<template>
  <div class="dropdown" @click="toggleDropdown">
    <div class="dropdown-header">
      <span>Другие</span>
      <img
        src="~/public/arrow.svg"
        alt="arrow"
      />
    </div>
    <div class="dropdown-list" v-show="isOpen">
      <NuxtLink :to="city.id" class="dropdown-list-item" v-for="city in cities" :key="city" @click="selectCity(city)">{{ city.name }}</NuxtLink>
    </div>
  </div>
</template>

<script>
  import { cities } from '../data';
  export default {
    data() {
      return {
        isOpen: false,
        selectedCity: 'Select a city',
        cities: cities,
      };
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectCity(city) {
        this.selectedCity = city;
        this.isOpen = false;
      },
    },
  };
</script>

<style scoped lang="scss">
  .dropdown {
    position: relative;

    &-header {
      display: flex;
      align-items: center;
      gap: 13px;
      cursor: pointer;
    }

    &-list {
      position: absolute;
      top: 100%;
      left: 0;
      width: 200%;
      max-height: 250px;
      overflow-y: auto;
      background-color: #fff;
      border: 1px solid #ccc;
      list-style: none;
      padding: 0;
      margin: 0;

      &-item {
        display: list-item;
        padding: 10px;
        border: .4px solid #000;
        cursor: pointer;
        
        &:hover {
          background-color: #f0f0f0;
        }
      }
    }
  }
</style>
