<template>
  <div class="flex h-screen overflow-hidden bg-[#F4F0F0]">

    <!-- Sidebar -->
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

    <!-- Main Area -->
    <div class="flex-1 flex flex-col ml-[253px] h-screen overflow-hidden">

      <!-- Navbar -->
      

      <!-- Page Content -->
      <div class="flex-1 overflow-y-auto px-[32px] py-[20px]">

        <!-- Page Header -->
        <div class="flex justify-between items-center mb-[20px]">
          <div>
            <h1 class="font-bold text-[24px] text-[#0F151F]">Calendar</h1>
            <p class="text-xs text-[#A9A9A9]">All upcoming events, reports, and deadlines in one place</p>
          </div>
          <div class="flex gap-6">
            <button 
             @click="$router.back()"
             class="bg-[#228B22] px-[14px] py-[8px] rounded-[8px] text-[14px] text-white font-medium">Cancel</button>
            <button
                @click="openAddEvent"
                class="flex items-center gap-[6px] bg-[#228B22] text-white px-[14px] py-[8px] rounded-[8px] text-sm font-medium"
            >
                + Add Event
            </button>
          </div>
        </div>

        <!-- Calendar Card -->
        <div class="bg-white rounded-[16px] p-[32px] mb-[24px] shadow-sm">

          <div class="flex justify-between items-center mb-[32px]">
            <div class="flex items-center gap-[12px]">
              <img src="../assets/green-calender.svg" alt="calendar">
              <p class="font-semibold text-[20px] text-[#0F151F]">{{ monthName }} {{ currentYear }}</p>
            </div>
            <div class="flex items-center gap-[16px]">
              <span @click="prevMonth" class="text-[#A9A9A9] cursor-pointer hover:text-[#0F151F] text-xl">‹</span>
              <button @click="goToToday" class="text-xs text-[#4B5054] border border-[#E5E7EB] px-[12px] py-[4px] rounded-[6px] hover:bg-[#F5F5F5]">Today</button>
              <span @click="nextMonth" class="text-[#A9A9A9] cursor-pointer hover:text-[#0F151F] text-xl">›</span>
            </div>
          </div>

          <!-- Day Headers -->
          <div class="grid grid-cols-7">
            <div v-for="(day, index) in dayHeaders" :key="day"
              class="text-center text-[13px] font-semibold text-[#A9A9A9] pb-[16px] border-b border-[#F0F0F0]"
              :class="index !== 6 ? 'border-r' : ''">
              {{ day }}
            </div>
          </div>

          <!-- Calendar Grid -->
          <div class="grid grid-cols-7">
            <div
              v-for="(day, index) in calendarDays"
              :key="index"
              class="min-h-[110px] p-[12px] border-b border-[#F0F0F0] cursor-pointer hover:bg-[#F9F9F9] transition-colors duration-200"
              :class="[(index + 1) % 7 !== 0 ? 'border-r' : '']"
              @click="openAddEvent(day)"
            >
              <span
                class="text-[14px] mb-[8px] block"
                :class="day.currentMonth ? 'text-[#4B5054]' : 'text-[#D1D5DB]'"
              >
                {{ day.date }}
              </span>

              <div class="flex flex-col gap-[4px]">
                <div v-for="event in getEventsForDay(day.fullDate)" :key="event.id"
                  class="text-[10px] px-[8px] py-[3px] rounded-[6px] truncate cursor-pointer w-fit max-w-full font-medium"
                  :class="event.color"
                  @click.stop="openEditEvent(event)"
                >
                  {{ event.title }}
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- Upcoming List -->
        <div class="bg-white rounded-[12px] p-[20px] mb-[32px]">
          <p class="font-semibold text-[18px] text-[#0F151F] mb-[16px]">All Upcoming Events</p>
          <div class="flex flex-col gap-[12px]">
            <div
              v-for="event in sortedEvents"
              :key="event.id"
              @click="openEditEvent(event)"
              class="flex items-center gap-[12px] p-[12px] rounded-lg hover:bg-[#F9F9F9] cursor-pointer transition-colors"
            >
              <div :class="`w-[40px] h-[40px] rounded-[8px] flex flex-col items-center justify-center flex-shrink-0 ${event.bgColor}`">
                <span :class="`text-[11px] font-bold ${event.dotColor}`">{{ getDayNumber(event.date) }}</span>
              </div>
              <div class="flex-1">
                <p class="text-sm font-semibold text-[#0F151F]">{{ event.title }}</p>
                <p class="text-xs text-[#A9A9A9]">{{ formatFullDate(event.date) }}</p>
              </div>
              <div :class="`w-[8px] h-[8px] rounded-full ${event.dotColor}`"></div>
            </div>

            <div v-if="sortedEvents.length === 0" class="text-center py-8 text-sm text-gray-400">
              No events scheduled yet. Click "Add Event" to create one.
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Add/Edit Event Modal -->
    <Transition name="modal">
      <div
        v-if="showEventModal"
        class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30"
        @click.self="closeEventModal"
      >
        <div class="bg-white rounded-[16px] p-[32px] w-[480px] shadow-2xl">

          <h2 class="font-bold text-[18px] mb-[20px]">{{ editingEvent ? 'Edit Event' : 'New Event' }}</h2>

          <div class="mb-[16px]">
            <label class="text-sm font-medium mb-[6px] block">Title <span class="text-red-500">*</span></label>
            <input v-model="eventTitle" type="text" placeholder="Enter event title" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#FD4F00]"/>
          </div>

          <div class="mb-[16px]">
            <label class="text-sm font-medium mb-[6px] block">Date <span class="text-red-500">*</span></label>
            <input v-model="eventDate" type="date" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#FD4F00]"/>
          </div>

          <div class="mb-[24px]">
            <label class="text-sm font-medium mb-[6px] block">Category</label>
            <select v-model="eventColor" class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none bg-white">
              <option value="bg-[#FFF0EB] text-[#FD4F00]">Important (Orange)</option>
              <option value="bg-[#DCFCE7] text-[#22C55E]">Routine (Green)</option>
              <option value="bg-[#FEE2E2] text-[#EF4444]">Urgent (Red)</option>
              <option value="bg-[#E8F0FE] text-[#3B4FE0]">Meeting (Blue)</option>
            </select>
          </div>

          <div class="flex justify-between items-center mt-[24px]">
            <div class="flex items-center gap-4">
              <button
                @click="closeEventModal"
                class="flex items-center gap-[6px] border border-[#E5E7EB] text-[#4B5054] px-[16px] py-[10px] rounded-[8px] text-sm"
              >
                Cancel
              </button>
              <button
                v-if="editingEvent"
                @click="deleteEvent"
                class="text-[#EF4444] text-sm hover:underline"
              >
                Delete
              </button>
            </div>

            <button @click="saveEvent" class="flex items-center gap-[6px] bg-[#228B22] text-white px-[20px] py-[10px] rounded-[8px] text-sm font-medium">
              {{ editingEvent ? 'Update Event' : 'Create Event' }}
            </button>
          </div>

        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// ── CALENDAR LOGIC ─────────────────────────────────────────
