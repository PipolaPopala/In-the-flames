<script setup>
const luckStore = useLuckStore();
</script>

<template>
  <div class="health-container">
    <div class="health-title">Удача</div>
    <div class="health-count">{{ luckStore.luck ? luckStore.luck : "?" }}</div>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.health-container {
  width: 456px;
  height: 200px;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #88847d;
  display: flex;
  align-items: center;
  column-gap: 40px;
}

.health-title {
  display: flex;
  font-size: 32px;
  line-height: 150%;
  text-transform: uppercase;
}

.health-count {
  font-size: 80px;
  line-height: 150%;
  padding-left: 40px;
  border-left: 1px solid $font-color-primary;
}
</style>
