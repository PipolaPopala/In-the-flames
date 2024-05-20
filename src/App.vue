<script setup>
// lang="ts"
import { ref, watch, computed } from 'vue'
import { computedEager } from '@vueuse/core'
import { stepsData } from './assets/stepsData'

import { useStepStore } from './stores/step'
import StartView from './components/StartView.vue'
import StepView from './components/StepView.vue'
import IconVolume from './assets/icons/IconVolume.vue'
import IconPlayCircle from './assets/icons/IconPlayCircle.vue'
import IconSexMale from './assets/icons/IconSexMale.vue'

const stepStore = useStepStore();
const stepData = computed(() => stepsData[stepStore.step])
const isStart = computedEager(() => stepStore.step === 0)

watch(stepStore, () => {
  console.log('Все предыдущие шаги: ', stepStore.track)
  console.log('Нынешний шаг: ', stepStore.step)
})

const handleOptionClick = (nextStep) => {
  stepStore.handleOptionClick(nextStep)
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
