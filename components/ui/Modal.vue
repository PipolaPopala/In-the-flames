<script setup>
const modalStore = useModalStore();
</script>

<template>
  <teleport to="body">
    <div
      v-if="modalStore.showModal"
      class="modal-overlay"
      @click="modalStore.toggleModal"
    >
      <div class="modal" :class="{ active: modalStore.showModal }" @click.stop>
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  min-width: 500px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
}

.modal.active {
  // в теории для будущей анимации появления модалки здесь нужно крутиться со стилями
}
</style>
