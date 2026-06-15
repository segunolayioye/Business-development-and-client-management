

<template>
  <div class="flex h-screen overflow-hidden bg-[#F4F0F0]">
   <aside class="bg-[#0F151F] text-white w-[253px] h-screen fixed top-0 left-0 p-6 z-20 flex-shrink-0">
      <div class="flex flex-col gap-[45px] mt-[65px]">
        <router-link to="/" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/dashboard.svg" class="w-[18px] h-[18px] mt-[4px]"/>
          Dashboard
        </router-link>
        <router-link to="/retail" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/retail.svg" class="w-[18px] h-[18px] mt-[4px]"/>
          Retail Clients
        </router-link>
        <router-link to="/investment-product" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/investment.svg" class="w-[18px] h-[18px] mt-[4px]"/>
          Investment Product
        </router-link>
        <router-link to="/campaigns" class="flex gap-[10px] text-white hover:text-[#FD4F00]  bg-[#1E2736] px-[10px] py-[8px] rounded-[8px]">
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

    <div class="flex-1 flex flex-col h-screen overflow-hidden ml-[253px]">
      <nav
        class="h-[95px] w-full bg-white shadow-md flex items-center justify-between px-[40px] flex-shrink-0"
      >
        <div class="flex flex-col">
          <div class="font-semibold text-xl text-[#000000]">
            Campaign Strategy
          </div>
          <p class="text-[#4B5054] text-[14px]">
            Manage Planning execution, and performance analytics.
          </p>
        </div>
        <div
          class="bg-[#F5F5F5] rounded-lg px-5 py-3 flex items-center gap-2 w-[320px]"
        >
          <img
            src="../assets/search-icon.svg"
            class="w-[18px] h-[18px]"
            alt="search icon"
          />
          <input
            type="text"
            placeholder="Search campaigns, clients or products..."
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
        <!-- Top Actions -->
        <div class="flex justify-end items-center gap-[10px] mb-[20px]">
        <button
          @click="handleExport"
          :disabled="exporting"
          class="flex items-center justify-center gap-[6px] bg-white text-[#4B5054] px-[14px] py-[8px] rounded-[8px] text-sm disabled:opacity-60"
        >
          <img src="../assets/gray-download.svg" class="w-5 h-5" alt="download">
          {{ exporting ? 'Exporting...' : 'Export Report' }}
        </button>
          <router-link to="/campaignmanagement">
          <button
            class="flex items-center gap-[6px] bg-[#22C55E] text-white px-[14px] py-[8px] rounded-[8px] text-sm font-medium"
          > <img src="../assets/white-cross.svg" class="w-3 h-3" alt="cross">
             Create Campaign
          </button>
          </router-link>
        </div>

        <!-- Stats Cards -->
        <div class="flex gap-[16px] mb-[24px]">
          <div class="flex-1 bg-white rounded-[12px] p-[16px] flex justify-between">
            <div>
              <p class="text-xs text-[#4B5054] uppercase">Active Campaigns</p>
              <p class="text-[24px] font-semibold text-[#0F151F] mt-[4px]">14</p>
              <span class="flex items-center justify-start gap-[6px] mt-3">
                <img src="../assets/up-2.svg" class="w-6 h-6 pt-[4px]" alt="arrow">
                 <p class="text-[12px] text-[#4B5054] mt-[4px]">vs last month</p>
              </span>
             
            </div>  
            <div class="rounded-[8px] w-[36px] h-[36px] bg-[#228B2233] items-center justify-center flex">
              <img src="../assets/announce.svg" alt="mic">
            </div>
          </div>
          <div class="flex-1 bg-white rounded-[12px] p-[16px] flex justify-between">
            <div>
              <p class="text-xs text-[#4B5054] uppercase">TOTAL LEADS</p>
              <p class="text-[24px] font-semibold text-[#0F151F] mt-[4px]">1.234</p>
              <span class="flex items-center justify-start gap-[6px]">
                <img src="../assets/green-up.svg" class="w-12 h-12 pt-[4px]" alt="arrow">
                 <p class="text-[12px] text-[#4B5054] mt-[4px]">Conversion Rate</p>
              </span>
             
            </div>  
            <div class="rounded-[8px] w-[36px] h-[36px] bg-[#313EB233] items-center justify-center flex">
              <img src="../assets/people.svg" alt="people">
            </div>
          </div>
          <div class="flex-1 bg-white rounded-[12px] p-[16px] flex justify-between">
            <div>
              <p class="text-xs text-[#4B5054] uppercase">AVG. OPEN RATE</p>
              <p class="text-[24px] font-semibold text-[#0F151F] mt-[4px]">42.8%</p>
              <span class="flex items-center justify-start gap-[6px] mt-[5px]">
                <img src="../assets/red-down.svg" class="w-10 h-10 pt-[4px]" alt="arrow">
                 <p class="text-[12px] text-[#4B5054] mt-[4px]">vs industry avg</p>
              </span>
             
            </div>  
            <div class="rounded-[8px] w-[36px] h-[36px] bg-[#E5030333] items-center justify-center flex">
              <img src="../assets/pdf.svg" class="w-5 h-5" alt="mic">
            </div>
          </div>
         <div class="flex-1 bg-white rounded-[12px] p-[16px] flex justify-between">
            <div>
              <p class="text-xs text-[#4B5054] uppercase">ROI (YTD)</p>
              <p class="text-[24px] font-semibold text-[#0F151F] mt-[4px]">3.2x</p>
              <span class="flex items-center justify-start gap-[6px] mt-3">
                <img src="../assets/up-ontrack.svg" class="w-15 h-15 pt-[4px]" alt="arrow">
                 <p class="text-[12px] text-[#4B5054] mt-[4px]">Target 3.0x</p>
              </span>
             
            </div>  
            <div class="rounded-[8px] w-[36px] h-[36px] bg-[#228B2233] items-center justify-center flex">
              <img src="../assets/money.svg" alt="mic">
            </div>
          </div>
        </div>

        <!-- Campaign Performance + Channel Efficiency -->
        <div class="flex gap-[16px] mb-[24px]">
          <!-- Chart Card -->
          <div class="bg-white rounded-[12px] p-[20px] flex-1">
            <div class="flex items-center justify-between mb-[16px]">
              <p class="font-semibold text-[16px] text-[#0F151F] ">
                Campaign Performance
              </p>
              <div class="flex items-center justify-end gap-[130px]">
                <div class="flex items-center justify-end gap-[12px]"> 
                  <div class="flex items-center gap-[6px]">
                    <div
                      class="w-[10px] h-[10px] rounded-full bg-[#313EB2]"
                    ></div>
                    <span class="text-xs text-[#A9A9A9]">Sent</span>
                  </div>
                  <div class="flex items-center gap-[6px]">
                    <div
                      class="w-[10px] h-[10px] rounded-full bg-[#4B5054]"
                    ></div>
                    <span class="text-xs text-[#A9A9A9]">Opened</span>
                  </div>
                </div>
                <div class="flex items-center gap-[8px]">
                  <span class="text-xs text-[#4B5054]"> Last 30 Days </span>
                  <img
                    src="../assets/gray-downarrow.svg"
                    class="w-[16px] h-[16px]"
                    alt="dropdown-arrow">
                </div>
                
              </div>
            </div>
            <div
              class="w-full h-[200px] bg-[#FFFFFF] rounded-[8px] flex items-center justify-center"
            >
             <div class="w-full h-[200px] mt-32"><curvechart /></div>
            </div>
           
          </div>

          <!-- Channel Efficiency -->
          <div class="bg-white rounded-[12px] p-[20px] w-[280px]">
            <p class="font-semibold text-[16px] text-[#0F151F] mb-[16px]">
              Channel Efficiency
            </p>
            <div class="flex flex-col gap-[16px]">
              <div>
                <div class="flex justify-between mb-[4px]">
                  <span class="text-sm text-[#0F151F]">Email Marketing</span>
                  <span class="text-sm font-semibold">69%</span>
                </div>
                <div class="w-full h-[6px] bg-[#D9D9D9] rounded-full">
                  <div class="h-[6px] bg-[#22C55E] rounded-full w-[69%]"></div>
                </div>
                <p class="text-xs text-[#A9A9A9] mt-[2px]">High Engagement</p>
                <p class="text-xs font-medium text-[#0F151F]">$12.5M</p>
              </div>
              <div>
                <div class="flex justify-between mb-[4px]">
                  <span class="text-sm text-[#0F151F]">SMS Alert</span>
                  <span class="text-sm font-semibold">24%</span>
                </div>
                <div class="w-full h-[6px] bg-[#D9D9D9] rounded-full">
                  <div class="h-[6px] bg-[#3B4FE0] rounded-full w-[24%]"></div>
                </div>
                <p class="text-xs text-[#A9A9A9] mt-[2px]">Instant Reach</p>
                <p class="text-xs font-medium text-[#0F151F]">$0.50M</p>
              </div>
              <div>
                <div class="flex justify-between mb-[4px]">
                  <span class="text-sm text-[#0F151F]">Social Ads</span>
                  <span class="text-sm font-semibold">11%</span>
                </div>
                <div class="w-full h-[6px] bg-[#D9D9D9] rounded-full">
                  <div class="h-[6px] bg-[#FD4F00] rounded-full w-[11%]"></div>
                </div>
                <p class="text-xs text-[#A9A9A9] mt-[2px]">Brand Awareness</p>
                <p class="text-xs font-medium text-[#0F151F]">$24 CM</p>
              </div>
              <div class="border-t border-[#F5F5F5] pt-[12px]">
                <p class="text-xs text-[#A9A9A9]">Top Performing Channel</p>
                <p class="text-sm text-[#FD4F00] font-medium mt-[2px]">
                  Email (Weekly Digest)
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Campaign Pipeline -->
        <div class="mb-[24px]">
          <p class="font-semibold text-[20px] text-[#0F151F] mb-[16px]">
            Campaign Pipeline
          </p>
          <div class="flex gap-[16px] overflow-x-auto">
            <!-- Planning Column -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-[6px] mb-[12px]">
                <div class="w-[8px] h-[8px] rounded-full bg-[#4B5054]"></div>
                <span class="text-xs font-semibold text-[#4B5054] uppercase"
                  >Planning</span>
                
              </div>
              <div class="flex flex-col gap-[12px]">
                <div class="bg-white rounded-[10px] p-[14px] border-l-4 border-[#D9D9D9]">
                  <div class="flex justify-between items-center mb-[8px]">
                    <span
                      class="bg-[#228B2233] text-[#228B22] text-[10px] px-[8px] py-[2px] rounded-full"
                      >Q4 Strategy</span
                    >
                    <span class="text-black cursor-pointer">⋮</span>
                  </div>
                  <p class="text-sm font-semibold text-black">
                    Halal Fund Launch
                  </p>
                  <p class="text-xs text-[#4B5054] mt-[4px]">
                    Initial drafting for the new Shari'ah compliant mutual fund
                    product...
                  </p>
                  <div class="flex justify-between items-center mt-[10px]">
                    <div class="flex -space-x-2">
                      <div
                        class="w-[24px] h-[24px] rounded-full"
                      ><img src="../assets/woman.svg" alt="pic"></div>
                      <div
                        class="w-[24px] h-[24px] rounded-full "
                      ><img src="../assets/woman.svg" alt="pic"></div>
                    </div>
                    <span class="text-[12px] text-[#4B5054] flex gap-1"><img src="../assets/black-clock.svg" alt="clock"> Nov 13</span>
                  </div>
                </div>
                <div class="bg-white rounded-[10px] p-[14px] border-l-4 border-[#D9D9D9] ">
                  <div class="flex justify-between items-center mb-[8px]">
                    <span
                      class="bg-[#313EB233] text-[#313EB2] text-[10px] px-[8px] py-[2px] rounded-full"
                      >Education</span
                    >
                    <span class="text-black cursor-pointer">⋮</span>
                  </div>
                  <p class="text-sm font-semibold text-[#0F151F]">
                    Halal Fund Launch
                  </p>
                  <div class="flex justify-between items-center mt-[10px]">
                    <div
                      class="w-[24px] h-[24px] rounded-full"
                    ><img src="../assets/woman.svg" alt=""></div>
                    <span class="flex gap-1 text-[12px] text-[#4B5054]"><img src="../assets/black-clock.svg" alt="pic"> TBD</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Active Column -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-[6px] mb-[12px]">
                <div class="w-[8px] h-[8px] rounded-full bg-[#228B22]"></div>
                <span class="text-xs font-semibold text-[#228B22] uppercase"
                  >Active</span
                >
              </div>
              <div class="flex flex-col gap-[12px]">
                <div class="bg-white rounded-[10px] p-[14px] border-l-4 border-[#228B22]">
                  <div class="flex justify-between items-center mb-[8px]">
                    <span
                      class="bg-[#228B2233] text-[#228B22] text-[10px] px-[8px] py-[2px] rounded-full"
                      >Promo</span
                    >
                    <span class="text-black cursor-pointer">⋮</span>
                  </div>
                  <p class="text-sm font-semibold text-black">
                    Year-End Investment Boost
                  </p>
                  <p class="text-xs text-[#4B5054] mt-[4px]">
                    Targeting dormant retail accounts with special incentives
                  </p>
                  <div class="flex gap-[8px] mt-[10px]">
                    <div class="flex-1 bg-[#E5E5E5] rounded-[6px] p-[6px]">
                      <p class="text-[10px] text-[#4B5054]">Open Rate</p>
                      <p class="text-sm font-semibold text-[#0F151F]">49%</p>
                    </div>
                    <div class="flex-1 bg-[#E5E5E5] rounded-[6px] p-[6px]">
                      <p class="text-[10px] text-[#4B5054]">Conv.</p>
                      <p class="text-sm font-semibold text-[#0F151F]">2.1%</p>
                    </div>
                  </div>
                  <div class="flex justify-between items-center mt-[10px]">
                    <div class="flex -space-x-2">
                      <div
                        class="w-[24px] h-[24px] rounded-full"
                      ><img src="../assets/woman.svg" alt="pic"></div>
                      <div
                        class="w-[24px] h-[24px] rounded-full"
                      ><img src="../assets/woman.svg" alt="pic"></div>
                    </div>
                    <span
                      class="bg-[#DCFCE7] text-[#22C55E] text-[10px] px-[8px] py-[2px] rounded-full"
                      >Live Now</span
                    >
                  </div>
                </div>
                <div class="bg-white rounded-[10px] p-[14px] border-l-4 border-[#228B22]">
                  <div class="flex justify-between items-center mb-[8px]">
                    <span
                      class="bg-[#313EB233] text-[#313EB2] text-[10px] px-[8px] py-[2px] rounded-[8px]"
                      >Education</span
                    >
                    <span class="text-black cursor-pointer">⋮</span>
                  </div>
                  <p class="text-sm font-semibold text-[#000000]">
                    Halal Fund Launch
                  </p>
                  <div
                    class="w-full h-[4px] bg-[#D9D9D9] rounded-full mt-[8px]"
                  >
                    <div
                      class="h-[4px] bg-[#4B5054] rounded-full w-[60%]"
                    ></div>
                  </div>
                  <div class="flex justify-between items-center mt-[10px]">
                    <div
                      class="w-[24px] h-[24px] rounded-full"
                    ><img src="../assets/woman.svg" alt="pic"></div>
                    <span class="flex gap-1 text-[12px] text-[#4B5054]"><img src="../assets/black-clock.svg" alt="clock"> TBD</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Planning Column 2 -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-[6px] mb-[12px]">
                <div class="w-[8px] h-[8px] rounded-full bg-[#313EB2]"></div>
                <span class="text-xs font-semibold text-[#313EB2] uppercase"
                  >Planning</span>
                
              </div>
              <div class="flex flex-col gap-[12px]">
                <div class="bg-white rounded-[10px] p-[14px] border-l-4 border-[#313EB2]">
                  <div class="flex justify-between items-center mb-[8px]">
                    <span
                      class="bg-[#313EB233] text-[#313EB2] text-[10px] px-[8px] py-[2px] rounded-full"
                      >Retargeting</span
                    >
                    <span class="text-black cursor-pointer">⋮</span>
                  </div>
                  <p class="text-sm font-semibold text-[#000000]">
                    Q3 Recovery Ads
                  </p>
                  <p class="text-xs text-[#4B5054] mt-[4px]">
                    Campaign ended. Generating final performance report
                  </p>
                  <div class="flex justify-between items-center mt-[10px]">
                    <div
                      class="w-[24px] h-[24px] rounded-full "
                    > <img src="../assets/woman.svg" alt="pic"></div>
                    <span
                      class="text-[#313EB2] text-[12px] px-[8px] py-[2px] rounded-full"
                      >Reviewing</span
                    >
                  </div>
                </div>
              </div>
            </div>

            <!-- Add Stage -->
           
          </div>
        </div>

        <!-- Recent Campaign Activity -->
        <div class="bg-white rounded-[12px] p-[20px] mb-[32px]">
          <p class="font-semibold text-[18px] text-[#0F151F] mb-[16px]">
            Recent Campaign Activity
          </p>
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-[#F5F5F5]">
                <th class="text-left text-xs text-[#4B5054] font-medium py-[10px]">CAMPAIGN NAME</th>
                <th class="text-left text-xs text-[#4B5054] font-medium py-[10px]">CHANNEL</th>
                <th class="text-left text-xs text-[#4B5054] font-medium py-[10px]">STATUS</th>
                <th class="text-left text-xs text-[#4B5054] font-medium py-[10px]">AUDIENCE</th>
                <th class="text-left text-xs text-[#4B5054] font-medium py-[10px]">BUDGET SPENT</th>
                <th class="text-left text-xs text-[#4B5054] font-medium py-[10px]">ACTION</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#F5F5F5]">
              <tr v-for="campaign in campaignList" :key="campaign.id">
                <td class="py-[14px] text-sm text-[#0F151F]">{{ campaign.name }}</td>
                <td class="py-[14px]">
                  <div class="flex items-center gap-[6px]">
                    <img :src="campaign.channelIcon" width="15" height="15" :alt="campaign.channel">
                    <span class="text-xs text-black">{{ campaign.channel }}</span>
                  </div>
                </td>
                <td class="py-[14px]">
                  <span
                    :class="campaign.statusStyle"
                    class="text-xs px-[10px] py-[4px] rounded-[8px]"
                  >
                    {{ campaign.status }}
                  </span>
                </td>
                <td class="py-[14px] text-xs text-black">{{ campaign.audience }}</td>
                <td class="py-[14px] text-xs text-black">{{ campaign.spent }}</td>
                <td class="py-[14px]">
                  <img 
                    src="../assets/pen.svg" 
                    class="w-[17px] h-[17px] cursor-pointer hover:opacity-70 transition-opacity" 
                    alt="Edit"
                    @click="openEditModal(campaign)"
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-between items-center mt-[16px] ">
      
            
          </div>
        </div>
      </div>
    </div>
    <Transition name="modal">
  <div
    v-if="showExportModal"
    class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30"
    @click.self="showExportModal = false"
  >
    <div class="bg-white rounded-2xl p-10 w-[420px] flex flex-col items-center gap-4 shadow-xl">

      <div class="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
        <span class="text-green-500 text-4xl font-bold">✓</span>
      </div>

      <h2 class="text-xl font-bold text-gray-900 mt-2">Report Exported!</h2>
      <p class="text-sm text-gray-500 text-center">
        Your campaign report has been successfully exported and is ready to download.
      </p>

      <button
        @click="showExportModal = false"
        class="w-full bg-[#22C55E] text-white py-3 rounded-xl font-semibold text-sm mt-2 hover:bg-[#16a34a] transition-colors"
      >
        Back to Campaigns
      </button>

    </div>
  </div>
</Transition>
<Transition name="modal">
      <div
        v-if="isEditModalOpen"
        class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30"
        @click.self="isEditModalOpen = false"
      >
        <div class="bg-white rounded-2xl p-8 w-[500px] flex flex-col gap-6 shadow-xl">
          <div class="flex justify-between items-center border-b border-[#F5F5F5] pb-4">
            <h2 class="text-xl font-bold text-[#0F151F]">Edit Campaign</h2>
            <button @click="isEditModalOpen = false" class="text-gray-400 hover:text-gray-700 text-2xl leading-none">&times;</button>
          </div>

          <div class="space-y-4" v-if="activeCampaign">
            <div>
              <label class="block text-sm font-medium text-[#4B5054] mb-1">Campaign Name</label>
              <input 
                v-model="activeCampaign.name" 
                type="text" 
                class="w-full border border-[#D9D9D9] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#22C55E]"
              />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-[#4B5054] mb-1">Status</label>
                <select 
                  v-model="activeCampaign.status" 
                  class="w-full border border-[#D9D9D9] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#22C55E]"
                >
                  <option value="Active">Active</option>
                  <option value="Scheduled">Scheduled</option>
                  <option value="Draft">Draft</option>
                  <option value="Approved">Approved</option>
                </select>
              </div>
              <div>
                <label class="block text-sm font-medium text-[#4B5054] mb-1">Audience</label>
                <input 
                  v-model="activeCampaign.audience" 
                  type="text" 
                  class="w-full border border-[#D9D9D9] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#22C55E]"
                />
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-[#4B5054] mb-1">Budget Spent</label>
              <input 
                v-model="activeCampaign.spent" 
                type="text" 
                class="w-full border border-[#D9D9D9] rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-[#22C55E]"
              />
            </div>
          </div>

          <div class="flex gap-3 mt-2">
            <button 
              @click="isEditModalOpen = false" 
              class="flex-1 bg-[#F5F5F5] text-[#4B5054] py-3 rounded-xl font-semibold text-sm hover:bg-[#E5E5E5] transition-colors"
            >
              Cancel
            </button>
            <button 
              @click="saveUpdates" 
              class="flex-1 bg-[#22C55E] text-white py-3 rounded-xl font-semibold text-sm hover:bg-[#16a34a] transition-colors"
            >
              Save Updates
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import curvechart from '../components/curvechart.vue'

// --- Export Modal Logic ---
const showExportModal = ref(false)
const exporting = ref(false)

function handleExport() {
  exporting.value = true
  setTimeout(() => {
    exporting.value = false
    showExportModal.value = true
  }, 1500)
}

// --- Edit Modal & Table Data Logic ---
const isEditModalOpen = ref(false)
const activeCampaign = ref(null)

// Reactive array of your campaign data to allow for editing
const campaignList = ref([
  { 
    id: 1, 
    name: 'Year-End Investment Boost', 
    channel: 'Email', 
    channelIcon: new URL('../assets/email-logo.svg', import.meta.url).href,
    status: 'Active', 
    statusStyle: 'bg-[#228B2233] text-[#228B22]',
    audience: 'Dormant Clients', 
    spent: '$1,200' 
  },
  { 
    id: 2, 
    name: 'SME Growth Webinar', 
    channel: 'LinkedIn', 
    channelIcon: new URL('../assets/linkedin.svg', import.meta.url).href,
    status: 'Scheduled', 
    statusStyle: 'bg-[#FEF9C3] text-[#A16207]',
    audience: 'High Net Worth', 
    spent: '$1,200' 
  },
  { 
    id: 3, 
    name: 'Year-End Investment Boost', 
    channel: 'SMS', 
    channelIcon: new URL('../assets/message-logo.svg', import.meta.url).href,
    status: 'Draft', 
    statusStyle: 'bg-[#4B505433] text-[#4B5054]',
    audience: 'SME Owners', 
    spent: '$1,200' 
  },
  { 
    id: 4, 
    name: 'Halal Fixed Pre-Launch', 
    channel: 'Email', 
    channelIcon: new URL('../assets/email-logo.svg', import.meta.url).href,
    status: 'Approved', 
    statusStyle: 'bg-[#228B2233] text-[#228B22]',
    audience: 'Dormant Clients', 
    spent: '$1,200' 
  }
])

const openEditModal = (campaign) => {
  // Clone the object to prevent real-time table updates before saving
  activeCampaign.value = { ...campaign }
  isEditModalOpen.value = true
}

const saveUpdates = () => {
  // Find the index of the campaign being edited
  const index = campaignList.value.findIndex(c => c.id === activeCampaign.value.id)
  
  if (index !== -1) {
    // Basic logic to update the style based on new status selection
    if (activeCampaign.value.status === 'Active' || activeCampaign.value.status === 'Approved') {
      activeCampaign.value.statusStyle = 'bg-[#228B2233] text-[#228B22]'
    } else if (activeCampaign.value.status === 'Scheduled') {
      activeCampaign.value.statusStyle = 'bg-[#FEF9C3] text-[#A16207]'
    } else {
      activeCampaign.value.statusStyle = 'bg-[#4B505433] text-[#4B5054]'
    }

    // Save the cloned data back to the main array
    campaignList.value[index] = { ...activeCampaign.value }
  }
  
  isEditModalOpen.value = false
}
</script>