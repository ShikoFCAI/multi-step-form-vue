import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('stepper', () => {
  const currentStep = ref(1);
  const steps = ref([
    {
      number: 1,
      name: "Your info"
    },
    {
      number: 2,
      name: "Select plan"
    },
    {
      number: 3,
      name: "Add-ons"
    },
    {
      number: 4,
      name: "Summary"
    },
  ])

  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { currentStep, steps, doubleCount, increment }
})
