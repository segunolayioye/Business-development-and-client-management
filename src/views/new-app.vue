<template>
  <div class="flex h-screen overflow-hidden bg-[#F4F0F0]">

    <!-- Sidebar -->
    <aside class="bg-[#0F151F] text-white w-[253px] h-screen fixed top-0 left-0 p-6 z-20 flex-shrink-0">
      <div class="flex flex-col gap-[45px] mt-[65px]">
        <router-link to="/" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/dashboard.svg" class="w-[18px] h-[18px] mt-[4px]"/> Dashboard
        </router-link>
        <router-link to="/retail" class="flex gap-[10px] text-white bg-[#1E2736] px-[10px] py-[8px] rounded-[8px]">
          <img src="../assets/retail.svg" class="w-[18px] h-[18px] mt-[4px]"/> Retail Clients
        </router-link>
        <router-link to="/investment-product" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/investment.svg" class="w-[18px] h-[18px] mt-[4px]"/> Investment Product
        </router-link>
        <router-link to="/campaigns" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
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
      <nav class="h-[95px] w-full bg-white shadow-md flex items-center justify-between px-[40px] flex-shrink-0">
        <div class="font-semibold text-black text-[15px]"> <span class="text-[#4B5054]">Console>New </span> Client Onboarding</div>
        <div class="bg-[#F5F5F5] rounded-lg px-5 py-3 flex items-center gap-2 w-[270px]">
          <img src="../assets/search-icon.svg" class="w-[18px] h-[18px]" alt="search icon">
          <input
            type="text"
            placeholder="Search clients, accounts..."
            class="bg-transparent focus:outline-none w-full text-sm text-[#A5A5A8]"
          />
        </div>
        <div class="flex items-center gap-[10px]">
          <img src="../assets/notification.svg" class="w-[22px] h-[24px]" alt="notification icon">
          <img src="../assets/picture.svg" class="w-[42px] h-[42px] rounded-full" alt="user avatar">
          <span class="text-sm font-medium text-gray-800">Jane Peters</span>
          <img src="../assets/down-arrow.svg" class="w-[10px] h-[10px]" alt="dropdown">
        </div>
       
        
       
      </nav>
      <!-- Page Content -->
      <div class="flex-1 overflow-y-auto px-[40px] py-[24px]">
       
        <!-- Page Header -->
        <div class="flex justify-between items-center mb-[24px]">
           
           
          <div class>
            <h1 class="font-bold text-[24px] text-[#0F151F]">New Client Application</h1>
            <p class="text-xs text-[#A9A9A9]">Complete the steps below to onboard a new retail client.</p>
          </div>
          <div class="flex gap-[10px]">
            <button class="border border-[#E5E7EB] text-[#4B5054] px-[16px] py-[8px] rounded-[8px] text-sm">Save Draft</button>
            <button
              @click="$router.back()"
             class="border border-[#E5E7EB] text-[#4B5054] px-[16px] py-[8px] rounded-[8px] text-sm">Cancel</button>
          </div>
        </div>

        <!-- Progress Bar -->
        <div class="bg-white rounded-[12px] p-[20px] mb-[24px]">
          <div class="flex items-center">

            <template v-for="(step, index) in steps" :key="index">
              <!-- Step -->
              <div class="flex flex-col items-center">
                <div
                  class="w-[28px] h-[28px] rounded-full flex items-center justify-center text-xs font-bold"
                  :class="currentStep > index + 1 ? 'bg-[#22C55E] text-white' :
                          currentStep === index + 1 ? 'bg-[#22C55E] text-white' :
                          'bg-[#E5E7EB] text-[#A9A9A9]'"
                >
                  {{ currentStep > index + 1 ? '✓' : index + 1 }}
                </div>
                <span class="text-[10px] mt-[4px]"
                  :class="currentStep === index + 1 ? 'text-[#22C55E] font-semibold' : 'text-[#A9A9A9]'">
                  {{ step.label }}
                </span>
              </div>
              <!-- Line between steps -->
              <div v-if="index < steps.length - 1" class="flex-1 h-[3px] mx-[4px] mb-[16px]"
                :class="currentStep > index + 1 ? 'bg-[#22C55E]' : 'bg-[#E5E7EB]'">
              </div>
            </template>

          </div>
        </div>

        <!-- Step Content -->
        <div class="bg-white rounded-[12px] p-[24px]">

          <!-- STEP 1 - Basic Info & KYC -->
          <div v-if="currentStep === 1">
            <h2 class="font-semibold text-[16px] text-[#0F151F] mb-[4px]">Basic Information & KYC</h2>
            <p class="text-xs text-[#A9A9A9] mb-[24px]">Please provide client details and upload KYC documents</p>

            <div class="flex gap-[16px] mb-[16px]">
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Full Name <span class="text-red-500">*</span></label>
                <input v-model="clientName" type="text" placeholder="Enter Full Name" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
              </div>
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Email Address <span class="text-red-500">*</span></label>
                <input v-model="clientEmail" type="email" placeholder="email@example.com" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
              </div>
            </div>

            <div class="flex gap-[16px] mb-[16px]">
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Phone Number <span class="text-red-500">*</span></label>
                <input type="text" placeholder="+123 456 789 0" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
              </div>
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">BVN (Bank Verification Number) <span class="text-red-500">*</span></label>
                <input v-model="clientBvn" type="text" placeholder="Enter 11-digit BVN" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
              </div>
            </div>

            <div class="flex gap-[16px] mb-[16px]">
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">ID Type <span class="text-red-500">*</span></label>
                <select class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none bg-white">
                  <option>National ID</option>
                  <option>Passport</option>
                  <option>Driver's License</option>
                </select>
              </div>
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">ID Number <span class="text-red-500">*</span></label>
                <input type="text" placeholder="Enter ID number" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
              </div>
            </div>

            <!-- Upload ID -->
            <div class="mb-[16px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Upload ID Document <span class="text-red-500">*</span></label>
              <div class="border-2 border-dashed border-[#E5E7EB] rounded-[8px] p-[32px] flex flex-col items-center justify-center gap-[8px] cursor-pointer hover:bg-[#F9F9F9]">
                <span class="text-2xl">↑</span>
                <p class="text-sm text-[#4B5054]">Click to upload or drag and drop</p>
                <p class="text-xs text-[#A9A9A9]">PNG, JPG or PDF (max. 5MB)</p>
              </div>
            </div>

            <!-- Selfie -->
            <div class="mb-[24px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Selfie Verification <span class="text-red-500">*</span></label>
              <div class="border-2 border-dashed border-[#E5E7EB] rounded-[8px] p-[32px] flex flex-col items-center justify-center gap-[8px] cursor-pointer hover:bg-[#F9F9F9]">
                <span class="text-2xl">📷</span>
                <p class="text-sm text-[#4B5054]">Take a selfie or upload photo</p>
                <p class="text-xs text-[#A9A9A9]">Clear face photo for verification</p>
              </div>
            </div>
          </div>

          <!-- STEP 2 - Investment Profiling -->
          <div v-if="currentStep === 2">
            <h2 class="font-semibold text-[16px] text-[#0F151F] mb-[4px]">Investment Profiling</h2>
            <p class="text-xs text-[#A9A9A9] mb-[24px]">Help us understand the client's investment preferences</p>

            <!-- Investment Goals -->
            <div class="mb-[20px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[10px] block">Investment Goals <span class="text-red-500">*</span></label>
              <div class="grid grid-cols-2 gap-[10px]">
                <div v-for="goal in ['Wealth Growth', 'Wealth Growth', 'Wealth Growth', 'Wealth Growth']" :key="goal"
                  class="flex items-center gap-[10px] border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] cursor-pointer"
                  :class="selectedGoal === goal ? 'border-[#22C55E] bg-[#F0FDF4]' : ''"
                  @click="selectedGoal = goal">
                  <div class="w-[16px] h-[16px] rounded-full border-2 flex items-center justify-center flex-shrink-0"
                    :class="selectedGoal === goal ? 'border-[#22C55E]' : 'border-[#D9D9D9]'">
                    <div v-if="selectedGoal === goal" class="w-[8px] h-[8px] rounded-full bg-[#22C55E]"></div>
                  </div>
                  <span class="text-sm text-[#0F151F]">{{ goal }}</span>
                </div>
              </div>
            </div>

            <!-- Risk Tolerance -->
            <div class="mb-[20px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[10px] block">Investment Goals <span class="text-red-500">*</span></label>
              <div class="flex flex-col gap-[10px]">
                <div v-for="risk in risks" :key="risk.label"
                  class="flex items-start gap-[10px] border border-[#E5E7EB] rounded-[8px] px-[14px] py-[12px] cursor-pointer"
                  :class="selectedRisk === risk.label ? 'border-[#22C55E] bg-[#F0FDF4]' : ''"
                  @click="selectedRisk = risk.label">
                  <div class="w-[16px] h-[16px] rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-[2px]"
                    :class="selectedRisk === risk.label ? 'border-[#22C55E]' : 'border-[#D9D9D9]'">
                    <div v-if="selectedRisk === risk.label" class="w-[8px] h-[8px] rounded-full bg-[#22C55E]"></div>
                  </div>
                  <div>
                    <p class="text-sm font-medium text-[#0F151F]">{{ risk.label }}</p>
                    <p class="text-xs text-[#A9A9A9]">{{ risk.desc }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Income + Experience -->
            <div class="flex gap-[16px]">
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Annual Income Level <span class="text-red-500">*</span></label>
                <select class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none bg-white">
                  <option>Select Income Range</option>
                  <option>Below ₦500k</option>
                  <option>₦500k - ₦2M</option>
                  <option>Above ₦2M</option>
                </select>
              </div>
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Investment Experience <span class="text-red-500">*</span></label>
                <select class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none bg-white">
                  <option>Select experience level</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Expert</option>
                </select>
              </div>
            </div>
          </div>

          <!-- STEP 3 - Product Suitability -->
          <div v-if="currentStep === 3">
            <h2 class="font-semibold text-[16px] text-[#0F151F] mb-[4px]">Product Interest & Suitability</h2>
            <p class="text-xs text-[#A9A9A9] mb-[24px]">Select products that match the client's profile</p>

            <!-- Shariah Toggle -->
            <div class="flex items-center justify-between border border-[#22C55E] bg-[#F0FDF4] rounded-[8px] px-[16px] py-[12px] mb-[20px]">
              <div class="flex items-center gap-[10px]">
                <span class="text-[#22C55E]">🛡️</span>
                <div>
                  <p class="text-sm font-semibold text-[#0F151F]">Shari'ah Compliant Products</p>
                  <p class="text-xs text-[#A9A9A9]">Only show ethical investment options</p>
                </div>
              </div>
              <div class="w-[40px] h-[22px] bg-[#22C55E] rounded-full relative cursor-pointer">
                <div class="w-[18px] h-[18px] bg-white rounded-full absolute top-[2px] right-[2px]"></div>
              </div>
            </div>

            <!-- Products -->
            <p class="text-xs font-medium text-[#A9A9A9] mb-[10px]">Recommended Products</p>
            <div class="flex flex-col gap-[10px]">
              <div v-for="(product, index) in products" :key="index"
                class="flex items-center justify-between border rounded-[8px] px-[16px] py-[12px] cursor-pointer"
                :class="index === 0 ? 'border-[#22C55E] bg-[#F0FDF4]' : 'border-[#E5E7EB]'">
                <div class="flex items-center gap-[10px]">
                  <span class="text-[#22C55E]">♻️</span>
                  <div>
                    <p class="text-sm font-semibold text-[#0F151F]">{{ product.name }}</p>
                    <p class="text-xs text-[#A9A9A9]">{{ product.desc }}</p>
                  </div>
                </div>
                <div class="w-[18px] h-[18px] border-2 rounded flex items-center justify-center"
                  :class="index === 0 ? 'border-[#22C55E] bg-[#22C55E]' : 'border-[#D9D9D9]'">
                  <span v-if="index === 0" class="text-white text-[10px]">✓</span>
                </div>
              </div>
            </div>
          </div>

          <!-- STEP 4 - Account Setup -->
          <div v-if="currentStep === 4">
            <h2 class="font-semibold text-[16px] text-[#0F151F] mb-[4px]">Account Setup & Confirmation</h2>
            <p class="text-xs text-[#A9A9A9] mb-[24px]">Review details and complete onboarding</p>

            <!-- Client Summary -->
            <div class="border border-[#E5E7EB] rounded-[8px] p-[16px] mb-[20px]">
              <p class="text-xs font-semibold text-[#0F151F] mb-[12px]">Client Summary</p>
              <div class="grid grid-cols-2 gap-[12px]">
                <div>
                  <p class="text-[10px] text-[#A9A9A9]">Full name</p>
                  <p class="text-xs text-[#0F151F]">Not Provided</p>
                </div>
                <div>
                  <p class="text-[10px] text-[#A9A9A9]">Full name</p>
                  <p class="text-xs text-[#0F151F]">Not Provided</p>
                </div>
                <div>
                  <p class="text-[10px] text-[#A9A9A9]">Investment Goal</p>
                  <p class="text-xs text-[#0F151F]">Not Provided</p>
                </div>
                <div>
                  <p class="text-[10px] text-[#A9A9A9]">Risk Tolerance</p>
                  <p class="text-xs text-[#0F151F]">Not Provided</p>
                </div>
                <div>
                  <p class="text-[10px] text-[#A9A9A9]">Selected Products</p>
                  <p class="text-xs text-[#A9A9A9] italic">No products selected</p>
                </div>
              </div>
            </div>

            <!-- Account Type -->
            <div class="mb-[16px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Account Type <span class="text-red-500">*</span></label>
              <select class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none bg-white">
                <option>Individual Account</option>
                <option>Joint Account</option>
                <option>Corporate Account</option>
              </select>
            </div>

            <!-- OTP -->
            <div class="mb-[16px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">OTP Verification <span class="text-red-500">*</span></label>
              <div class="flex gap-[10px]">
                <input type="text" placeholder="Enter 6-digit OTP" class="flex-1 border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
                <button class="bg-[#0F151F] text-white px-[16px] py-[10px] rounded-[8px] text-sm">Send OTP</button>
              </div>
              <p class="text-[10px] text-[#A9A9A9] mt-[4px]">OTP will be sent to client email</p>
            </div>

            <!-- Welcome Email -->
            <div class="bg-[#F0FDF4] border border-[#22C55E] rounded-[8px] px-[16px] py-[12px] flex items-center gap-[8px]">
              <span class="text-[#22C55E]">ℹ️</span>
              <div>
                <p class="text-xs font-semibold text-[#22C55E]">Welcome Email Preview</p>
                <p class="text-[10px] text-[#A9A9A9]">Client will receive login credentials and onboarding guide via email</p>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <div class="flex justify-between items-center mt-[32px]">
            <button
              @click="prevStep"
              :disabled="currentStep === 1"
              class="flex items-center gap-[6px] border border-[#E5E7EB] text-[#4B5054] px-[16px] py-[10px] rounded-[8px] text-sm disabled:opacity-40"
            >
              ← Previous
            </button>
            <div class="flex items-center gap-[12px]">
              <button class="flex items-center gap-[6px] text-[#4B5054] text-sm">
                💾 Save & Resume Later
              </button>
              <button
                @click="nextStep"
                class="flex items-center gap-[6px] bg-[#22C55E] text-white px-[20px] py-[10px] rounded-[8px] text-sm font-medium"
              >
                {{ currentStep === 4 ? 'Complete Onboarding ✓' : 'Next Step →' }}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Read the data from the URL automatically
const clientName = ref(route.query.name || '')
const clientEmail = ref(route.query.email || '')
const clientBvn = ref(route.query.bvn || '')


const currentStep = ref(1)

const steps = [
  { label: 'Basic Info & KYC' },
  { label: 'Profiling' },
  { label: 'Suitability' },
  { label: 'Account Setup' },
]

const risks = [
  { label: 'Conservative', desc: 'Prefer stable returns with minimal risk' },
  { label: 'Moderate', desc: 'Prefer stable returns with minimal risk' },
  { label: 'Aggressive', desc: 'Prefer stable returns with minimal risk' },
]

const products = [
  { name: 'Mutual Funds', desc: 'Diversified portfolio with moderate risk' },
  { name: 'Mutual Funds', desc: 'Diversified portfolio with moderate risk' },
  { name: 'Mutual Funds', desc: 'Diversified portfolio with moderate risk' },
  { name: 'Mutual Funds', desc: 'Diversified portfolio with moderate risk' },
  { name: 'Mutual Funds', desc: 'Diversified portfolio with moderate risk' },
]

const selectedGoal = ref('Wealth Growth')
const selectedRisk = ref('Conservative')

function nextStep() {
  if (currentStep.value < 4) currentStep.value++
}

function prevStep() {
  if (currentStep.value > 1) currentStep.value--
}
</script>