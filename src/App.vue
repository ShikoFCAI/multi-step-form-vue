<script setup>
import { ref } from "vue";
import { useCounterStore } from '@/stores/stepper.js'

import SidebarDesktop from "./components/sidebar/desktop.vue";
import SidebarMobile from "./components/sidebar/mobile.vue";
import Stepper from "./components/stepper.vue";

import StepPersonal from "./components/step/personal.vue";

const store = useCounterStore();
</script>

<template>
  <div class="hidden lg:flex flex-col justify-center items-center h-screen">
    <div class="flex gap-16 p-4 bg-white rounded-lg shadow">
      <div class="relative">
        <SidebarDesktop class="max-lg:hidden" />
        <nav class="flex flex-col gap-4 absolute top-8 left-8">
          <div v-for="step in store.steps">
            <Stepper :name="step.name" :number="step.number" />
          </div>
        </nav>
      </div>
      <StepPersonal />
    </div>
  </div>
</template>
