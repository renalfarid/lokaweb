<script setup>
  import {ref} from 'vue'

  const stepsItems = ref(["Registrasi", "Pilih Program", "Selesai"])
  const currentStep = ref('1')
</script>
<template>
    <div class="max-w-2xl mx-auto px-4 md:px-0">
      <ul aria-label="Steps" class="items-center text-gray-600 font-medium md:flex">
        <li v-for="(item, idx) in stepsItems" :key="idx" :aria-current="currentStep == idx + 1 ? 'step' : false" class="flex-1 last:flex-none flex gap-x-2 md:items-center">
          <div class="flex items-center flex-col gap-x-2">
            <div :class="{'w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center': true, 'bg-indigo-600 border-indigo-600': currentStep > idx + 1, 'border-indigo-600': currentStep == idx + 1}">
              <span :class="{'hidden': currentStep > idx + 1, 'text-indigo-600': currentStep == idx + 1}">
                {{ idx + 1 }}
              </span>
              <svg v-if="currentStep > idx + 1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-5 h-5 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <hr :class="{'h-12 border md:hidden': true, 'hidden': idx + 1 == stepsItems.length, 'border-indigo-600': currentStep > idx + 1}" />
          </div>
          <div class="h-8 flex items-center md:h-auto">
            <h3 :class="{'text-sm': true, 'text-indigo-600': currentStep == idx + 1}">
              {{ item }}
            </h3>
          </div>
          <hr :class="{'hidden mr-2 w-full border md:block': true, 'hidden': idx + 1 == stepsItems.length, 'border-indigo-600': currentStep > idx + 1}" />
        </li>
      </ul>
    </div>
  </template>