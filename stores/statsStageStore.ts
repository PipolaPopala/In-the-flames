import { defineStore } from "pinia";
import { ref } from "vue";

export const useStatsStageStore = defineStore(
  "statsStage",
  () => {
    const stage = ref<null | string>("health"); // start state === null

    const setStageNull = () => {
      stage.value = null;
    };

    const setStageToCharacteristic = () => {
      stage.value = "characteristic";
    };

    const setStageToHealth = () => {
      stage.value = "health";
    };

    const setStageToLuck = () => {
      stage.value = "luck";
    };

    const setStageToSkills = () => {
      stage.value = "skills";
    };

    return {
      stage,
      setStageNull,
      setStageToCharacteristic,
      setStageToHealth,
      setStageToLuck,
      setStageToSkills,
    };
  },
  {
    persist: true,
  }
);
