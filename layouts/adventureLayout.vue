<script setup>
const stepStore = useStepStore();
</script>

<template>
  <header class="header">
    <div class="icons-wrapper">
      <p>шаг истории: {{ stepStore.step }}</p>
      <ui-button @click="console.log('click volume')">
        <icon-volume />
      </ui-button>
      <ui-button @click="console.log('click play-circle')">
        <icon-play-circle />
      </ui-button>
      <ui-button @click="console.log('click sex-male')">
        <icon-male />
      </ui-button>
    </div>
  </header>

  <main>
    <slot />
  </main>

  <NuxtLink href="/">
    <ui-button class="primary btn-play-again">Начать сначала</ui-button>
  </NuxtLink>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  // height: 150px;
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
