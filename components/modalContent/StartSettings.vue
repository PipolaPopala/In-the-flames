<script setup>
const characterStore = useCharacterStore();
const modalStore = useModalStore();
const stepStore = useStepStore();

const gender = computed(() => {
  return characterStore.character.gender;
});

const handleChoice = (gender) => {
  characterStore.setGender(gender);
};

const handleCloseModal = () => {
  setTimeout(() => {
    modalStore.toggleModal();
  }, 1000);
};
</script>

<template>
  <div class="modal-content-start">
    <p class="title">Выберите пол персонажа</p>
    <div class="options">
      <ui-button @click="handleChoice('мужской')">
        <icon-male-active v-if="gender === 'мужской'" />
        <icon-male-default v-else />
      </ui-button>
      <ui-button @click="handleChoice('женский')">
        <icon-female-active v-if="gender === 'женский'" />
        <icon-female-default v-else />
      </ui-button>
    </div>

    <NuxtLink href="/adventure">
      <ui-button class="primary" @click="handleCloseModal" :disabled="!gender">
        Продолжить
      </ui-button>
    </NuxtLink>

    <!-- <icon-male-default /> -->
    <!-- <icon-male-hover /> -->
    <!-- <icon-male-active /> -->

    <!-- возможно, надо в сами иконки записать логику наведения и активности -->

    <!-- <icon-female-default /> -->
    <!-- <icon-female-hover /> -->
    <!-- <icon-female-active /> -->
  </div>
</template>

<style lang="scss" scoped>
.modal-content-start {
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 90px;
}

.title {
  font-size: 80px;
  color: #b16a00;
}

.options {
  display: flex;
  column-gap: 20px;
}
</style>
