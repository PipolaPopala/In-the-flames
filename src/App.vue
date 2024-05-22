<script lang="ts" setup>
import { watch, computed } from 'vue'
import { computedEager } from '@vueuse/core'
import { stepsData } from './assets/stepsData'

import { useStepStore } from './stores/stepStore'
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

const handleOptionClick = (nextStep: number) => {
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
    <section>
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

<style lang="scss" scoped>
.main {
  max-width: 100%;
  margin: 0 auto;
  color: #88847D;
}

.header {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 150px;
  padding-bottom: 5px;
  padding-right: 45px;
}

.icons-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
}

.icon-header {
  cursor: pointer;
}

.btn-play-again {
  position: absolute;
  bottom: 45px;
  right: 45px;
  background-color: transparent;
  color: #676767;
  border: 1px solid #676767;
}

.btn-play-again:hover {
  color: #ea2433;
  border: 1px solid #ea2433;
  box-shadow: 0px 0px 5px #ea2433;
}
</style>
