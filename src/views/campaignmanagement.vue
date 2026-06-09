<template>
  <div class="flex h-screen overflow-hidden bg-[#F4F0F0]">

    <!-- Sidebar -->
    <aside class="bg-[#0F151F] text-white w-[253px] h-screen fixed top-0 left-0 p-6 z-20 flex-shrink-0">
      <div class="flex flex-col gap-[45px] mt-[95px]">
        <router-link to="/" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/dashboard.svg" class="w-[18px] h-[18px] mt-[4px]"/> Dashboard
        </router-link>
        <router-link to="/retail" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/retail.svg" class="w-[18px] h-[18px] mt-[4px]"/> Retail Clients
        </router-link>
        <router-link to="/investment-product" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/investment.svg" class="w-[18px] h-[18px] mt-[4px]"/> Investment Product
        </router-link>
        <router-link to="/campaigns" class="flex gap-[10px] text-white bg-[#1E2736] px-[10px] py-[8px] rounded-[8px]">
          <img src="../assets/campaign.svg" class="w-[18px] h-[18px] mt-[4px]"/> Campaigns
        </router-link>
        <router-link to="/investor" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/investor.svg" class="w-[18px] h-[18px] mt-[4px]"/> Investor Education
        </router-link>
        <router-link to="/help-center" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/help-center.svg" class="w-[18px] h-[18px] mt-[4px]"/> Help Center & Support
        </router-link>
        <router-link to="/notifications" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/notifications.svg" class="w-[18px] h-[18px] mt-[4px]"/> Notifications
        </router-link>
      </div>
    </aside>

    <!-- Main Area -->
    <div class="flex-1 flex flex-col ml-[253px] h-screen overflow-hidden">

      <!-- Navbar -->
      <nav class="h-[80px] w-full bg-white shadow-sm flex items-center justify-between px-[40px] flex-shrink-0">
        <div class="bg-[#F5F5F5] rounded-lg px-4 py-2 flex gap-2 w-[380px]">
          <img src="../assets/search-icon.svg" class="w-[16px] h-[16px]"/>
          <input type="text" placeholder="Search clients, accounts..." class="bg-transparent focus:outline-none w-full text-xs text-[#A5A5A8]"/>
        </div>
        <div class="flex items-center gap-[16px]">
          <div class="relative">
            <img src="../assets/notification.svg" class="w-[20px] h-[20px]"/>
           
          </div>
          <div class="flex items-center gap-[8px]">
            <img src="../assets/picture.svg" class="w-[32px] h-[32px] rounded-full"/>
            <span class="text-sm font-medium text-[#0F151F]">Jane Peters</span>
            <img src="../assets/down-arrow.svg" class="w-[10px] h-[10px]"/>
          </div>
        </div>
      </nav>

      <!-- Page Content -->
      <div class="flex-1 overflow-y-auto px-[32px] py-[20px]">

        <!-- Page Header -->
        <div class="flex items-center gap-[10px] mb-[20px]">
          <button @click="$router.back()">
            <img src="../assets/cancel.svg" alt="Cancel"></button>
          <div>
            <h1 class="font-semibold text-[28px] text-[#000000]">Campaign Management</h1>
            <p class="text-xs text-[#4B5054]">Plan, execute, and analyze marketing campaigns</p>
          </div>
        </div>

        <!-- Progress Steps -->
        <div class="bg-white rounded-[12px] p-[20px] mb-[20px]">
          <div class="flex items-center justify-between">
            <template v-for="(step, index) in steps" :key="index">

              <!-- Step -->
              <div
                class="w-[44px] h-[44px] rounded-full flex items-center justify-center"
                :class="currentStep > index + 1 ? 'bg-[#22C55E]' :
                        currentStep === index + 1 ? 'bg-[#22C55E]' :
                        'bg-[#D9D9D9]'"
              >
                <!-- Completed step: show checkmark. Current/future: show number -->
                <span class="text-white font-bold text-[16px]">
                  {{ currentStep > index + 1 ? '✓' : index + 1 }}
                </span>
              </div>

              <!-- Line -->
              <div
                v-if="index < steps.length - 1"
                class="flex-1 h-[2px] mx-[8px] mb-[18px]"
                :class="currentStep > index + 1 ? 'bg-[#22C55E]' : 'bg-[#4B5054]'"
              ></div>

            </template>
          </div>
        </div>

        <!-- Step Content -->
        <div class="bg-white rounded-[12px] p-[24px]">

          <!-- STEP 1 - Define Target Audience -->
          <div v-if="currentStep === 1">
            <h2 class="font-semibold text-[18px] text-black mb-[4px]">Define Your Target Audience</h2>
            <p class="text-xs text-[#4B5054] mb-[24px]">Select the investor segments you want to reach</p>

            <div class="mb-[16px]">
              <label class="text-xs font-medium text-[#4B5054] mb-[6px] block">Campaign Name <span class="text-[#E50303]">*</span></label>
              <input type="text" placeholder="e.g. Growth Equity Fund" class="w-full border border-[#E5E5E5] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
            </div>

            <div class="mb-[16px]">
              <label class="text-xs font-medium text-[#4B5054] mb-[6px] block">Campaign Description <span class="text-[#E50303]">*</span></label>
              <textarea
                placeholder="Provide a detailed description of the product"
                rows="4"
                class="w-full border border-[#E5E5E5] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E] resize-none"
              ></textarea>
              <p class="text-[10px] text-[#A9A9A9] mt-[4px]">0/500 characters</p>
            </div>

            <div class="mb-[24px]">
              <label class="text-xs font-medium text-[#4B5054] mb-[10px] block">Target Audience <span class="text-[#E50303]">*</span></label>
              <div class="grid grid-cols-3 gap-[12px]">
                <div v-for="audience in audiences" :key="audience"
                  class="flex items-center gap-[8px] cursor-pointer"
                  @click="selectedAudience = audience">
                  <div class="w-[16px] h-[16px] rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    :class="selectedAudience === audience ? 'border-[#22C55E]' : 'border-[#D9D9D9]'">
                    <div v-if="selectedAudience === audience" class="w-[8px] h-[8px] rounded-full bg-[#22C55E]"></div>
                  </div>
                  <span class="text-sm text-[#0F151F]">{{ audience }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- STEP 2 - Channel & Message -->
          <div v-if="currentStep === 2">
            <h2 class="font-semibold text-[18px] text-[#0F151F] mb-[4px]">Choose Channels & Craft Message</h2>
            <p class="text-xs text-[#A9A9A9] mb-[24px]">Select communication channels and define your message</p>

            <div class="mb-[20px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[10px] block">Marketing Channels <span class="text-red-500">*</span></label>
              <div class="grid grid-cols-3 gap-[12px]">
                <div v-for="channel in channels" :key="channel"
                  class="flex items-center gap-[8px] cursor-pointer"
                  @click="toggleChannel(channel)">
                  <div class="w-[16px] h-[16px] rounded border-2 flex items-center justify-center flex-shrink-0"
                    :class="selectedChannels.includes(channel) ? 'border-[#22C55E] bg-[#22C55E]' : 'border-[#D9D9D9]'">
                    <span v-if="selectedChannels.includes(channel)" class="text-white text-[10px]">✓</span>
                  </div>
                  <span class="text-sm text-[#0F151F]">{{ channel }}</span>
                </div>
              </div>
            </div>

            <div class="mb-[24px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Campaign Message <span class="text-red-500">*</span></label>
              <textarea
                placeholder="Provide a detailed description of the product"
                rows="5"
                class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E] resize-none"
              ></textarea>
              <p class="text-[10px] text-[#A9A9A9] mt-[4px]">0/500 characters</p>
            </div>
          </div>

          <!-- STEP 3 - Budget & Timeline -->
          <div v-if="currentStep === 3">
            <h2 class="font-semibold text-[18px] text-[#0F151F] mb-[4px]">Set Budget & Timeline</h2>
            <p class="text-xs text-[#A9A9A9] mb-[24px]">Define campaign budget and duration</p>

            <div class="mb-[16px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Campaign Budget (₦) <span class="text-red-500">*</span></label>
              <input type="number" placeholder="₦ 0" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
            </div>

            <div class="flex gap-[16px] mb-[24px]">
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Start Date <span class="text-red-500">*</span></label>
                <input type="date" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
              </div>
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">End Date <span class="text-red-500">*</span></label>
                <input type="date" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
              </div>
            </div>
          </div>

          <!-- STEP 4 - Metrics & Goals -->
          <div v-if="currentStep === 4">
            <h2 class="font-semibold text-[18px] text-[#0F151F] mb-[4px]">Define Success Metrics</h2>
            <p class="text-xs text-[#A9A9A9] mb-[24px]">Set measurable goals for your campaign</p>

            <div class="mb-[16px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Target Leads <span class="text-red-500">*</span></label>
              <input type="text" placeholder="e.g. 500" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
            </div>

            <div class="mb-[16px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Target Conversions <span class="text-red-500">*</span></label>
              <input type="text" placeholder="e.g. 100" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
            </div>

            <div class="mb-[24px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Target Revenue (₦) <span class="text-red-500">*</span></label>
              <input type="text" placeholder="₦ 0" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex justify-between items-center mt-[16px]">
            <button
              @click="prevStep"
              class="flex items-center gap-[6px] border border-[#E5E7EB] text-[#4B5054] px-[16px] py-[8px] rounded-[8px] text-sm"
            >
              ← Cancel
            </button>
            <div class="flex items-center gap-[12px]">
              <span class="text-xs text-[#A9A9A9]">Step {{ currentStep }} of 4</span>
              <button
                @click="nextStep"
                class="flex items-center gap-[6px] bg-[#22C55E] text-white px-[20px] py-[8px] rounded-[8px] text-sm font-medium"
              >
                {{ currentStep === 4 ? '✓ Create Campaign' : 'Next Step →' }}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
    <Transition name="modal">
  <div
    v-if="showCampaignModal"
    class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30"
    @click.self="showCampaignModal = false"
  >
    <div class="bg-white rounded-2xl p-10 w-[420px] flex flex-col items-center gap-4 shadow-xl">

      <!-- Green check circle -->
      <div class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
        <span class="text-green-500 text-4xl font-bold">✓</span>
      </div>

      <h2 class="text-xl font-bold text-gray-900 mt-2">Campaign Created!</h2>
      <p class="text-sm text-gray-500 text-center">
        Your campaign has been successfully created and is now active.
      </p>

      <button
        @click="$router.push('/campaigns')"
        class="w-full bg-[#22C55E] text-white py-3 rounded-xl font-semibold text-sm mt-2 hover:bg-[#16a34a] transition-colors"
      >
        Back to Campaigns
      </button>

    </div>
  </div>
</Transition>
  </div>
</template>

<script setup>
const showCampaignModal = ref(false)
import { ref } from 'vue'

const currentStep = ref(1)

const steps = [
  { label: 'Target Audience' },
  { label: 'Channel & Message' },
  { label: 'Budget & Timeline' },
  { label: 'Metrics & Goals' },
]

const audiences = ['Retail', 'HNW', 'Institutional', 'SMEs', 'Cooperatives']
const channels = ['Email', 'SMS', 'Social Media', 'App Push', 'Webinar']

const selectedAudience = ref('')
const selectedChannels = ref([])

function toggleChannel(channel) {
  if (selectedChannels.value.includes(channel)) {
    selectedChannels.value = selectedChannels.value.filter(c => c !== channel)
  } else {
    selectedChannels.value.push(channel)
  }
}

function nextStep() {
  if (currentStep.value < 4) {
    currentStep.value++
  } else {
    showCampaignModal.value = true
  }
}

function prevStep() {
  if (currentStep.value > 1) currentStep.value--
}


</script>