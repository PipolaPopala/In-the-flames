<!-- <script setup>
import { computed } from 'vue'
import IconBackground from '../assets/icons/IconBackground.vue'
const props = defineProps({
  stepData: Object
})
const emit = defineEmits(['optionClick'])
const texts = computed(() => props.stepData?.texts)
const options = computed(() => props.stepData?.options)
</script> -->

<template>
  <!-- <div class="wrapper">
    <div class="content-left">
      <div class="texts">
        <p v-for="(text, index) in texts" :key="index">
          {{ text }}
        </p>
      </div>
      <div class="buttons">
        <button
          v-for="(option, index) in options"
          type="button"
          :key="index"
          @click="emit('optionClick', option.nextStep)"
        >
          {{ option.text }}
        </button>
      </div>
    </div>
    <div class="content-right">
      <icon-background />
    </div>
  </div> -->
  <div>adventureView</div>
</template>

<!-- <style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  column-gap: 5%;
}

.content-left {
  width: 710px;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  /* background-color: rgba(36, 65, 55, 0.5); */
}

.content-right {
  width: 710px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
  /* background-color: rgba(36, 65, 55, 0.5); */
}

.texts {
  display: flex;
  flex-direction: column;
  row-gap: 12px;
}

.buttons {
  display: flex;
  /* flex-direction: column;
  align-items: center; */
  flex-wrap: wrap;
  gap: 20px;
}
</style> -->
