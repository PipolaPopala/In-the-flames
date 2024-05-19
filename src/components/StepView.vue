<script setup>
// lang="ts"
import { computed } from 'vue'
import IconBackground from '../assets/icons/IconBackground.vue'
const props = defineProps({
  stepData: Object
})
const emit = defineEmits(['optionClick'])
const texts = computed(() => props.stepData.texts)
const options = computed(() => props.stepData.options)
</script>

<template>
  <div class="wrapper">
    <div class="content-left">
      <div class="texts">
        <p v-for="(text, index) in texts" v-bind:key="{ index }" class="text">
          {{ text }}
        </p>
      </div>
      <div class="buttons">
        <button
          v-for="(option, index) in options"
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

<style lang="scss" scoped></style>
