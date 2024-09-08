<script setup></script>

<template>
  <button type="button" class="button">
    <slot name="icon" />
    <slot />
  </button>
</template>

<style lang="scss" scoped>
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
  color: #000000;
  cursor: pointer;
  border-radius: 5px;
  column-gap: 20px;
}

.primary {
  padding: 15px 30px;
  background-color: #ff9900;
}

.secondary {
  padding: 15px 30px;
  color: #ff9900;
  border: 1px solid #ff9900;
}

.btn-play-again {
  font-size: 16px;
  padding: 10px 20px;
  position: absolute;
  bottom: 45px;
  right: 45px;
  background-color: transparent;
  color: #676767;
  border: 1px solid #676767;
}

.btn-play-again:hover {
  color: #ea2433;
  border: 1px solid #ea2433;
  box-shadow: 0px 0px 5px #ea2433;
}

[disabled] {
  background-color: rgba(170, 151, 123, 0.33);
}
</style>
