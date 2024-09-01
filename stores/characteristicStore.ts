import { defineStore } from "pinia";
import { reactive } from "vue";

// Определение типов для характеристик
interface ICharacteristics {
  strength: number | null;
  dexterity: number | null;
  constitution: number | null;
  endurance: number | null;
  appearance: number | null;
  power: number | null;
  intelligence: number | null;
  education: number | null;
}

export const useCharacteristicStore = defineStore(
  "characteristic",
  () => {
    // Инициализация хранилища характеристик с типизацией
    const characteristic = reactive<ICharacteristics>({
      strength: null,
      dexterity: null,
      constitution: null,
      endurance: null,
      appearance: null,
      power: null,
      intelligence: null,
      education: null,
    });

    // Метод для установки характеристик с типизацией параметра
    const setCharacteristics = (
      newCharacteristics: Partial<ICharacteristics>
    ) => {
      Object.assign(characteristic, newCharacteristics);
    };

    // Метод для сброса характеристик
    const resetCharacteristics = () => {
      setCharacteristics({
        strength: null,
        dexterity: null,
        constitution: null,
        endurance: null,
        appearance: null,
        power: null,
        intelligence: null,
        education: null,
      });
    };

    return {
      characteristic,
      setCharacteristics,
      resetCharacteristics,
    };
  },
  {
    persist: true,
  }
);
