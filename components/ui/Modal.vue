<script setup>
const modalStore = useModalStore();
</script>

<template>
  <teleport to="body">
    <div v-if="modalStore.showModal" class="modal-overlay">
      <div>
        <slot />
      </div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
