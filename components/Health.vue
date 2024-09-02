<script setup>
const characteristics = useCharacteristicStore();
const health = useHealthStore();
</script>

<template>
  <div class="wrapper">
    <div class="stats-value"><span> Тел 50 </span> <span> Вын 80 </span></div>
    <div class="health-container"></div>
    <div class="stats-formula">(50+80) / 10 = 13</div>
  </div>
</template>

<style lang="scss" scoped>
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
  color: #88847d;
  opacity: 0.5;
}

.health-container {
  width: 456px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #88847d;
}

.stats-formula {
  align-self: center;
  font-style: italic;
  font-size: 28px;
  line-height: 100%;
  color: #88847d;
  opacity: 0.5;
}
</style>
