import { defineStore } from "pinia";
import { ref } from "vue";

export const useScrollStore = defineStore(
  "scroll",
  () => {
    const someState = ref(false);
    console.log(someState);
    return { someState };
  },
  // {
  //   persist: true,
  // },
);
