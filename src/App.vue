<script setup>
import { ref, watch, computed } from 'vue'
import { stepsData } from './assets/stepsData'
import StartView from './components/StartView.vue'
import StepView from './components/StepView.vue'
import IconVolume from './components/icons/IconVolume.vue'
import IconPlayCircle from './components/icons/IconPlayCircle.vue'
import IconSexMale from './components/icons/IconSexMale.vue'

const step = ref(0) // нынешний шаг
const track = ref([0]) // массив предыдущих шагов, можно будет использовать для некоего "дневника истории"
const stepData = computed(() => stepsData[step.value])

watch(step, () => {
  track.value.push(step.value)
  console.log('Все предыдущие шаги: ', track.value)
  console.log('Нынешний шаг: ', step.value)
})

const handleOptionClick = (nextStep) => {
  step.value = nextStep
}
</script>

<template>
  <main class="main">
    <header class="header">
      <div v-if="step > 0" class="icons-wrapper">
        <IconVolume class="icon-header" />
        <IconPlayCircle class="icon-header" />
        <IconSexMale class="icon-header" />
      </div>
    </header>
    <section class="section">
      <StepView v-if="step > 0" v-bind:stepData="stepData" v-on:option-click="handleOptionClick" />
      <StartView
        v-else-if="step === 0"
        v-bind:stepData="stepData"
        v-on:option-click="handleOptionClick"
      />
    </section>
  </main>
  <button
    v-if="step > 0"
    type="button"
    class="buttons btn-play-again"
    v-on:click="handleOptionClick(0)"
  >
    Начать сначала
  </button>
</template>

<!-- <style scoped></style> -->
