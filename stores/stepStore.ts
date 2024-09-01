// option api style:
// export const useStepStore = defineStore({
//   id: 'step',
//   state: () => ({
//     step: 0,
//     track: [0],
//   }),
//   actions: {
//     handleOptionClick(nextStep: number) {
//       this.step = nextStep;
//       this.track.push(nextStep);
//     },
//   },
//   persist: true,
// });

// composition api style:
import { defineStore } from "pinia";
import { ref } from "vue";

export const useStepStore = defineStore(
  "step",
  () => {
    const step = ref<number>(0);
    const track = ref<number[]>([0]);

    function handleOptionClick(nextStep: number) {
      step.value = nextStep;
      track.value.push(nextStep);
    }

    return {
      step,
      track,
      handleOptionClick,
    };
  },
  {
    persist: true,
  }
);
