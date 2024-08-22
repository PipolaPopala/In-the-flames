<script setup></script>

<template>
  <main>
    <slot />
  </main>

  <NuxtLink href="/">
    <ui-button class="primary btn-play-again">Начать сначала</ui-button>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
