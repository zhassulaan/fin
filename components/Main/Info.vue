<template>
	<div class="main-info_content container">
		<h3 class="main-info_content-title title">текст с заголовком</h3>
		<div class="main-info_content-text">
			<p class="main-info_content-paragraph">Немецкая история Верного – Алма-Аты – Алматы начинается буквально с момента основания города в 1854 г. С середины 19 в. здесь в молодом городе Туркестанского края жили и работали не только чиновники немецкого происхождения, но и немецкие ученые и путешественники: ботаник-натуралист А.Шренк, путешественник, врач и исследователь растительного мира Туркестанского края Иоганн-Альберт Регель, садовод К.Штольц, лесоводы братья Баум и другие.</p>
			<br />
			<p class="main-info_content-paragraph">В советский период истории в нашем городе жили и работали немцы – представители творческой и научной интеллигенции, архитекторы, известные спортсмены, врачи и многие другие. Многие из них были депортированы в 1941 г. из различных мест проживания этнических немцев в СССР и расселены в разных областях Казахской ССР, а с ослаблением режима спецпоселения, когда появилась возможностью работать и учиться в столице Казахстана, переехали в Алма-Ату.</p>
			<br />
			<p class="main-info_content-paragraph">Надеемся, что наша экскурсия поможет вам в осмыслении исторического прошлого своего народа и сохранении достойной памяти о нем!</p>
		</div>
		<Swiper class="main-info_content-image" />
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
	.main-info_content {
		display: grid;
		grid-template-areas: 
			'title title'
			'text image';
		justify-content: space-between;
		padding: 128px 0 162.02px;

		&-title {
			grid-area: title;
			text-align: center;
			margin: 55px 0;
		}

		&-image {
			grid-area: image;
			width: 23.9583vw;
			height: 529px;
			margin-top: 3px;
		}

		&-text {
			width: 701px;
			grid-area: text;
		}

		&-paragraph {
			line-height: 27.72px;

			&:last-child {
				font-weight: 600;
				color: #5C5754;
			}
		}
	}

	@media screen and (min-width: 1600px) {
			.main-info_content {
				&-image {
					width: 28.4375vw;
				}

				&-text {
					width: 40.51vw;
					grid-area: text;
				}
			}
		}
</style>