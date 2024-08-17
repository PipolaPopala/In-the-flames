import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCharacterStore = defineStore(
  "character",
  () => {
    const character = reactive({
      name: "",
      age: 0,
      gender: "",
      job: "",
    });

    return {
      character,
    };
  },
  {
    persist: true,
  }
);