const today = new Date()
const currentMonth = ref(today.getMonth())
const currentYear = ref(today.getFullYear())

const dayHeaders = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']

// Pre-loaded events
const events = ref([
  { id: 1, date: formatDate(today), title: 'Quarterly SEC Report', color: 'bg-[#FEE2E2] text-[#EF4444]', bgColor: 'bg-[#FEE2E2]', dotColor: 'text-[#EF4444]' },
])

const monthName = computed(() => {
  return new Date(currentYear.value, currentMonth.value).toLocaleString('default', { month: 'long' })
})

const calendarDays = computed(() => {
  const days = []
  const firstDay = new Date(currentYear.value, currentMonth.value, 1)
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0)

  let startDow = firstDay.getDay() - 1
  if (startDow === -1) startDow = 6

  for (let i = startDow - 1; i >= 0; i--) {
    const d = new Date(currentYear.value, currentMonth.value, -i)
    days.push({ date: d.getDate(), fullDate: formatDate(d), currentMonth: false })
  }

  for (let i = 1; i <= lastDay.getDate(); i++) {
    const d = new Date(currentYear.value, currentMonth.value, i)
    days.push({ date: i, fullDate: formatDate(d), currentMonth: true })
  }

  const remaining = 42 - days.length
  for (let i = 1; i <= remaining; i++) {
    const d = new Date(currentYear.value, currentMonth.value + 1, i)
    days.push({ date: d.getDate(), fullDate: formatDate(d), currentMonth: false })
  }

  return days
})

