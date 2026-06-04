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
        <router-link to="/investment-product" class="flex gap-[10px] text-white bg-[#1E2736] px-[10px] py-[8px] rounded-[8px]">
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
      <nav class="h-[60px] w-full bg-white shadow-sm flex items-center justify-between px-[40px] flex-shrink-0">
        <p class="text-sm text-[#A9A9A9]">
          Investment Products › <span class="font-semibold text-[#0F151F]">Create New Product</span>
        </p>
        <div class="flex gap-[10px]">
          <button @click="$router.back()" class="border border-[#E5E7EB] text-[#4B5054] px-[14px] py-[6px] rounded-[8px] text-sm">
            Cancel
          </button>
          <button @click="saveDraft" class="border border-[#E5E7EB] text-[#4B5054] px-[14px] py-[6px] rounded-[8px] text-sm">
            Save Draft
          </button>
          <button @click="launchProduct" class="bg-[#22C55E] text-white px-[14px] py-[6px] rounded-[8px] text-sm font-medium">
            Launch Product
          </button>
        </div>
      </nav>

      <!-- Page Content -->
      <div class="flex-1 overflow-y-auto px-[40px] py-[24px]">

        <!-- Progress Steps -->
        <div class="bg-white rounded-[12px] p-[20px] mb-[24px]">
          <div class="flex items-center justify-between">
            <template v-for="(step, index) in steps" :key="index">
              <div class="flex flex-col items-center gap-[6px]">
                <div
                  class="w-[32px] h-[32px] rounded-full flex items-center justify-center text-xs font-bold"
                  :class="currentStep > index + 1 ? 'bg-[#22C55E] text-white' :
                          currentStep === index + 1 ? 'bg-[#22C55E] text-white' :
                          'bg-[#F5F5F5] text-[#A9A9A9]'"
                >
                  {{ currentStep > index + 1 ? '✓' : index + 1 }}
                </div>
                <span class="text-[10px] text-center"
                  :class="currentStep === index + 1 ? 'text-[#22C55E] font-semibold' : 'text-[#A9A9A9]'">
                  {{ step }}
                </span>
              </div>
              <div v-if="index < steps.length - 1"
                class="flex-1 h-[2px] mx-[8px] mb-[16px]"
                :class="currentStep > index + 1 ? 'bg-[#22C55E]' : 'bg-[#E5E7EB]'">
              </div>
            </template>
          </div>
        </div>

        <!-- Step Content -->
        <div class="bg-white rounded-[12px] p-[24px]">

          <!-- STEP 1 - Basic Information -->
          <div v-if="currentStep === 1">
            <h2 class="font-semibold text-[18px] text-[#0F151F] mb-[4px]">Basic Information</h2>
            <p class="text-xs text-[#A9A9A9] mb-[24px]">Enter the basic details of the investment product</p>

            <div class="flex gap-[16px] mb-[16px]">
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Product Name <span class="text-red-500">*</span></label>
                <input v-model="form.name" type="text" placeholder="e.g. Islamic Sukuk Bond"
                  class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
              </div>
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Product Type <span class="text-red-500">*</span></label>
                <select v-model="form.type" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none bg-white">
                  <option value="">Select type</option>
                  <option>Mutual Fund</option>
                  <option>Sukuk</option>
                  <option>Equity</option>
                  <option>ETF</option>
                  <option>Real Estate</option>
                </select>
              </div>
            </div>

            <div class="mb-[16px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Product Description <span class="text-red-500">*</span></label>
              <textarea v-model="form.description" rows="4" placeholder="Describe the investment product..."
                class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E] resize-none">
              </textarea>
            </div>

            <div class="flex gap-[16px] mb-[16px]">
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Fund Manager <span class="text-red-500">*</span></label>
                <input v-model="form.manager" type="text" placeholder="e.g. Ahmed Hassan"
                  class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
              </div>
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Inception Date <span class="text-red-500">*</span></label>
                <input v-model="form.inceptionDate" type="date"
                  class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
              </div>
            </div>

            <div class="flex items-center gap-[10px] mb-[24px]">
              <div
                @click="form.shariah = !form.shariah"
                :class="form.shariah ? 'bg-[#22C55E]' : 'bg-[#D9D9D9]'"
                class="w-[40px] h-[22px] rounded-full relative cursor-pointer transition-all">
                <div :class="form.shariah ? 'right-[2px]' : 'left-[2px]'"
                  class="w-[18px] h-[18px] bg-white rounded-full absolute top-[2px] transition-all">
                </div>
              </div>
              <span class="text-sm text-[#0F151F]">Shari'ah Compliant Product</span>
            </div>
          </div>

          <!-- STEP 2 - Investment Details -->
          <div v-if="currentStep === 2">
            <h2 class="font-semibold text-[18px] text-[#0F151F] mb-[4px]">Investment Details</h2>
            <p class="text-xs text-[#A9A9A9] mb-[24px]">Set investment parameters and risk profile</p>

            <div class="flex gap-[16px] mb-[16px]">
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Minimum Investment (₦) <span class="text-red-500">*</span></label>
                <input v-model="form.minInvestment" type="number" placeholder="50000"
                  class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
              </div>
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Maximum Investment (₦) <span class="text-red-500">*</span></label>
                <input v-model="form.maxInvestment" type="number" placeholder="10000000"
                  class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
              </div>
            </div>

            <div class="flex gap-[16px] mb-[16px]">
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Expected Return (%) <span class="text-red-500">*</span></label>
                <input v-model="form.expectedReturn" type="text" placeholder="e.g. 12-15% p.a."
                  class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
              </div>
              <div class="flex-1">
                <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Avg. Holding Period <span class="text-red-500">*</span></label>
                <input v-model="form.holdingPeriod" type="text" placeholder="e.g. 18 months"
                  class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
              </div>
            </div>

            <div class="mb-[24px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[10px] block">Risk Level <span class="text-red-500">*</span></label>
              <div class="flex gap-[12px]">
                <div v-for="risk in ['Low', 'Moderate', 'High', 'Very High']" :key="risk"
                  @click="form.riskLevel = risk"
                  :class="form.riskLevel === risk ? 'border-[#22C55E] bg-[#F0FDF4] text-[#22C55E]' : 'border-[#E5E7EB] text-[#4B5054]'"
                  class="flex-1 border rounded-[8px] py-[10px] text-center text-sm cursor-pointer">
                  {{ risk }}
                </div>
              </div>
            </div>
          </div>

          <!-- STEP 3 - Compliance -->
          <div v-if="currentStep === 3">
            <h2 class="font-semibold text-[18px] text-[#0F151F] mb-[4px]">Compliance & Documentation</h2>
            <p class="text-xs text-[#A9A9A9] mb-[24px]">Upload required documents and set compliance status</p>

            <div class="mb-[16px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Regulatory Body <span class="text-red-500">*</span></label>
              <select v-model="form.regulatoryBody" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none bg-white">
                <option value="">Select regulatory body</option>
                <option>SEC Nigeria</option>
                <option>CBN</option>
                <option>NAICOM</option>
              </select>
            </div>

            <div class="mb-[16px]">
              <label class="text-xs font-medium text-[#0F151F] mb-[6px] block">Upload Prospectus <span class="text-red-500">*</span></label>
              <div class="border-2 border-dashed border-[#E5E7EB] rounded-[8px] p-[32px] flex flex-col items-center justify-center gap-[8px] cursor-pointer hover:bg-[#F9F9F9]">
                <span class="text-2xl">📄</span>
                <p class="text-sm text-[#4B5054]">Click to upload or drag and drop</p>
                <p class="text-xs text-[#A9A9A9]">PDF only (max. 10MB)</p>
              </div>
            </div>

            <div class="flex flex-col gap-[10px] mb-[24px]">
              <label class="text-xs font-medium text-[#0F151F] block">Compliance Checklist</label>
              <div v-for="item in complianceItems" :key="item"
                class="flex items-center gap-[10px] p-[12px] border border-[#E5E7EB] rounded-[8px]">
                <div
                  @click="toggleCompliance(item)"
                  :class="form.compliance.includes(item) ? 'bg-[#22C55E] border-[#22C55E]' : 'border-[#D9D9D9]'"
                  class="w-[18px] h-[18px] rounded border-2 flex items-center justify-center cursor-pointer flex-shrink-0">
                  <span v-if="form.compliance.includes(item)" class="text-white text-[10px]">✓</span>
                </div>
                <span class="text-sm text-[#0F151F]">{{ item }}</span>
              </div>
            </div>
          </div>

          <!-- STEP 4 - Review -->
          <div v-if="currentStep === 4">
            <h2 class="font-semibold text-[18px] text-[#0F151F] mb-[4px]">Review & Launch</h2>
            <p class="text-xs text-[#A9A9A9] mb-[24px]">Review all details before launching the product</p>

            <div class="flex flex-col gap-[16px]">

              <div class="border border-[#F5F5F5] rounded-[8px] p-[16px]">
                <p class="text-sm font-semibold text-[#0F151F] mb-[12px]">Basic Information</p>
                <div class="grid grid-cols-2 gap-[10px]">
                  <div>
                    <p class="text-[10px] text-[#A9A9A9]">Product Name</p>
                    <p class="text-sm text-[#0F151F]">{{ form.name || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-[10px] text-[#A9A9A9]">Product Type</p>
                    <p class="text-sm text-[#0F151F]">{{ form.type || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-[10px] text-[#A9A9A9]">Fund Manager</p>
                    <p class="text-sm text-[#0F151F]">{{ form.manager || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-[10px] text-[#A9A9A9]">Shari'ah Compliant</p>
                    <p class="text-sm text-[#0F151F]">{{ form.shariah ? 'Yes' : 'No' }}</p>
                  </div>
                </div>
              </div>

              <div class="border border-[#F5F5F5] rounded-[8px] p-[16px]">
                <p class="text-sm font-semibold text-[#0F151F] mb-[12px]">Investment Details</p>
                <div class="grid grid-cols-2 gap-[10px]">
                  <div>
                    <p class="text-[10px] text-[#A9A9A9]">Min Investment</p>
                    <p class="text-sm text-[#0F151F]">{{ form.minInvestment ? '₦' + form.minInvestment : 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-[10px] text-[#A9A9A9]">Max Investment</p>
                    <p class="text-sm text-[#0F151F]">{{ form.maxInvestment ? '₦' + form.maxInvestment : 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-[10px] text-[#A9A9A9]">Expected Return</p>
                    <p class="text-sm text-[#0F151F]">{{ form.expectedReturn || 'Not provided' }}</p>
                  </div>
                  <div>
                    <p class="text-[10px] text-[#A9A9A9]">Risk Level</p>
                    <p class="text-sm text-[#0F151F]">{{ form.riskLevel || 'Not provided' }}</p>
                  </div>
                </div>
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
              <span class="text-xs text-[#A9A9A9]">Step {{ currentStep }} of 4</span>
              <button
                @click="nextStep"
                class="bg-[#22C55E] text-white px-[20px] py-[10px] rounded-[8px] text-sm font-medium"
              >
                {{ currentStep === 4 ? '🚀 Launch Product' : 'Next Step →' }}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccess" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-[16px] p-[32px] w-[400px] text-center shadow-2xl">
        <div class="w-[60px] h-[60px] bg-[#DCFCE7] rounded-full flex items-center justify-center mx-auto mb-[16px]">
          <span class="text-[#22C55E] text-2xl">✓</span>
        </div>
        <h2 class="font-bold text-[20px] text-[#0F151F] mb-[8px]">Product Launched!</h2>
        <p class="text-sm text-[#A9A9A9] mb-[24px]">{{ form.name }} has been successfully created and is now active.</p>
        <button @click="goBack" class="w-full bg-[#22C55E] text-white py-[12px] rounded-[8px] text-sm font-medium">
          Back to Investment Products
        </button>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentStep = ref(1)
const showSuccess = ref(false)

const steps = ['Basic Info', 'Investment Details', 'Compliance', 'Review & Launch']

const complianceItems = [
  'Prospectus Filed',
  'KYC Requirements Enabled',
  'AML Compliance Active',
  'SEC Registration Complete',
]

const form = ref({
  name: '',
  type: '',
  description: '',
  manager: '',
  inceptionDate: '',
  shariah: false,
  minInvestment: '',
  maxInvestment: '',
  expectedReturn: '',
  holdingPeriod: '',
  riskLevel: '',
  regulatoryBody: '',
  compliance: [],
})

function nextStep() {
  if (currentStep.value < 4) {
    currentStep.value++
  } else {
    launchProduct()
  }
}

function prevStep() {
  if (currentStep.value > 1) currentStep.value--
}

function toggleCompliance(item) {
  if (form.value.compliance.includes(item)) {
    form.value.compliance = form.value.compliance.filter(i => i !== item)
  } else {
    form.value.compliance.push(item)
  }
}

function saveDraft() {
  alert('Draft saved successfully!')
}

function launchProduct() {
  showSuccess.value = true
}

function goBack() {
  router.push('/investment-product')
}
</script>