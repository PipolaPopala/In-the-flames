import { defineStore } from "pinia";
import { reactive } from "vue";

export const useCharacteristicStore = defineStore(
  "characteristic",
  () => {
    const characteristic = reactive<{
      strength: number | null;
      dexterity: number | null;
      constitution: number | null;
      endurance: number | null;
      appearance: number | null;
      power: number | null;
      intelligence: number | null;
      education: number | null;
    }>({
      strength: null,
      dexterity: null,
      constitution: null,
      endurance: null,
      appearance: null,
      power: null,
      intelligence: null,
      education: null,
    });

    const setCharacteristics = (newCharacteristics: {
      strength: number;
      dexterity: number;
      constitution: number;
      endurance: number;
      appearance: number;
      power: number;
      intelligence: number;
      education: number;
    }) => {
      characteristic.strength = newCharacteristics.strength;
      characteristic.dexterity = newCharacteristics.dexterity;
      characteristic.constitution = newCharacteristics.constitution;
      characteristic.endurance = newCharacteristics.endurance;
      characteristic.appearance = newCharacteristics.appearance;
      characteristic.power = newCharacteristics.power;
      characteristic.intelligence = newCharacteristics.intelligence;
      characteristic.education = newCharacteristics.education;
    };
    const resetCharacteristics = () => {
      characteristic.strength = null;
      characteristic.dexterity = null;
      characteristic.constitution = null;
      characteristic.endurance = null;
      characteristic.appearance = null;
      characteristic.power = null;
      characteristic.intelligence = null;
      characteristic.education = null;
    };

    return {
      setCharacteristics,
      resetCharacteristics,
    };
  },
  {
    persist: true,
  }
);
