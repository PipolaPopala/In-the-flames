<script setup>
const characteristicStore = useCharacteristicStore();
const healthStore = useHealthStore();

const con = computed(() => {
  return characteristicStore.characteristic.constitution;
});
const end = computed(() => {
  return characteristicStore.characteristic.endurance;
});
const hea = computed(() => {
  return (con.value + end.value) / 10;
});

onMounted(() => {
  healthStore.setMaxHealth(hea.value);
  healthStore.setHealth(hea.value);
});
</script>

<template>
  <div class="wrapper">
    <div class="stats-value">
      <span> Тел {{ con }} </span>
      <span> Вын {{ end }} </span>
    </div>
    <div class="health-container">
      <div class="health-title">
        <span class="title">Пз</span>
        <span class="text">Пункты здоровья</span>
      </div>
      <div class="health-count">{{ hea }}</div>
    </div>
    <div class="stats-formula">({{ con }} + {{ end }}) / 10 = {{ hea }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}

.stats-value {
  display: flex;
  column-gap: 70px;
  font-size: 33px;
  line-height: 150%;
  opacity: 0.5;
}

.health-container {
  width: 456px;
  height: 200px;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.health-title {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 32px;
  line-height: 150%;
  text-transform: uppercase;
}

.text {
  font-style: italic;
  font-size: 28px;
  color: $font-color-secondary;
}

.health-count {
  font-size: 80px;
  line-height: 150%;
  padding-left: 40px;
  border-left: 1px solid $font-color-primary;
}

.stats-formula {
  align-self: center;
  font-style: italic;
  font-size: 28px;
  line-height: 100%;
  opacity: 0.5;
}
</style>
