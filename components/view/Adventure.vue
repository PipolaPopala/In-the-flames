<script setup>
import { computed } from "vue";
const stepStore = useStepStore();

const props = defineProps({
  stepData: Object,
});

const texts = computed(() => props.stepData?.texts);
const options = computed(() => props.stepData?.options);
</script>

<template>
  <div class="wrapper">
    <div class="content-left">
      <div class="texts">
        <p v-for="(text, index) in texts" :key="index">
          {{ text }}
        </p>
      </div>
      <div class="buttons">
        <ui-button
          v-for="(option, index) in options"
          :key="index"
          class="primary"
          @click="stepStore.handleOptionClick(option.nextStep)"
        >
          {{ option.text }}
        </ui-button>
      </div>
    </div>
    <div class="content-right">
      <icon-background />
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
  flex-wrap: wrap;
  gap: 20px;
}
</style>
