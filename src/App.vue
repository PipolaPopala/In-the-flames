<script setup>
// lang="ts"
import { ref, watch, computed } from 'vue'
import { computedEager } from '@vueuse/core'
import { stepsData } from './assets/stepsData'

import StartView from './components/StartView.vue'
import StepView from './components/StepView.vue'
import IconVolume from './assets/icons/IconVolume.vue'
import IconPlayCircle from './assets/icons/IconPlayCircle.vue'
import IconSexMale from './assets/icons/IconSexMale.vue'

const step = ref(0) // нынешний шаг
const track = ref([0]) // массив предыдущих шагов
const stepData = computed(() => stepsData[step.value])
const isStart = computedEager(() => step.value === 0)

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
      <div v-show="!isStart" class="icons-wrapper">
        <IconVolume class="icon-header" />
        <IconPlayCircle class="icon-header" />
        <IconSexMale class="icon-header" />
      </div>
    </header>
    <section class="section">
      <StepView v-if="!isStart" v-bind:stepData="stepData" v-on:option-click="handleOptionClick" />
      <StartView
        v-else-if="isStart"
        v-bind:stepData="stepData"
        v-on:option-click="handleOptionClick"
      />
    </section>
  </main>
  <button
    v-show="!isStart"
    type="button"
    class="buttons btn-play-again"
    v-on:click="handleOptionClick(0)"
  >
    Начать сначала
  </button>
</template>

<style lang="scss" scoped></style>