function formatDate(date) {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

function formatFullDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('default', { month: 'short', day: 'numeric', year: 'numeric' })
}

function getDayNumber(dateStr) {
  return new Date(dateStr).getDate()
}

function getEventsForDay(date) {
  return events.value.filter(e => e.date === date)
}

const sortedEvents = computed(() => {
  return [...events.value].sort((a, b) => new Date(a.date) - new Date(b.date))
})

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

function goToToday() {
  currentMonth.value = today.getMonth()
  currentYear.value = today.getFullYear()
}

// ── EVENT MODAL LOGIC ──────────────────────────────────────
const showEventModal = ref(false)
const editingEvent = ref(null)
const eventTitle = ref('')
const eventDate = ref('')
const eventColor = ref('bg-[#FFF0EB] text-[#FD4F00]')

function openAddEvent(day) {
  editingEvent.value = null
  eventTitle.value = ''
  eventDate.value = day && day.fullDate ? day.fullDate : ''
  eventColor.value = 'bg-[#FFF0EB] text-[#FD4F00]'
  showEventModal.value = true
}

function openEditEvent(event) {
  editingEvent.value = event
  eventTitle.value = event.title
  eventDate.value = event.date
  eventColor.value = event.color
  showEventModal.value = true
}

function closeEventModal() {
  showEventModal.value = false
  editingEvent.value = null
  eventTitle.value = ''
  eventDate.value = ''
}

function saveEvent() {
  if (!eventTitle.value || !eventDate.value) {
    alert('Please enter a title and select a date.')
    return
  }

  const colorMap = {
    'bg-[#FFF0EB] text-[#FD4F00]': { bgColor: 'bg-[#FFF0EB]', dotColor: 'text-[#FD4F00]' },
    'bg-[#DCFCE7] text-[#22C55E]': { bgColor: 'bg-[#DCFCE7]', dotColor: 'text-[#22C55E]' },
    'bg-[#FEE2E2] text-[#EF4444]': { bgColor: 'bg-[#FEE2E2]', dotColor: 'text-[#EF4444]' },
    'bg-[#E8F0FE] text-[#3B4FE0]': { bgColor: 'bg-[#E8F0FE]', dotColor: 'text-[#3B4FE0]' },
  }

  if (editingEvent.value) {
    const index = events.value.findIndex(e => e.id === editingEvent.value.id)
    if (index !== -1) {
      events.value[index].title = eventTitle.value
      events.value[index].date = eventDate.value
      events.value[index].color = eventColor.value
      events.value[index].bgColor = colorMap[eventColor.value].bgColor
      events.value[index].dotColor = colorMap[eventColor.value].dotColor
    }
  } else {
    events.value.push({
      id: Date.now(),
      title: eventTitle.value,
      date: eventDate.value,
      color: eventColor.value,
      bgColor: colorMap[eventColor.value].bgColor,
      dotColor: colorMap[eventColor.value].dotColor,
    })
  }

  closeEventModal()
}

function deleteEvent() {
  if (editingEvent.value) {
    events.value = events.value.filter(e => e.id !== editingEvent.value.id)
  }
  closeEventModal()
}
</script>

<style>
.modal-enter-active, .modal-leave-active { transition: all 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; transform: scale(0.95); }
</style>