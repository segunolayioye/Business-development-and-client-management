<template>
  <div class="relative">

    <div :class="showSessionModal ? 'blur-sm pointer-events-none overflow-hidden' : 'overflow-hidden'">
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
            <router-link to="/campaigns" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
              <img src="../assets/campaign.svg" class="w-[18px] h-[18px] mt-[4px]"/>
              Campaigns
            </router-link>
            <router-link to="/investor" class="flex gap-[10px] text-white hover:text-[#FD4F00]  bg-[#1E2736] px-[10px] py-[8px] rounded-[8px]">
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

          <nav class="h-[95px] w-full bg-white shadow-md flex items-center px-[40px] flex-shrink-0">
            <div class="bg-[#F5F5F5] rounded-lg px-5 py-3 flex gap-2 w-[480px]">
              <img src="../assets/search-icon.svg" class="w-[18px] h-[18px]" alt="search icon"/>
              <input type="text" placeholder="Search content, webinars, clients.." class="bg-transparent focus:outline-none w-full text-sm text-[#A5A5A8]"/>
            </div>
            <div class="ml-auto flex items-center gap-4">
              <div class="flex items-center gap-[10px]">
                <img src="../assets/notification.svg" class="w-[22px] h-[24px]" alt="notification icon">
                <img src="../assets/picture.svg" class="w-[42px] h-[42px] rounded-full" alt="user avatar">
                <span class="text-sm font-medium text-gray-800">Jane Peters</span>
                <img src="../assets/down-arrow.svg" class="w-[10px] h-[10px]" alt="dropdown">
              </div>
            </div>
          </nav>

          <div class="flex-1 overflow-y-auto px-[32px] py-[20px]">

            <div class="flex justify-between items-start mb-[20px]">
              <div>
                <p class="font-bold text-[22px] text-[#0F151F]">Investor Education & Webinar Hub</p>
                <p class="text-xs text-[#A9A9A9]">Manage content library, schedule sessions, and track engagement</p>
              </div>
              <div class="flex items-center gap-[10px]">
               <button
                  @click="handleExport"
                  :disabled="exporting"
                  class="flex items-center gap-[6px] bg-white text-[#4B5054] px-[14px] py-[8px] rounded-[8px] text-sm disabled:opacity-60"
                >
                  <img src="../assets/gray-download.svg" class="w-[18px] h-[18px]"/>
                  <span class="text-[16px] text-[#4B5054]">
                    {{ exporting ? 'Exporting...' : 'Export Data' }}
                  </span>
                </button>

                <button
                  @click="openSessionModal"
                  class="flex items-center gap-[6px] bg-[#22C55E] text-white px-[14px] py-[8px] rounded-[8px] text-sm font-medium"
                >
                  + Create New Session
                </button>
              </div>
            </div>

            <div class="flex gap-[16px] mb-[24px]">
              <div class="flex-1 bg-white rounded-[12px] p-[16px]">
                <p class="text-xs text-[#A9A9A9] uppercase">Webinar Turnout</p>
                <p class="text-[24px] font-bold text-[#0F151F] mt-[4px]">78.9%</p>
                <div class="flex items-center gap-[4px] mt-[4px]">
                  <span class="text-[#22C55E] text-xs">↑ 2%</span>
                  <span class="text-xs text-[#A9A9A9]">vs last month</span>
                </div>
              </div>
              <div class="flex-1 bg-white rounded-[12px] p-[16px]">
                <p class="text-xs text-[#A9A9A9] uppercase">Avg. Feedback Rating</p>
                <p class="text-[24px] font-bold text-[#0F151F] mt-[4px]">4.8/5.0</p>
                <div class="flex items-center gap-[4px] mt-[4px]">
                  <span class="text-[#22C55E] text-xs">↑ 1%</span>
                  <span class="text-xs text-[#A9A9A9]">vs last month</span>
                </div>
              </div>
              <div class="flex-1 bg-white rounded-[12px] p-[16px]">
                <p class="text-xs text-[#A9A9A9] uppercase">Repeat Participation</p>
                <p class="text-[24px] font-bold text-[#0F151F] mt-[4px]">42.8%</p>
                <div class="flex items-center gap-[4px] mt-[4px]">
                  <span class="text-[#EF4444] text-xs">↓ 1%</span>
                  <span class="text-xs text-[#A9A9A9]">vs last month</span>
                </div>
              </div>
              <div class="flex-1 bg-white rounded-[12px] p-[16px]">
                <p class="text-xs text-[#A9A9A9] uppercase">Active Learners</p>
                <p class="text-[24px] font-bold text-[#0F151F] mt-[4px]">1,234</p>
                <div class="flex items-center gap-[4px] mt-[4px]">
                  <span class="text-[#22C55E] text-xs">↑ 4%</span>
                  <span class="text-xs text-[#A9A9A9]">vs last month</span>
                </div>
              </div>
            </div>

            <div class="flex gap-[16px] mb-[24px]">
              <div class="bg-white rounded-[12px] p-[20px] flex-1">
                <div class="flex justify-between items-center mb-[16px]">
                  <p class="font-semibold text-[16px] text-[#0F151F]">Campaign Performance</p>
                  <div class="flex items-center gap-[8px]">
                    <button 
                      @click="timeframe = 'monthly'"
                      :class="timeframe === 'monthly' ? 'text-white bg-[#0F151F]' : 'text-[#A9A9A9] hover:bg-[#F5F5F5]'"
                      class="text-xs px-[10px] py-[4px] rounded-[6px] transition-colors"
                    >
                      Monthly
                    </button>
                    <button 
                      @click="timeframe = 'quarterly'"
                      :class="timeframe === 'quarterly' ? 'text-white bg-[#0F151F]' : 'text-[#A9A9A9] hover:bg-[#F5F5F5]'"
                      class="text-xs px-[10px] py-[4px] rounded-[6px] transition-colors"
                    >
                      Quarterly
                    </button>
                  </div>
                </div>
                <div class="flex items-center gap-[16px] mb-[12px]">
                  <div class="flex items-center gap-[6px]">
                    <div class="w-[10px] h-[10px] rounded-full bg-[#3B4FE0]"></div>
                    <span class="text-xs text-[#A9A9A9]">Webinar</span>
                  </div>
                  <div class="flex items-center gap-[6px]">
                    <div class="w-[10px] h-[10px] rounded-full bg-[#22C55E]"></div>
                    <span class="text-xs text-[#A9A9A9]">Video</span>
                  </div>
                </div>
                <div class="w-full h-[180px]">
                  <investorchart :timeframe="timeframe" />
                </div>
              </div>
              <div class="bg-white rounded-[12px] p-[20px] w-[260px]">
                <p class="font-semibold text-[16px] text-[#0F151F] mb-[16px]">Channel Efficiency</p>
                <div class="w-full h-[160px] flex items-center justify-center bg-white rounded-[8px] mb-[16px]">
                  <div class="w-full h-[160px]">
                    <doughnutchart />
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-[8px]">
                  <div class="flex items-center gap-[6px]">
                    <div class="w-[8px] h-[8px] rounded-full bg-[#3B4FE0]"></div>
                    <span class="text-[10px] text-[#A9A9A9]">Video Tutorials</span>
                  </div>
                  <div class="flex items-center gap-[6px]">
                    <div class="w-[8px] h-[8px] rounded-full bg-[#FD4F00]"></div>
                    <span class="text-[10px] text-[#A9A9A9]">Reports</span>
                  </div>
                  <div class="flex items-center gap-[6px]">
                    <div class="w-[8px] h-[8px] rounded-full bg-[#22C55E]"></div>
                    <span class="text-[10px] text-[#A9A9A9]">Live Webinars</span>
                  </div>
                  <div class="flex items-center gap-[6px]">
                    <div class="w-[8px] h-[8px] rounded-full bg-[#F59E0B]"></div>
                    <span class="text-[10px] text-[#A9A9A9]">Articles</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
            id="calender"
            class="bg-white rounded-[16px] p-[32px] mb-[24px] shadow-sm">
              
              <div class="flex justify-between items-center mb-[32px]">
                <div class="flex items-center gap-[12px]">
                  <img src="../assets/green-calender.svg" alt="calendar" class="w-[24px] h-[24px]"/>
                  <p class="font-semibold text-[20px] text-[#0F151F]">Session Planner</p>
                </div>
                <div class="flex items-center gap-[16px]">
                  <span @click="prevMonth" class="text-[#A9A9A9] cursor-pointer hover:text-[#0F151F] text-xl">‹</span>
                  <span class="text-[16px] font-medium text-[#0F151F] w-[110px] text-center">{{ monthName }} {{ currentYear }}</span>
                  <span @click="nextMonth" class="text-[#A9A9A9] cursor-pointer hover:text-[#0F151F] text-xl">›</span>
                </div>
              </div>
              
              <div class="w-full">
                
                <div class="grid grid-cols-7">
                  <div v-for="(day, index) in dayHeaders" :key="day"
                    class="text-center text-[13px] font-semibold text-[#A9A9A9] pb-[16px] border-b border-[#F0F0F0]"
                    :class="index !== 6 ? 'border-r' : ''">
                    {{ day }}
                  </div>
                </div>

                <div class="grid grid-cols-7">
                  <div
                    v-for="(day, index) in calendarDays"
                    :key="index"
                    class="min-h-[130px] p-[12px] border-b border-[#F0F0F0] cursor-pointer hover:bg-[#F9F9F9] transition-colors duration-200"
                    :class="[
                      (index + 1) % 7 !== 0 ? 'border-r' : '',
                      day.currentMonth ? 'bg-white' : 'bg-white'
                    ]"
                    @click="openAddEvent(day)"
                  >
                    <span
                      class="text-[14px] mb-[12px] block"
                      :class="day.currentMonth ? 'text-[#4B5054]' : 'text-[#D1D5DB]'"
                    >
                      {{ day.date }}
                    </span>

                    <div class="flex flex-col gap-[6px]">
                      <div v-for="event in getEventsForDay(day.fullDate)" :key="event.id"
                        class="text-[11px] px-[10px] py-[4px] rounded-[6px] truncate cursor-pointer w-fit max-w-full font-medium"
                        :class="event.color"
                        @click.stop="openEditEvent(event)"
                      >
                        {{ event.title }}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div class="mb-[24px]">
              <div class="flex justify-between items-center mb-[16px]">
                <div class="flex items-center gap-[8px]">
                  <img src="../assets/book.svg" alt="book-icon"/>
                  <p class="font-semibold text-[18px] text-[#0F151F]">Content Library</p>
                </div>
                <div class="flex items-center gap-[8px]">
                  <select v-model="selectedTopic" class="text-xs text-[#4B5054] font-semibold border border-[#E5E7EB] px-[10px] py-[6px] rounded-[8px] bg-white">
                    <option>All Topics</option>
                    <option>Islamic Finance</option>
                    <option>Products</option>
                  </select>
                  <select v-model="selectedFormat" class="text-xs text-[#4B5054] font-semibold border border-[#E5E7EB] px-[10px] py-[6px] rounded-[8px] bg-white">
                    <option>All Formats</option>
                    <option>Video</option>
                    <option>Webinar</option>
                  </select>
                  <select v-model="selectedLevel" class="text-xs text-[#4B5054] font-semibold border border-[#E5E7EB] px-[10px] py-[6px] rounded-[8px] bg-white">
                    <option>All Levels</option>
                    <option>Beginner</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>
              <div class="grid grid-cols-4 gap-[16px]">
                <div v-for="item in filteredContentItems" :key="item.id" class="bg-white rounded-[12px] overflow-hidden">
                  <div class="relative h-[120px] flex items-center justify-center">
                    <img :src="item.image" class="w-full h-full object-cover" :alt="item.title"/>
                   <span :class="['absolute bottom-[8px] left-[8px] text-white text-[9px] px-[6px] py-[2px] rounded', item.levelColor]">{{ item.level }}</span>
                    <span class="flex items-center justify-center absolute top-[8px] right-[8px] gap-1 bg-white font-semibold text-[#0F151F] text-[10px] px-[6px] py-[2px] rounded">
                     <img :src="item.icon" class="w-[12px] h-[12px]" alt="format icon"/> {{ item.format }}
                    </span>
                  </div>
                  <div class="p-[12px]">
                    <div class="flex items-center justify-between">
                      <p class="text-[9px] text-[#228B22] font-semibold uppercase mb-[4px]">{{ item.topic }}</p>
                      <div class="flex text-[#EFF31C] text-[10px] my-[4px]">★★★★★</div>
                    </div>
                    <p class="text-xs font-semibold text-[#0F151F] leading-tight">{{ item.title }}</p>
                    
                    <p class="text-[10px] text-[#4B5054] leading-tight mt-[6px]">{{ item.description }}</p>
                    <div class="flex justify-between items-center mt-[8px]">
                      <span class="flex gap-1 text-[10px] text-[#A9A9A9]"><img src="../assets/gray-clock.svg" alt="time"> {{ item.duration }}</span>
                      <a @click="openContentModal(item)" class="text-[10px] text-[#228B22] cursor-pointer font-semibold">View Content →</a>
                    </div>
                  </div>
                </div>
                <div v-if="filteredContentItems.length === 0" class="col-span-4 text-center py-8 text-sm text-gray-500">
                    No content found for the selected filters.
                 </div>
                
               
              </div>
            </div>
     <div 
        id="client Assignments"
        :class="highlightedSection === 'client Assignments' ? 'ring-2 ring-[#FD4F00] bg-[#FFF0EB]' : ''"
        class="transition-all duration-500 rounded-lg">
          <div class="bg-white rounded-[12px] p-[20px] mb-[32px] ">
  <div class="flex justify-between items-center mb-[16px]">
    <p class="font-semibold text-[18px] text-[#0F151F]">Client Assignments</p>
      
      <a
      v-if="!showAllClients"
      @click="showAllClients = true; currentPage = 1"
      class="text-xs text-[#FD4F00] cursor-pointer hover:underline"
    >View All</a>
    <a
      v-else
      @click="showAllClients = false; currentPage = 1"
      class="text-xs text-[#4B5054] cursor-pointer hover:underline"
    >Show Less</a>
  </div>

  <table class="w-full text-sm">
    <thead>
      <tr class="border-b border-[#F5F5F5]">
        <th class="text-left text-xs text-[#4B5054] font-medium py-[10px]">CLIENT</th>
        <th class="text-left text-xs text-[#4B5054] font-medium py-[10px]">RISK PROFILE</th>
        <th class="text-left text-xs text-[#4B5054] font-medium py-[10px]">RECOMMENDED CONTENT</th>
        <th class="text-left text-xs text-[#4B5054] font-medium py-[10px]">STATUS</th>
        <th class="text-left text-xs text-[#4B5054] font-medium py-[10px]">ACTION</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-[#F5F5F5]">
      <tr v-for="client in displayedClients" :key="client.id">
        <td class="py-[12px]">
          <div class="flex items-center gap-[8px]">
            <div :class="`w-[32px] h-[32px] rounded-full flex items-center justify-center text-xs font-bold ${client.avatarBg}`">
              {{ client.initials }}
            </div>
            <div>
              <p class="text-sm font-medium text-black">{{ client.name }}</p>
              <p class="text-[10px] text-black">{{ client.type }}</p>
            </div>
          </div>
        </td>
        <td class="py-[12px]">
          <span :class="`${client.riskColor} text-[10px] px-[8px] py-[2px] rounded-[8px]`">{{ client.risk }}</span>
        </td>
        <td class="py-[12px]">
          <p class="text-xs font-medium text-black">{{ client.content }}</p>
          <p class="text-[10px] text-black">{{ client.format }}</p>
        </td>
        <td class="py-[12px]">
          <span
            :class="client.status === 'Assigned' ? 'bg-[#DCFCE7] text-[#22C55E]' : 'bg-[#FEF9C3] text-[#CA8A04]'"
            class="text-[10px] px-[8px] py-[2px] rounded-full"
          >{{ client.status }}</span>
        </td>
        <td class="py-[12px]">
          <a
            v-if="client.status !== 'Assigned'"
            @click="assignClient(client)"
            class="text-xs text-[#FD4F00] cursor-pointer hover:underline"
          >Assign</a>
          <span v-else class="text-xs text-[#22C55E]">✓ Done</span>
        </td>
      </tr>
    </tbody>
  </table>

  
          <!-- Pagination Footer -->
          <div class="flex justify-between items-center mt-[16px] pt-[16px] border-t border-[#F5F5F5]">
            <p class="text-xs text-gray-700">
              Showing <span class="font-semibold text-[#0F151F]">{{ showAllClients ? 1 : pageStart }}</span> to
              <span class="font-semibold text-[#0F151F]">{{ pageEnd }}</span> of
              <span class="font-semibold text-[#0F151F]">{{ allClients.length }}</span> results
            </p>
            
            <!-- Modern Pagination Buttons -->
            <div v-if="!showAllClients" class="flex items-center gap-[4px]">
              
              <!-- Previous Arrow -->
              <button
                @click="prevPage"
                :disabled="currentPage === 1"
                class="flex items-center justify-center w-[32px] h-[32px] rounded-[8px] border border-[#E5E7EB] text-[#4B5054] disabled:opacity-40 hover:bg-[#F5F5F5] transition-colors"
              >
                <span class="text-lg leading-none mb-[2px]">‹</span>
              </button>
              
              <!-- Individual Page Numbers -->
              <button
                v-for="page in totalPages"
                :key="page"
                @click="currentPage = page"
                :class="currentPage === page ? 'bg-[#228B22] text-white border-[#228B22]' : 'border-[#E5E7EB] text-[#4B5054] hover:bg-[#F5F5F5]'"
                class="flex items-center justify-center w-[32px] h-[32px] rounded-[8px] border text-xs font-semibold transition-colors"
              >
                {{ page }}
              </button>
              
              <!-- Next Arrow -->
              <button
                @click="nextPage"
                :disabled="currentPage === totalPages"
                class="flex items-center justify-center w-[32px] h-[32px] rounded-[8px] border border-[#E5E7EB] text-[#4B5054] disabled:opacity-40 hover:bg-[#F5F5F5] transition-colors"
              >
                <span class="text-lg leading-none mb-[2px]">›</span>
              </button>

            </div>
          </div>

          


          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="showSessionModal"
      class="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-[16px] p-[32px] w-[480px] shadow-2xl">

        <h2 class="font-bold text-[18px] mb-[20px]">{{ editingEvent ? 'Edit Session' : 'New Session' }}</h2>

        <div class="mb-[16px]">
          <label class="text-sm font-medium mb-[6px] block">Title <span class="text-red-500">*</span></label>
          <input v-model="sessionTitle" type="text" placeholder="Enter title" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
        </div>

        <div class="flex gap-[16px] mb-[16px]">
          <div class="flex-1">
            <label class="text-sm font-medium mb-[6px] block">Date <span class="text-red-500">*</span></label>
            <input v-model="sessionDate" type="date" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
          </div>
          <div class="flex-1">
            <label class="text-sm font-medium mb-[6px] block">Time <span class="text-red-500">*</span></label>
            <input type="time" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
          </div>
        </div>

        <div class="mb-[16px]">
          <label class="text-sm font-medium mb-[6px] block">Speaker <span class="text-red-500">*</span></label>
          <select class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none bg-white">
            <option>James John</option>
            <option>Sarah Akpola</option>
          </select>
        </div>

        <div class="mb-[16px]">
          <label class="text-sm font-medium mb-[6px] block">Platform <span class="text-red-500">*</span></label>
          <select class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none bg-white">
            <option>YouTube Live</option>
            <option>Zoom</option>
            <option>Google Meet</option>
          </select>
        </div>

        <div class="mb-[24px]">
          <label class="text-sm font-medium mb-[6px] block">Capacity <span class="text-red-500">*</span></label>
          <input type="number" placeholder="500" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#22C55E]"/>
        </div>

        <div class="flex justify-between items-center mt-[24px]">
          <div class="flex items-center gap-4">
            <button
              @click="closeSessionModal"
              class="flex items-center gap-[6px] border border-[#E5E7EB] text-[#4B5054] px-[16px] py-[10px] rounded-[8px] text-sm"
            >
              ← Back
            </button>
            <button 
              v-if="editingEvent" 
              @click="deleteSession" 
              class="text-[#EF4444] text-sm hover:underline"
            >
              Delete Session
            </button>
          </div>

          <button @click="saveSession" class="flex items-center gap-[6px] bg-[#22C55E] text-white px-[20px] py-[10px] rounded-[8px] text-sm font-medium">
            ✓ {{ editingEvent ? 'Update Session' : 'Create Session' }}
          </button>
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

      <h2 class="text-xl font-bold text-gray-900 mt-2">Data Exported!</h2>
      <p class="text-sm text-gray-500 text-center">
        Your education data has been successfully exported and is ready to download.
      </p>

      <button
        @click="showExportModal = false"
        class="w-full bg-[#22C55E] text-white py-3 rounded-xl font-semibold text-sm mt-2 hover:bg-[#16a34a] transition-colors"
      >
        Back to Education Hub
      </button>

    </div>
  </div>

  
</Transition>
<!-- Content Details Modal -->
<Transition name="modal">
  <div
    v-if="showContentModal"
    class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/60"
    @click.self="closeContentModal"
  >
    <div class="bg-white rounded-[16px] p-[32px] w-[500px] shadow-2xl relative">
      <button @click="closeContentModal" class="absolute top-[16px] right-[16px] text-gray-400 hover:text-gray-800 text-xl font-bold">✕</button>
      
      <h2 class="font-bold text-[20px] mb-[16px] pr-6">{{ selectedContent.title }}</h2>
      
      <div class="relative h-[200px] w-full mb-[16px] rounded-lg overflow-hidden border border-gray-100">
          <img :src="selectedContent.image" class="w-full h-full object-cover"/>
      </div>
      
      <div class="flex gap-2 mb-[16px]">
        <span class="bg-[#F5F5F5] px-2 py-1 rounded text-[11px] font-semibold text-[#4B5054] border border-gray-200">Topic: {{ selectedContent.topic }}</span>
        <span class="bg-[#F5F5F5] px-2 py-1 rounded text-[11px] font-semibold text-[#4B5054] border border-gray-200">Level: {{ selectedContent.level }}</span>
        <span class="bg-[#F5F5F5] px-2 py-1 rounded text-[11px] font-semibold text-[#4B5054] border border-gray-200">Format: {{ selectedContent.format }}</span>
        <span class="bg-[#F5F5F5] px-2 py-1 rounded text-[11px] font-semibold text-[#4B5054] border border-gray-200">Duration: {{ selectedContent.duration }}</span>
      </div>
      
      <p class="text-sm text-[#4B5054] mb-[24px] leading-relaxed">
        <!-- We use the short description here, but you can add a 'fullDescription' string to your content array object to show a longer text here -->
        {{ selectedContent.description }}
      </p>
      
      <div class="flex justify-end gap-3">
        <button @click="closeContentModal" class="border border-[#E5E7EB] text-[#4B5054] px-[20px] py-[10px] rounded-[8px] text-sm font-medium hover:bg-gray-50 transition-colors">
          Close
        </button>
        <button class="bg-[#22C55E] text-white px-[20px] py-[10px] rounded-[8px] text-sm font-medium hover:bg-[#16a34a] transition-colors flex items-center gap-2">
          Start {{ selectedContent.format }}
        </button>
      </div>
    </div>
  </div>
</Transition>
    </div>
</template>

<script setup>
import Doughnutchart from '../components/doughnutchart.vue'
import investorchart from '../components/investorchart.vue'

import { ref, computed } from 'vue'

// --- MODAL STATES ---
const showSessionModal = ref(false)
const editingEvent = ref(null)
const timeframe = ref('monthly')


function openSessionModal() {
  editingEvent.value = null
  sessionTitle.value = ''
  sessionDate.value = ''
  showSessionModal.value = true
}

function closeSessionModal() {
  showSessionModal.value = false
  editingEvent.value = null
  sessionTitle.value = ''
  sessionDate.value = ''
}

// --- SESSION LOGIC ---
const sessionTitle = ref('')
const sessionDate = ref('')

function saveSession() {
  // Prevent saving if title or date is empty
  if (!sessionTitle.value || !sessionDate.value) {
    alert("Please enter a title and select a date.")
    return
  }

  if (editingEvent.value) {
    // We are editing an existing event
    const index = events.value.findIndex(e => e.id === editingEvent.value.id)
    if (index !== -1) {
      events.value[index].title = sessionTitle.value
      events.value[index].date = sessionDate.value
      // Color remains whatever it was previously
    }
  } else {
    // We are creating a new event
    events.value.push({
      id: Date.now(),
      date: sessionDate.value,
      title: sessionTitle.value,
      color: 'bg-[#DCFCE7] text-[#22C55E]' // Defaulting to a green pill for new sessions
    })
  }

  // Clear form and close modal
  closeSessionModal() 
}

function deleteSession() {
  if (editingEvent.value) {
    events.value = events.value.filter(e => e.id !== editingEvent.value.id)
  }
  closeSessionModal()
}

// --- CALENDAR LOGIC ---
const currentMonth = ref(9) // October (0-indexed)
const currentYear = ref(2025)

const dayHeaders = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

// Pre-loaded events
const events = ref([
  { id: 1, date: '2025-10-02', title: 'Intro to Sukuk', color: 'bg-[#FFF0EB] text-[#FD4F00]' },
  { id: 2, date: '2025-10-04', title: 'Halal Investing 101', color: 'bg-[#DCFCE7] text-[#22C55E]' },
  { id: 3, date: '2025-10-06', title: 'Risk management', color: 'bg-[#FEE2E2] text-[#EF4444]' },
])

const monthName = computed(() => {
  return new Date(currentYear.value, currentMonth.value).toLocaleString('default', { month: 'long' })
})

const calendarDays = computed(() => {
  const days = []
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0)

  // Get the day of week for first day (make Monday = 0)
  let startDow = firstDay.getDay() - 1
  if (startDow === -1) startDow = 6

  // Fill previous month days
  for (let i = startDow - 1; i >= 0; i--) {
    const d = new Date(currentYear.value, currentMonth.value, -i)
    days.push({
      date: d.getDate(),
      fullDate: formatDate(d),
      currentMonth: false
    })
  }

  // Fill current month days
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const d = new Date(currentYear.value, currentMonth.value, i)
    days.push({
      date: i,
      fullDate: formatDate(d),
      currentMonth: true
    })
  }

  // Fill next month days to complete grid
  const remaining = 42 - days.length
  for (let i = 1; i <= remaining; i++) {
    const d = new Date(currentYear.value, currentMonth.value + 1, i)
    days.push({
      date: d.getDate(),
      fullDate: formatDate(d),
      currentMonth: false
    })
  }

  return days
})

