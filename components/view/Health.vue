<script setup></script>

<template>
  <section class="wrapper">
    <div class="content-left">
      <p class="title">Здоровье</p>
      <div class="texts">
        <p class="text">
          Ваше начальное число пунктов здоровья равно сумме ТЕЛ и ВЫН, деленной
          на 10 с округлением вниз. В ходе игры текущее здоровье может
          снижаться, но маловероятно, чтобы оно поднялось выше начального.
        </p>
      </div>
    </div>
    <div class="content-right">
      <health />
      <div class="buttons">
        <ui-button class="primary"> Продолжить </ui-button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 5%;
}

.content-left {
  width: 610px;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 70px;
}

.title {
  font-size: 80px;
  line-height: 150%;
  color: #88847d;
}

.texts {
  font-style: italic;
  font-size: 28px;
  line-height: 160%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.text {
  color: #806c4a;
}

.content-right {
  width: 670px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 100px;
}

.buttons {
  display: flex;
  column-gap: 40px;
}
</style>
