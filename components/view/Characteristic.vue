<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const characteristicStore = useCharacteristicStore();
const statsStageStore = useStatsStageStore();

const characteristics = reactive({
  strength: null,
  dexterity: null,
  constitution: null,
  endurance: null,
  appearance: null,
  power: null,
  intelligence: null,
  education: null,
});

// Вычисляемое свойство для проверки, завершены ли все характеристики
const isDone = computed(() => {
  return Object.values(characteristics).every((val) => val !== null);
});

// Метод для обновления характеристик
const updateCharacteristics = (newValues) => {
  const keys = Object.keys(characteristics);
  keys.forEach((key, index) => {
    characteristics[key] = newValues[index];
  });
};

// Обработка клика по кнопке "Готово"
const goNext = () => {
  characteristicStore.setCharacteristics(characteristics);
  // router.push({ path: "/adventure" }); // в финальной версии вернуть это на место
  setTimeout(() => {
    // statsStageStore.setStageNull();
    statsStageStore.setStageToHealth();
  }, 1000);
};

// Обработка события случайного распределения
const triggerRandomDistribution = ref(false);
const distributeRandomly = () => {
  triggerRandomDistribution.value = !triggerRandomDistribution.value; // переключатель для триггера
};
</script>

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
      <characteristic-select
        @update:characteristics="updateCharacteristics"
        :trigger-random-distribution="triggerRandomDistribution"
      />
      <div class="buttons">
        <ui-button class="secondary" @click="distributeRandomly">
          Распределить случайно
        </ui-button>
        <ui-button class="primary" @click="goNext" :disabled="!isDone">
          Готово
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

.gray {
  color: $font-color-primary;
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
