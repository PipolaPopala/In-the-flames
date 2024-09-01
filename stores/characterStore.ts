import { defineStore } from "pinia";
import { reactive } from "vue";

interface ICharacter {
  name: string | null;
  age: number | null;
  gender: string | null;
  job: string | null;
}

export const useCharacterStore = defineStore(
  "character",
  () => {
    const character = reactive<ICharacter>({
      name: null,
      age: null,
      gender: null,
      job: null,
    });

    const setName = (name: string) => {
      character.name = name;
    };

    const setAge = (age: number) => {
      character.age = age;
    };

    const setGender = (gender: string) => {
      character.gender = gender;
    };

    const setJob = (job: string) => {
      character.job = job;
    };

    const resetCharacter = () => {
      character.name = null;
      character.age = null;
      character.gender = null;
      character.job = null;
    };

    return {
      character,
      setName,
      setAge,
      setGender,
      setJob,
      resetCharacter,
    };
  },
  {
    persist: true,
  }
);
