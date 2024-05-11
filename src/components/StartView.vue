<script setup>
const props = defineProps({
  stepData: Object,
  handleOptionClick: Function
})
</script>

<template>
  <div class="wrapper">
    <div class="content-start">
      <h1 class="title-start">Наедине с пламенем</h1>
      <div class="texts-start">
        <p v-for="(text, index) in stepData.texts" v-bind:key="index" class="text">{{ text }}</p>
      </div>
      <div class="buttons">
        <button
          v-for="(option, index) in stepData.options"
          type="button"
          v-bind:key="index"
          v-on:click="handleOptionClick(option.nextStep)"
        >
          {{ option.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
