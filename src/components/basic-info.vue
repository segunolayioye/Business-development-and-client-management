<template>
  <div class="flex h-screen bg-slate-900 text-white font-sans">
    <!-- Left Sidebar Navigation -->
    <aside class="w-64 bg-slate-950 p-6 border-r border-slate-800 hidden md:block">
      <div class="mb-8 font-bold text-lg tracking-wider text-emerald-400">PORTAL</div>
      <nav class="space-y-2">
        <a href="#" class="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 font-medium">
          <span>Onboarding</span>
        </a>
        <!-- Add other mock sidebar links here -->
      </nav>
    </aside>

    <!-- Main Content Area -->
    <main class="flex-1 overflow-y-auto bg-slate-50 text-slate-800 p-8">
      <div class="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-2xl font-bold text-slate-900">New Client Application</h1>
          <p class="text-slate-500 text-sm">Complete the stages below to onboard a new client.</p>
        </div>

        <!-- Progress Timeline Bar -->
        <div class="mb-10 relative flex items-center justify-between">
          <!-- Background Progress Line -->
          <div class="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 rounded-full z-0"></div>
          <!-- Active Progress Line Filler -->
          <div 
            class="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-emerald-500 rounded-full transition-all duration-300 z-0"
            :style="{ width: ((currentStep - 1) / (steps.length - 1)) * 100 + '%' }"
          ></div>

          <!-- Step Indicators -->
          <div 
            v-for="(step, index) in steps" 
            :key="index" 
            class="relative z-10 flex flex-col items-center group cursor-pointer"
            @click="goToStep(index + 1)"
          >
            <div 
              class="w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 border-2"
              :class="[
                currentStep > index + 1 ? 'bg-emerald-500 border-emerald-500 text-white' : 
                currentStep === index + 1 ? 'bg-white border-emerald-500 text-emerald-600 ring-4 ring-emerald-100' : 
                'bg-white border-slate-300 text-slate-400'
              ]"
            >
              <span v-if="currentStep > index + 1">✓</span>
              <span v-else>{{ index + 1 }}</span>
            </div>
            <span 
              class="absolute -bottom-6 text-xs font-medium whitespace-nowrap hidden sm:block"
              :class="currentStep >= index + 1 ? 'text-slate-800' : 'text-slate-400'"
            >
              {{ step.name }}
            </span>
          </div>
        </div>

        <!-- Dynamic Step Components -->
        <div class="mt-12 min-h-[300px]">
          <keep-alive>
            <component :is="currentStepComponent" v-model="formData" />
          </keep-alive>
        </div>

        <!-- Action Footer Buttons -->
        <div class="mt-8 pt-6 border-t border-slate-100 flex justify-between items-center">
          <button 
            @click="prevStep" 
            :disabled="currentStep === 1"
            class="px-5 py-2 rounded-lg text-sm font-semibold border border-slate-300 text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent transition-all"
          >
            Back
          </button>
          
          <button 
            @click="nextStep"
            class="px-6 py-2 rounded-lg text-sm font-semibold text-white transition-all shadow-sm"
            :class="currentStep === steps.length ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-500 hover:bg-emerald-600'"
          >
            {{ currentStep === steps.length ? 'Submit Application' : 'Next Stage' }}
          </button>
        </div>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import StepGeneralInfo from './StepGeneralInfo.vue'
import StepInvestment from './StepInvestment.vue'
import StepPreferences from './StepPreferences.vue'
import StepReview from './StepReview.vue'

const currentStep = ref(1)
const steps = [
  { name: 'General Info', component: StepGeneralInfo },
  { name: 'Investment Profile', component: StepInvestment },
  { name: 'Preferences', component: StepPreferences },
  { name: 'Review & Submit', component: StepReview }
]

// Single source of truth for global form state
const formData = ref({
  clientName: '',
  email: '',
  investmentProfile: 'growth',
  riskTolerance: 'medium',
  notifications: true
})

const currentStepComponent = computed(() => {
  return steps[currentStep.value - 1].component
})

const nextStep = () => {
  if (currentStep.value < steps.length) {
    currentStep.value++
  } else {
    alert('Form Submitted successfully!')
    console.log(formData.value)
  }
}

const prevStep = () => {
  if (currentStep.value > 1) {
    currentStep.value--
  }
}

const goToStep = (stepNumber) => {
  // Optional validation guard before leaping steps
  if(stepNumber < currentStep.value || formData.value.clientName) {
    currentStep.value = stepNumber
  }
}
</script>
