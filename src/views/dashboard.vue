<template>
  <div class="flex h-screen w-full bg-[#F4F0F0] overflow-hidden">

    <!-- Sidebar -->
     <aside class="hidden md:flex bg-[#0F151F] flex-col text-white w-[253px] h-screen fixed top-0 left-0 p-6 z-20 flex-shrink-0">
      <div class="flex flex-col gap-[45px] mt-[65px]">
        <router-link to="/" class="flex gap-[10px] text-white hover:text-[#FD4F00]  bg-[#1E2736] px-[10px] py-[8px] rounded-[8px]">
          <img src="../assets/dashboard.svg" class="w-[18px] h-[18px] mt-[4px]"/>
          Dashboard
        </router-link>
        <router-link to="/retail" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/retail.svg" class="w-[18px] h-[18px] mt-[4px]"/>
          Retail Clients
        </router-link>
        <router-link to="/investment-product" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/investment.svg" class="w-[18px] h-[18px] mt-[4px]"/> Investment Product
        </router-link>
        <router-link to="/campaigns" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/campaign.svg" class="w-[18px] h-[18px] mt-[4px]"/>
          Campaigns
        </router-link>
        <router-link to="/investor" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/investor.svg" class="w-[18px] h-[18px] mt-[4px]"/>
          Investor Education
        </router-link>
        <router-link to="/help-center" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/help-center.svg" class="w-[18px] h-[18px] mt-[4px]"/>
          Help Center & Support
        </router-link>
        <router-link to="/notifications" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/notifications.svg" class="w-[18px] h-[18px] mt-[4px]"/>
          Notifications
        </router-link>
      </div>
    </aside>

    <!-- Right Area -->
    <div class="flex flex-col flex-1 ml:0 md:ml-[253px] h-screen overflow-hidden">

      <!-- Navbar -->
      <nav class="h-[95px] w-full bg-white shadow-md flex items-center justify-between px-[29px] flex-col md:flex-row flex-shrink-0">
        <button class="bg-[#F5F5F5] rounded-[8px]  w-full md:w-[430px] h-[34px] py-[5px] px-[8px] flex items-center gap-[10px] text-[#A9A9A9]">
          <img src="../assets/search-icon.svg" class="w-[24px] h-[24px]" alt="search icon"/>
          Search clients, products or campaigns...
        </button>
        <div class="flex items-center gap-[12px]">
          <div class="flex items-center gap-[10px]">
            <img src="../assets/notification.svg" class="w-[22px] h-[24px]" alt="notification icon"/>
            <img src="../assets/picture.svg" class="w-[42px] h-[42px] rounded-full" alt="user avatar"/>
            <span class="text-sm font-medium text-gray-800">Jane Peters</span>
            <img src="../assets/down-arrow.svg" class="w-[10px] h-[10px]" alt="dropdown"/>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="flex-1 overflow-y-auto px-[20px] py-[24px]">

        <!-- Page Header -->
        <div class="flex justify-between items-center py-4">
          <div>
            <h1 class="text-[#2D3643] font-bold text-[29px]">Dashboard Overview</h1>
            <p class="text-[16px] text-[#2D3643]">Welcome back, here's what's happening with your retail portfolio</p>
          </div>
          <div class="flex gap-4">
           <select class="w-[140px] h-[40px] px-3 text-sm font-semibold text-[#4B5054] bg-white border border-[#E5E5E5] rounded-lg outline-none cursor-pointer">
              <option>Today</option>
              <option>This Week</option>
              <option>This Month</option>
              <option>Last Month</option>
              <option>Last Year</option>
           </select>
           <button 
              @click="handleExport"
              :disabled="exporting"
              class="bg-[#FD4F00] p-[10px] w-[146px] h-[40px] gap-[8px] text-white rounded-lg flex items-center justify-center font-semibold text-sm disabled:opacity-60"
            >
              <img src="../assets/download-icon.svg" alt="download-icon"/>
              {{ exporting ? 'Exporting...' : 'Export Report' }}
          </button>
          <button @click="scrollToQuickActions" class="flex items-center gap-[6px] bg-[#FFF0EB] text-[#FD4F00] px-[14px] py-[8px] rounded-[8px] text-sm font-medium">
            <span class="text-xl font-light">+</span>
            Quick Action
          </button>
          </div>
        </div>

        <!-- Priority Stream -->
        <div class="flex items-center ml-3 mt-[10px] gap-[16px]">
          <img src="../assets/flash.svg" alt="flash"/>
          <p class="font-semibold text-base text-black mb-[8px]">PRIORITY STREAM</p>
        </div>
        <div class="flex gap-3">
          <div class="flex-1 bg-white rounded-lg p-4 border-l-4 border-red-500">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                <img src="../assets/red-profile.svg" class="w-4 h-4"/>
              </div>
              <div>
                <p class="font-semibold text-sm whitespace-nowrap">Overdue KYC Verifications</p>
                <p class="text-xs text-gray-500 whitespace-nowrap">12 clients pending verifications > 48 hrs</p>
                <router-link :to="{ path: '/investor', query: { highlight: 'client Assignments' } }">
                  <a class="text-xs text-red-500 mt-1 block">Review List →</a>
                </router-link>
              </div>
            </div>
          </div>
          <div class="flex-1 bg-white rounded-lg p-4 border-l-4 border-yellow-400">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <img src="../assets/yellow-profile.svg" class="w-4 h-4"/>
              </div>
              <div>
                <p class="font-semibold text-sm whitespace-nowrap">Campaign Underperformance</p>
                <p class="text-xs text-gray-500 whitespace-nowrap">SME Growth email open rate before 19th</p>
                <router-link to="/campaigns">
                  <a class="text-xs text-orange-400 mt-1 block">Analyze Campaign →</a>
                </router-link>
              </div>
            </div>
          </div>
          <div class="flex-1 bg-white rounded-lg p-4 border-l-4 border-blue-500">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <img src="../assets/ticket.svg" class="w-4 h-4"/>
              </div>
              <div>
                <p class="font-semibold text-sm whitespace-nowrap">High Ticket volume</p>
                <p class="text-xs text-gray-500 whitespace-nowrap">Spike in inquiries regarding new "skuk" fund</p>
               <router-link :to="{ path: '/help-center', query: { highlight: 'support ticket' } }">
                  <span class="text-xs text-blue-500 mt-1 block">View Queue →</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats Cards -->
        <div class="flex gap-4 mt-4">
          <div class="flex-1 bg-white rounded-lg p-4">
            <div class="flex justify-between items-center mb-2">
              <span class="w-6 h-6 rounded-md bg-[#F0FDF4] flex items-center justify-center">
                <img src="../assets/green-profile.svg" alt="green-profile"/>
              </span>
              <img src="../assets/stock-rise.svg" alt="stock-rise"/>
            </div>
            <p class="text-2xl font-semibold">1,234</p>
            <p class="text-xs text-gray-500">New clients Onboarded</p>
          </div>
          <div class="flex-1 bg-white rounded-lg p-4">
            <div class="flex justify-between items-center mb-2">
              <span class="w-6 h-6 rounded-md bg-[#EFF6FF] flex items-center justify-center">
                <img src="../assets/blue-oval.svg" alt="blue-oval"/>
              </span>
              <img src="../assets/stock-rise.svg" alt="stock-rise"/>
            </div>
            <p class="text-2xl font-semibold">$4.2M</p>
            <p class="text-xs text-gray-500">Retail AUM Growth</p>
          </div>
          <div class="flex-1 bg-white rounded-lg p-4">
            <div class="flex justify-between items-center mb-2">
              <span class="w-6 h-6 rounded-md bg-[#FEFCE8] flex items-center justify-center">
                <img src="../assets/check-mark.svg" alt="checkmark"/>
              </span>
              <img src="../assets/stock-down.svg" alt="stock-down"/>
            </div>
            <p class="text-2xl font-semibold">24m</p>
            <p class="text-xs text-gray-500">Avg. KYC Turnaround</p>
          </div>
          <div class="flex-1 bg-white rounded-lg p-4">
            <div class="flex justify-between items-center mb-2">
              <span class="w-6 h-6 rounded-md bg-[#FAF5FF] flex items-center justify-center">
                <img src="../assets/smile-emoji.svg" alt="smiley"/>
              </span>
              <span class="text-xs text-[#4B5054] font-semibold bg-gray-100 px-2 py-1 rounded-md">NPS</span>
            </div>
            <p class="text-2xl font-semibold">72</p>
            <p class="text-xs text-gray-500">Client Satisfaction Score</p>
          </div>
        </div>

        <!-- Charts Row -->
        <div class="flex gap-6 mt-6 mb-6">
          <div class="flex-1 bg-white rounded-xl p-6">
            <div class="flex justify-between items-center mb-4">
              <p class="font-semibold text-sm text-[#000000]">Acquisition Funnel</p>
              <span class="text-[#000000] cursor-pointer">•••</span>
            </div>
            <div class="flex flex-col items-center gap-0">
              <div class="flex items-center gap-3 w-full">
                <span class="text-xs text-[#000000] w-[90px] text-right flex-shrink-0">Leads</span>
                <div class="flex flex-col items-center flex-1">
                  <img src="../assets/1st-rect.svg" alt="funnel-1" class="w-full"/>
                  <img src="../assets/1st-bottom.svg" alt="bottom-1" class="w-full"/>
                </div>
              </div>
              <div class="flex items-center gap-3 w-full">
                <span class="text-xs text-[#000000] w-[90px] text-right flex-shrink-0">KYC Started</span>
                <div class="flex flex-col items-center flex-1">
                  <img src="../assets/2nd-rect.svg" alt="funnel-2" class="w-[88%]"/>
                  <img src="../assets/2nd-bottom.svg" alt="bottom-2" class="w-[88%]"/>
                </div>
              </div>
              <div class="flex items-center gap-3 w-full">
                <span class="text-xs text-[#000000] w-[90px] text-right flex-shrink-0">KYC Approval</span>
                <div class="flex flex-col items-center flex-1">
                  <img src="../assets/3rd-rect.svg" alt="funnel-3" class="w-[72%]"/>
                  <img src="../assets/3rd-buttom.svg" alt="bottom-3" class="w-[72%]"/>
                </div>
              </div>
              <div class="flex items-center gap-3 w-full">
                <span class="text-xs text-[#000000] w-[90px] text-right flex-shrink-0">Onboarded</span>
                <div class="flex flex-col items-center flex-1">
                  <img src="../assets/4th-rect.svg" alt="funnel-4" class="w-[56%]"/>
                  <img src="../assets/4th-buttom.svg" alt="bottom-4" class="w-[56%]"/>
                </div>
              </div>
              <div class="flex items-center gap-3 w-full">
                <span class="text-xs text-[#000000] w-[90px] text-right flex-shrink-0">Leads</span>
                <div class="flex flex-col items-center flex-1">
                  <img src="../assets/5th-rect.svg" alt="funnel-5" class="w-[40%]"/>
                  <img src="../assets/5th-buttom.svg" alt="bottom-5" class="w-[40%]"/>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-1 bg-white rounded-xl p-6">
            <div class="flex justify-between items-center mb-4">
              <p class="font-semibold text-sm">Product Adoption</p>
              <span class="text-[#000000] cursor-pointer">•••</span>
            </div>
            <div class="pl-4 w-[276px] h-[276px] flex items-center justify-center">
              <img src="../assets/elipse-tool.svg" alt="elipse" class="w-full"/>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div ref="quickActionsRef" class="mb-6 p-6 bg-white rounded-xl">
          <p class="font-semibold text-sm mb-4">Quick Actions</p>
          <div class="flex gap-4">
             <router-link to="new-app" class="flex-1">
             <button class=" w-full flex-1 bg-[#228B22] text-white rounded-xl py-4 flex flex-col items-center gap-2">
                <img src="../assets/colorless-profile.svg" class="w-6 h-6"/>
                <span class="text-xs font-medium">Onboard New Client</span>
             </button>
             </router-link>
             <router-link to="campaignmanagement" class="flex-1">
            <button class="w-full flex-1 bg-[#4B5054] text-white rounded-xl py-4 flex flex-col items-center gap-2">
              <img src="../assets/megaphone.svg" class="w-6 h-6"/>
              <span class="text-xs font-medium">Launch Campaign</span>
            </button>
            </router-link>
             <router-link to="investor" class="flex-1">
            <button class="w-full flex-1 bg-[#313EB2] text-white rounded-xl py-4 flex flex-col items-center gap-2">
              <img src="../assets/grad-cap.svg" class="w-6 h-6"/>
              <span class="text-xs font-medium">Schedule Education</span>
            </button>
            </router-link>
            <router-link to="compliance" class="flex-1">
            <button class="w-full flex-1 bg-[#E50303] text-white rounded-xl py-4 flex flex-col items-center gap-2">
              <img src="../assets/traffic.svg" class="w-6 h-6"/>
              <span class="text-xs font-medium">Compliance Alerts</span>
            </button>
            </router-link>
            <router-link to="help-center" class="flex-1">   
            <button class="w-full flex-1 bg-[#FD4F00] text-white rounded-xl py-4 flex flex-col items-center gap-2">
              <img src="../assets/headphone.svg" class="w-6 h-6"/>
              <span class="text-xs font-medium">View support tickets</span>
            </button>
            </router-link>
            
             
            <button class=" w-full flex-1 bg-[#CB30E0] text-white rounded-xl py-4 flex flex-col items-center gap-2">
              <img src="../assets/bar-chart.svg" class="w-6 h-6"/>
              <span class="text-xs font-medium">Generate Report</span>
            </button>
          </div>
        </div>

        <!-- Bottom Row -->
        <div class="flex flex-col gap-6">
          <div class="flex gap-6">

            <!-- Quick Onboard -->
            <div class="bg-white rounded-xl p-6 w-[280px] flex-shrink-0">
              <div class="flex justify-between items-center mb-1">
                <p class="font-bold text-sm">Quick Onboard</p>
                <span class="text-xs bg-[#FD4F0033] text-[#FD4F00] px-3 py-1 rounded-full">Step 1</span>
              </div>
              <p class="text-xs text-[#000000] mb-3">First Investment</p>
              <div class="w-full h-1 bg-[#D9D9D9] rounded-full mb-6">
                <div class="h-1 bg-[#FD4F00] rounded-full w-[30%]"></div>
              </div>
             <div class="flex flex-col gap-4">
              <div>
                <label class="text-xs font-medium text-[#000000] mb-1 block">Client Name</label>
                <input 
                  v-model="clientName"
                  type="text" 
                  placeholder="Full Legal Name" 
                  class="w-full border border-[#C4C4C4] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#FD4F00]"
                />
              </div>
              <div>
                <label class="text-xs font-medium text-[#000000] mb-1 block">Email Address</label>
                <input 
                  v-model="clientEmail"
                  type="email" 
                  placeholder="client@gmail.com" 
                  class="w-full border border-[#C4C4C4] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#FD4F00]"
                />
              </div>
              <div>
                <label class="text-xs font-medium text-[#000000] mb-1 block">ID Number (BVN/NIN)</label>
                <div class="relative">
                  <input 
                    v-model="clientBvn"
                    type="text" 
                    placeholder="Enter ID Number" 
                    class="w-full border border-[#C4C4C4] rounded-lg px-3 py-2 text-sm outline-none focus:border-[#FD4F00] pr-8"
                  />
                  <span class="absolute right-3 top-1/2 -translate-y-1/2">
                    <img src="../assets/orange-check.svg" class="w-[20px] h-[20px]" alt="orange-check"/>
                  </span>
                </div>
                <p class="text-xs text-[#FD4F00] mt-3 font-semibold flex items-center gap-[4px]">
                  <img src="../assets/shield.svg" alt=""/> Real-time validation active
                </p>
              </div>
            </div>

            <!-- Error message - only shows if fields are empty -->
            <p v-if="formError" class="text-xs text-red-500 mt-2">{{ formError }}</p>

            <!-- Button now calls continueToProfile instead of router-link -->
            <button 
              @click="continueToProfile"
              class="w-full h-[45px] bg-[#FD4F00] text-white rounded-xl py-3 text-sm font-medium mt-6"
            >
              Continue to Profiling
            </button>
            </div>

            <!-- Client Lists -->
            <div class="flex-1 bg-white rounded-xl p-6">
              
              <!-- Header & Tabs -->
              <div class="flex justify-between items-center mb-4">
                <p class="font-bold text-lg text-[#0F151F]">Client Lists</p>
                
                <!-- FILTER TABS: Pill-shaped, matching the screenshot -->
                <div class="flex gap-2">
                  <router-link to="/retail">
                  <button 
                    class="text-[11px] font-semibold px-4 py-1.5 rounded-full transition-colors text-white bg-[#FD4F00] hover:text-[#4B5054]"
                  >View all</button>
                  </router-link>
                  <button 
                    @click="activeTab = 'Pending KYC'"
                    :class="activeTab === 'Pending KYC' ? 'text-[#FD4F00] bg-[#FFF0EB]' : 'text-[#A9A9A9] bg-[#F5F5F5] hover:text-[#4B5054]'"
                    class="text-[11px] font-semibold px-4 py-1.5 rounded-full transition-colors"
                  >Pending KYC</button>
                  
                  <button 
                    @click="activeTab = 'High Value'"
                    :class="activeTab === 'High Value' ? 'text-[#FD4F00] bg-[#FFF0EB]' : 'text-[#A9A9A9] bg-[#F5F5F5] hover:text-[#4B5054]'"
                    class="text-[11px] font-semibold px-4 py-1.5 rounded-full transition-colors"
                  >High Value</button>
                  
                  <button 
                    @click="activeTab = 'Clients'"
                    :class="activeTab === 'Clients' ? 'text-[#FD4F00] bg-[#FFF0EB]' : 'text-[#A9A9A9] bg-[#F5F5F5] hover:text-[#4B5054]'"
                    class="text-[11px] font-semibold px-4 py-1.5 rounded-full transition-colors"
                  >Clients</button>
                </div>
              </div>

              <!-- List Headers (Solid gray background, exact spacing) -->
              <div class="grid grid-cols-[2fr_1fr_1fr_1.5fr_1fr_50px] gap-4 bg-[#F9F9F9] text-[#4B5054] text-[12px] font-semibold uppercase tracking-wider px-4 py-3 rounded-t-xl border-b border-[#E5E7EB]">
                <span>CLIENT NAME</span>
                <span>STATUS</span>
                <span>AUM</span>
                <span>RISK PROFILE</span>
                <span>LAST ACTIVITY</span>
                <span class="text-right">ACTION</span>
              </div>

              <!-- List Items: Loop through filteredClients (max 5) -->
              <div class="flex flex-col">
                <div 
                  v-for="client in filteredClients" 
                  :key="client.id" 
                  class="grid grid-cols-[2fr_1fr_1fr_1.5fr_1fr_50px] gap-4 items-center py-4 px-4 border-b border-[#F5F5F5] hover:bg-gray-50 transition-colors"
                >
                  
                  <!-- CLIENT NAME -->
                  <div class="flex items-center gap-3 min-w-0">
                    <div class="w-9 h-9 rounded-full bg-[#E5E7EB] flex items-center justify-center text-xs font-semibold text-[#4B5054] flex-shrink-0">{{ client.initials }}</div>
                    <div class="min-w-0 flex-1">
                      <p class="text-sm font-semibold text-[#0F151F] truncate">{{ client.name }}</p>
                      <p class="text-[11px] text-[#A9A9A9] truncate">ID: #{{ client.id }}</p>
                    </div>
                  </div>
                  
                  <!-- STATUS -->
                  <div class="min-w-0">
                    <span 
                      class="text-[11px] px-1 py-1 rounded-[8px] whitespace-nowrap inline-block text-center font-medium"
                      :class="client.status === 'Active' ? 'text-[#22C55E] bg-[#DCFCE7]' : (client.status === 'Draft' ? 'text-[#4B5054] bg-[#F5F5F5]' : 'text-[#FD4F00] bg-[#FFF0EB]')"
                    >{{ client.status }}</span>
                  </div>
                  
                  <!-- AUM -->
                  <div class="min-w-0">
                    <span class="text-sm font-semibold text-[#0F151F] truncate block">{{ client.aumFormatted }}</span>
                  </div>
                  
                  <!-- RISK PROFILE -->
                  <div class="flex items-center gap-2 min-w-0">
                    <template v-if="client.riskLabel !== 'Not set' && client.riskLabel !== 'Not profiled'">
                      <div class="w-10 sm:w-12 h-1.5 bg-gray-200 rounded-full overflow-hidden flex-shrink-0">
                        <div class="h-full rounded-full" :class="client.riskBg" :style="{ width: client.riskWidth }"></div>
                      </div>
                      <span class="text-xs text-[#A9A9A9] truncate">{{ client.riskLabel }}</span>
                    </template>
                    <template v-else>
                      <span class="text-xs text-[#A9A9A9] truncate">Not set</span>
                    </template>
                  </div>
                  
                  <!-- LAST ACTIVITY -->
                  <div class="min-w-0">
                    <span class="text-xs text-[#A9A9A9] truncate block">{{ client.time }}</span>
                  </div>

                  <!-- ACTION ARROW -->
                  <div class="text-right flex justify-end">
                    <span 
                      @click="goToProfile(client.id)"
                      class="text-[#A9A9A9] text-lg cursor-pointer hover:text-[#0F151F] font-bold">›</span>
                  </div>

                </div>

                <!-- Empty State Check -->
                <div v-if="filteredClients.length === 0" class="py-6 text-center text-sm text-[#A9A9A9]">
                  No clients found for this filter.
                </div>
              </div>
            </div>

          </div>

          <!-- Investor Education Hub -->
          <div class="bg-gray-900 rounded-xl p-6 mb-6">
            <div class="flex justify-between items-center mb-4">
              <div>
                <p class="font-semibold text-white text-sm">Investor Education Hub</p>
                <p class="text-xs text-gray-400">Upcoming webinars & tutorials</p>
              </div>
             
            </div>
            <div class="flex flex-col gap-3">
              <div class="flex items-center gap-4 bg-gray-800 rounded-xl p-4">
                <div class="w-10 h-10 bg-[#492A22] rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="../assets/video.svg" alt="video"/>
                </div>
                <div>
                  <p class="text-sm font-medium text-white">Understanding Risk Profiles</p>
                  <p class="text-xs text-gray-400">Understanding Risk Profiles</p>
                </div>
              </div>
              <div class="flex items-center gap-4 bg-gray-800 rounded-xl p-4">
                <div class="w-10 h-10 bg-[#492A22] rounded-lg flex items-center justify-center flex-shrink-0">
                  <img src="../assets/video.svg" alt="video"/>
                </div>
                <div>
                  <p class="text-sm font-medium text-white">Understanding Risk Profiles</p>
                  <p class="text-xs text-gray-400">Understanding Risk Profiles</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
    
    <Transition name="modal">
      <div 
        v-if="showModal"
        class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30"
        @click.self="showModal = false"
      >
        <div class="bg-white rounded-2xl p-10 w-[420px] flex flex-col items-center gap-4 shadow-xl">
          <div class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <span class="text-green-500 text-4xl font-bold">✓</span>
          </div>
          <h2 class="text-xl font-bold text-gray-900 mt-2">Report Exported!</h2>
          <p class="text-sm text-gray-500 text-center">
            Your dashboard report has been successfully exported and is ready to download.
          </p>
          <button 
            @click="showModal = false"
            class="w-full bg-[#FD4F00] text-white py-3 rounded-xl font-semibold text-sm mt-2"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'


