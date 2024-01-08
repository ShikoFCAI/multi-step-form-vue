<script setup>
import { useCounterStore } from "@/stores/stepper.js";
import { ref, watch } from "vue";

const store = useCounterStore();

const props = defineProps({
  number: Number,
  name: String,
});

const isSelected = ref(props.number == store.currentStep);

watch(
  () => store.currentStep,
  (newStep) => {
    isSelected.value = props.number == newStep; 
  }
)
</script>

<template>
  <div class="flex items-center gap-3">
    <button
      @click="store.currentStep = props.number"
      class="py-1 px-[0.7rem] text-white border border-white rounded-full"
      :class="{ step: isSelected }"
    >
      {{ number }}
    </button>
    <div class="flex flex-col gap-1 max-lg:hidden">
      <span class="text-theme-coolGrey text-xs">STEP {{ number }}</span>
      <span class="font-bold text-white">{{ name }}</span>
    </div>
  </div>
</template>

<style scoped>
button {
  @apply lg:hover:bg-theme-lightBlue lg:hover:text-theme-marineBlue transition-colors;
}
.step {
  @apply bg-theme-lightBlue text-theme-marineBlue;
}
</style>
