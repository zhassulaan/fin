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
        src="~/public/almaty3.svg"
        alt="Almaty"
        class="about-content-image"
      />
    </div>
    <div class="about-map">
    </div>
  </div>
</template>

<style scoped lang="scss">
  .about {
    padding-top: 99px;

    &-content {
      display: flex;
      margin-bottom: 148px;

      &-text {
        margin: 30px 0 0 7.928%;
      }

      &-title {
        line-height: 53px;
        letter-spacing: .09em;
        margin-bottom: 21px;
      }

      &-subtitle {
        width: 16.30208vw;
        margin: 0 0 200px .2083%;
      }

      &-paragraph {
        width: 27.60417vw;
        line-height: 25px;
      }

      &-image {
        position: absolute;
        width: 80.9375vw;
        left: 6.771vw;
      }
    }
  }
</style>
