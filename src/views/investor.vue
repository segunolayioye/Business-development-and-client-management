<template>
  <div class="relative">

    <div :class="showSessionModal ? 'blur-sm pointer-events-none overflow-hidden' : 'overflow-hidden'">
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
              <img src="../assets/notification.svg" class="w-[24px] h-[24px]" alt="notification"/>
              <img src="../assets/settings.svg" class="w-[24px] h-[24px] rounded-[8px]" alt="settings"/>
            </div>
          </nav>

          <div class="flex-1 overflow-y-auto px-[32px] py-[20px]">

            <div class="flex justify-between items-start mb-[20px]">
              <div>
                <p class="font-bold text-[22px] text-[#0F151F]">Investor Education & Webinar Hub</p>
                <p class="text-xs text-[#A9A9A9]">Manage content library, schedule sessions, and track engagement</p>
              </div>
              <div class="flex items-center gap-[10px]">
                <button class="flex items-center gap-[6px] bg-white text-[#4B5054] px-[14px] py-[8px] rounded-[8px] text-sm">
                  <img src="../assets/gray-download.svg" class="w-[18px] h-[18px]"/>
                  <span class="text-[16px] text-[#4B5054]">Export Data</span>
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
                    <button class="text-xs text-white bg-[#0F151F] px-[10px] py-[4px] rounded-[6px]">Monthly</button>
                    <button class="text-xs text-[#A9A9A9] px-[10px] py-[4px] rounded-[6px] hover:bg-[#F5F5F5]">Quarterly</button>
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
                  <investorchart />
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

            <div class="bg-white rounded-[16px] p-[32px] mb-[24px] shadow-sm">
              
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
                  <select class="text-xs text-[#4B5054] font-semibold border border-[#E5E7EB] px-[10px] py-[6px] rounded-[8px] bg-white">
                    <option>All Topics</option>
                    <option>Islamic Finance</option>
                    <option>Products</option>
                  </select>
                  <select class="text-xs text-[#4B5054] font-semibold border border-[#E5E7EB] px-[10px] py-[6px] rounded-[8px] bg-white">
                    <option>All Formats</option>
                    <option>Video</option>
                    <option>Webinar</option>
                  </select>
                  <select class="text-xs text-[#4B5054] font-semibold border border-[#E5E7EB] px-[10px] py-[6px] rounded-[8px] bg-white">
                    <option>All Levels</option>
                    <option>Beginner</option>
                    <option>Advanced</option>
                  </select>
                </div>
              </div>
              <div class="grid grid-cols-4 gap-[16px]">
                <div class="bg-white rounded-[12px] overflow-hidden">
                  <div class="relative h-[120px] flex items-center justify-center">
                    <img src="../assets/1st-pic.svg" class="w-full h-full object-cover" alt="1st-pic"/>
                    <span class="absolute bottom-[8px] left-[8px] bg-[#228B22] text-white text-[9px] px-[6px] py-[2px] rounded">Beginner</span>
                    <span class="flex items-center justify-center absolute top-[8px] right-[8px] gap-1 bg-white font-semibold text-[#0F151F] text-[10px] px-[6px] py-[2px] rounded">
                      <img src="../assets/green-video.svg" class="w-[12px] h-[12px]" alt="video"/> video
                    </span>
                  </div>
                  <div class="p-[12px]">
                    <div class="flex items-center justify-between">
                      <p class="text-[9px] text-[#228B22] font-semibold uppercase mb-[4px]">Islamic Finance</p>
                      <div class="flex text-[#EFF31C] text-[10px] my-[4px]">★★★★★</div>
                    </div>
                    <p class="text-xs font-semibold text-[#0F151F] leading-tight">Halal Investing Principles: A Starter Guide</p>
                    
                    <p class="text-[10px] text-[#4B5054] leading-tight mt-[6px]">Learn the fundamental rules of Shari'ah compliant investing and ho...</p>
                    <div class="flex justify-between items-center mt-[8px]">
                      <span class="flex gap-1 text-[10px] text-[#A9A9A9]"><img src="../assets/gray-clock.svg" alt="time"> 15 min</span>
                      <a class="text-[10px] text-[#228B22] cursor-pointer font-semibold">View Content →</a>
                    </div>
                  </div>
                </div>
                <div class="bg-white rounded-[12px] overflow-hidden">
                  <div class="relative h-[120px] flex items-center justify-center">
                    <img src="../assets/2nd-pic.svg" class="w-full h-full object-cover" alt="2nd-pic"/>
                    <span class="absolute bottom-[8px] left-[8px] bg-[#FFCC00] text-white text-[9px] px-[6px] py-[2px] rounded">Intermediate</span>
                    <span class="flex items-center justify-center absolute top-[8px] right-[8px] gap-1 bg-white font-semibold text-[#0F151F] text-[10px] px-[6px] py-[2px] rounded">
                      <img src="../assets/webinar.svg" class="w-[12px] h-[12px]" alt="video"/> Webinar
                    </span>
                  </div>
                  <div class="p-[12px]">
                    <div class="flex items-center justify-between">
                      <p class="text-[9px] text-[#228B22] font-semibold uppercase mb-[4px]">Islamic Finance</p>
                      <div class="flex text-[#EFF31C] text-[10px] my-[4px]">★★★★★</div>
                    </div>
                    <p class="text-xs font-semibold text-[#0F151F] leading-tight">Halal Investing Principles: A Starter Guide</p>
                    
                    <p class="text-[10px] text-[#4B5054] leading-tight mt-[6px]">Learn the fundamental rules of Shari'ah compliant investing and ho...</p>
                    <div class="flex justify-between items-center mt-[8px]">
                      <span class="flex gap-1 text-[10px] text-[#A9A9A9]"><img src="../assets/gray-clock.svg" alt="time"> 15 min</span>
                      <a class="text-[10px] text-[#228B22] cursor-pointer font-semibold">View Content →</a>
                    </div>
                  </div>
                </div>
                <div class="bg-white rounded-[12px] overflow-hidden">
                  <div class="relative h-[120px] flex items-center justify-center">
                    <img src="../assets/3rd-pic.svg" class="w-full h-full object-cover" alt="3rd-pic"/>
                    <span class="absolute bottom-[8px] left-[8px] bg-[#E50303] text-white text-[9px] px-[6px] py-[2px] rounded">Advanced</span>
                    <span class="flex items-center justify-center absolute top-[8px] right-[8px] gap-1 bg-white font-semibold text-[#0F151F] text-[10px] px-[6px] py-[2px] rounded">
                      <img src="../assets/pdf-logo.svg" class="w-[12px] h-[12px]" alt="video"/> Report
                    </span>
                  </div>
                  <div class="p-[12px]">
                    <div class="flex items-center justify-between">
                      <p class="text-[9px] text-[#228B22] font-semibold uppercase mb-[4px]">ANALYSIS</p>
                      <div class="flex text-[#EFF31C] text-[10px] my-[4px]">★★★★★</div>
                    </div>
                    <p class="text-xs font-semibold text-[#0F151F] leading-tight">Halal Investing Principles: A Starter Guide</p>
                    
                    <p class="text-[10px] text-[#4B5054] leading-tight mt-[6px]">Learn the fundamental rules of Shari'ah compliant investing and ho...</p>
                    <div class="flex justify-between items-center mt-[8px]">
                      <span class="flex gap-1 text-[10px] text-[#A9A9A9]"><img src="../assets/gray-clock.svg" alt="time"> 15 min</span>
                      <a class="text-[10px] text-[#228B22] cursor-pointer font-semibold">View Content →</a>
                    </div>
                  </div>
                </div>
               <div class="bg-white rounded-[12px] overflow-hidden">
                  <div class="relative h-[120px] flex items-center justify-center">
                    <img src="../assets/1st-pic.svg" class="w-full h-full object-cover" alt="1st-pic"/>
                    <span class="absolute bottom-[8px] left-[8px] bg-[#228B22] text-white text-[9px] px-[6px] py-[2px] rounded">Beginner</span>
                    <span class="flex items-center justify-center absolute top-[8px] right-[8px] gap-1 bg-white font-semibold text-[#0F151F] text-[10px] px-[6px] py-[2px] rounded">
                      <img src="../assets/green-video.svg" class="w-[12px] h-[12px]" alt="video"/> video
                    </span>
                  </div>
                  <div class="p-[12px]">
                    <div class="flex items-center justify-between">
                      <p class="text-[9px] text-[#228B22] font-semibold uppercase mb-[4px]">Islamic Finance</p>
                      <div class="flex text-[#EFF31C] text-[10px] my-[4px]">★★★★★</div>
                    </div>
                    <p class="text-xs font-semibold text-[#0F151F] leading-tight">Halal Investing Principles: A Starter Guide</p>
                    
                    <p class="text-[10px] text-[#4B5054] leading-tight mt-[6px]">Learn the fundamental rules of Shari'ah compliant investing and ho...</p>
                    <div class="flex justify-between items-center mt-[8px]">
                      <span class="flex gap-1 text-[10px] text-[#A9A9A9]"><img src="../assets/gray-clock.svg" alt="time"> 15 min</span>
                      <a class="text-[10px] text-[#228B22] cursor-pointer font-semibold">View Content →</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-[12px] p-[20px] mb-[32px]">
              <div class="flex justify-between items-center mb-[16px]">
                <p class="font-semibold text-[18px] text-[#0F151F]">Client Assignments</p>
                <a class="text-xs text-[#FD4F00] cursor-pointer hover:underline">View All</a>
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
                  <tr>
                    <td class="py-[12px]">
                      <div class="flex items-center gap-[8px]">
                        <div class="w-[32px] h-[32px] rounded-full bg-[#313EB233] flex items-center justify-center text-xs font-bold text-[#313EB2]">JD</div>
                        <div>
                          <p class="text-sm font-medium text-black">John Doe</p>
                          <p class="text-[10px] text-black">Retail Investor</p>
                        </div>
                      </div>
                    </td>
                    <td class="py-[12px]"><span class="bg-[#FEF9C3] text-[#A16207] text-[10px] px-[8px] py-[2px] rounded-[8px]">Moderate</span></td>
                    <td class="py-[12px]">
                      <p class="text-xs font-medium text-black">Halal Investing Principles</p>
                      <p class="text-[10px] text-black">Video - Beginner</p>
                    </td>
                    <td class="py-[12px]"><span class="bg-[#FEF9C3] text-[#CA8A04] text-[10px] px-[8px] py-[2px] rounded-full">Pending</span></td>
                    <td class="py-[12px]"><a class="text-xs text-[#FD4F00] cursor-pointer">Assign</a></td>
                  </tr>
                  <tr>
                    <td class="py-[12px]">
                      <div class="flex items-center gap-[8px]">
                        <div class="w-[32px] h-[32px] rounded-full bg-[#FEE2E2] flex items-center justify-center text-xs font-bold text-[#EF4444]">JD</div>
                        <div>
                          <p class="text-sm font-medium text-black">John Doe</p>
                          <p class="text-[10px] text-black">Retail Investor</p>
                        </div>
                      </div>
                    </td>
                    <td class="py-[12px]"><span class="bg-[#FEE2E2] text-[#EF4444] text-[10px] px-[8px] py-[2px] rounded-full">Aggressive</span></td>
                    <td class="py-[12px]">
                      <p class="text-xs font-medium text-black">Halal Investing Principles</p>
                      <p class="text-[10px] text-black">Video - Beginner</p>
                    </td>
                    <td class="py-[12px]"><span class="bg-[#FEF9C3] text-[#CA8A04] text-[10px] px-[8px] py-[2px] rounded-full">Pending</span></td>
                    <td class="py-[12px]"><a class="text-xs text-[#FD4F00] cursor-pointer">Assign</a></td>
                  </tr>
                  <tr>
                    <td class="py-[12px]">
                      <div class="flex items-center gap-[8px]">
                        <div class="w-[32px] h-[32px] rounded-full bg-[#DCFCE7] flex items-center justify-center text-xs font-bold text-[#22C55E]">JD</div>
                        <div>
                          <p class="text-sm font-medium text-black">John Doe</p>
                          <p class="text-[10px] text-black">Retail Investor</p>
                        </div>
                      </div>
                    </td>
                    <td class="py-[12px]"><span class="bg-[#DCFCE7] text-[#22C55E] text-[10px] px-[8px] py-[2px] rounded-full">Conservative</span></td>
                    <td class="py-[12px]">
                      <p class="text-xs font-medium text-black">Halal Investing Principles</p>
                      <p class="text-[10px] text-black">Video - Beginner</p>
                    </td>
                    <td class="py-[12px]"><span class="bg-[#FEF9C3] text-[#CA8A04] text-[10px] px-[8px] py-[2px] rounded-full">Pending</span></td>
                    <td class="py-[12px]"><a class="text-xs text-[#FD4F00] cursor-pointer">Assign</a></td>
                  </tr>
                  <tr>
                    <td class="py-[12px]">
                      <div class="flex items-center gap-[8px]">
                        <div class="w-[32px] h-[32px] rounded-full bg-[#FEF9C3] flex items-center justify-center text-xs font-bold text-[#CA8A04]">JD</div>
                        <div>
                          <p class="text-sm font-medium text-black">John Doe</p>
                          <p class="text-[10px] text-black">Retail Investor</p>
                        </div>
                      </div>
                    </td>
                    <td class="py-[12px]"><span class="bg-[#FEF9C3] text-[#CA8A04] text-[10px] px-[8px] py-[2px] rounded-full">Moderate</span></td>
                    <td class="py-[12px]">
                      <p class="text-xs font-medium text-black">Halal Investing Principles</p>
                      <p class="text-[10px] text-black">Video - Beginner</p>
                    </td>
                    <td class="py-[12px]"><span class="bg-[#FEF9C3] text-[#CA8A04] text-[10px] px-[8px] py-[2px] rounded-full">Pending</span></td>
                    <td class="py-[12px]"><a class="text-xs text-[#FD4F00] cursor-pointer">Assign</a></td>
                  </tr>
                </tbody>
              </table>
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
    </div>
</template>

<script setup>
import Doughnutchart from '../components/doughnutchart.vue'
import investorchart from '../components/investorchart.vue'
import { ref, computed } from 'vue'

// --- MODAL STATES ---
const showSessionModal = ref(false)
const editingEvent = ref(null)

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
</script>