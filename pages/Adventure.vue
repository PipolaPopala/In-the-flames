<script setup>
import { stepsData } from "../public/files/stepsData.js";

definePageMeta({
  layout: "adventure-layout",
});
useHead({
  title: "Приключение",
});

const stepStore = useStepStore();

const stepData = computed(() => stepsData[stepStore.step]);

watch(stepStore, () => {
  console.log("Все предыдущие шаги: ", stepStore.track);
  console.log("Нынешний шаг: ", stepStore.step);
});
</script>

<template>
  <adventure-view :stepData="stepData" />
</template>
