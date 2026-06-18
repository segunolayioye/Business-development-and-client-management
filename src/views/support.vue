<template>
  <div class="flex h-screen overflow-hidden bg-[#F4F0F0]">
    
    <!-- Mobile Overlay (Darkens background when menu is open) -->
    <div 
      v-if="isMobileMenuOpen" 
      @click="isMobileMenuOpen = false" 
      class="fixed inset-0 bg-black/50 z-20 lg:hidden"
    ></div>

    <!-- Sidebar -->
    <aside 
      class="bg-[#0F151F] text-white w-[253px] h-screen fixed top-0 left-0 p-6 z-30 flex-shrink-0 transition-transform duration-300 ease-in-out lg:translate-x-0"
      :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
    >
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
        <router-link to="/campaigns" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/campaign.svg" class="w-[18px] h-[18px] mt-[4px]"/>
          Campaigns
        </router-link>
        <router-link to="/investor" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/investor.svg" class="w-[18px] h-[18px] mt-[4px]"/>
          Investor 
        </router-link>
        <router-link to="/help-center" class="flex gap-[10px] text-white hover:text-[#FD4F00]  bg-[#1E2736] px-[5px] py-[8px] rounded-[8px]">
          <img src="../assets/help-center.svg" class="w-[18px] h-[18px] mt-[4px]"/>
          Help Center & Support
        </router-link>
        <router-link to="/notifications" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
          <img src="../assets/notifications.svg" class="w-[18px] h-[18px] mt-[4px]"/>
          Notifications
        </router-link>
      </div>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col h-screen overflow-hidden w-full lg:ml-[253px]">
      
      <!-- Navbar -->
      <nav class="h-[70px] lg:h-[95px] w-full bg-white shadow-md flex items-center justify-between px-[20px] lg:px-[40px] flex-shrink-0">
        
        <!-- Hamburger Menu Button (Mobile Only) -->
        <button @click="isMobileMenuOpen = true" class="lg:hidden p-2 text-gray-600">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>

        <div class="hidden md:flex bg-[#F5F5F5] rounded-lg px-5 py-3 gap-2 w-full max-w-[480px]">
          <img src="../assets/search-icon.svg" class="w-[18px] h-[18px]" alt="search icon"/>
          <input type="text" placeholder="Search content, webinars, clients.." class="bg-transparent focus:outline-none w-full text-sm text-[#A5A5A8]"/>
        </div>

        <div class="ml-auto flex items-center gap-4">
          <div class="flex items-center gap-[10px]">
            <img src="../assets/notification.svg" class="w-[22px] h-[24px]" alt="notification icon">
            <img src="../assets/picture.svg" class="w-[42px] h-[42px] rounded-full" alt="user avatar">
            <span class="hidden md:inline text-sm font-medium text-gray-800">Jane Peters</span>
            <img src="../assets/down-arrow.svg" class="w-[10px] h-[10px]" alt="dropdown" hidden md:block>
          </div>
        </div>
      </nav>

      <!-- Scrollable Content -->
      <div class="flex-1 overflow-y-auto px-[20px] lg:px-[36px] py-[20px]">

        <!-- Header -->
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-[20px]">
          <div>
            <p class="font-bold text-[18px] lg:text-[22px] text-[#0F151F]">Support Overview</p>
            <p class="text-xs text-[#A9A9A9]">Real-time insights into support and compliance health</p>
          </div>
          
          <div class="flex flex-wrap items-center gap-[8px] w-full md:w-auto">
            <button class="flex items-center gap-[6px] bg-[#228B22] text-white px-[14px] py-[8px] rounded-[8px] text-sm font-medium w-full md:w-auto justify-center">
              <img src="../assets/plus.svg" alt="plus-icon">
              New Ticket
            </button>
            <div class="flex gap-[8px] w-full md:w-auto mt-2 md:mt-0">
              <select class="flex-1 md:flex-none text-xs text-[#4B5054] border border-[#E5E7EB] px-[10px] py-[6px] rounded-[8px] bg-white">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
              <button class="text-[#A9A9A9] border border-[#E5E7EB] p-[6px] rounded-[8px]">↻</button>
            </div>
          </div>
        </div>

        <!-- Stats Cards (CSS Grid) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px] mb-[24px]">
          <div class="bg-white rounded-[12px] p-[16px]">
            <div class="flex justify-between items-start">
              <p class="text-xs text-[#4B5054]">OPEN TICKETS</p>
              <div class="w-[32px] h-[32px] bg-[#228B2233] rounded-[6px] flex items-center justify-center">
                <span class="text-[12px]"><img src="../assets/green-ticket.svg" width="17" height="17" alt="ticket"></span>
              </div>
            </div>
            <p class="text-[24px] font-semibold text-[#0F151F] mt-[1px]">123</p>
            <div class="flex items-center gap-[4px] mt-[4px]">
              <div class="flex justify-start gap-[6px]"> 
                 <img src="../assets/green-arrow.svg" alt="green-arrow">
                <span class="text-[#228B22] text-xs">2.3%</span>
              </div>   
              <span class="text-xs text-[#4B5054]">vs last week</span>
            </div>
          </div>
          <!-- Repeat similar classes for the other 3 cards -->
          <div class="bg-white rounded-[12px] p-[16px]">
            <div class="flex justify-between items-start">
              <p class="text-xs text-[#4B5054]">AVG. RESOLUTION TIME</p>
              <div class="w-[32px] h-[32px] bg-[#FEF9C3] rounded-[6px] flex items-center justify-center">
                <span class="text-[12px]"><img src="../assets/clock-timer.svg" width="17" height="17" alt="clock-timer"></span>
              </div>
            </div>
            <p class="text-[24px] font-semibold text-[#0F151F] mt-[4px]">4.2h</p>
            <div class="flex items-center gap-[6px] mt-[4px]">
              <div class="flex justify-start gap-[4px]"> 
                 <img src="../assets/green-arrow.svg" alt="green-arrow">
                <span class="text-[#228B22] text-xs">0.3</span>        
              </div> 
              <span class="text-xs text-[#4B5054]">improvement</span>  
            </div>
          </div>
          <div class="bg-white rounded-[12px] p-[16px]">
            <div class="flex justify-between items-start">
              <p class="text-xs text-[#4B5054] uppercase">COMPLIANCE ALERTS</p>
              <div class="w-[32px] h-[32px] bg-[#E5030333] rounded-[6px] flex items-center justify-center">
                <img src="../assets/reverse.svg" class="w-17 h-17">
              </div>
            </div>
            <p class="text-[24px] font-semibold text-[#0F151F] mt-[4px]">7</p>
            <div class="flex items-center gap-[4px] mt-[4px]">
              <div class="flex justify-start gap-[4px]">
                  <img src="../assets/red-arrow.svg" alt="red-arrow">
                <span class="text-[#EF4444] text-xs">1.2%</span>
              </div>
              <span class="text-xs text-[#4B5054]">vs last month</span>
            </div>
          </div>
          <div class="bg-white rounded-[12px] p-[16px]">
            <div class="flex justify-between items-start">
              <p class="text-xs text-[#4B5054] uppercase">CSAT Score</p>
              <div class="w-[32px] h-[32px] bg-[#228B2233] rounded-[6px] flex items-center justify-center">
                <img src="../assets/star.svg" alt="star" class="w-17 h-17">
              </div>
            </div>
            <p class="text-[24px] font-semibold text-[#0F151F] mt-[4px]">4.1/5</p>
            <div class="flex items-center gap-[4px] mt-[4px]">
              <div class="flex justify-start gap-[4px]"> 
                <img src="../assets/green-arrow.svg" alt="green-arrow">
                <span class="text-[#22C55E] text-xs">4.4%</span>
              </div>   
              <span class="text-xs text-[#4B5054]">Stable</span>
            </div>
          </div>
        </div>

        <!-- Chart + Channel Efficiency -->
        <div class="flex flex-col lg:flex-row gap-[16px] mb-[24px]">

          <!-- Chart -->
          <div class="bg-white rounded-[12px] p-[20px] flex-1 overflow-hidden">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-[16px]">
              <p class="font-semibold text-[16px] text-[#0F151F]">Campaign Performance</p>
              <div class="flex items-center gap-[8px]">
                <button class="text-xs text-black bg-white px-[10px] py-[4px] rounded-[6px] border border-gray-100">Monthly</button>
                <button class="text-xs text-black bg-[#F3F4F6] px-[10px] py-[4px] rounded-[6px] hover:bg-[#F5F5F5]">Quarterly</button>
              </div>
            </div>
            <div class="flex items-center justify-center gap-[16px] mb-[12px]">
              <div class="flex items-center gap-[6px]">
                <div class="w-[10px] h-[10px] rounded-full bg-[#228B22]"></div>
                <span class="text-[14px] text-[#4B5054]">Resolved</span>
              </div>
              <div class="flex items-center gap-[6px]">
                <div class="w-[10px] h-[10px] rounded-full bg-[#4B5054]"></div>
                <span class="text-[14px] text-[#4B5054]">New Tickets</span>
              </div>
            </div>
            <div class="w-full h-[180px] rounded-[8px] flex items-center justify-center overflow-hidden">
              <div class="w-full h-[180px] mb-[4px]">
                <supportchart />
              </div>
            </div>
          </div>

          <!-- Channel Efficiency Gauge -->
          <div class="bg-white rounded-[12px] p-[20px] w-full lg:w-[380px] flex flex-col items-center flex-shrink-0">
            <p class="font-semibold text-[16px] text-[#0F151F] mb-[16px] self-start">Channel Efficiency</p>
            <div class="w-full h-[140px] flex items-center justify-center bg-[#FFFFFF] rounded-[8px] mb-[16px]">
              <div class="w-full h-[100px] flex items-center justify-center">
                <gauge />
              </div>
            </div>
            <div class="flex gap-[10px] w-full">
              <div class="flex-1 bg-[#228B2233] rounded-[8px] p-[10px] text-center">
                <p class="text-xs text-black font-semibold">KYC Passed</p>
                <p class="text-sm font-bold text-[#22C55E]">1,234</p>
              </div>
              <div class="flex-1 bg-[#E5030333] rounded-[8px] p-[10px] text-center">
                <p class="text-xs text-black font-semibold">Flagged</p>
                <p class="text-sm font-bold text-[#E50303]">12</p>
              </div>
            </div>
          </div>

        </div>

        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-[16px]">
          <p class="font-semibold text-[18px] lg:text-[22px] text-[#000000]">Support Ticket Queue</p>
          <div class="flex items-center gap-[8px] w-full sm:w-auto">
            <select class="flex-1 sm:flex-none text-xs text-[#4B5054] border border-[#E5E7EB] px-[10px] py-[6px] rounded-[8px] bg-white">
              <option>All Priorities</option>
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
            <button class="font-semibold flex items-center gap-[8px] text-[12px] border border-[#E5E7EB] px-[10px] py-[6px] rounded-[4px] bg-white text-[#228B22]">
              <img src="../assets/list.svg" alt="list-icon" class="w-[14px] h-[14px]">
              List
            </button>
            <button class="font-semibold flex items-center gap-[6px] text-[12px] border border-transparent px-[10px] py-[6px] rounded-[4px] text-[#4B5054] hover:bg-gray-50">
              <img src="../assets/board.svg" alt="board-icon" class="w-[16px] h-[16px]">
              Board
            </button>
          </div>
        </div>

        <!-- Support Ticket Queue (Responsive Table Wrapper) -->
        <div class="bg-white rounded-[12px] p-[20px] mb-[24px]">
          
          <div class="overflow-x-auto w-full">
            <table class="w-full text-sm min-w-[800px]">
              <thead>
                <tr class="border-b border-[#F5F5F5]">
                  <th class="text-left text-[12px] text-[#4B5054] font-medium py-[10px]">TICKET ID / SUBJECT</th>
                  <th class="text-left text-[12px] text-[#4B5054] font-medium py-[10px]">CLIENT</th>
                  <th class="text-left text-[12px] text-[#4B5054] font-medium py-[10px]">PRIORITY</th>
                  <th class="text-left text-[12px] text-[#4B5054] font-medium py-[10px]">STATUS</th>
                  <th class="text-left text-[12px] text-[#4B5054] font-medium py-[10px]">SLA TIMER</th>
                  <th class="text-left text-[12px] text-[#4B5054] font-medium py-[10px]">ASSIGNEE</th>
                  <th class="text-left text-[12px] text-[#4B5054] font-medium py-[10px]">ACTIONS</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#F5F5F5]">
                <tr v-for="(ticket, index) in paginatedTickets" :key="index" class="hover:bg-gray-50">
                  <td class="py-[14px] pr-4">
                    <p class="text-xs font-semibold text-[#000000]">{{ ticket.id }} {{ ticket.subject }}</p>
                    <p class="text-[10px] text-[#4B5054]">{{ ticket.detail }}</p>
                  </td>
                  <td class="py-[14px] pr-4">
                    <div class="flex items-center gap-[6px]">
                      <div class="w-[24px] h-[24px] rounded-full bg-[#D9D9D9] flex items-center justify-center text-[10px] font-bold text-[#313EB2]">
                        {{ getInitials(ticket.client) }}
                      </div>
                      <span class="text-xs text-[#0F151F] whitespace-nowrap">{{ ticket.client }}</span>
                    </div>
                  </td>
                  <td class="py-[14px] pr-4">
                    <span :class="`font-semibold ${ticket.priorityColor} text-[10px] px-[8px] py-[2px] rounded-full flex items-center gap-[4px] w-fit`">
                      <img :src="getFlagIcon(ticket.priority)" class="w-[12px] h-[12px]" alt="flag"/>
                      {{ ticket.priority }}
                    </span>
                  </td>
                  <td class="py-[14px] pr-4">
                    <span class="bg-[#E8F0FE] text-[#3B4FE0] text-[10px] px-[8px] py-[2px] rounded-full">{{ ticket.status }}</span>
                  </td>
                  <td class="py-[14px] pr-4">
                    <template v-if="!ticket.notSla">
                      <div class="w-[80px] h-[4px] bg-[#D9D9D9] rounded-full">
                        <div class="h-[4px] rounded-full" :class="ticket.slaColor" :style="{ width: ticket.slaWidth }"></div>
                      </div>
                      <p class="text-[9px] mt-[2px] whitespace-nowrap" :class="ticket.slaTimeColor">{{ ticket.slaTime }}</p>
                    </template>
                    <template v-else>
                      <span class="bg-[#FEE2E2] text-[#EF4444] text-[9px] px-[6px] py-[1px] rounded whitespace-nowrap">Not SLA</span>
                    </template>
                  </td>
                  <td class="py-[14px] pr-4">
                    <div :class="`w-[28px] h-[28px] rounded-full ${ticket.assigneeBg} flex items-center justify-center text-[10px] text-white font-bold`">SA</div>
                  </td>
                  <td class="py-[14px]">
                    <span class="text-[#A9A9A9] cursor-pointer text-lg">›</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="flex flex-col sm:flex-row justify-between items-center gap-4 mt-[16px]">
            <p class="text-xs text-black">
              Showing {{ pageStart }} to {{ pageEnd }} of {{ tickets.length }} tickets
            </p>
            <div class="flex gap-[8px]">
              <button
                @click="prevPage"
                :disabled="currentPage === 1"
                class="text-xs text-[#4B5054] border border-[#E5E7EB] px-[12px] py-[6px] rounded-[6px] disabled:opacity-40 hover:bg-[#F5F5F5]"
              >Previous</button>
              <button
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="text-xs text-[#4B5054] border border-[#E5E7EB] px-[12px] py-[6px] rounded-[6px] disabled:opacity-40 hover:bg-[#F5F5F5]"
              >Next</button>
            </div>
          </div>
        </div>

        <!-- KYC Alert Feed + Upcomings -->
        <div class="flex flex-col lg:flex-row gap-[16px] mb-[32px]">

          <!-- KYC Alert Feed -->
          <div class="bg-white rounded-[12px] p-[20px] flex-1">
            <div class="flex justify-between items-center mb-[16px]">
              <div class="flex items-center gap-[8px]">
                <span class="text-[#EF4444]">⚠️</span>
                <p class="font-semibold text-[16px] text-[#0F151F]">KYC/AML Alert Feed</p>
              </div>
            </div>
            
            <div class="flex flex-col gap-[12px]">
              <div class="border border-[#FEE2E2] rounded-[10px] p-[12px]">
                <div class="flex justify-between items-start mb-[6px]">
                  <div class="flex items-center gap-[6px]">
                    <div class="w-[28px] h-[28px] rounded-full bg-[#FEE2E2] flex items-center justify-center text-[10px] flex-shrink-0">🚨</div>
                    <p class="text-xs font-semibold text-[#0F151F]">PEP Match Detected</p>
                  </div>
                  <span class="text-[10px] text-[#A9A9A9] flex-shrink-0">2m ago</span>
                </div>
                <p class="text-[10px] text-[#A9A9A9] mb-[8px]">Client Ahmad A. matched with Politically exposed person database list (Global-Check)</p>
                <div class="flex flex-wrap gap-[8px]">
                  <button class="text-[10px] bg-[#EF4444] text-white px-[10px] py-[4px] rounded-[6px]">Review Case</button>
                  <button class="text-[10px] border border-[#E5E7EB] text-[#4B5054] px-[10px] py-[4px] rounded-[6px]">Dismiss as False Positive</button>
                </div>
              </div>

              <div class="border border-[#FEF9C3] rounded-[10px] p-[12px]">
                <div class="flex justify-between items-start mb-[6px]">
                  <div class="flex items-center gap-[6px]">
                    <div class="w-[28px] h-[28px] rounded-full bg-[#FEF9C3] flex items-center justify-center text-[10px] flex-shrink-0">⚠️</div>
                    <p class="text-xs font-semibold text-[#0F151F]">Document Expired</p>
                  </div>
                  <span class="text-[10px] text-[#A9A9A9] flex-shrink-0">22m ago</span>
                </div>
                <p class="text-[10px] text-[#A9A9A9] mb-[8px]">Client Ahmad A. ID Document has expired.</p>
                <button class="text-[10px] border border-[#E5E7EB] text-[#4B5054] px-[10px] py-[4px] rounded-[6px]">Request New Document</button>
              </div>

              <div class="border border-[#E5E7EB] rounded-[10px] p-[12px]">
                <div class="flex justify-between items-start mb-[6px]">
                  <div class="flex items-center gap-[6px]">
                    <div class="w-[28px] h-[28px] rounded-full bg-[#F5F5F5] flex items-center justify-center text-[10px] flex-shrink-0">🏦</div>
                    <p class="text-xs font-semibold text-[#0F151F]">Large Transaction Flag</p>
                  </div>
                  <span class="text-[10px] text-[#A9A9A9] flex-shrink-0">22m ago</span>
                </div>
                <p class="text-[10px] text-[#A9A9A9] mb-[8px]">Unusual large transaction detected for Client Ahmad A.</p>
                <div class="flex flex-wrap gap-[8px]">
                  <button class="text-[10px] bg-[#22C55E] text-white px-[10px] py-[4px] rounded-[6px]">Approve</button>
                  <button class="text-[10px] border border-[#E5E7EB] text-[#4B5054] px-[10px] py-[4px] rounded-[6px]">Investigate</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Upcomings -->
          <div class="bg-white rounded-[12px] p-[20px] w-full lg:w-[280px] flex-shrink-0">
            <p class="font-semibold text-[16px] text-[#0F151F] mb-[16px]">Upcomings</p>
            <div class="flex flex-col gap-[12px]">

              <div class="flex items-start gap-[12px]">
                <div class="w-[36px] h-[36px] bg-[#FEE2E2] rounded-[8px] flex flex-col items-center justify-center flex-shrink-0">
                  <span class="text-[10px] text-[#EF4444] font-bold">15</span>
                </div>
                <div class="flex-1">
                  <p class="text-xs font-semibold text-[#0F151F]">Quarterly SEC Report</p>
                  <p class="text-[10px] text-[#A9A9A9]">Regulatory · High Priority</p>
                </div>
                <div class="w-[8px] h-[8px] rounded-full bg-[#EF4444] mt-[4px]"></div>
              </div>

              <!-- Repeated Upcoming Items -->
              <div class="flex items-start gap-[12px]">
                <div class="w-[36px] h-[36px] bg-[#FEE2E2] rounded-[8px] flex flex-col items-center justify-center flex-shrink-0">
                  <span class="text-[10px] text-[#EF4444] font-bold">15</span>
                </div>
                <div class="flex-1">
                  <p class="text-xs font-semibold text-[#0F151F]">Quarterly SEC Report</p>
                  <p class="text-[10px] text-[#A9A9A9]">Regulatory · High Priority</p>
                </div>
                <div class="w-[8px] h-[8px] rounded-full bg-[#EF4444] mt-[4px]"></div>
              </div>

              <div class="flex items-start gap-[12px]">
                <div class="w-[36px] h-[36px] bg-[#FEF9C3] rounded-[8px] flex flex-col items-center justify-center flex-shrink-0">
                  <span class="text-[10px] text-[#CA8A04] font-bold">15</span>
                </div>
                <div class="flex-1">
                  <p class="text-xs font-semibold text-[#0F151F]">Quarterly SEC Report</p>
                  <p class="text-[10px] text-[#A9A9A9]">Regulatory · High Priority</p>
                </div>
                <div class="w-[8px] h-[8px] rounded-full bg-[#CA8A04] mt-[4px]"></div>
              </div>

              <div class="flex items-start gap-[12px]">
                <div class="w-[36px] h-[36px] bg-[#DCFCE7] rounded-[8px] flex flex-col items-center justify-center flex-shrink-0">
                  <span class="text-[10px] text-[#22C55E] font-bold">15</span>
                </div>
                <div class="flex-1">
                  <p class="text-xs font-semibold text-[#0F151F]">Quarterly SEC Report</p>
                  <p class="text-[10px] text-[#A9A9A9]">Regulatory · High Priority</p>
                </div>
                <div class="w-[8px] h-[8px] rounded-full bg-[#22C55E] mt-[4px]"></div>
              </div>

            </div>
            <a class="text-xs text-[#FD4F00] cursor-pointer mt-[16px] block text-center hover:underline">View Calendar</a>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import gauge from '../components/gauge.vue'
