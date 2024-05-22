<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  stepData: Object
})
const emit = defineEmits(['optionClick'])
const texts = computed(() => props.stepData?.texts)
const options = computed(() => props.stepData?.options)
</script>

<template>
  <div class="wrapper">
    <div class="content-start">
      <h1 class="title-start">Наедине с пламенем</h1>
      <div class="texts-start">
        <p v-for="(text, index) in texts" v-bind:key="index">
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
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 5%;
}

.content-start {
  max-width: 1100px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  row-gap: 100px;
  /* background-color: rgba(36, 65, 55, 0.5); */
}

.title-start {
  color: #B16A00;
}

.texts-start {
  font-size: 26px;
  line-height: 150%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}

.buttons {
  display: flex;
  /* flex-direction: column;
  align-items: center; */
  flex-wrap: wrap;
  gap: 20px;
}
</style>
