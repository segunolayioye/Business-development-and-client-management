<template>
  <div class="flex h-screen overflow-hidden bg-[#F4F0F0]">

    <!-- Sidebar -->
    <aside class="bg-[#0F151F] text-white w-[253px] h-screen fixed top-0 left-0 p-6 z-20 flex-shrink-0">
  <div class="flex flex-col gap-[45px] mt-[65px]">

    <router-link to="/" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
      <img src="../assets/dashboard.svg" class="w-[18px] h-[18px] mt-[4px]">
      Dashboard
    </router-link>

    <router-link to="/retail" class="flex gap-[10px] text-white hover:text-[#FD4F00]  bg-[#1E2736] px-[10px] py-[8px] rounded-[8px]">
      <img src="../assets/retail.svg" class="w-[18px] h-[18px] mt-[4px]">
      Retail Clients
    </router-link>

    <router-link to="/investment-product" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
      <img src="../assets/investment.svg" class="w-[18px] h-[18px] mt-[4px]">
      Investment Product
    </router-link>

    <router-link to="/campaigns" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
      <img src="../assets/campaign.svg" class="w-[18px] h-[18px] mt-[4px]">
      Campaigns
    </router-link>

    <router-link to="/investor" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
      <img src="../assets/investor.svg" class="w-[18px] h-[18px] mt-[4px]">
      Investor Education
    </router-link>

    <router-link to="/help-center" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
      <img src="../assets/help-center.svg" class="w-[18px] h-[18px] mt-[4px]">
      Help Center & Support
    </router-link>

    <router-link to="/notifications" class="flex gap-[10px] text-white hover:text-[#FD4F00]">
      <img src="../assets/notifications.svg" class="w-[18px] h-[18px] mt-[4px]">
      Notifications
    </router-link>

  </div>
