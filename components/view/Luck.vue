<script setup>
const router = useRouter();
const statsStageStore = useStatsStageStore();
const luckStore = useLuckStore();

const goNext = () => {
  // router.push({ path: "/adventure" }); // в финальной версии вернуть это на место
  setTimeout(() => {
    // statsStageStore.setStageNull();
    // statsStageStore.setStageToLuck();
  }, 1000);
};

const calculateLuck = () => {
  luckStore.setLuck(
    Array.from({ length: 3 }, () => Math.floor(Math.random() * 6) + 1).reduce(
      (acc, num) => acc + num
    ) * 5
  );
};
</script>

<template>
  <section class="wrapper">
    <div class="content-left">
      <p class="title">Удача</p>
      <div class="texts">
        <p class="text">
          Ещё у вас есть значение Удачи. Бросьте три шестигранные кости (такой
          бросок обозначается Зd6) и умножьте результат на 5 - это ваша
          начальная Удача.
        </p>
      </div>
    </div>
    <div class="content-right">
      <luck />
      <div class="buttons">
        <ui-button
          class="primary"
          @click="calculateLuck"
          :disabled="luckStore.luck"
        >
          <template v-slot:icon>
            <icon-dice />
          </template>
          3d6 x 5
        </ui-button>
        <ui-button class="primary" @click="goNext" :disabled="!luckStore.luck">
          Продолжить
        </ui-button>
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
