<script setup></script>

<template>
  <button type="button" class="button">
    <slot name="icon" />
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/variables";

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  font-family: "Alegreya SC";
  font-size: 20px;
  font-weight: 400;
  line-height: 35.76px;
  transition: all 0.3s;
  color: $color-black;
  cursor: pointer;
  border-radius: 5px;
  column-gap: 20px;
}

.primary {
  padding: 15px 30px;
  background-color: $primary-color;
}

.secondary {
  padding: 15px 30px;
  color: $primary-color;
  border: 1px solid $primary-color;
}

.btn-play-again {
  font-size: 16px;
  padding: 10px 20px;
  position: absolute;
  bottom: 45px;
  right: 45px;
  background-color: transparent;
  color: $color-gray;
  border: 1px solid $color-gray;
}

.btn-play-again:hover {
  color: $error-color;
  border: 1px solid $error-color;
  box-shadow: 0px 0px 5px $error-color;
}

[disabled] {
  background-color: $disabled-color;
}
</style>