function formatDate(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function getEventsForDay(date) {
  return events.value.filter(e => e.date === date)
}

function openAddEvent(day) {
  if (!day.currentMonth) return
  editingEvent.value = null
  sessionTitle.value = ''
  sessionDate.value = day.fullDate // Auto-fill the date clicked
  showSessionModal.value = true    // Open the Session Modal instead
}

function openEditEvent(event) {
  editingEvent.value = event
  sessionTitle.value = event.title
  sessionDate.value = event.date
  showSessionModal.value = true    // Open the Session Modal for editing
}

function prevMonth() {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value--
  } else {
    currentMonth.value--
  }
}

function nextMonth() {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value++
  } else {
    currentMonth.value++
  }
}

const showExportModal = ref(false)
const exporting = ref(false)

function handleExport() {
  exporting.value = true
  setTimeout(() => {
    exporting.value = false
    showExportModal.value = true
  }, 1500)
}

const allClients = ref([ // Changed from allclients
  { id: 1, initials: 'JD', name: 'John Doe', type: 'Retail Investor', risk: 'Moderate', riskColor: 'bg-[#FEF9C3] text-[#A16207]' ,avatarBg: 'bg-[#313EB233] text-[#313EB2]', content: 'Halal Investing Principles', format: 'Video - Beginner',status: 'Pending'},
  { id: 2, initials: 'JD', name: 'John Doe', type: 'Retail Investor', risk: 'Aggresive', riskColor: 'bg-[#FEE2E2] text-[#EF4444]' ,avatarBg: 'bg-[#FEE2E2] text-[#EF4444]', content: 'Halal Investing Principles', format: 'Video - Beginner', status: 'Pending'},
  { id: 3, initials: 'JD', name: 'John Doe', type: 'Retail Investor', risk: 'Conservative', riskColor: 'bg-[#DCFCE7] text-[#22C55E]' ,avatarBg: 'bg-[#DCFCE7] text-[#22C55E]', content: 'Halal Investing Principles', format: 'Video - Beginner', status: 'Pending'},
  { id: 4, initials: 'JD', name: 'John Doe', type: 'Retail Investor', risk: 'Moderate', riskColor: 'bg-[#FEF9C3] text-[#CA8A04]', avatarBg: 'bg-[#FEF9C3] text-[#CA8A04]', content: 'Halal Investing Principles', format: 'Video - Beginner', status: 'Pending' },
  { id: 5, initials: 'AM', name: 'Amina Musa', type: 'HNW Investor', risk: 'Moderate', riskColor: 'bg-[#FEF9C3] text-[#A16207]', avatarBg: 'bg-[#313EB233] text-[#313EB2]', content: 'Risk Management 101', format: 'Webinar - Intermediate', status: 'Assigned' },
  { id: 6, initials: 'TK', name: 'Tunde Kola', type: 'Retail Investor', risk: 'Aggressive', riskColor: 'bg-[#FEE2E2] text-[#EF4444]', avatarBg: 'bg-[#FEE2E2] text-[#EF4444]', content: 'Sukuk Explained', format: 'Video - Advanced', status: 'Pending' },
  { id: 7, initials: 'FA', name: 'Fatima Aliyu', type: 'Retail Investor', risk: 'Conservative', riskColor: 'bg-[#DCFCE7] text-[#22C55E]', avatarBg: 'bg-[#DCFCE7] text-[#22C55E]', content: 'Halal Bonds Guide', format: 'Report - Beginner', status: 'Pending' },
  { id: 8, initials: 'BL', name: 'Bello Lawal', type: 'SME Owner', risk: 'Moderate', riskColor: 'bg-[#FEF9C3] text-[#CA8A04]', avatarBg: 'bg-[#FEF9C3] text-[#CA8A04]', content: 'SME Investment Guide', format: 'Video - Beginner', status: 'Assigned' },
  { id: 9, initials: 'KA', name: 'Kemi Adeyemi', type: 'Retail Investor', risk: 'Aggressive', riskColor: 'bg-[#FEE2E2] text-[#EF4444]', avatarBg: 'bg-[#FEE2E2] text-[#EF4444]', content: 'Equity Fund Basics', format: 'Webinar - Advanced', status: 'Pending' },
  { id: 10, initials: 'OE', name: 'Ola Eze', type: 'HNW Investor', risk: 'Conservative', riskColor: 'bg-[#DCFCE7] text-[#22C55E]', avatarBg: 'bg-[#DCFCE7] text-[#22C55E]', content: 'Portfolio Diversification', format: 'Report - Intermediate', status: 'Assigned' },
  { id: 11, initials: 'SA', name: 'Sola Akin', type: 'Retail Investor', risk: 'Moderate', riskColor: 'bg-[#FEF9C3] text-[#A16207]', avatarBg: 'bg-[#313EB233] text-[#313EB2]', content: 'Halal Investing Principles', format: 'Video - Beginner', status: 'Pending' },
  { id: 12, initials: 'RI', name: 'Remi Ibrahim', type: 'SME Owner', risk: 'Aggressive', riskColor: 'bg-[#FEE2E2] text-[#EF4444]', avatarBg: 'bg-[#FEE2E2] text-[#EF4444]', content: 'Growth Equity Explained', format: 'Webinar - Advanced', status: 'Pending' },
])

