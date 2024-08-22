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
  <p v-if="statsStage.stage === 'none'">ещё даже не начало, куда торопишься?</p>
  <view-characteristic v-if="statsStage.stage === 'characteristic'" />
</template>

<style lang="scss" scoped></style>
