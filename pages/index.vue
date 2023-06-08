<template>
  <div class="main">
    <div class="main-hero_content container">
      <div class="main-hero_content-text">
        <h1 class="main-hero_content-title title">Алматы</h1>
        <Subtitle class="main-hero_content-subtitle title" :text="'прогулка по «немецкой» истории города'" />
      </div>
      <img
        src="~/public/almaty1.svg"
        alt="Almaty"
        class="main-hero_content-image"
      />
    </div>
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
    <div class="main-route_content container">
      <h3 class="main-route_content-title title">Увлекательный маршрут по городу</h3>
      <Route :city="'almaty'"/>
    </div>
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
  </div>
</template>

<style scoped>
  .main {
    background-image: url("@/banner.svg");
    background-repeat: no-repeat;
    background-size: contain;
  }
  .main-hero_content {
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25.1765vh 0 11.7647vh;
    margin-right: 17.0834%;
  }
  .main-hero_content-text {
    margin: 30px 0 0 .8854vw;
  }
  .main-hero_content-title {
    line-height: 88px;
    letter-spacing: .09em;
    margin: 0 0 9px .41666vw;
  }
  .main-about_content {
    display: grid;
    grid-template-areas: 
      'image text'
      'download download';
    justify-content: space-between;
    padding-top: 160px;
  }
  .main-about_content-image,
  .main-info_content-image {
    grid-area: image;
    width: 460px;
	  height: 529px;
    margin-top: 3px;
  }
  .main-about_content-text,
  .main-info_content-text {
    width: 701px;
    grid-area: text;
  }
  .main-about_content-paragraph,
  .main-info_content-paragraph {
    line-height: 27.72px;
  }
  .main-about_content-paragraph:last-child,
  .main-info_content-paragraph:last-child {
    font-weight: 600;
    color: #5C5754;
  }
  .main-about_content-download {
    display: flex;
    justify-content: space-between;
    align-items: center;
    grid-area: download;
    width: 100%;
    border: 3px dashed #AB9995;
    border-radius: 30px;
    margin-top: 71px;
    padding: 23px 271px 23px 268px;
  }
  .main-about_content-download-text {
    line-height: 28px;
    font-family: 'komika_axis_cyr';
    font-size: 18px;
    font-weight: 400;
  }
  .main-route_content {
    margin-top: 157px;
  }
  .main-route_content-title {
    text-align: center;
    line-height: 31px;
    margin-bottom: 41px;
  }
  .main-info_content {
    display: grid;
    grid-template-areas: 
      'title title'
      'text image';
    justify-content: space-between;
    padding: 128px 0 162.02px;
  }
  .main-info_content-title {
    grid-area: title;
    text-align: center;
    margin: 55px 0;
  }
</style>
