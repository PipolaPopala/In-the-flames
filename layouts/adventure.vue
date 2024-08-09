<script setup></script>

<template>
  <header>
    <p>header adventure</p>
    <div>
      <a href="/">Home</a>
    </div>
  </header>

  <main class="main">
    <slot />
  </main>
</template>

<style lang="scss" scoped>
.main {
  max-width: 100%;
  margin: 0 auto;
  color: #88847d;
}
</style>
