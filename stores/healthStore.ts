import { defineStore } from "pinia";
import { ref } from "vue";

export const useHealthStore = defineStore(
  "health",
  () => {
    const maxHealth = ref<null | number>(null);
    const health = ref<null | number>(null);

    const setMaxHealth = (newMaxHealth: number) => {
      maxHealth.value = newMaxHealth;
    };

    const setHealth = (newHealth: number) => {
      health.value = newHealth;
    };

    const resetHealth = () => {
      health.value = null;
    };

    return {
      health,
      maxHealth,
      setHealth,
      setMaxHealth,
      resetHealth,
    };
  }
  // {
  //   persist: true,
  // }
);
