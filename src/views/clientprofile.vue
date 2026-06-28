<template>
  <div class="flex h-screen overflow-hidden bg-[#F4F0F0]">

    <!-- Sidebar -->
    <aside class="bg-[#0F151F] text-white w-[253px] h-screen fixed top-0 left-0 p-6 z-20 flex-shrink-0">
      <div class="flex flex-col gap-[45px] mt-[65px]">
        <router-link to="/" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/dashboard.svg" class="w-[18px] h-[18px] mt-[4px]"/> Dashboard
        </router-link>
        <router-link to="/retail" class="flex gap-[10px] text-white hover:text-[#FD4F00] bg-[#1E2736] px-[10px] py-[8px] rounded-[8px]">
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
        <div class="font-semibold text-[#0F151F] text-xl">Client Profile</div>
        <div class="bg-[#F5F5F5] rounded-lg px-5 py-3 flex items-center gap-2 w-[320px]">
          <img src="../assets/search-icon.svg" class="w-[18px] h-[18px]" alt="search icon">
          <input type="text" placeholder="Search clients, accounts..." class="bg-transparent focus:outline-none w-full text-sm text-[#A5A5A8]"/>
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

        <!-- Back button -->
        <button
          @click="$router.back()"
          class="flex items-center gap-[6px] text-sm text-white mb-[20px] hover:text-[#0F151F] p-3 bg-[#FD4F00] rounded-[8px] font-semibold"
        >
          ← Back to Clients
        </button>

        <!-- If client exists -->
        <div v-if="client">

          <!-- Header Card -->
          <div class="bg-white rounded-[12px] p-[24px] mb-[20px] flex justify-between items-start">
            <div class="flex items-center gap-[16px]">
              <img src="https://i.pravatar.cc/80" class="w-[72px] h-[72px] rounded-full object-cover"/>
              <div>
                <h1 class="font-bold text-[22px] text-[#0F151F]">{{ client.name }}</h1>
                <p class="text-xs text-[#A9A9A9]">Client ID: {{ client.id }}</p>
                <span
                  :class="{
                    'bg-[#DCFCE7] text-[#228B22]': client.status === 'Active',
                    'bg-[#FEF9C3] text-[#B88836]': client.status === 'Pending KYC',
                    'bg-[#E5E5E5] text-[#4B5054]': client.status === 'Draft'
                  }"
                  class="inline-block mt-[8px] text-xs px-[10px] py-[3px] rounded-full font-medium"
                >{{ client.status }}</span>
              </div>
            </div>

            <div class="flex gap-[10px]">
              <button
                @click="$router.push('/retail')"
                class="border border-[#E5E7EB] text-[#4B5054] px-[16px] py-[8px] rounded-[8px] text-sm"
              >
                Edit in Table
              </button>
            </div>
          </div>

          <!-- Details Grid -->
          <div class="grid grid-cols-2 gap-[16px] mb-[20px]">

            <!-- Contact Info -->
          
          <div class="bg-white rounded-[12px] p-[20px]">
            <p class="font-semibold text-[16px] text-[#0F151F] mb-[16px]">Contact Information</p>
            <div class="flex flex-col gap-[12px]">
              <div>
                <p class="text-[10px] text-[#A9A9A9] uppercase">Email Address</p>
                <p class="text-sm text-[#0F151F]">{{ client.email || 'Not provided' }}</p>
              </div>
              <div>
                <p class="text-[10px] text-[#A9A9A9] uppercase">Phone Number</p>
                <p class="text-sm text-[#0F151F]">{{ client.phone || 'Not provided' }}</p>
              </div>
              <div>
                <p class="text-[10px] text-[#A9A9A9] uppercase">BVN</p>
                <p class="text-sm text-[#0F151F]">{{ client.bvn || 'Not provided' }}</p>
              </div>
              <div>
                <p class="text-[10px] text-[#A9A9A9] uppercase">ID Type</p>
                <p class="text-sm text-[#0F151F]">{{ client.idType || 'Not provided' }}</p>
              </div>
              <div>
                <p class="text-[10px] text-[#A9A9A9] uppercase">ID Number</p>
                <p class="text-sm text-[#0F151F]">{{ client.idNumber || 'Not provided' }}</p>
              </div>
              <div>
                <p class="text-[10px] text-[#A9A9A9] uppercase">Last Activity</p>
                <p class="text-sm text-[#0F151F]">{{ client.lastActivity }}</p>
              </div>
            </div>
          </div>

          <!-- Investment Profile -->
          <div class="bg-white rounded-[12px] p-[20px]">
            <p class="font-semibold text-[16px] text-[#0F151F] mb-[16px]">Investment Profile</p>
            <div class="flex flex-col gap-[12px]">
              <div>
                <p class="text-[10px] text-[#A9A9A9] uppercase">Assets Under Management</p>
                <p class="text-sm font-semibold text-[#0F151F]">{{ client.aum }}</p>
              </div>
              <div>
                <p class="text-[10px] text-[#A9A9A9] uppercase">Risk Profile</p>
                <div class="flex items-center gap-2 mt-1">
                  <div v-if="client.riskProfile !== 'Not profiled'" class="h-[5px] w-[60px] rounded-full bg-[#D9D9D9]">
                    <div class="h-full rounded-full" :class="client.riskColor" :style="{ width: client.riskWidth }"></div>
                  </div>
                  <p class="text-sm text-[#0F151F]">{{ client.riskProfile }}</p>
                </div>
              </div>
              <div>
                <p class="text-[10px] text-[#A9A9A9] uppercase">Investment Goal</p>
                <p class="text-sm text-[#0F151F]">{{ client.goal || 'Not set' }}</p>
              </div>
              <div>
                <p class="text-[10px] text-[#A9A9A9] uppercase">Annual Income</p>
                <p class="text-sm text-[#0F151F]">{{ client.annualIncome || 'Not provided' }}</p>
              </div>
              <div>
                <p class="text-[10px] text-[#A9A9A9] uppercase">Investment Experience</p>
                <p class="text-sm text-[#0F151F]">{{ client.investmentExperience || 'Not provided' }}</p>
              </div>
              <div>
                <p class="text-[10px] text-[#A9A9A9] uppercase">Account Type</p>
                <p class="text-sm text-[#0F151F]">{{ client.accountType || 'Not provided' }}</p>
              </div>
            </div>
          </div>
          </div>

          <!-- Activity / Notes placeholder -->
          <div class="bg-white rounded-[12px] p-[20px]">
            <p class="font-semibold text-[16px] text-[#0F151F] mb-[16px]">Activity Timeline</p>
            <div class="flex items-start gap-[12px]">
              <div class="w-[8px] h-[8px] rounded-full bg-[#22C55E] mt-[6px] flex-shrink-0"></div>
              <div>
                <p class="text-sm text-[#0F151F]">Client record created</p>
                <p class="text-xs text-[#A9A9A9]">{{ client.lastActivity }}</p>
              </div>
            </div>
          </div>

        </div>

        <!-- If client not found -->
        <div v-else class="bg-white rounded-[12px] p-[40px] text-center">
          <p class="text-4xl mb-4">🔍</p>
          <p class="font-semibold text-[#0F151F] mb-2">Client Not Found</p>
          <p class="text-sm text-[#A9A9A9]">This client may have been deleted or the link is invalid.</p>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { useClientStore } from '../stores/clients'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const clientStore = useClientStore()

// Looks up the client matching the :id in the URL
const client = computed(() => clientStore.getClientById(route.params.id))
</script>