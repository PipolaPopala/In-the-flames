<script setup></script>

<template>
  <div class="health-container">
    <div class="health-title">Удача</div>
    <div class="health-count">?</div>
  </div>
</template>

<style lang="scss" scoped>
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
  color: #88847d;
  text-transform: uppercase;
}

.health-count {
  font-size: 80px;
  line-height: 150%;
  padding-left: 40px;
  border-left: 1px solid #88847d;
}
</style>
