<script setup>
const router = useRouter();
const statsStageStore = useStatsStageStore();

const goNext = () => {
  // router.push({ path: "/adventure" }); // в финальной версии вернуть это на место
  setTimeout(() => {
    // statsStageStore.setStageNull();
    statsStageStore.setStageToLuck();
  }, 1000);
};
</script>

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
        <ui-button class="primary" @click="goNext"> Продолжить </ui-button>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

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
  color: $font-color-secondary;
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
