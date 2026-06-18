<template>
  <div class="flex h-screen w-full overflow-hidden bg-[#F4F0F0]">
    
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
        <router-link to="/notifications" class="flex gap-[10px] text-white hover:text-[#FD4F00] bg-[#1E2736] px-[10px] py-[8px] rounded-[8px]">
          <img src="../assets/notifications.svg" class="w-[18px] h-[18px] mt-[4px]"/>
          Notifications
        </router-link>
      </div>
    </aside>

    <div class="flex flex-col flex-1 ml-[253px] h-screen overflow-hidden">

      <nav class="h-[95px] w-full bg-white shadow-sm flex items-center justify-between px-[40px] flex-shrink-0">
        <div class="bg-[#F5F5F5] rounded-lg px-4 py-2 flex gap-2 w-[380px]">
          <img src="../assets/search-icon.svg" class="w-[16px] h-[16px]"/>
          <input type="text" placeholder="Search notifications..." class="bg-transparent focus:outline-none w-full text-xs text-[#A5A5A8]"/>
        </div>
        <div class="flex items-center gap-[16px]">
          <img src="../assets/notification.svg" class="w-[20px] h-[20px]"/>
          <div class="flex items-center gap-[8px]">
            <img src="../assets/picture.svg" class="w-[32px] h-[32px] rounded-full"/>
            <span class="text-sm font-medium text-[#0F151F]">Jane Peters</span>
            <img src="../assets/down-arrow.svg" class="w-[10px] h-[10px]"/>
          </div>
        </div>
      </nav>

      <div class="flex-1 overflow-y-auto px-[32px] py-[20px]">

        <div class="flex justify-between items-center mb-[20px]">
          <div>
            <h1 class="text-[#2D3643] font-semibold text-[29px]">Notifications</h1>
            <p class="text-[#4B5054] text-[15px]">Stay updated on your campaign performance and system alerts.</p>
          </div>
          <button
            @click="markAllAsRead"
            class="text-[#E50303] text-[15px] font-semibold hover:underline"
          >
            Mark all as read
          </button>
        </div>

        <div class="flex gap-2 mb-[24px]">
          <button
            v-for="tab in filterTabs"
            :key="tab"
            @click="activeTab = tab"
            :class="activeTab === tab
              ? 'bg-[#228B22] text-white font-medium'
              : 'bg-white text-[#4B5054] border border-[#E5E7EB] hover:bg-gray-50'"
            class="text-xs px-4 py-1.5 rounded-xl transition-colors"
          >
            {{ tab }}
          </button>
        </div>

        <div class="flex flex-col gap-[12px]">
          <div
            v-for="notification in filteredNotifications"
            :key="notification.id"
            @click="openNotificationModal(notification)"
            class="bg-white rounded-lg shadow-sm p-[20px] flex items-start gap-[12px] cursor-pointer hover:shadow-md transition-shadow"
            :class="!notification.read ? 'border-l-4 border-[#228B22]' : 'border-l-4 border-transparent'"
          >
            <div class="flex-shrink-0 mt-1">
              <div
                class="w-[8px] h-[8px] rounded-full mt-[6px]"
                :class="!notification.read ? 'bg-[#228B22]' : 'bg-transparent'"
              ></div>
            </div>

            <div
              class="w-[36px] h-[36px] rounded-full flex items-center justify-center flex-shrink-0"
              :class="notification.iconBg"
            >
             <img :src="notification.icon" class="w-[18px] h-[18px]" alt="notification icon" />
            </div>

            <div class="flex-1">
              <div class="flex justify-between items-start">
                <p class="text-sm font-semibold text-[#0F151F]">{{ notification.title }}</p>
                <span class="text-xs text-[#A9A9A9] flex-shrink-0 ml-4">{{ notification.time }}</span>
              </div>
              <p class="text-xs text-[#4B5054] mt-[4px] leading-relaxed">{{ notification.message }}</p>

              <div class="flex gap-[12px] mt-[10px]">
                <button
                  v-if="!notification.read"
                  @click.stop="markAsRead(notification)"
                  class="text-xs text-[#228B22] font-semibold hover:underline"
                >Mark Read</button>
                <button
                  @click.stop="deleteNotification(notification.id)"
                  class="text-xs text-[#E50303] font-semibold hover:underline"
                >Delete</button>
                <button
                  v-if="notification.hasReply"
                  @click.stop="openReplyModal(notification)"
                  class="text-xs text-[#313EB2] font-semibold hover:underline"
                > Reply</button>
              </div>
            </div>
          </div>

          <div
            v-if="filteredNotifications.length === 0"
            class="bg-white rounded-lg p-[40px] flex flex-col items-center justify-center gap-3"
          >
            <span class="text-4xl">🔔</span>
            <p class="text-sm font-semibold text-[#0F151F]">You're all caught up!</p>
            <p class="text-xs text-[#A9A9A9]">No notifications found for this filter.</p>
          </div>
        </div>

      </div>
    </div>

    <Transition name="modal">
      <div
        v-if="showReplyModal && replyingTo"
        class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30"
        @click.self="showReplyModal = false"
      >
        <div class="bg-white rounded-2xl p-8 w-[460px] flex flex-col gap-4 shadow-xl">
          <div class="flex justify-between items-center">
            <h2 class="text-lg font-bold text-[#0F151F]">Reply</h2>
            <button @click="showReplyModal = false" class="text-[#A9A9A9] hover:text-[#0F151F]">✕</button>
          </div>
          <p class="text-xs text-[#4B5054] bg-[#F5F5F5] rounded-lg p-3">
            Re: {{ replyingTo.title }}
          </p>
          <textarea
            v-model="replyText"
            rows="4"
            placeholder="Type your reply here..."
            class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#228B22] resize-none"
          ></textarea>
          <div class="flex gap-3">
            <button
              @click="showReplyModal = false"
              class="flex-1 border border-[#E5E7EB] text-[#4B5054] py-3 rounded-xl text-sm font-medium"
            >Cancel</button>
            <button
              @click="sendReply"
              class="flex-1 bg-[#228B22] text-white py-3 rounded-xl text-sm font-medium"
            >Send Reply</button>
          </div>
        </div>
      </div>
    </Transition>

    <Transition name="modal">
      <div
        v-if="showReplySent"
        class="fixed top-6 right-6 z-[9999] flex items-center gap-3 bg-white border-l-4 border-l-green-500 rounded-xl px-4 py-3 shadow-lg min-w-[280px]"
      >
        <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm">✓</div>
        <div>
          <p class="text-sm font-semibold text-gray-900">Reply Sent!</p>
          <p class="text-xs text-gray-500">Your reply has been delivered</p>
        </div>
        <button @click="showReplySent = false" class="text-gray-400 hover:text-gray-700 ml-2">✕</button>
      </div>
    </Transition>
    
    <Transition name="modal">
  <div
    v-if="showNotificationModal && activeNotification"
    class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30"
    @click.self="showNotificationModal = false"
  >
    <div class="bg-white rounded-2xl p-8 w-[520px] flex flex-col gap-4 shadow-xl">

      <div class="flex justify-between items-start w-full">
      <div class="flex items-center gap-3">
        <div
          class="w-[42px] h-[42px] rounded-full flex items-center justify-center flex-shrink-0"
          :class="activeNotification.iconBg"
        >
          <img :src="activeNotification.icon" class="w-[20px] h-[20px]" alt="notification icon" />
        </div>
        
        <div>
          <p class="font-bold text-[16px] text-[#0F151F] leading-tight">{{ activeNotification.title }}</p>
          <p class="text-xs text-[#A9A9A9] mt-0.5">{{ activeNotification.time }}</p>
        </div>
      </div>
      
      <button @click="showNotificationModal = false" class="text-[#A9A9A9] hover:text-[#0F151F] text-xl p-1 leading-none">✕</button>
    </div>
      <div class="flex items-center gap-2">
        <span
          class="text-xs px-[10px] py-[4px] rounded-full font-medium"
          :class="activeNotification.read ? 'bg-[#F5F5F5] text-[#4B5054]' : 'bg-[#228B2233] text-[#228B22]'"
        >
          {{ activeNotification.read ? 'Read' : 'Unread' }}
        </span>
      </div>

      <div class="border-t border-[#F5F5F5] pt-4">
        <p class="text-xs font-semibold text-[#A9A9A9] mb-2 uppercase">Message</p>
        <p class="text-sm text-[#0F151F] leading-relaxed bg-[#F9F9F9] rounded-lg p-4">
          {{ activeNotification.message }}
        </p>
      </div>

      <div v-if="activeNotification.hasReply">
        <p class="text-xs font-semibold text-[#A9A9A9] mb-2 uppercase">Your Reply</p>
        <textarea
          v-model="replyText"
          rows="3"
          placeholder="Type your reply here..."
          class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#228B22] resize-none"
          @click.stop
        ></textarea>
      </div>

      <div class="flex gap-3 mt-2">
        <button
          v-if="!activeNotification.read"
          @click.stop="markAsRead(activeNotification)"
          class="flex-1 border border-[#228B22] text-[#228B22] py-3 rounded-xl text-sm font-medium hover:bg-[#228B2210]"
        >✓ Mark as Read</button>

        <button
          @click.stop="deleteNotification(activeNotification.id); showNotificationModal = false"
          class="flex-1 border border-[#E50303] text-[#E50303] py-3 rounded-xl text-sm font-medium hover:bg-[#FEE2E2]"
        >Delete</button>

        <button
          v-if="activeNotification.hasReply"
          @click.stop="sendReply"
          class="flex-1 bg-[#228B22] text-white py-3 rounded-xl text-sm font-medium hover:bg-[#166316]"
        >Send Reply</button>

        <button
          v-else
          @click="showNotificationModal = false"
          class="flex-1 bg-[#0F151F] text-white py-3 rounded-xl text-sm font-medium"
        >Close</button>
      </div>

    </div>
  </div>
