<template>
	<div class="main-about_content container">
		<Swiper class="main-about_content-image" />
		<div class="main-about_content-text">
			<p class="main-about_content-paragraph">Немецкая история Верного – Алма-Аты – Алматы начинается буквально с момента основания города в 1854 г. С середины 19 в. здесь в молодом городе Туркестанского края жили и работали не только чиновники немецкого происхождения, но и немецкие ученые и путешественники: ботаник-натуралист А.Шренк, путешественник, врач и исследователь растительного мира Туркестанского края Иоганн-Альберт Регель, садовод К.Штольц, лесоводы братья Баум и другие.</p>
			<br />
			<p class="main-about_content-paragraph">В советский период истории в нашем городе жили и работали немцы – представители творческой и научной интеллигенции, архитекторы, известные спортсмены, врачи и многие другие. Многие из них были депортированы в 1941 г. из различных мест проживания этнических немцев в СССР и расселены в разных областях Казахской ССР, а с ослаблением режима спецпоселения, когда появилась возможностью работать и учиться в столице Казахстана, переехали в Алма-Ату.</p>
			<br />
			<p class="main-about_content-paragraph">Надеемся, что наша экскурсия поможет вам в осмыслении исторического прошлого своего народа и сохранении достойной памяти о нем!</p>
		</div>
		<a href="~/public/document.pdf" download class="main-about_content-download">
			<p class="main-about_content-download-text">Скачать маршрут: Увлекательный маршрут по городу</p>
			<img
				src="~/public/file.svg"
				alt="Download route"
				class="main-about_content-download-icon"
			/>
		</a>
	</div>
</template>

<script>
  import Swiper from '~/components/Swiper.vue';

  export default {
    components: {
      Swiper,
    },
  };
</script>

<style scoped lang="scss">
	.main-about_content {
		display: grid;
		grid-template-areas: 
			'image text'
			'download download';
		justify-content: space-between;
		padding-top: 160px;

		&-image {
			grid-area: image;
			width: 23.9583vw;
			height: 529px;
			margin-top: 3px;
		}

		&-text {
			width: 36.51042vw;
			grid-area: text;
		}

		&-paragraph {
			line-height: 27.72px;

			&:last-child {
				font-weight: 600;
				color: #5C5754;
			}
		}

		&-download {
			display: flex;
			justify-content: space-between;
			align-items: center;
			grid-area: download;
			width: 100%;
			border: 3px dashed #AB9995;
			border-radius: 30px;
			margin-top: 71px;
			padding: 23px 14.11458vw 23px 13.95835vw;

			&-text {
				line-height: 28px;
				font-family: 'komika_axis_cyr';
				font-size: 18px;
				font-weight: 400;
			}
		}

		@media screen and (min-width: 1600px) {
			.main-about_content {
				&-image {
					width: 28.4375vw;
				}

				&-text {
					width: 40.51vw;
					grid-area: text;
				}

				&-download {
					padding: 23px 12.61458vw 23px 12.45835vw;
				}
			}
		}
	}
</style>