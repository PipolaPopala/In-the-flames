<script setup>
definePageMeta({
  layout: "stats-layout",
});
useHead({
  title: "Создание персонажа",
});
const statsStage = useStatsStageStore();
</script>

<template>
  <p v-if="statsStage.stage === null">ещё даже не начало, куда торопишься?</p>
  <view-characteristic v-if="statsStage.stage === 'characteristic'" />
  <view-health v-if="statsStage.stage === 'health'" />
  <view-luck v-if="statsStage.stage === 'luck'" />
</template>

<style lang="scss" scoped></style>