</aside>

    <!-- Main Area -->
    <div class="flex-1 flex flex-col ml-[253px] h-screen overflow-hidden">

      <!-- Navbar -->
      <nav class="h-[95px] w-full bg-white shadow-md flex items-center justify-between px-[40px] flex-shrink-0">
        <div class="font-semibold text-[#0F151F] text-xl">Retail Clients</div>
        <div class="bg-[#F5F5F5] rounded-lg px-5 py-3 flex items-center gap-2 w-[320px]">
          <img src="../assets/search-icon.svg" class="w-[18px] h-[18px]" alt="search icon">
          <input type="text" placeholder="Search clients, accounts..." class="bg-transparent focus:outline-none w-full text-sm text-[#A5A5A8]"/>
        </div>
        <div class="flex items-center gap-[10px]">
          <img src="../assets/notification.svg" class="w-[22px] h-[24px]" alt="notification icon">
          <img src="../assets/picture.svg" class="w-[42px] h-[42px] rounded-full" alt="user avatar">
          <span class="text-sm font-medium text-gray-800">Jane Peters</span>
          <img src="../assets/down-arrow.svg" class="w-[10px] h-[10px]" alt="dropdown">
        </div>
        
      </nav>

      <!-- Main Content -->
      <main class="flex-1 overflow-y-auto px-[40px] py-[20px]">

        <!-- Page Header -->
        <div class="flex justify-between items-center py-4">
          <div>
            <h1 class="text-[#2D3643] font-semibold text-[29px]">Retail Clients</h1>
            <p class="text-[16px] text-[#2D3643]">View and manage complete list of all retail clients</p>
          </div>
          <div class="flex gap-4">
             <router-link to="/new-app">
                <button class="flex items-center gap-[6px] bg-[#FD4F00] text-white px-[14px] py-[8px] rounded-[8px] text-sm font-medium">
                  <img src="../assets/plus.svg" alt="plus-icon">
                  New Application
                </button>
             </router-link>
            <button 
            @click="handleSaveDraft"
            :disabled="savingDraft"
            class="flex items-center justify-center gap-[8px] w-[120px] h-[40px] p-[12px] text-sm font-semibold text-[#4B5054] bg-white rounded-lg border border-gray-200 disabled:opacity-60"
          >
            {{ savingDraft ? 'Saving...' : 'Save Draft' }}
          </button>
            <button 
            @click="$router.back()"
            class="px-[16px] h-[40px] text-[#4B5054] bg-white rounded-lg border border-[#E5E7EB] text-sm font-semibold">Cancel</button>
          </div>
        </div>

        <p class="font-semibold text-2xl mb-4 text-[#000000]">Clients</p>

        <!-- Filter Tabs + Icons -->
        <div class="flex justify-between items-center mb-6">
          <div class="flex gap-2">
            <button
              v-for="tab in tabs"
              :key="tab"
              @click="changeTab(tab)"
              :class="activeTab === tab
                ? 'bg-[#FD4F00] text-white'
                : 'bg-white text-[#4B5054] border border-[#E5E7EB]'"
              class="text-xs px-4 py-1.5 rounded-xl h-[38px]"
            >
              {{ tab }}
            </button>
          </div>
          
        </div>

        <!-- Table -->
        <div>
          <!-- Table Header -->
          <div class="grid grid-cols-6 border-b-2 border-[#E5E5E5] px-6 py-4 text-[10px] font-semibold uppercase tracking-wide text-[#4B5054] bg-[#D9D9D9]/30 rounded-t-lg">
            <p>Client Name</p>
            <p class="pl-8">Status</p>
            <p class="pl-4">AUM</p>
            <p>Risk Profile</p>
            <p class="pl-8">Last Activity</p>
            <p class="pl-12">Actions</p>
          </div>

          <!-- Table Rows -->
          <div
            v-for="(client, index) in paginatedClients"
            :key="index"
            class="grid grid-cols-6 items-center border-b-2 border-[#E5E5E5] px-6 py-3 bg-white relative"
          >
            <!-- Client Name -->
            <div class="flex items-center gap-3">
              <img src="https://i.pravatar.cc/40" class="h-10 w-10 rounded-full object-cover"/>
              <div>
                <p class="text-[13px] font-semibold text-gray-900">{{ client.name }}</p>
                <p class="text-[11px] text-[#4B5054]">ID: {{ client.id }}</p>
              </div>
            </div>

            <!-- Status -->
            <div class="pl-8">
              <span
                :class="{
                  'bg-[#DCFCE7] text-[#228B22]': client.status === 'Active',
                  'bg-[#FEF9C3] text-[#B88836]': client.status === 'Pending KYC',
                  'bg-[#E5E5E5] text-[#4B5054]': client.status === 'Draft'
                }"
                class="rounded-lg px-3 py-1 text-[11px] font-medium"
              >
                {{ client.status }}
              </span>
            </div>

            <!-- AUM -->
            <div>
              <p class="text-[13px] font-semibold text-gray-900 pl-4">{{ client.aum }}</p>
            </div>

            <!-- Risk Profile -->
            <div class="flex items-center gap-2">
              <template v-if="client.riskProfile !== 'Not profiled'">
                <div class="h-[5px] w-[36px] rounded-full bg-[#D9D9D9]">
                  <div
                    class="h-full rounded-full"
                    :class="client.riskColor"
                    :style="{ width: client.riskWidth }"
                  ></div>
                </div>
              </template>
              <p
                class="text-[11px] text-[#4B5054]"
                :class="{ 'italic': client.riskProfile === 'Not profiled' }"
              >
                {{ client.riskProfile }}
              </p>
            </div>

            <!-- Last Activity -->
            <div>
              <p class="text-[12px] text-[#4B5054] pl-8">{{ client.lastActivity }}</p>
            </div>

            <!-- Actions -->
            <div class="pl-12 relative">
              <button 
                @click.stop="toggleDropdown(client.id)" 
                class="text-[#000000] hover:bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center transition-colors focus:outline-none"
              >
                ⋮
              </button>

              <!-- Dropdown Menu -->
              <div 
                v-if="activeDropdown === client.id"
                class="absolute right-[40px] top-[30px] w-[200px] bg-white border border-[#F5F5F5] rounded-xl shadow-lg z-50 py-2 flex flex-col text-left"
              >
                <button @click="handleAction('View Profile', client)" class="px-4 py-2 text-sm text-[#4B5054] hover:bg-[#F5F5F5] hover:text-[#0F151F] text-left transition-colors">
                  View Profile
                </button>
                <button @click="handleAction('Edit', client)" class="px-4 py-2 text-sm text-[#4B5054] hover:bg-[#F5F5F5] hover:text-[#0F151F] text-left transition-colors">
                  Edit
                </button>
                
                <button @click="handleAction('Send Reminder', client)" class="px-4 py-2 text-sm text-[#4B5054] hover:bg-[#F5F5F5] hover:text-[#0F151F] text-left transition-colors">
                  Send Reminder Email
                </button>

                <div class="h-px bg-[#F5F5F5] my-1 w-full"></div> <!-- Divider Line -->

                <button @click="handleAction('Delete', client)" class="px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left transition-colors font-medium">
                  Delete
                </button>
              </div>
            </div>
          </div>

          <!-- Pagination -->
         <div class="flex justify-between items-center mt-[16px] py-[10px]">
            <p class="text-xs text-[#A9A9A9]">
              Showing {{ pageStart }} to {{ pageEnd }} of {{ filteredClients.length }} clients
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

      </main>
    </div>
    <Transition name="modal">
  <div 
    v-if="showDraftModal"
    class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30"
    @click.self="showDraftModal = false"
  >
    <div class="bg-white rounded-2xl p-10 w-[420px] flex flex-col items-center gap-4 shadow-xl">
      
      <!-- Blue save circle -->
      <div class="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center">
        <span class="text-blue-500 text-4xl">🗂</span>
      </div>

      <h2 class="text-xl font-bold text-gray-900 mt-2">Draft Saved!</h2>
      <p class="text-sm text-gray-500 text-center">
        Your report has been saved as a draft. You can continue editing it anytime.
      </p>

      <button 
        @click="showDraftModal = false"
        class="w-full bg-[#4B5054] text-white py-3 rounded-xl font-semibold text-sm mt-2 hover:bg-[#3a3e42] transition-colors"
      >
        Back to Dashboard
      </button>

    </div>
  </div>
