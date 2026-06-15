<template>
  <div class="flex h-screen w-full overflow-hidden bg-[#F4F0F0]">
    
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
        <router-link to="/notifications" class="flex gap-[10px] text-white hover:text-[#FD4F00] bg-[#1E2736] px-[10px] py-[8px] rounded-[8px]">
          <img src="../assets/notifications.svg" class="w-[18px] h-[18px] mt-[4px]"/>
          Notifications
        </router-link>
      </div>
    </aside>

    <!-- Main Area -->
    <div class="flex flex-col flex-1 ml-[253px] h-screen overflow-hidden">

      <!-- Navbar -->
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

      <!-- Page Content -->
      <div class="flex-1 overflow-y-auto px-[32px] py-[20px]">

        <!-- Page Header -->
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

        <!-- Notifications List -->
        <div class="flex flex-col gap-[12px]">
          <div
            v-for="notification in notifications"
            :key="notification.id"
            class="bg-white rounded-lg shadow-sm p-[20px] flex items-start gap-[12px]"
            :class="!notification.read ? 'border-l-4 border-[#228B22]' : 'border-l-4 border-transparent'"
          >
            <!-- Unread dot -->
            <div class="flex-shrink-0 mt-1">
              <div
                class="w-[8px] h-[8px] rounded-full mt-[6px]"
                :class="!notification.read ? 'bg-[#228B22]' : 'bg-transparent'"
              ></div>
            </div>

            <!-- Icon -->
            <div
              class="w-[36px] h-[36px] rounded-full flex items-center justify-center flex-shrink-0"
              :class="notification.iconBg"
            >
             <img :src="notification.icon" class="w-[18px] h-[18px]" alt="notification icon" />
            </div>

            <!-- Content -->
            <div class="flex-1">
              <div class="flex justify-between items-start">
                <p class="text-sm font-semibold text-[#0F151F]">{{ notification.title }}</p>
                <span class="text-xs text-[#A9A9A9] flex-shrink-0 ml-4">{{ notification.time }}</span>
              </div>
              <p class="text-xs text-[#4B5054] mt-[4px] leading-relaxed">{{ notification.message }}</p>

              <!-- Action Buttons -->
              <div class="flex gap-[12px] mt-[10px]">
                <button
                  v-if="!notification.read"
                  @click="markAsRead(notification)"
                  class="text-xs text-[#228B22] font-semibold hover:underline"
                >Mark Read</button>
                <button
                  @click="deleteNotification(notification.id)"
                  class="text-xs text-[#E50303] font-semibold hover:underline"
                >Delete</button>
                <button
                  v-if="notification.hasReply"
                  @click="openReplyModal(notification)"
                  class="text-xs text-[#313EB2] font-semibold hover:underline"
                > Reply</button>
              </div>
            </div>
          </div>

          <!-- Empty State -->
          <div
            v-if="notifications.length === 0"
            class="bg-white rounded-lg p-[40px] flex flex-col items-center justify-center gap-3"
          >
            <span class="text-4xl">🔔</span>
            <p class="text-sm font-semibold text-[#0F151F]">You're all caught up!</p>
            <p class="text-xs text-[#A9A9A9]">No notifications to show right now.</p>
          </div>
        </div>

      </div>
    </div>

    <!-- Reply Modal -->
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

    <!-- Reply Sent Toast -->
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

  </div>
</template>

<script setup>
import { ref } from 'vue'
import announceSvg from '../assets/announce.svg'
import profileSvg  from '../assets/2ndpic.svg'
import warningSvg  from '../assets/warning.svg'

// ── NOTIFICATIONS DATA ────────────────────────────────────
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
</script>

<style>
.modal-enter-active, .modal-leave-active { transition: all 0.3s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; transform: scale(0.95); }
</style>