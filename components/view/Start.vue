<script setup>
const modalStore = useModalStore();
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
    <ui-button class="primary" @click="modalStore.toggleModal">
      Начать приключение
    </ui-button>
    <ui-modal>
      <modal-content-start-settings />
    </ui-modal>
  </section>
</template>

<style lang="scss" scoped>
.section {
  max-width: 1100px;
  padding-top: 3%;
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
