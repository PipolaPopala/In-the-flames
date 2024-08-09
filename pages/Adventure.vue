<script setup>
import { useStepStore } from "../stores/stepStore";

definePageMeta({
  layout: "adventure",
});

useHead({
  title: "Приключение",
});

const stepStore = useStepStore();

const handleOptionClick = (nextStep) => {
  stepStore.step = nextStep;
};
</script>

<template>
  <div>
    <h1>Adventure begins</h1>
  </div>
</template>
