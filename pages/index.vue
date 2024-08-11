<script setup>
definePageMeta({
  layout: "home-layout",
});
useHead({
  title: "Начало истории",
});

const stepStore = useStepStore();

const handleOptionClick = (nextStep) => {
  stepStore.step = nextStep;
};
</script>

<template>
  <section class="section">
    <h1 class="title">Наедине с пламенем</h1>

    <div class="texts">
      <p>
        Перед вами одиночное приключение для игры Call of Cthulhu. Это история
        ужасов, действие которой происходит в 1920-х годах, где вы являетесь
        главным героем, и ваш выбор определяет исход. Она также призвана
        постепенно и увлекательно ознакомить вас с основными правилами игры.
        Хотя в большинстве случаев в подобные приключения играют с друзьями, эта
        игра предназначена только для вас.
      </p>
      <p>
        Вам не нужно читать правила перед тем, как начать играть. Просто
        устройтесь в удобном кресле перед жарким камином. А затем читайте дальше
        и следуйте инструкциям.
      </p>
      <p>...Если подумать, не стоит садиться слишком близко к огню.</p>
    </div>

    <NuxtLink href="/adventure">
      <ui-button class="primary" @click="handleOptionClick(1)"
        >Начать приключение</ui-button
      >
    </NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
.section {
  max-width: 1100px;
  padding-top: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  row-gap: 100px;
}

.title {
  color: #b16a00;
}

.texts {
  font-size: 26px;
  line-height: 150%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}
</style>
