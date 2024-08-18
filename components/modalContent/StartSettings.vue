<script setup>
const characterStore = useCharacterStore();
const stepStore = useStepStore();

// const handleChoice = (gender) => {
//   characterStore.setGender(gender);
// };

const character = reactive({
  name: null,
  age: null,
  gender: null,
  job: null,
}); // с локальным состоянием работает, с состоянием из хранилища пока нет, почему-то туда передаётся undefined

const handleChoice = (gender) => {
  character.gender = gender;
};

// watch(characterStore, () => {
//   console.log("gender: ", characterStore.gender);
// });
watch(character, () => {
  console.log("gender: ", character.gender);
});
</script>

<template>
  <div class="modal-content-start">
    <p class="title">Выберите пол персонажа</p>
    <div class="options">
      <ui-button @click="handleChoice('мужской')">
        <icon-male-active v-if="character.gender === 'мужской'" />
        <icon-male-default v-else />
      </ui-button>
      <ui-button @click="handleChoice('женский')">
        <icon-female-active v-if="character.gender === 'женский'" />
        <icon-female-default v-else />
      </ui-button>

      <!-- <icon-male-default /> -->
      <!-- <icon-male-hover /> -->
      <!-- <icon-male-active /> -->

      <!-- возможно, надо в сами иконки записать логику наведения и активности -->

      <!-- <icon-female-default /> -->
      <!-- <icon-female-hover /> -->
      <!-- <icon-female-active /> -->
    </div>
    <NuxtLink href="/adventure">
      <ui-button
        class="primary"
        @click="stepStore.handleOptionClick(1)"
        disabled
      >
        Продолжить
      </ui-button>
    </NuxtLink>
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
