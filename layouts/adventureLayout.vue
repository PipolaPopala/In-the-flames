<script setup>
const stepStore = useStepStore();

const handleOptionClick = (nextStep) => {
  stepStore.step = nextStep;
};
</script>

<template>
  <header class="header">
    <div class="icons-wrapper">
      <ui-button @click="console.log('click volume')">
        <icons-volume />
      </ui-button>
      <ui-button @click="console.log('click play-circle')">
        <icons-play-circle />
      </ui-button>
      <ui-button @click="console.log('click sex-male')">
        <icons-sex-male />
      </ui-button>
    </div>
  </header>

  <main class="main">
    <slot />
  </main>

  <NuxtLink href="/">
    <ui-button class="primary btn-play-again" @click="handleOptionClick(0)">
      Начать сначала
    </ui-button>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.main {
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  color: #88847d;
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
</style>
