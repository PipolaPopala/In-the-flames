<script setup>
defineProps({
  titleCut: String,
  titleFull: String,
});
</script>

<template>
  <div class="stat-wrapper">
    <div>
      <p class="title-cut">{{ titleCut }}</p>
      <p class="title-full">{{ titleFull }}</p>
    </div>
    <ui-temporary-input />
  </div>
</template>

<style lang="scss" scoped>
.stat-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
}
.title-cut {
  font-size: 32px;
  line-height: 150%;
  color: #88847d;
  text-transform: uppercase;
}
.title-full {
  font-style: italic;
  font-size: 28px;
  color: #806c4a;
}
</style>