const showAllClients = ref(false)
const currentPage = ref(1)
const itemsPerPage = 4 // shows 4 rows by default

const totalPages = computed(() =>
  Math.ceil(allClients.value.length / itemsPerPage)
)

// this is the key one — switches between paginated and all
const displayedClients = computed(() => {
  if (showAllClients.value) {
    return allClients.value // show everything
  }
  const start = (currentPage.value - 1) * itemsPerPage
  return allClients.value.slice(start, start + itemsPerPage)
})

const pageStart = computed(() => (currentPage.value - 1) * itemsPerPage + 1)
const pageEnd = computed(() =>
  showAllClients.value
    ? allClients.value.length
    : Math.min(currentPage.value * itemsPerPage, allClients.value.length)
)

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}
function assignClient(client) {
  // Find the client in the array and update their status
  const index = allClients.value.findIndex(c => c.id === client.id)
  if (index !== -1) {
    allClients.value[index].status = 'Assigned'
  }
}

const selectedTopic = ref('All Topics')
const selectedFormat = ref('All Formats')
const selectedLevel = ref('All Levels')

const contentItems = ref([
  {
    id: 1,
    topic: 'Islamic Finance',
    format: 'Video',
    level: 'Beginner',
    title: 'Halal Investing Principles: A Starter Guide',
    description: "Learn the fundamental rules of Shari'ah compliant investing and ho...",
    duration: '15 min',
    image: new URL('../assets/1st-pic.svg', import.meta.url).href,
    levelColor: 'bg-[#228B22]', // Green
    icon: new URL('../assets/green-video.svg', import.meta.url).href,
    rating: 5
  },
  {
    id: 2,
    topic: 'Islamic Finance', 
    format: 'Webinar',
    level: 'Intermediate',
    title: 'Halal Investing Principles: A Starter Guide',
    description: "Learn the fundamental rules of Shari'ah compliant investing and ho...",
    duration: '15 min',
    image: new URL('../assets/2nd-pic.svg', import.meta.url).href,
    levelColor: 'bg-[#FFCC00]', // Yellow
    icon: new URL('../assets/webinar.svg', import.meta.url).href,
    rating: 5
  },
  {
    id: 3,
    topic: 'ANALYSIS', // Matches your 3rd card image
    format: 'Report',
    level: 'Advanced',
    title: 'Halal Investing Principles: A Starter Guide',
    description: "Learn the fundamental rules of Shari'ah compliant investing and ho...",
    duration: '15 min',
    image: new URL('../assets/3rd-pic.svg', import.meta.url).href,
    levelColor: 'bg-[#E50303]', // Red
    icon: new URL('../assets/pdf-logo.svg', import.meta.url).href,
    rating: 5
  },
  {
    id: 4,
    topic: 'Islamic Finance',
    format: 'Video',
    level: 'Beginner',
    title: 'Halal Investing Principles: A Starter Guide',
    description: "Learn the fundamental rules of Shari'ah compliant investing and ho...",
    duration: '15 min',
    image: new URL('../assets/1st-pic.svg', import.meta.url).href,
    levelColor: 'bg-[#228B22]', 
    icon: new URL('../assets/green-video.svg', import.meta.url).href,
    rating: 5
  }
])