</Transition>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue' // Added computed
import announceSvg from '../assets/announce.svg'
import profileSvg  from '../assets/2ndpic.svg'
import warningSvg  from '../assets/warning.svg'

// ── FILTER TABS LOGIC ─────────────────────────────────────
const filterTabs = ['All', 'Unread', 'Last 7 Days', 'Older']
const activeTab = ref('All')

// The computed property that filters the list dynamically
const filteredNotifications = computed(() => {
  if (activeTab.value === 'All') return notifications.value
  if (activeTab.value === 'Unread') return notifications.value.filter(n => !n.read)
  if (activeTab.value === 'Last 7 Days') return notifications.value.filter(n => n.daysOld <= 7)
  if (activeTab.value === 'Older') return notifications.value.filter(n => n.daysOld > 7)
  return notifications.value
})

// ── NOTIFICATIONS DATA ────────────────────────────────────
// Added "daysOld" to each item so the filters know how to sort them
const notifications = ref([
  {
    id: 1,
    title: 'Halal Fund Launch is Live!',
    message: 'Your campaign has successfully launched and is currently sending emails to the Dormant Clients audience.',
    time: '2 mins ago',
    read: false,
    icon: announceSvg,
    iconBg: 'bg-[#228B2233]',
    hasReply: true,
    daysOld: 0
  },
  {
    id: 2,
    title: 'Weekly Performance Report Ready',
    message: 'Your overall conversion rate increased by 2.4% this week. Click here to view the full breakdown.',
    time: '1 hour ago',
    read: false,
    icon: announceSvg,
    iconBg: 'bg-[#313EB233]',
    hasReply: true,
    daysOld: 0
  },
  {
    id: 3,
    title: 'Q3 Recovery Ads Completed',
    message: 'The campaign has concluded. Final ROI is currently being calculated and will be available shortly.',
    time: 'Yesterday',
    read: true,
    icon: announceSvg,
    iconBg: 'bg-[#228B2233]',
    hasReply: false,
    daysOld: 1
  },
  {
    id: 4,
    title: 'Budget Warning',
    message: 'The SME Growth Webinar campaign has consumed 90% of its allocated budget.',
    time: 'Yesterday',
    read: true,
    icon: warningSvg,
    iconBg: 'bg-[#E5030333]',
    hasReply: false,
    daysOld: 1
  },
  {
    id: 5,
    title: 'New Client Onboarded',
    message: 'Amina Musa has completed KYC verification and is now an active client.',
    time: '2 days ago',
    read: true,
    icon: profileSvg,
    iconBg: 'bg-[#FD4F0033]',
    hasReply: false,
    daysOld: 2
  },
  {
    id: 6,
    title: 'System Update Completed',
    message: 'The InvestFlow platform was successfully updated to version 2.4 with no downtime.',
    time: '2 weeks ago', // Here is the older message!
    read: true,
    icon: announceSvg,
    iconBg: 'bg-[#313EB233]',
    hasReply: false,
    daysOld: 14 
  },
])

// ── MARK AS READ ──────────────────────────────────────────
function markAsRead(notification) {
  notification.read = true
}

function markAllAsRead() {
  notifications.value.forEach(n => n.read = true)
}

// ── DELETE ────────────────────────────────────────────────
function deleteNotification(id) {
  notifications.value = notifications.value.filter(n => n.id !== id)
}

// ── REPLY MODAL ───────────────────────────────────────────
const showReplyModal = ref(false)
const replyingTo = ref(null)
const replyText = ref('')
const showReplySent = ref(false)

function openReplyModal(notification) {
  replyingTo.value = notification
  replyText.value = ''
  showReplyModal.value = true
}

function sendReply() {
  if (!replyText.value) {
    alert('Please type a reply first')
    return
  }
  showReplyModal.value = false
  showReplySent.value = true
  setTimeout(() => {
    showReplySent.value = false
  }, 3000)
}

// ── NOTIFICATION DETAIL MODAL ─────────────────────────────
const showNotificationModal = ref(false)
const activeNotification = ref(null)

function openNotificationModal(notification) {
  activeNotification.value = notification
  replyText.value = ''
  showNotificationModal.value = true
  // auto mark as read when opened
  notification.read = true
}
</script>

