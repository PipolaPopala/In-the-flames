<!-- <script lang="ts" setup>
import { watch, computed } from 'vue'
import { computedEager } from '@vueuse/core'
import { stepsData } from './assets/stepsData'

import { useStepStore } from './stores/stepStore'
import StartView from './components/StartView.vue'
import StepView from './components/StepView.vue'
import IconVolume from './assets/icons/IconVolume.vue'
import IconPlayCircle from './assets/icons/IconPlayCircle.vue'
import IconSexMale from './assets/icons/IconSexMale.vue'

const stepStore = useStepStore()
const stepData = computed(() => stepsData[stepStore.step])
const isStart = computedEager(() => stepStore.step === 0)

watch(stepStore, () => {
  console.log('Все предыдущие шаги: ', stepStore.track)
  console.log('Нынешний шаг: ', stepStore.step)
})

const handleOptionClick = (nextStep: number) => {
  stepStore.handleOptionClick(nextStep)
}
</script>

<template>
  <main class="main">
    <section>
      <step-view v-if="!isStart" :stepData="stepData" @option-click="handleOptionClick" />
    </section>
  </main>
</template>

<style lang="scss" scoped>
</style> -->
