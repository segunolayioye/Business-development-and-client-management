<template>
  <div class="flex h-screen overflow-hidden bg-[#F4F0F0]">

    <!-- Sidebar -->
    <aside class="bg-[#0F151F] text-white w-[253px] h-screen fixed top-0 left-0 p-6 z-20 flex-shrink-0">
      <div class="flex flex-col gap-[45px] mt-[95px]">
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
        <div class="flex-1 overflow-y-auto px-[32px] py-[20px]">
        <div class="flex items-center justify-between mb-[12px]">    
        <p class="text-sm text-[#4B5054]">Retail Clients › <span class="font-semibold text-[#000000] text-[14px]">Chioma Nwankwo</span></p>
        <button class="flex items-center gap-[6px] bg-[#228B22] font-semibold text-white px-[16px] py-[8px] rounded-[8px] text-[13px]">
          Actions ∨
        </button>
        </div>
      

      
      

        <!-- Client Header -->
        <div class=" pt-[8px] pb-[20px] mb-[16px] ">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-[16px]">
              <div class="w-[48px] h-[48px] rounded-full bg-[#228B22] flex items-center justify-center text-white font-bold text-lg">CN</div>
              <div>
                <div class="flex items-center gap-[10px]">
                  <p class="font-bold text-[18px] text-[#0F151F]">Chioma Nwankwo</p>
                  <span class="bg-[#FEF9C3] text-[#AD751E] text-[10px] px-[10px] py-[4px] rounded-[12px]">Pending KYC</span>
                </div>
                <p class="text-xs text-[#4B5054]">chioma.n@email.com +234 805 123 4567 · RM: Jane Smith</p>
                
              </div>
            </div>
          </div>
        </div>

        <!-- Tabs -->
        <div class="mb-[16px]">
          <div class="flex border-b-2 border-[#D9D9D9]  px-[20px]">
            <button
              v-for="tab in tabs"
              :key="tab"
              @click="activeTab = tab"
              class="px-[16px] py-[14px] text-sm font-medium border-b-4 -mb-[1px] transition-all"
              :class="activeTab === tab ? 'border-[#228B22] text-[#228B22]' : 'border-transparent text-[#A9A9A9] hover:text-[#0F151F]'"
            >
              {{ tab }}
            </button>
          </div>

          <!-- TAB CONTENT -->
          <div class="pt-[20px]">

            <!-- OVERVIEW TAB -->
            <div v-if="activeTab === 'Overview'">

              <!-- Stats Row -->
              <div class="flex items-center gap-[32px] pb-[16px] border-b bg-white w-full rounded-[12px] p-[16px] border-[#F5F5F5] mb-[20px]">
                <div class="flex items-center gap-[12px]">
                  <div class="w-[48px] h-[48px] rounded-full bg-[#228B22] flex items-center justify-center text-white font-bold">CN</div>
                  <div>
                    <p class="font-semibold text-[#0F151F]">Chioma Nwankwo</p>
                    <p class="text-xs text-[#4B5054]">chioma.n@email.com</p>
                    <p class="text-xs text-[#4B5054]">+234 805 123 4567</p>
                    <span class="bg-[#FEF9C3] text-[#AD751E] text-[10px] px-[10px] py-[4px] rounded-[12px]">Pending KYC</span>
                  </div>
                </div>
                <div class="flex gap-[32px] ml-6">
                  <div class="flex flex-col gap-[7px] w-[180px] bg-[#F9F9F9] rounded-[8px] p-[12px]">
                    <p class="text-xs text-[#4B5054]">Total AUM</p>
                    <p class="font-semibold text-black">₦0</p>
                  </div>
                  <div class="flex flex-col gap-[7px] w-[180px] bg-[#F9F9F9] rounded-[8px] p-[12px]">
                    <p class="text-xs text-[#4B5054]">Products Held</p>
                    <p class="font-semibold text-black">0</p>
                  </div>
                  <div class="flex flex-col gap-[7px] w-[180px] bg-[#F9F9F9] rounded-[8px] p-[12px]">
                    <p class="text-xs text-[#4B5054]">Risk Profile</p>
                    <p class="font-semibold text-black">Conservative</p>
                  </div>
                </div>
              </div>

              <!-- AUM Trend -->
              <div class="mb-[20px] h-[150px] bg-[#F9F9F9] rounded-[8px] p-[16px]">
                <div class="flex justify-between items-center mb-[12px]">
                  <p class="text-sm text-[#0F151F]">AUM Trend (Last 6 Months)</p>
                  <span class="text-xs text-[#228B22] border bg-[#228B221A] px-[10px] py-[4px] rounded-[12px]">No Data</span>
                </div>
                <div class="w-full mt-10">
                <div class="w-full h-[5px] bg-[#D9D9D9] mb-[8px] rounded-[4px]"></div>
                    <div class="flex justify-between px-[4px]">
                        <span class="text-xs text-[#000000]">Jan</span>
                        <span class="text-xs text-[#000000]">Jan</span>
                        <span class="text-xs text-[#000000]">Jan</span>
                        <span class="text-xs text-[#000000]">Jan</span>
                        <span class="text-xs text-[#000000]">Jan</span>
                         <span class="text-xs text-[#000000]">Jan</span>
                    </div>
                    </div>
              </div>

              <!-- Personal + Investment -->
              <div class="flex gap-[20px] mb-[20px]">

                <!-- Personal Details -->
                <div class="flex-1 bg-[#FFFFFF] rounded-[8px] p-[16px]">
                  <p class=" flex text-[14px] text-[#0F151F] mb-[12px]">
                    <img src="../assets/unknown.svg" alt="profile" class="w-[14px] h-[14px] mt-[2px] mr-[8px]"> Personal Details</p>
                  <div class="flex flex-col gap-[8px]">
                    <div class="flex justify-between">
                      <span class="text-[12px] text-[#000000]">Date of Birth</span>
                      <span class="text-[12px] text-[#000000]">1990-11-03</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-[12px] text-[#000000]">Gender</span>
                      <span class="text-[12px] text-[#000000]">Female</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-[12px] text-[#000000]">Address</span>
                      <span class="text-[12px] text-[#000000]">7 Awolowo Road, Ikoyi, Lagos</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-[12px] text-[#000000]">Occupation</span>
                      <span class="text-[12px] text-[#000000]">Accountant</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-[12px] text-[#000000]">Employer</span>
                      <span class="text-[12px] text-[#000000]">Deloitte Nigeria</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-[12px] text-[#000000]">Income Level</span>
                      <span class="text-[12px] text-[#000000]">₦300,000 - ₦500,000/month</span>
                    </div>
                  </div>
                </div>

                <!-- Investment Profile -->
                <div class="flex-1 bg-[#FFFFFF] rounded-[8px] p-[16px]">
                  <p class="flex text-[14px] font-semibold text-[#0F151F] mb-[12px]">
                    <img src="../assets/unknown.svg" alt="profile" class="w-[14px] h-[14px] mt-[2px] mr-[8px]"> Investment Profile</p>
                  <div class="flex flex-col gap-[8px]">
                    <div class="flex justify-between">
                      <span class="text-[12px] text-[#000000]">Investment Goal</span>
                      <span class="text-[12px] text-[#0F151F]">Capital Preservation</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-[12px] text-[#000000]">Experience</span>
                      <span class="text-[12px] text-[#0F151F]">Beginner (&lt;1 year)</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-[12px] text-[#000000]">Risk Profile</span>
                      <span class="text-[12px] text-[#0F151F]">Conservative</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-[12px] text-[#000000]">Shari'ah Preference</span>
                      <span class="text-[12px] text-[#0F151F]">No</span>
                    </div>
                    <div class="flex justify-between">
                      <span class="text-[12px] text-[#000000]">Member Since</span>
                      <span class="text-[12px] text-[#0F151F]">Feb 20, 2024</span>
                    </div>
                     <div class="flex justify-between">
                      <span class="text-[12px] text-[#000000]">Relationship Manager</span>
                      <span class="text-[12px] text-[#0F151F]">Jone smith</span>
                    </div>
                  </div>
                </div>

              </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-[20px] items-stretch mb-[20px]">
              <!-- AUM Chart -->
              <div class="bg-[#FFFFFF] rounded-[8px] p-[16px] flex-1 min-w-0 mb-[20px]">
                <div class="flex justify-between items-center mb-[12px]">
                  <div>
                    <p class="text-[12px] text-[#4B5054]">Total Assets Under Management</p>
                    <p class="font-semibold text-[22px] text-[#0F151F]">$123,456.00</p>
                    <div class="flex mb-">
                    <span class="flex text-[#4B5054] text-xs items-center gap-[4px]">
                    <img src="../assets/stock-rise.svg" class="w-[54px] h-[54px]" alt="rise">Vs last month</span>
                    </div>
                  </div>
                  <div class="flex gap-[6px]">
                    <button class="text-xs  bg-[#F1F5F9] px-[10px] py-[4px] text-[#4B5054] rounded-[6px]">1M</button>
                    <button class="text-xs border border-[#E5E5E5] px-[10px] py-[4px] text-[#4B5054] rounded-[6px]">3M</button>
                    <button class="text-xs border border-[#E5E5E5] text-[#4B5054] px-[10px] py-[4px] rounded-[6px]">YTD</button>
                  </div>
                </div>
                <div class="h-[120px] rounded-[8px] flex items-center justify-center">
                  <overviewchart />
                </div>
              </div>

              <!-- Asset Allocation -->
              <div class="bg-[#FFFFFF] flex-1 min-w-0 rounded-[8px] p-[16px]">
                <p class="text-sm font-semibold text-[#0F151F] mb-[16px]">Asset Allocation</p>
                <div class="flex items-center gap-[32px]">
                  <div class="mt-4 bg-[#F9F9F9] rounded-full flex items-center justify-center flex-shrink-0">
                    <doughnutchart />
                  </div>
                  <div class="flex flex-col gap-[8px]">
                    <div class="flex items-center gap-[8px]">
                      <div class="w-[10px] h-[10px] rounded-full bg-[#FD4F00]"></div>
                      <span class="text-xs text-[#4B5054]">US equities</span>
                      <span class="text-xs font-semibold text-[#0F151F] ml-auto">15%</span>
                    </div>
                    <div class="flex items-center gap-[8px]">
                      <div class="w-[10px] h-[10px] rounded-full bg-[#22C55E]"></div>
                      <span class="text-xs text-[#4B5054]">Fixed Income</span>
                      <span class="text-xs font-semibold text-[#0F151F] ml-auto">30%</span>
                    </div>
                    <div class="flex items-center gap-[8px]">
                      <div class="w-[10px] h-[10px] rounded-full bg-[#3B82F6]"></div>
                      <span class="text-xs text-[#4B5054]">Cash & Equivalents</span>
                      <span class="text-xs font-semibold text-[#0F151F] ml-auto">20%</span>
                    </div>
                    <div class="flex items-center gap-[8px]">
                      <div class="w-[10px] h-[10px] rounded-full bg-[#EFF31C]"></div>
                      <span class="text-xs text-[#4B5054]">Alternative Inv</span>
                      <span class="text-xs font-semibold text-[#0F151F] ml-auto">45%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <!-- PROFILE & KYC TAB -->
            <div v-if="activeTab === 'Profile &KYC'" class="flex-col gap-[8px] mb-[16px] bg-white rounded-[8px] p-[20px]">

              <div class="flex items-center gap-[8px] mb-[16px]">
                <img src="../assets/security.svg" alt="security" class="w-[21px] h-[21px] mt-[2px]">
                <p class="font-semibold text-[#0F151F]">KYC/Identity Verification</p>
              </div>

              <!-- KYC Status Cards -->
              <div class="flex gap-[12px] mb-[20px]">
                <div class="flex flex-1 gap-[16px] border border-[#FEF8CB] bg-[#FEFCE8] rounded-[8px] p-[14px]">
                  <img src="../assets/yellow-clock.svg" class="w-7 h-7 mt-2" alt="clock">  
                  <div>
                  <p class="text-xs text-[#4B5054] mb-[4px]">KYC Status</p>
                  <span class=" text-[#CA8A04] text-xs  py-[4px] ">Pending</span>
                  </div>
                </div>
                <div class="flex flex-1 gap-[16px] border border-[#FEF8CB] bg-[#E5E5E54D] rounded-[8px] p-[14px]">
                  <img src="../assets/black-cal.svg" class="w-7 h-7 mt-2" alt="calendar">
                  <div>
                  <p class="text-xs text-[#4B5054] mb-[4px]">Verified On</p>
                  <p class="text-xs font-semibold text-[#4B5054]">Not yet verified</p>
                  </div>
                </div>
                <div class=" flex flex-1 gap-[16px] border border-[#FEF8CB] bg-[#E5E5E54D] rounded-[8px] p-[14px]">
                  <img src="../assets/black-profile.svg" class="w-7 h-7 mt-2" alt="profile">
                  <div>
                  <p class="text-xs text-[#4B5054] mb-[4px]">BVN</p>
                  <p class="text-sm text-[#4B5054]">••••••••4321</p>
                  </div>
                </div>
              </div>

              <!-- Document Checklist -->
              <p class="text-xs font-semibold text-[#A9A9A9] uppercase mb-[10px]">Document Checklist</p>
              <div class="flex flex-col gap-[8px]">
                <div v-for="doc in documents" :key="doc" class="flex items-center justify-between py-[10px] border-b border-[#F5F5F5]">
                  <div class="flex items-center gap-[8px]">
                    <span class="text-[#A9A9A9]"><img src="../assets/black-clock.svg" class="w-4 h-4" alt="clock"></span>
                    <span class="text-sm text-[#0F151F]">{{ doc }}</span>
                  </div>
                  <span class="bg-[#FEF9C3] text-[#AD751E] text-[10px] px-[10px] py-[4px] rounded-[12px]">Pending KYC</span>
                </div>
              </div>
            </div>

            <!-- HOLDINGS TAB -->
            <div v-if="activeTab === 'Holdings'" class="flex flex-col items-center justify-center py-[60px] bg-white rounded-[8px]">
              <div class="w-[170px] h-[170px] rounded-full bg-[#D9D9D966] flex items-center justify-center mb-[20px]">
                <img src="../assets/pie.svg" class="w-20 h-20" alt="pie">
              </div>
              <p class="font-semibold text-[#000000] text-[16px] mb-[2px]">No Holdings Yet</p>
              <p class="font-semibold text-[14px] text-[#A9A9A9] mt-4">This client has not made any investments yet.</p>
            </div>

            <!-- ACTIVITY LOG TAB -->
            <div v-if="activeTab === 'Activity Log'">

              <!-- Transaction History -->
               
              <div class="mb-[24px] bg-white rounded-[12px] p-[16px]">
                <div class="flex items-center gap-[8px] mb-[16px]">
                  <span><img src="../assets/dollar.svg" alt="dollar"></span>
                  <p class="font-semibold text-[16px] text-black">Transaction History</p>
                </div>
                <div class="w-full h-[2px] bg-[#E5E5E5]"></div>
                <div class="flex flex-col items-center justify-center py-[40px] ">
                <div class="w-[100px] h-[100px] rounded-full bg-[#D9D9D966] flex items-center justify-center mb-[20px]">
                  <img src="../assets/pie.svg" class="w-10 h-10" alt="pie">
                </div>
                  <p class="text-[16px] text-[#4B5054]">No Transactions yet</p>
                </div>
              </div>

              <!-- Communication Log -->
              <div class=" bg-white rounded-[12px] p-[16px]">
                <div class="flex items-center gap-[8px] mb-[16px]">
                  <span><img src="../assets/dollar.svg" alt="dollar"></span>
                  <p class="font-semibold text-[16px] text-black">Communication Log</p>
                </div>
                    <div class="w-full h-[2px] bg-[#E5E5E5] mb-[16px]"></div>
                <div class="flex flex-col gap-[12px]">
                  <div class="flex items-start justify-between border-b border-[#F5F5F5] pb-[12px]">
                    <div class="flex items-start gap-[10px]">
                      <div class="w-[36px] h-[36px] bg-[#D9D9D9] rounded-full flex items-center justify-center flex-shrink-0">
                        <img src="../assets/mail.svg" alt="mail"></div>
                      <div>
                        <p class="text-sm font-semibold text-[#000000]">Welcome & KYC instructions</p>
                        <p class="text-xs text-[#000000]">via Email by system</p>
                      </div>
                    </div>
                    <span class="text-xs text-[#000000]">2025-03-21</span>
                  </div>
                  <div class="flex items-start justify-between border-b border-[#F5F5F5] pb-[12px]">
                    <div class="flex items-start gap-[10px]">
                      <div class="w-[36px] h-[36px] bg-[#D9D9D9] rounded-full flex items-center justify-center flex-shrink-0">
                        <img src="../assets/phone.svg" alt="phone"></div>
                      <div>
                        <p class="text-sm font-semibold text-[#000000]">KYC follow-up reminder</p>
                        <p class="text-xs text-[#000000]">via Call - by Jane Smith</p>
                      </div>
                    </div>
                    <span class="text-xs text-[#000000]">2025-03-21</span>
                  </div>
                </div>
              </div>

            </div>

            <!-- SUPPORT HISTORY TAB -->
            <div v-if="activeTab === 'Support History'" class="bg-white rounded-[12px] p-[16px]">
              <div class="flex items-center gap-[8px] mb-[16px]">
                <span><img src="../assets/dollar.svg" alt="dollar"></span>
                <p class="font-semibold text-[#000000]">Support Tickets</p>
              </div>
              <div class="w-full h-[2px] bg-[#E5E5E5] mb-[16px]"></div>
              <div class="flex flex-col items-center justify-center py-[60px] ">
                <div class="w-[100px] h-[100px] rounded-full bg-[#D9D9D966] flex items-center justify-center mb-[20px]">
                  <img src="../assets/pie.svg" class="w-10 h-10" alt="pie">
                </div>
                <p class="text-[16px] text-[#4B5054]">No Transactions yet</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import overviewchart from '../components/overviewchart.vue'
import doughnutchart from '../components/doughnutchart.vue'

const activeTab = ref('Overview')

const tabs = ['Overview', 'Profile &KYC', 'Holdings', 'Activity Log', 'Support History']

const documents = [
  'BVN Verification',
  'Government-Issued ID (NIN)',
  'Selfie / Liveness Check',
  'Proof of Address',
  'Signature Upload',
]
</script>