import supportchart from '../components/supportchart.vue'

import RedFlag from '../assets/red-flag.svg'
import YellowFlag from '../assets/yellow-flag.svg'
import BlackFlag from '../assets/black-flag.svg'

const currentPage = ref(1)
const itemsPerPage = 3

const tickets = ref([
  { id: '#TK-2025-001', subject: 'KYC Verification Failed',    detail: 'Document upload error on step 3', client: 'John Doe', priority: 'High',   priorityColor: 'bg-[#FEE2E2] text-[#E50303]', status: 'In Progress', slaColor: 'bg-[#EF4444]', slaWidth: '70%', slaTime: '2h left',  slaTimeColor: 'text-[#EF4444]', assigneeBg: 'bg-[#FD4F00]',  notSla: false },
  { id: '#TK-2025-002', subject: 'KYC Verification Failed',    detail: 'Document upload error on step 3', client: 'John Doe', priority: 'Medium', priorityColor: 'bg-[#FEF9C3] text-[#CA8A04]', status: 'In Progress', slaColor: 'bg-[#22C55E]', slaWidth: '40%', slaTime: '6h left',  slaTimeColor: 'text-[#22C55E]', assigneeBg: 'bg-[#3B4FE0]',  notSla: false },
  { id: '#TK-2025-003', subject: 'KYC Verification Failed',    detail: 'Document upload error on step 6', client: 'John Doe', priority: 'Low',    priorityColor: 'bg-[#F5F5F5] text-[#4B5054]',  status: 'In Progress', slaColor: '',             slaWidth: '0%',  slaTime: '',         slaTimeColor: '',               assigneeBg: 'bg-[#22C55E]',  notSla: true  },
  { id: '#TK-2025-004', subject: 'Account Login Issue',        detail: 'Client unable to login via app',  client: 'Amina Musa', priority: 'High', priorityColor: 'bg-[#FEE2E2] text-[#E50303]',   status: 'Open',        slaColor: 'bg-[#EF4444]', slaWidth: '85%', slaTime: '1h left',  slaTimeColor: 'text-[#EF4444]', assigneeBg: 'bg-[#FD4F00]',  notSla: false },
  { id: '#TK-2025-005', subject: 'Fund Transfer Delayed',      detail: 'Transfer stuck for over 48hrs',   client: 'Tunde Kola', priority: 'High', priorityColor: 'bg-[#FEE2E2] text-[#E50303]',   status: 'In Progress', slaColor: 'bg-[#EF4444]', slaWidth: '60%', slaTime: '3h left',  slaTimeColor: 'text-[#EF4444]', assigneeBg: 'bg-[#3B4FE0]',  notSla: false },
  { id: '#TK-2025-006', subject: 'Wrong Statement Generated',  detail: 'Q3 statement shows wrong AUM',    client: 'Fatima Aliyu', priority: 'Medium', priorityColor: 'bg-[#FEF9C3] text-[#CA8A04]', status: 'Open',       slaColor: 'bg-[#22C55E]', slaWidth: '30%', slaTime: '8h left',  slaTimeColor: 'text-[#22C55E]', assigneeBg: 'bg-[#22C55E]',  notSla: false },
  { id: '#TK-2025-007', subject: 'Password Reset Not Working', detail: 'OTP not delivered to email',      client: 'Bello Lawal', priority: 'Low',  priorityColor: 'bg-[#F5F5F5] text-[#4B5054]',  status: 'Resolved',    slaColor: 'bg-[#22C55E]', slaWidth: '100%',slaTime: 'Done',     slaTimeColor: 'text-[#22C55E]', assigneeBg: 'bg-[#FD4F00]',  notSla: false },
  { id: '#TK-2025-008', subject: 'Dividend Not Credited',      detail: 'July dividend missing from acc',  client: 'Kemi Adeyemi', priority: 'High', priorityColor: 'bg-[#FEE2E2] text-[#E50303]',   status: 'In Progress', slaColor: 'bg-[#EF4444]', slaWidth: '75%', slaTime: '2h left',  slaTimeColor: 'text-[#EF4444]', assigneeBg: 'bg-[#3B4FE0]',  notSla: false },
  { id: '#TK-2025-009', subject: 'App Crashing on Launch',     detail: 'iOS version 16 affected',         client: 'Ola Eze',    priority: 'Medium', priorityColor: 'bg-[#FEF9C3] text-[#CA8A04]',  status: 'Open',       slaColor: 'bg-[#22C55E]', slaWidth: '50%', slaTime: '5h left',  slaTimeColor: 'text-[#22C55E]', assigneeBg: 'bg-[#22C55E]',  notSla: false },
  { id: '#TK-2025-010', subject: 'Sukuk Fund Not Showing',     detail: 'Product missing from portfolio',  client: 'Sola Akin',  priority: 'Low',    priorityColor: 'bg-[#F5F5F5] text-[#4B5054]',   status: 'Open',        slaColor: '',             slaWidth: '0%',  slaTime: '',         slaTimeColor: '',               assigneeBg: 'bg-[#FD4F00]',  notSla: true  },
  { id: '#TK-2025-011', subject: 'Duplicate Transaction',      detail: 'Client charged twice on Oct 2',   client: 'Remi Ibrahim', priority: 'High', priorityColor: 'bg-[#FEE2E2] text-[#E50303]',   status: 'In Progress', slaColor: 'bg-[#EF4444]', slaWidth: '90%', slaTime: '30m left', slaTimeColor: 'text-[#EF4444]', assigneeBg: 'bg-[#3B4FE0]',  notSla: false },
  { id: '#TK-2025-012', subject: 'Profile Update Failing',     detail: 'Cannot save new phone number',    client: 'Ngozi Obi',  priority: 'Medium', priorityColor: 'bg-[#FEF9C3] text-[#CA8A04]',  status: 'Resolved',   slaColor: 'bg-[#22C55E]', slaWidth: '100%',slaTime: 'Done',     slaTimeColor: 'text-[#22C55E]', assigneeBg: 'bg-[#22C55E]',  notSla: false },
])



const totalPages = computed(() => Math.ceil(tickets.value.length / itemsPerPage))

const paginatedTickets = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return tickets.value.slice(start, start + itemsPerPage)
})

const pageStart = computed(() => (currentPage.value - 1) * itemsPerPage + 1)
const pageEnd = computed(() => Math.min(currentPage.value * itemsPerPage, tickets.value.length))

function getInitials(name) {
  if (!name) return '';
  const nameParts = name.trim().split('');
  if (nameParts.length === 1) return nameParts[0].charAt(0).toUpperCase();
  return (nameParts[0].charAt(0) + nameParts[nameParts.length - 1].charAt(0)).toUpperCase();
}

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}

const isMobileMenuOpen = ref(false)

const getFlagIcon = (priority) => {
  if (priority === 'High') return RedFlag
  if (priority === 'Medium') return YellowFlag
  return BlackFlag
}
</script>
