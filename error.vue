<script setup>
useHead({
  title: "Ошибка",
});
const error = useError();

const handleError = () => {
  clearError({
    redirect: "/",
  });
};
</script>

<template>
  <template v-if="error.statusCode === 404">
    <h1>404!</h1>
    <p>Sorry, that page doesn't exist.</p>
  </template>
  <template v-else>
    <h1>Dang</h1>
    <p>
      <strong>{{ error.message }}</strong>
      <br />
      <strong>{{ error.statusCode }}</strong>
    </p>
    <p>It looks like something broke.</p>
    <p>Sorry about that.</p>
  </template>
  <NuxtLink @click="handleError">
    <ui-button class="primary"> To Start page </ui-button>
  </NuxtLink>
</template>

<style lang="scss" scoped></style>