const filteredContentItems = computed(() => {
  return contentItems.value.filter(item => {
    const matchTopic = selectedTopic.value === 'All Topics' || item.topic === selectedTopic.value || (selectedTopic.value === 'Products' && item.topic === 'ANALYSIS'); // Adjust matching logic as needed
    const matchFormat = selectedFormat.value === 'All Formats' || item.format.toLowerCase() === selectedFormat.value.toLowerCase();
    const matchLevel = selectedLevel.value === 'All Levels' || item.level === selectedLevel.value;
    
    return matchTopic && matchFormat && matchLevel;
  })
})

// --- CONTENT MODAL LOGIC ---
const showContentModal = ref(false)
const selectedContent = ref(null)

function openContentModal(item) {
  selectedContent.value = item
  showContentModal.value = true
}

function closeContentModal() {
  showContentModal.value = false
  selectedContent.value = null
}

import { useRoute } from 'vue-router'
import {  onMounted, nextTick } from 'vue'

const route = useRoute()
const highlightedSection = ref(null)

onMounted(async () => {
  if (route.query.highlight) {
    highlightedSection.value = route.query.highlight
    await nextTick()
    
    const el = document.getElementById(route.query.highlight)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    // remove highlight after 3 seconds
    setTimeout(() => {
      highlightedSection.value = null
    }, 3000)
  }
})
</script>