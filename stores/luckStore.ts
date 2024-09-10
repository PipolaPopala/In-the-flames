import { defineStore } from "pinia";
import { ref } from "vue";

export const useLuckStore = defineStore(
  "luck",
  () => {
    const luck = ref<null | number>(null);

    const setLuck = (newluck: number) => {
      luck.value = newluck;
    };

    const changeLuck = (arg: number) => {
      luck.value = Number(luck.value) + arg;
    };

    const resetLuck = () => {
      luck.value = null;
    };

    return {
      luck,
      setLuck,
      changeLuck,
      resetLuck,
    };
  }
  // {
  //   persist: true,
  // }
);
