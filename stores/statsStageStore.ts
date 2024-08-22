import { defineStore } from "pinia";
import { ref } from "vue";

export const useStatsStageStore = defineStore("statsStage", () => {
  const stage = ref("characteristic"); // start state === 'none'

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
    setStageToCharacteristic,
    setStageToHealth,
    setStageToLuck,
    setStageToSkills,
  };
});
