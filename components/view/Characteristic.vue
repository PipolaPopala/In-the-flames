<script setup></script>

<template>
  <section class="wrapper">
    <div class="content-left">
      <p class="title">Характеристики</p>
      <div class="texts">
        <p class="text">У вашего персонажа есть восемь характеристик.</p>
        <p class="text">
          Распределите между этими характеристиками следующие значения:
          <span class="gray">40</span>, <span class="gray">50</span>,
          <span class="gray">50</span>, <span class="gray">50</span>,
          <span class="gray">60</span>, <span class="gray">60</span>,
          <span class="gray">70</span>, <span class="gray">80</span>.
        </p>
        <p class="text">
          Не переживайте, если что-то непонятно, идеального персонажа создавать
          не нужно, тут главное какая история у вас получится.
        </p>
      </div>
    </div>
    <div class="content-right">
      <form class="stats">
        <stat title-cut="Сил" title-full="Сила" />
        <stat title-cut="Лов" title-full="Ловкость" />
        <stat title-cut="Тел" title-full="Телосложение" />
        <stat title-cut="Вын" title-full="Выносливость" />
        <stat title-cut="Нар" title-full="Наружность" />
        <stat title-cut="Мощ" title-full="Мощь" />
        <stat title-cut="Инт" title-full="Интеллект" />
        <stat title-cut="Обр" title-full="Образование" />
      </form>
      <div class="buttons">
        <ui-button class="secondary">Распределить случайно</ui-button>
        <ui-button class="primary" disabled>Готово</ui-button>
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
  align-items: center;
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

.gray {
  color: #88847d;
}

.content-right {
  width: 670px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 100px;
}

.stats {
  display: flex;
  flex-wrap: wrap;
  row-gap: 35px;
  column-gap: 70px;
}

.buttons {
  display: flex;
  column-gap: 40px;
}
</style>
