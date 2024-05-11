<script setup>
import { ref, reactive, watch } from 'vue'
import { stepsData } from './assets/stepsData'
import StartView from './components/StartView.vue'
import IconVolume from './components/icons/IconVolume.vue'
import IconPlayCircle from './components/icons/IconPlayCircle.vue'
import IconSexMale from './components/icons/IconSexMale.vue'
import IconBackground from './components/icons/IconBackground.vue'

const step = ref(0) // нынешний шаг
// const track = ref([]) // массив предыдущих шагов, можно будет использовать для некоего "дневника истории"
const stepData = reactive(stepsData[step.value])

watch(step, () => {
  // track = [...track, step.value]
  // console.log('Все предыдущие шаги: ', track)
  console.log('Нынешний шаг: ', step.value)
})

const handleOptionClick = (nextStep) => {
  step.value = nextStep
}
</script>

<template>
  <main class="main">
    <header сlass="header">
      <div v-if="step > 0" class="icons-wrapper">
        <IconVolume class="icon-header" />
        <IconPlayCircle class="icon-header" />
        <IconSexMale class="icon-header" />
      </div>
    </header>
    <section class="section">
      <!-- <StepView
        v-if="step > 0"
        stepsData="{stepsData[step]}"
        handleOptionClick="{handleOptionClick}"
      /> -->
      <StartView v-if="step === 0" :stepData="stepData" :handleOptionClick="handleOptionClick" />
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