import { useClientStore } from '../stores/clients' 

const router = useRouter()
const clientStore = useClientStore() 

// Smooth scroll
const quickActionsRef = ref(null)
const scrollToQuickActions = () => {
  if (quickActionsRef.value) {
    quickActionsRef.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// Active tab
const activeTab = ref('View All')

// GET DATA FROM PINIA AND FORMAT IT FOR THE DASHBOARD
const formattedClients = computed(() => {
  return clientStore.clients.map(client => {
    // Automatically generate initials (e.g., "Sarah Akpola" -> "SA")
    const nameParts = client.name ? client.name.split(' ') : ['U', 'N']
    const initials = nameParts.length > 1 
      ? (nameParts[0][0] + nameParts[1][0]).toUpperCase() 
      : (nameParts[0][0] || 'U').toUpperCase()

    return {
      ...client,
      initials: initials,
      aumFormatted: client.aum, 
      riskLabel: client.riskProfile,
      riskBg: client.riskColor,
      time: client.lastActivity
    }
  })
})

// Filter Logic & Slice to max 5 items!
const filteredClients = computed(() => {
  let result = formattedClients.value
  
  if (activeTab.value === 'Pending KYC') {
    result = result.filter(c => c.status === 'Pending KYC')
  } else if (activeTab.value === 'High Value') {
    result = result.filter(c => {
      if (!c.aum || c.aum === '...') return false
      const numericAum = parseInt(String(c.aum).replace(/\D/g, ''))
      return numericAum >= 50000
    })
  }
  
  // Return only the first 5 clients to keep the dashboard summarized
  return result.slice(0, 5)
})

// ── QUICK ONBOARD FORM ────────────────────────────────────
const clientName = ref('')
const clientEmail = ref('')
const clientBvn = ref('')
const formError = ref('')

function continueToProfile() {
  if (!clientName.value || !clientEmail.value || !clientBvn.value) {
    formError.value = 'Please fill in all fields before continuing.'
    return
  }
  formError.value = ''
  router.push({
    path: '/new-app',
    query: {
      name: clientName.value,
      email: clientEmail.value,
      bvn: clientBvn.value
    }
  })
}

// ── EXPORT ────────────────────────────────────────────────
const showModal = ref(false)
const exporting = ref(false)

function handleExport() {
  exporting.value = true
  setTimeout(() => {
    exporting.value = false
    showModal.value = true
  }, 1500)
}

function goToProfile(clientId) {
  router.push(`/client/${clientId}`)
}
</script>
