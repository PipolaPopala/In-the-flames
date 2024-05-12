<script setup>
import IconBackground from './icons/IconBackground.vue'
defineProps({
  stepData: Object
})
const emit = defineEmits(['optionClick'])
</script>

<template>
  <div class="wrapper">
    <div class="content-left">
      <div class="texts">
        <p v-for="(text, index) in stepData.texts" v-bind:key="{ index }" class="text">
          {{ text }}
        </p>
      </div>
      <div class="buttons">
        <button
          v-for="(option, index) in stepData.options"
          type="button"
          v-bind:key="index"
          v-on:click="emit('optionClick', option.nextStep)"
        >
          {{ option.text }}
        </button>
      </div>
    </div>
    <div class="content-right">
      <IconBackground />
    </div>
  </div>
</template>

<!-- <style scoped></style> -->
