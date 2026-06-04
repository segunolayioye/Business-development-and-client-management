

<template>
  <div class="flex h-screen overflow-hidden bg-[#F4F0F0]">
   <aside class="bg-[#0F151F] text-white w-[253px] h-screen fixed top-0 left-0 p-6 z-20 flex-shrink-0">
      <div class="flex flex-col gap-[45px] mt-[95px]">
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
        <div class="flex items-center gap-4">
          <img
            src="../assets/notification.svg"
            class="w-[24px] h-[24px]"
            alt="notification-bell"
          />
          <img
            src="../assets/calender.svg"
            class="w-[98px] h-[98px] rounded-[8px] border-1 border-[#0F151F]"
            alt="calender"
          />
        </div>
      </nav>
      <div class="flex-1 overflow-y-auto px-[32px] py-[20px]">
        <!-- Top Actions -->
        <div class="flex justify-end items-center gap-[10px] mb-[20px]">
          <button
            class="flex items-center justify-center gap-[6px] bg-white text-[#4B5054] px-[14px] py-[8px] rounded-[8px] text-sm"
          > <img src="../assets/gray-download.svg" class="w-5 h-5" alt="download">
            Export Report
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
                <th
                  class="text-left text-xs text-[#4B5054] font-medium py-[10px]"
                >
                  CAMPAIGN NAME
                </th>
                <th
                  class="text-left text-xs text-[#4B5054] font-medium py-[10px]"
                >
                  CHANNEL
                </th>
                <th
                  class="text-left text-xs text-[#4B5054] font-medium py-[10px]"
                >
                  STATUS
                </th>
                <th
                  class="text-left text-xs text-[#4B5054] font-medium py-[10px]"
                >
                  AUDIENCE
                </th>
                <th
                  class="text-left text-xs text-[#4B5054] font-medium py-[10px]"
                >
                  BUDGET SPENT
                </th>
                <th
                  class="text-left text-xs text-[#4B5054] font-medium py-[10px]"
                >
                  ACTION
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#F5F5F5]">
              <tr>
                <td class="py-[14px] text-sm text-[#0F151F]">
                  Year-End Investment Boost
                </td>
                <td class="py-[14px]">
                  <div class="flex items-center gap-[6px]">
                    <img src="../assets/email-logo.svg" width="15" height="15" alt="email">
                    <span class="text-xs text-black">Email</span>
                  </div>
                </td>
                <td class="py-[14px]">
                  <span
                    class="bg-[#228B2233] text-[#228B22] text-xs px-[10px] py-[4px] rounded-[8px]"
                    >Active</span
                  >
                </td>
                <td class="py-[14px] text-xs text-black">
                  Dormant Clients
                </td>
                <td class="py-[14px] text-xs text-black">$1,200</td>
                <td class="py-[14px]">
                  <img src="../assets/pen.svg" class="w-[17px] h-[17px]" alt="Edit">
                </td>
              </tr>
              <tr>
                <td class="py-[14px] text-sm text-black">
                  SME Growth Webinar
                </td>
                <td class="py-[14px]">
                  <div class="flex items-center gap-[6px]">
                   <img src="../assets/linkedin.svg" width="15" height="15" alt="LinkedIn"
                    ><span class="text-xs text-black">LinkedIn</span>
                  </div>
                </td>
                <td class="py-[14px]">
                  <span
                    class="bg-[#FEF9C3] text-[#A16207] text-xs px-[8px] py-[2px] rounded-[8px]"
                    >Scheduled</span
                  >
                </td>
                <td class="py-[14px] text-xs text-black">High Net Worth</td>
                <td class="py-[14px] text-xs text-black">$1,200</td>
                <td class="py-[14px]">
                  <img src="../assets/pen.svg" class="w-[17px] h-[17px]" alt="Edit">
                </td>
              </tr>
              <tr>
                <td class="py-[14px] text-sm text-black">
                  Year-End Investment Boost
                </td>
                <td class="py-[14px]">
                  <div class="flex items-center gap-[6px]">
                    <img src="../assets/message-logo.svg" width="15" height="15" alt="Email">
                    <span class="text-xs text-black">SMS</span>
                  </div>
                </td>
                <td class="py-[14px]">
                  <span
                    class="bg-[#4B505433] text-[#4B5054] text-xs px-[10px] py-[4px] rounded-[8px]"
                    >Draft</span
                  >
                </td>
                <td class="py-[14px] text-xs text-black">SME Owners</td>
                <td class="py-[14px] text-xs text-black">$1,200</td>
                <td class="py-[14px]">
                  <img src="../assets/pen.svg" class="w-[17px] h-[17px]" alt="Edit">
                </td>
              </tr>
              <tr>
                <td class="py-[14px] text-sm text-black">
                  Halal Fixed Pre-Launch
                </td>
                <td class="py-[14px]">
                  <div class="flex items-center gap-[6px]">
                    <img src="../assets/email-logo.svg" width="15" height="15" alt="email">
                    <span class="text-xs text-[#4B5054]">Email</span>
                  </div>
                </td>
                <td class="py-[14px]">
                  <span
                    class="bg-[#228B2233] text-[#228B22] text-xs px-[10px] py-[4px] rounded-[8px]"
                    >Approved</span
                  >
                </td>
                <td class="py-[14px] text-xs text-black">
                  Dormant Clients
                </td>
                <td class="py-[14px] text-xs text-black">$1,200</td>
                <td class="py-[14px]">
                  <img src="../assets/pen.svg" class="w-[17px] h-[17px]" alt="Edit">
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-between items-center mt-[16px]">
            <p class="text-xs text-black">Showing 1-5 of 156 campaigns</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import curvechart from '../components/curvechart.vue';   
</script>ipt