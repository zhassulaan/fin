<template>
  <div class="about">
    <div class="about-content container">
      <div class="about-content-text">
        <h2 class="about-content-title title">О проекте</h2>
        <Subtitle class="about-content-subtitle" :text="'Наш проект создан для каких-то важных целей и поможет вам'" />
        <p class="about-content-paragraph">Даже самый заядлый путешественник откроет для себя в Казахстане много интересного и прекрасного: горные вершины, покрытые снегом, обширные плоскогорья, глубокие реки, засушливые пустыни, бескрайние поля, покрытые цветам и девственные заповедные леса.</p>
        <br>
        <p class="about-content-paragraph">Невозможно рассказать обо всех живописных уголках страны на нескольких страницах. Незабываемы наскальные рисунки и скульптуры национального парка Баянаул, природный заповедник Кургалжин, где можно увидеть более чем 300 видов растений и самую северную в мире колонию фламинго.</p>
      </div>
      <img
        src="@/almaty3.svg"
        alt="Almaty"
        class="about-content-image"
      />
    </div>
    <div class="about-map">
    </div>
  </div>
</template>

<style scoped>
  .about {
    padding-top: 189px;
  }
  .about-content {
    display: flex;
    margin-bottom: 148px;
  }
  .about-content-text {
    margin: 30px 0 0 7.928%;
  }
  .about-content-title {
    line-height: 53px;
    letter-spacing: .09em;
    margin-bottom: 21px;
  }
  .about-content-subtitle {
    width: 313px;
    margin: 0 0 200px .2083%;
  }
  .about-content-paragraph {
    width: 530px;
    line-height: 25px;
  }
  .about-content-image {
    position: absolute;
    left: 6.771%;
  }
  .header-list-item {
    display: flex;
    gap: 13px;
    line-height: 22px;
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 600;
  }
</style>
