<script setup>
definePageMeta({
  layout: "home-layout",
});
useHead({
  title: "Начало истории",
});

const stepStore = useStepStore();

onMounted(() => {
  stepStore.handleOptionClick(1);
});
</script>

<template>
  <view-start />
</template>

<style lang="scss" scoped></style>