</Transition>
<!-- Client Profile Modal -->
<Transition name="modal">
  <div
    v-if="showProfileModal && profileClient"
    class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30"
    @click.self="showProfileModal = false"
  >
    <div class="bg-white rounded-2xl p-8 w-[460px] flex flex-col gap-4 shadow-xl">

      <!-- Header -->
      <div class="flex justify-between items-start">
        <div class="flex items-center gap-3">
          <img src="https://i.pravatar.cc/60" class="w-[56px] h-[56px] rounded-full object-cover"/>
          <div>
            <p class="font-bold text-[18px] text-[#0F151F]">{{ profileClient.name }}</p>
            <p class="text-xs text-[#A9A9A9]">ID: {{ profileClient.id }}</p>
          </div>
        </div>
        <button @click="showProfileModal = false" class="text-[#A9A9A9] hover:text-[#0F151F] text-xl">✕</button>
      </div>

      <!-- Details -->
      <div class="flex flex-col gap-3 border-t border-[#F5F5F5] pt-4">
        <div class="flex justify-between">
          <span class="text-sm text-[#4B5054]">Status</span>
          <span
            :class="{
              'bg-[#DCFCE7] text-[#228B22]': profileClient.status === 'Active',
              'bg-[#FEF9C3] text-[#B88836]': profileClient.status === 'Pending KYC',
              'bg-[#E5E5E5] text-[#4B5054]': profileClient.status === 'Draft'
            }"
            class="text-xs px-[10px] py-[3px] rounded-full font-medium"
          >{{ profileClient.status }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-[#4B5054]">AUM</span>
          <span class="text-sm font-semibold text-[#0F151F]">{{ profileClient.aum }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-[#4B5054]">Risk Profile</span>
          <span class="text-sm font-semibold text-[#0F151F]">{{ profileClient.riskProfile }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-[#4B5054]">Last Activity</span>
          <span class="text-sm font-semibold text-[#0F151F]">{{ profileClient.lastActivity }}</span>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex gap-3 mt-2">
        <button
          @click="showProfileModal = false; editClient(profileClient)"
          class="flex-1 border border-[#FD4F00] text-[#FD4F00] py-3 rounded-xl text-sm font-medium hover:bg-[#FFF0EB] transition-colors"
        >Edit Client</button>
        <button
          @click="showProfileModal = false"
          class="flex-1 bg-[#FD4F00] text-white py-3 rounded-xl text-sm font-medium"
        >Close</button>
      </div>

    </div>
  </div>
</Transition>

<!-- Edit Client Modal -->
<Transition name="modal">
  <div
    v-if="showClientEditModal && editingClient"
    class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30"
    @click.self="showClientEditModal = false"
  >
    <div class="bg-white rounded-2xl p-8 w-[460px] flex flex-col gap-4 shadow-xl">

      <div class="flex justify-between items-center">
        <h2 class="text-lg font-bold text-[#0F151F]">Edit Client</h2>
        <button @click="showClientEditModal = false" class="text-[#A9A9A9] hover:text-[#0F151F]">✕</button>
      </div>

      <div class="flex flex-col gap-4 border-t border-[#F5F5F5] pt-4">
        <div>
          <label class="text-xs font-medium text-[#0F151F] mb-1 block">Client Name</label>
          <input
            v-model="editClientName"
            type="text"
            class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#FD4F00]"
          />
        </div>
        <div>
          <label class="text-xs font-medium text-[#0F151F] mb-1 block">Status</label>
          <select
            v-model="editClientStatus"
            class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none bg-white focus:border-[#FD4F00]"
          >
            <option>Active</option>
            <option>Pending KYC</option>
            <option>Draft</option>
          </select>
        </div>
        <div>
          <label class="text-xs font-medium text-[#0F151F] mb-1 block">AUM</label>
          <input
            v-model="editClientAum"
            type="text"
            class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#FD4F00]"
          />
        </div>
      </div>

      <div class="flex gap-3 mt-2">
        <button
          @click="showClientEditModal = false"
          class="flex-1 border border-[#E5E7EB] text-[#4B5054] py-3 rounded-xl text-sm font-medium"
        >Cancel</button>
        <button
          @click="saveClientEdit"
          class="flex-1 bg-[#FD4F00] text-white py-3 rounded-xl text-sm font-medium"
        >Save Changes</button>
      </div>

    </div>
  </div>
</Transition>

<!-- Reminder Sent Toast -->
<Transition name="modal">
  <div
    v-if="showReminderToast"
    class="fixed top-6 right-6 z-[9999] flex items-center gap-3 bg-white border-l-4 border-l-blue-500 rounded-xl px-4 py-3 shadow-lg min-w-[300px]"
  >
    <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-sm">✓</div>
    <div>
      <p class="text-sm font-semibold text-gray-900">Reminder Sent!</p>
      <p class="text-xs text-gray-500">Email sent to {{ reminderClientName }}</p>
    </div>
    <button @click="showReminderToast = false" class="text-gray-400 hover:text-gray-700 ml-2">✕</button>
  </div>
</Transition>

<!-- Delete Confirmation -->
<Transition name="modal">
  <div
    v-if="showDeleteConfirm && deletingClient"
    class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30"
    @click.self="showDeleteConfirm = false"
  >
    <div class="bg-white rounded-2xl p-8 w-[400px] flex flex-col items-center gap-4 shadow-xl">

      <div class="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
        <span class="text-red-500 text-3xl">⚠</span>
      </div>

      <h2 class="text-lg font-bold text-gray-900">Delete Client?</h2>
      <p class="text-sm text-gray-500 text-center">
        Are you sure you want to delete <strong>{{ deletingClient.name }}</strong>? This action cannot be undone.
      </p>

      <div class="flex gap-3 w-full mt-2">
        <button
          @click="showDeleteConfirm = false"
          class="flex-1 border border-[#E5E7EB] text-[#4B5054] py-3 rounded-xl text-sm font-medium"
        >Cancel</button>
        <button
          @click="deleteClient"
          class="flex-1 bg-red-500 text-white py-3 rounded-xl text-sm font-medium hover:bg-red-600"
        >Delete</button>
      </div>

    </div>
  </div>
</Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router' 

const router = useRouter()

const activeTab = ref('All Clients')

const tabs = ['All Clients', 'Pending KYC', 'High Value', 'New This Week']

const currentPage = ref(1)
const itemsPerPage = 10


const clients = ref([
  { name: 'Sarah Akpola', id: '12345', status: 'Active',      aum: '$123,000', riskProfile: 'Mod. Aggressive', riskColor: 'bg-[#FD4F00]', riskWidth: '65%', lastActivity: '2 Hours Ago' },
  { name: 'Sarah Akpola', id: '12346', status: 'Pending KYC', aum: '$123,000', riskProfile: 'Balanced',        riskColor: 'bg-[#313EB2]', riskWidth: '45%', lastActivity: '2 Hours Ago' },
  { name: 'Sarah Akpola', id: '12347', status: 'Draft',       aum: '...',      riskProfile: 'Not profiled',    riskColor: '',             riskWidth: '0%',  lastActivity: 'Just now'    },
  { name: 'Sarah Akpola', id: '12348', status: 'Pending KYC', aum: '$123,000', riskProfile: 'Balanced',        riskColor: 'bg-[#313EB2]', riskWidth: '45%', lastActivity: '2 Hours Ago' },
  { name: 'Sarah Akpola', id: '12349', status: 'Active',      aum: '$123,000', riskProfile: 'Mod. Aggressive', riskColor: 'bg-[#FD4F00]', riskWidth: '65%', lastActivity: '2 Hours Ago' },
  { name: 'Sarah Akpola', id: '12340', status: 'Pending KYC', aum: '$123,000', riskProfile: 'Balanced',        riskColor: 'bg-[#313EB2]', riskWidth: '45%', lastActivity: '2 Hours Ago' },
  { name: 'Sarah Akpola', id: '12341', status: 'Active',      aum: '$123,000', riskProfile: 'Mod. Aggressive', riskColor: 'bg-[#FD4F00]', riskWidth: '65%', lastActivity: '2 Hours Ago' },
  { name: 'Sarah Akpola', id: '12342', status: 'Active',      aum: '$200,000', riskProfile: 'Mod. Aggressive', riskColor: 'bg-[#FD4F00]', riskWidth: '65%', lastActivity: 'Just now'    },
  { name: 'Sarah Akpola', id: '12343', status: 'Active',      aum: '$123,000', riskProfile: 'Mod. Aggressive', riskColor: 'bg-[#FD4F00]', riskWidth: '65%', lastActivity: '2 Hours Ago' },
  { name: 'Sarah Akpola', id: '12344', status: 'Draft',       aum: '...',      riskProfile: 'Not profiled',    riskColor: '',             riskWidth: '0%',  lastActivity: 'Just now'    },
  { name: 'Tunde Kola',   id: '12300', status: 'Active',      aum: '$450,000', riskProfile: 'Aggressive',      riskColor: 'bg-[#E50303]', riskWidth: '90%', lastActivity: '1 Hour Ago'  },
  { name: 'Amina Musa',   id: '12347', status: 'Pending KYC', aum: '$89,000',  riskProfile: 'Conservative',    riskColor: 'bg-[#228B22]', riskWidth: '25%', lastActivity: '3 Hours Ago' },
  { name: 'Kemi Adeyemi', id: '12348', status: 'Active',      aum: '$310,000', riskProfile: 'Mod. Aggressive', riskColor: 'bg-[#FD4F00]', riskWidth: '65%', lastActivity: 'Just now'    },
  { name: 'Bello Lawal',  id: '12349', status: 'Draft',       aum: '...',      riskProfile: 'Not profiled',    riskColor: '',             riskWidth: '0%',  lastActivity: 'Just now'    },
  { name: 'Fatima Aliyu', id: '12350', status: 'Active',      aum: '$175,000', riskProfile: 'Balanced',        riskColor: 'bg-[#313EB2]', riskWidth: '45%', lastActivity: '5 Hours Ago' },
  { name: 'Ola Eze',      id: '12351', status: 'Pending KYC', aum: '$92,000',  riskProfile: 'Conservative',    riskColor: 'bg-[#228B22]', riskWidth: '25%', lastActivity: '2 Hours Ago' },
  { name: 'Sola Akin',    id: '12352', status: 'Active',      aum: '$260,000', riskProfile: 'Mod. Aggressive', riskColor: 'bg-[#FD4F00]', riskWidth: '65%', lastActivity: '1 Hour Ago'  },
  { name: 'Remi Ibrahim', id: '12353', status: 'Active',      aum: '$198,000', riskProfile: 'Aggressive',      riskColor: 'bg-[#E50303]', riskWidth: '90%', lastActivity: 'Just now'    },
  { name: 'Ngozi Obi',    id: '12354', status: 'Pending KYC', aum: '$67,000',  riskProfile: 'Balanced',        riskColor: 'bg-[#313EB2]', riskWidth: '45%', lastActivity: '4 Hours Ago' },
  { name: 'Chidi Nwosu',  id: '12355', status: 'Active',      aum: '$520,000', riskProfile: 'Aggressive',      riskColor: 'bg-[#E50303]', riskWidth: '90%', lastActivity: '2 Hours Ago' },

])

const filteredClients = computed(() => {
  if (activeTab.value === 'All Clients')   return clients.value
  if (activeTab.value === 'Pending KYC')   return clients.value.filter(c => c.status === 'Pending KYC')
  if (activeTab.value === 'High Value')    return clients.value.filter(c => c.aum !== '...' && parseInt(c.aum.replace(/\D/g, '')) >= 150000)
  if (activeTab.value === 'New This Week') return clients.value.filter(c => c.lastActivity === 'Just now')
  return clients.value
})

const totalPages = computed(() => Math.ceil(filteredClients.value.length / itemsPerPage))

const paginatedClients = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredClients.value.slice(start, start + itemsPerPage)
})

const pageStart = computed(() => (currentPage.value - 1) * itemsPerPage + 1)
const pageEnd = computed(() => Math.min(currentPage.value * itemsPerPage, filteredClients.value.length))

function nextPage() {
  if (currentPage.value < totalPages.value) currentPage.value++
}

function prevPage() {
  if (currentPage.value > 1) currentPage.value--
}

// reset to page 1 when tab changes
function changeTab(tab) {
  activeTab.value = tab
  currentPage.value = 1
}

const showDraftModal = ref(false)
const savingDraft = ref(false)

function handleSaveDraft() {
  savingDraft.value = true
  setTimeout(() => {
    savingDraft.value = false
    showDraftModal.value = true
  }, 1500)
}

// --- Dropdown Menu Logic ---
const activeDropdown = ref(null)

const toggleDropdown = (clientId) => {
  if (activeDropdown.value === clientId) {
    activeDropdown.value = null // Close if already open
  } else {
    activeDropdown.value = clientId // Open this row's menu
  }
}

const closeDropdown = () => {
  activeDropdown.value = null
}

// ── CLIENT PROFILE MODAL ──────────────────────────────────
const showProfileModal = ref(false)
const profileClient = ref(null)

function viewProfile(client) {
  profileClient.value = client
  showProfileModal.value = true
  closeDropdown()
}

// ── EDIT MODAL ─────────────────────────────────────────────
const showClientEditModal = ref(false)
const editingClient = ref(null)
const editClientName = ref('')
const editClientStatus = ref('')
const editClientAum = ref('')

function editClient(client) {
  editingClient.value = client
  editClientName.value = client.name
  editClientStatus.value = client.status
  editClientAum.value = client.aum
  showClientEditModal.value = true
  closeDropdown()
}

function saveClientEdit() {
  if (!editClientName.value) {
    alert('Please enter a name')
    return
  }
  editingClient.value.name = editClientName.value
  editingClient.value.status = editClientStatus.value
  editingClient.value.aum = editClientAum.value
  showClientEditModal.value = false
}

// ── REMINDER TOAST ─────────────────────────────────────────
const showReminderToast = ref(false)
const reminderClientName = ref('')

function sendReminder(client) {
  reminderClientName.value = client.name
  showReminderToast.value = true
  closeDropdown()
  setTimeout(() => {
    showReminderToast.value = false
  }, 3000)
}

// ── DELETE CONFIRMATION ────────────────────────────────────
const showDeleteConfirm = ref(false)
const deletingClient = ref(null)

function confirmDelete(client) {
  deletingClient.value = client
  showDeleteConfirm.value = true
  closeDropdown()
}

function deleteClient() {
  clients.value = clients.value.filter(c => c.id !== deletingClient.value.id)
  showDeleteConfirm.value = false
}

// ── UPDATED handleAction (routes to the right function) ────
const handleAction = (action, client) => {
  if (action === 'View Profile') viewProfile(client)
  else if (action === 'Edit') editClient(client)
  else if (action === 'View Portfolio') viewProfile(client) // reuse profile modal for now
  else if (action === 'Send Reminder') sendReminder(client)
  else if (action === 'Delete') confirmDelete(client)
}

// Close the dropdown if the user clicks anywhere else on the screen
const closeOnClickOutside = () => {
  if (activeDropdown.value !== null) {
    closeDropdown()
  }
}

onMounted(() => {
  window.addEventListener('click', closeOnClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('click', closeOnClickOutside)
})

</script>