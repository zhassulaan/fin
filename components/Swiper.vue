<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="image in images" :key="image.id">
        <img :src="image.src" :alt="image.alt">
      </div>
    </div>
  </div>
</template>

<script>
	import Swiper from 'swiper';
	import 'swiper/swiper-bundle.css';

	export default {
		data() {
			return {
				images: [
					{ id: 1, src: 'almaty2.svg', alt: 'Image 1' },
					{ id: 2, src: 'almaty2.svg', alt: 'Image 2' },
					{ id: 3, src: 'almaty2.svg', alt: 'Image 3' },
				],
				swiper: null,
			};
		},
		mounted() {
			this.initializeSwiper();
		},
		methods: {
			initializeSwiper() {
				new Swiper('.swiper-container', {
					slidesPerView: 1,
					loop: true,
					navigation: false,
					pagination: false,
				});
			},
		},
		beforeDestroy() {
			if (this.swiper) {
				this.swiper.destroy();
			}
		},
	};
</script>

<style scoped>
	.swiper-container {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.swiper-wrapper {
		display: flex;
	}
	.swiper-slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
