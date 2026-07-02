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
        <router-link to="/investment-product" class="flex gap-[10px] text-white hover:text-[#FD4F00]  bg-[#1E2736] px-[5px] py-[8px] rounded-[8px]">
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
    <!-- End Sidebar -->

    <!-- Right Area -->
    <div class="flex-1 flex flex-col ml-[253px] h-screen overflow-hidden">

      <!-- Navbar -->
      <navbar 
        title="InvestFlow"
        searchPlaceholder="Search clients, accounts..."
        v-model="searchQuery"
      />

      <!-- Main Content -->
      <main class="flex-1 overflow-y-auto px-[32px] py-[20px] w-full">
         <div class="flex justify-end">
         <router-link to="/client-overview">
        <button class="flex items-center gap-[6px] bg-[#FD4F00] text-white px-[14px] py-[8px] rounded-[8px] text-sm font-medium">
          <img src="../assets/plus.svg" alt="plus-icon">
          New Application
        </button>
        </router-link>
        </div>
        <!-- Stats Cards -->
        <div class="flex gap-[16px] mt-[20px] items-stretch w-full">

          <!-- Total AUM -->
          <div class="flex-1 bg-white rounded-lg p-4">
            <div class="flex justify-between items-center mb-2">
              <div class="flex flex-col gap-[4px]">
                <span class="text-xs text-[#4B5054]">TOTAL AUM</span>
                <p class="text-xl font-semibold">$1.234B</p>
              </div>
              <img src="../assets/stock-rise.svg" alt="stock-rise">
            </div>
            <div class="w-full h-1 bg-[#D9D9D9] rounded-full mt-4">
              <div class="h-1 rounded-full w-[70%] bg-[#228B22]"></div>
            </div>
          </div>
          <!-- End Total AUM -->

          <!-- Active Products -->
          <div class="flex-1 bg-white rounded-lg p-4">
            <div class="flex justify-between items-center mb-2">
              <div class="flex flex-col gap-[4px]">
                <span class="text-xs text-[#4B5054]">ACTIVE PRODUCTS</span>
                <p class="text-xl font-semibold">13</p>
              </div>
              <img src="../assets/+3.svg" class="w-14" alt="+3-icon">
            </div>
            <div class="mt-3 flex justify-start items-center gap-[6px]">
              <img src="../assets/RE.svg" class="w-8 h-6" alt="RE-icon">
              <img src="../assets/EQ.svg" class="w-8 h-6" alt="EQ-icon">
              <img src="../assets/SU.svg" class="w-8 h-6" alt="SU-icon">
            </div>
          </div>
          <!-- End Active Products -->

          <!-- Pending Approval -->
          <!-- Pending Approval -->
<div class="flex-1 bg-white rounded-lg p-4">
  <div class="flex justify-between items-center mb-2">
    <div class="flex flex-col gap-[4px]">
      <span class="text-xs text-[#4B5054]">PENDING APPROVAL</span>
      <p class="text-xl font-semibold">{{ pendingCount }}</p>
    </div>
    <button class="w-8 h-8 border border-[#E5E7EB] rounded-lg flex items-center justify-center text-[#4B5054] hover:bg-[#F5F5F5]">›</button>
  </div>
  <div class="mt-3 flex justify-between">
    <div class="text-[#4B5054] text-xs flex flex-col gap-2">
      <p v-for="item in pendingItems" :key="item.id">{{ item.name }}</p>
    </div>
    <div class="flex flex-col gap-2">
  
    <a v-for="item in pendingItems"
    :key="item.id"
    @click="item.status === 'Draft' ? openDraftModal(item) : openReviewModal(item)"
    class="text-xs cursor-pointer hover:underline"
    :class="item.status === 'Draft' ? 'text-[#313EB2]' : 'text-[#FD4F00]'"
  >{{ item.status === 'Draft' ? 'Draft' : 'Review' }}</a>
</div>
  </div>
</div>
          <!-- End Pending Approval -->

          <!-- Create New Product -->
          <div class="flex-1 bg-white rounded-lg p-4">
            <router-link to="/create-product">
            <div class="flex flex-col items-center justify-center h-full gap-[8px]">
              <div class="w-[40px] h-[40px] rounded-full bg-[#228B2233] flex items-center justify-center">
                <img src="../assets/green-plus.svg" class="w-[24px] h-[24px]" alt="plus-icon">
              </div>
              <p class="text-sm font-semibold text-[#0F151F]">Create New Product</p>
              <p class="text-xs text-[#A9A9A9]">Launch Wizard</p>
            </div>
            </router-link>
          </div>
          <!-- End Create New Product -->

        </div>
        <!-- End Stats Cards -->

        <!-- Product Catalog Header -->
        <div class="flex justify-between items-center mt-[32px]">
          <div class="flex flex-col">
            <p class="font-semibold text-[24px]">Product Catalog</p>
            <p class="text-[14px] text-[#4B5054]">Manage and monitor investment products portfolio</p>
          </div>
          <div class="flex items-center bg-white px-[16px] h-[40px] rounded-[12px] gap-[4px]">
            <button
              v-for="tab in tabs"
              :key="tab"
              @click="activeTab = tab"
              :class="activeTab === tab
                ? 'bg-[#FD4F00] text-white text-[14px] font-medium px-[12px] py-[4px] rounded-[8px]'
                : 'text-[#4B5054] text-sm px-[12px] py-[4px] rounded-[6px] hover:bg-[#F5F5F5]'"
            >
              {{ tab }}
            </button>
            <div class="flex items-center gap-[8px] ml-[8px]">
              <img src="../assets/bg-funnel.svg" class="w-[24px] cursor-pointer" alt="bg-funnel">
              <img src="../assets/chart.svg" class="w-[24px] cursor-pointer" alt="chart">
            </div>
          </div>
        </div>
        <!-- End Product Catalog Header -->

        
      
<!-- Product Catalog Cards -->
<div class="grid grid-cols-4 gap-[16px] mt-[24px]">
  <div
    v-for="product in products"
    :key="product.id"
    v-show="activeTab === 'All' || activeTab === product.tab"
    class="bg-white rounded-[12px] p-[16px] flex flex-col gap-[12px]"
  >
    <div class="flex justify-between items-start">
      <div :class="`w-8 h-8 rounded-[8px] ${product.iconBg}`">
        <img :src="product.icon" class="w-[30px] h-[30px]"/>
      </div>
      <div class="flex items-center gap-[8px]">
        <span :class="`${product.tagColor} text-[10px] px-[8px] py-[2px] rounded-[4px]`">{{ product.tag }}</span>
       
      </div>
    </div>

    <div>
      <p class="font-semibold text-[15px] text-[#0F151F]">{{ product.name }}</p>
      <p class="text-xs text-[#4B5054]">{{ product.subCategory }}</p>
    </div>

    <div class="flex flex-col gap-[8px] border-t border-[#F5F5F5] pt-[12px]">
      <div class="flex justify-between">
        <span class="text-xs text-[#4B5054]">Min Investment</span>
        <span class="text-xs text-[#000000]">{{ product.minInvestment }}</span>
      </div>
      <div class="flex justify-between">
        <span class="text-xs text-[#4B5054]">Exp. Return</span>
        <span :class="`text-xs font-medium ${product.returnColor}`">{{ product.expReturn }}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-xs text-[#4B5054]">Risk Level</span>
        <div v-if="product.riskDots.length" class="flex gap-[3px]">
          <div v-for="(color, i) in product.riskDots" :key="i"
            class="w-[10px] h-[10px] rounded-full"
            :style="{ backgroundColor: color }">
          </div>
        </div>
        <span v-else class="text-xs text-[#4B5054]">Pending Rating</span>
      </div>
    </div>

    <!-- Buttons -->
    <div v-if="product.complete" class="flex gap-[8px] mt-[4px]">
      <button
        @click="openDetails(product)"
        class="flex-1 bg-[#FD4F00] text-white text-sm py-[10px] rounded-[8px]"
      >Details</button>
      <button
        @click="addToComparison(product)"
        class="w-[40px] h-[40px] bg-[#FD4F00] text-white rounded-[8px] flex items-center justify-center text-lg"
      >+</button>
    </div>
    <div v-else class="flex gap-[8px] mt-[4px]">
      <router-link to="/create-product" class="w-full">
        <button class="w-full bg-[#FD4F00] text-white text-sm py-[10px] rounded-[8px]">Continue Setup</button>
      </router-link>
    </div>
  </div>
</div>
        <!-- End Product Catalog Cards -->

        <!-- Comparison Section -->
        <div class="flex gap-[16px] mt-[24px]">

          <!-- Comparison Engine -->
      <div class="bg-white rounded-[12px] p-[20px] w-[320px] flex flex-col gap-[16px]">
        <div>
          <p class="font-semibold text-[18px] text-[#0F151F]">Comparison Engine</p>
          <p class="text-xs text-[#4B5054] mt-[4px]">Select up to 4 products to compare key metrics side-by-side</p>
        </div>

        <div class="flex flex-col gap-[10px]">
          <div
            v-for="product in comparisonProducts"
            :key="product.id"
            class="flex items-center justify-between border border-[#228B22] rounded-[8px] px-[12px] py-[10px]"
          >
            <div class="flex items-center gap-[8px]">
              <div :class="`w-8 h-8 rounded-[8px] ${product.iconBg} flex items-center justify-center`">
                <img :src="product.icon" class="w-[20px] h-[20px]"/>
              </div>
              <span class="text-sm text-[#0F151F]">{{ product.name }}</span>
            </div>
            <span
              @click="removeFromComparison(product.id)"
              class="text-[#A9A9A9] cursor-pointer text-lg hover:text-red-500"
            >×</span>
          </div>

          
          
        </div>

        <button
          @click="generateMatrix"
          class="w-full bg-[#FD4F00] text-white text-sm py-[12px] rounded-[8px] font-medium"
        >Generate Matrix</button>
      </div>
          <!-- End Comparison Engine -->

          <!-- Comparison Matrix -->
          <!-- Comparison Matrix -->
      <div class="bg-white rounded-[12px] p-[20px] flex-1 flex flex-col gap-[16px]">
        <div class="flex justify-between items-center">
          <p class="font-semibold text-[18px] text-[#0F151F]">Comparison Matrix</p>
          <div class="flex items-center gap-[12px]">
            <img src="../assets/dark-download.svg" alt="download">
            <img src="../assets/share-icon.svg" alt="share-icon">
          </div>
        </div>

        <table class="w-full text-sm">
          <thead>
            <tr class="border-b border-[#F5F5F5]">
              <th class="text-left text-xs text-[#A9A9A9] font-medium py-[8px] w-[40%]">Feature</th>
              <th
                v-for="product in matrixProducts"
                :key="product.id"
                class="text-left text-xs font-semibold text-[#0F151F] py-[8px]"
              >{{ product.name }}</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#F5F5F5]">
            <tr>
              <td class="py-[10px] text-xs text-[#A9A9A9]">Asset Class</td>
              <td v-for="p in matrixProducts" :key="p.id" class="py-[10px] text-xs font-semibold text-[#0F151F]">{{ p.assetClass }}</td>
            </tr>
            <tr>
              <td class="py-[10px] text-xs text-[#A9A9A9]">Min. Investment</td>
              <td v-for="p in matrixProducts" :key="p.id" class="py-[10px] text-xs font-semibold text-[#0F151F]">{{ p.minInvestment }}</td>
            </tr>
            <tr>
              <td class="py-[10px] text-xs text-[#A9A9A9]">Exp. Return (IRR)</td>
              <td v-for="p in matrixProducts" :key="p.id" class="py-[10px] text-xs font-semibold text-[#FD4F00]">{{ p.expReturn }}</td>
            </tr>
            <tr>
              <td class="py-[10px] text-xs text-[#A9A9A9]">Risk Profile</td>
              <td v-for="p in matrixProducts" :key="p.id" class="py-[10px]">
                <span :class="`${p.riskProfileColor} text-xs px-[10px] py-[4px] rounded-full`">{{ p.riskProfile }}</span>
              </td>
            </tr>
            <tr>
              <td class="py-[10px] text-xs text-[#A9A9A9]">Liquidity</td>
              <td v-for="p in matrixProducts" :key="p.id" class="py-[10px] text-xs font-semibold text-[#0F151F]">{{ p.liquidity }}</td>
            </tr>
            <tr>
              <td class="py-[10px] text-xs text-[#A9A9A9]">Shari'ah Compliant</td>
              <td v-for="p in matrixProducts" :key="p.id" class="py-[10px] text-xs font-semibold" :class="p.shariah ? 'text-[#22C55E]' : 'text-[#EF4444]'">
                {{ p.shariah ? '✓ Yes' : '✗ No' }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
        <!-- End Comparison Section -->

        <!-- Product Performance -->
        <div class="mt-[32px]">
          <p class="font-semibold text-[24px] text-[#0F151F] mb-[16px]">Product Performance</p>
          <div class="flex gap-[16px]">

            <!-- Chart Card -->
            <div class="bg-white rounded-[12px] p-[20px] flex-1">
              <div class="flex justify-between items-start mb-[16px]">
                <div>
                  <p class="font-semibold text-[15px] text-[#0F151F]">Historical Returns & AUM</p>
                  <p class="text-xs text-[#A9A9A9]">Global REIT Fund vs Benchmark</p>
                </div>
                <div class="flex items-center gap-[4px]">
                  <button
                    @click="setChartRange('1M')"
                    :class="chartRange === '1M' ? 'text-white bg-[#FD4F00]' : 'text-[#A9A9A9] hover:bg-[#F5F5F5]'"
                    class="text-xs px-[10px] py-[4px] rounded-[6px] transition-colors"
                  >1M</button>
                  <button
                    @click="setChartRange('3M')"
                    :class="chartRange === '3M' ? 'text-white bg-[#FD4F00]' : 'text-[#A9A9A9] hover:bg-[#F5F5F5]'"
                    class="text-xs px-[10px] py-[4px] rounded-[6px] transition-colors"
                  >3M</button>
                  <button
                    @click="setChartRange('1Y')"
                    :class="chartRange === '1Y' ? 'text-white bg-[#FD4F00]' : 'text-[#A9A9A9] hover:bg-[#F5F5F5]'"
                    class="text-xs px-[10px] py-[4px] rounded-[6px] transition-colors"
                  >1Y</button>
                </div>
              </div>
              <div class="flex items-center gap-[16px] mb-[12px]">
                <div class="flex items-center gap-[6px]">
                  <div class="w-[24px] h-[2px] bg-[#3B4FE0]"></div>
                  <span class="text-xs text-[#A9A9A9]">Fund REIT</span>
                </div>
                <div class="flex items-center gap-[6px]">
                  <div class="w-[24px] h-[2px] bg-[#A9A9A9]"></div>
                  <span class="text-xs text-[#A9A9A9]">Benchmark</span>
                </div>
              </div>
              <div class="w-full h-[220px] bg-[#FFFFFF] rounded-[8px] flex items-center justify-center ">
                <div class="h-[220px] w-full">
                <LineChart :chart-data="currentChartData" />
              </div>
                              
                
              </div>
              
            </div>
            <!-- End Chart Card -->

            <!-- Right Stats -->
            <div class="flex flex-col gap-[16px] w-[280px]">

              <!-- Investor Adoption -->
              <div class="bg-white rounded-[12px] p-[20px] flex flex-col gap-[12px]">
                <p class="text-xs text-[#A9A9A9]">Investor Adoption</p>
                <p class="text-[32px] font-bold text-[#0F151F]">1,234</p>
                <p class="text-xs text-[#A9A9A9]">Total active investors</p>
                <div class="w-full h-[6px] bg-[#D9D9D9] rounded-full">
                  <div class="h-[6px] rounded-full w-[75%] bg-[#3B4FE0]"></div>
                </div>
                <div class="flex justify-between">
                  <span class="text-[10px] text-[#A9A9A9]">Retail(75%)</span>
                  <span class="text-[10px] text-[#A9A9A9]">Institutional (25%)</span>
                </div>
              </div>
              <!-- End Investor Adoption -->

              <!-- Avg Holding Period -->
              <div class="bg-white rounded-[12px] p-[20px] flex flex-col gap-[12px]">
                <p class="text-xs text-[#A9A9A9]">Avg. Holding Period</p>
                <div class="flex items-center gap-[16px]">
                  <div class="w-[64px] h-[64px] rounded-full border-[6px] border-[#3B4FE0] border-r-[#D9D9D9] flex items-center justify-center flex-shrink-0">
                    <span class="text-sm font-bold text-[#0F151F]">18m</span>
                  </div>
                  <div>
                    <p class="text-sm font-semibold text-[#0F151F]">Strong Retention</p>
                    <p class="text-xs text-[#A9A9A9]">Top 10% of portfolio</p>
                  </div>
                </div>
              </div>
              <!-- End Avg Holding Period -->

            </div>
            <!-- End Right Stats -->

          </div>
        </div>
        <!-- End Product Performance -->

        <!-- Compliance Status & Filing History -->
        <div class="bg-white rounded-[12px] p-[20px] mt-[24px] mb-[32px]">
          <div class="flex justify-between items-center mb-[20px]">
            <p class="font-semibold text-[18px] text-[#0F151F]">Compliance Status & Filing History</p>
            
          </div>
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-[#F5F5F5]">
                <th class="text-left text-xs text-[#A9A9A9] font-medium py-[10px]">DOCUMENT TYPE</th>
                <th class="text-left text-xs text-[#A9A9A9] font-medium py-[10px]">DATE FILED</th>
                <th class="text-left text-xs text-[#A9A9A9] font-medium py-[10px]">STATUS</th>
                <th class="text-left text-xs text-[#A9A9A9] font-medium py-[10px]">AUDITOR</th>
                <th class="text-left text-xs text-[#A9A9A9] font-medium py-[10px]">ACTION</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-[#F5F5F5]">
              <tr v-for="doc in paginatedDocuments" :key="doc.id">
                <td class="py-[14px]">
                  <div class="flex items-center gap-[10px]">
                    <div class="w-[32px] h-[32px] bg-[#FEE2E2] rounded-[6px] flex items-center justify-center">
                      <span class="text-[#EF4444] text-xs font-bold">PDF</span>
                    </div>
                    <span class="text-sm text-[#0F151F]">{{ doc.name }}</span>
                  </div>
                </td>
                <td class="py-[14px] text-sm text-[#4B5054]">{{ doc.date }}</td>
                <td class="py-[14px]">
                  <span
                    :class="doc.status === 'Approved'
                      ? 'bg-[#DCFCE7] text-[#22C55E]'
                      : 'bg-[#FFF0EB] text-[#FD4F00]'"
                    class="text-xs px-[12px] py-[4px] rounded-full"
                  >{{ doc.status }}</span>
                </td>
                <td class="py-[14px] text-sm text-[#4B5054]">{{ doc.auditor }}</td>
                <td class="py-[14px]">
                  <!-- Download button for Approved -->
                  <button
                    v-if="doc.status === 'Approved'"
                    @click="downloadDocument(doc)"
                    class="hover:opacity-70 transition-opacity"
                  >
                    <img src="../assets/dark-download.svg" alt="download"/>
                  </button>
                  <!-- Edit button for Pending Review -->
                  <button
                    v-else
                    @click="openEditModal(doc)"
                    class="hover:opacity-70 transition-opacity"
                  >
                    <img src="../assets/edit-icon.svg" alt="edit"/>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="flex justify-between items-center mt-[16px] pt-[16px] border-t border-[#F5F5F5]">
          <div class="inline-flex items-center justify-center px-[12px] py-[6px] border border-[#E5E7EB] bg-white rounded-[6px] shadow-sm text-[13px] font-semibold text-[#4B5054]">
    {{ showAllClients ? 1 : pageStart }} - {{ pageEnd }}
  </div>

          <div class="flex items-center gap-[6px]">
            <!-- Previous -->
            <button
              @click="previousPage"
              :disabled="currentPage === 1"
              class="w-[32px] h-[32px] flex items-center justify-center rounded-[8px] border border-[#E5E7EB] text-[#4B5054] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#F5F5F5] hover:border-[#FD4F00] transition-all"
            >
              ‹
            </button>

            <!-- Page Numbers -->
            <button
              v-for="page in totalPages"
              :key="page"
              @click="currentPage = page"
              class="w-[32px] h-[32px] flex items-center justify-center rounded-[8px] text-xs font-medium transition-all"
              :class="currentPage === page
                ? 'bg-[#FD4F00] text-white shadow-sm'
                : 'text-[#4B5054] hover:bg-[#F5F5F5] border border-transparent hover:border-[#E5E7EB]'"
            >
              {{ page }}
            </button>

            <!-- Next -->
            <button
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="w-[32px] h-[32px] flex items-center justify-center rounded-[8px] border border-[#E5E7EB] text-[#4B5054] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#F5F5F5] hover:border-[#FD4F00] transition-all"
            >
              ›
            </button>
          </div>
        </div>
          
        </div>
        <!-- End Compliance -->

      </main>
      <!-- End Main Content -->

    </div>
    <!-- End Right Area -->
  <!-- Details Modal -->
<Transition name="modal">
  <div
    v-if="showDetailsModal && selectedProduct"
    class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30"
    @click.self="showDetailsModal = false"
  >
    <div class="bg-white rounded-2xl p-8 w-[480px] flex flex-col gap-4 shadow-xl">

      <!-- Header -->
      <div class="flex justify-between items-start">
        <div class="flex items-center gap-3">
          <div :class="`w-10 h-10 rounded-[8px] ${selectedProduct.iconBg} flex items-center justify-center`">
            <img :src="selectedProduct.icon" class="w-[28px] h-[28px]"/>
          </div>
          <div>
            <p class="font-bold text-[18px] text-[#0F151F]">{{ selectedProduct.name }}</p>
            <p class="text-xs text-[#4B5054]">{{ selectedProduct.subCategory }}</p>
          </div>
        </div>
        <span :class="`${selectedProduct.tagColor} text-[10px] px-[8px] py-[2px] rounded-[4px]`">{{ selectedProduct.tag }}</span>
      </div>

      <!-- Details -->
      <div class="flex flex-col gap-3 border-t border-[#F5F5F5] pt-4">
        <div class="flex justify-between">
          <span class="text-sm text-[#4B5054]">Asset Class</span>
          <span class="text-sm font-semibold text-[#0F151F]">{{ selectedProduct.assetClass }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-[#4B5054]">Min. Investment</span>
          <span class="text-sm font-semibold text-[#0F151F]">{{ selectedProduct.minInvestment }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-[#4B5054]">Expected Return</span>
          <span :class="`text-sm font-semibold ${selectedProduct.returnColor}`">{{ selectedProduct.expReturn }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-[#4B5054]">Risk Profile</span>
          <span :class="`${selectedProduct.riskProfileColor} text-xs px-[10px] py-[4px] rounded-full`">{{ selectedProduct.riskProfile }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-[#4B5054]">Liquidity</span>
          <span class="text-sm font-semibold text-[#0F151F]">{{ selectedProduct.liquidity }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-[#4B5054]">Shari'ah Compliant</span>
          <span :class="selectedProduct.shariah ? 'text-[#22C55E]' : 'text-[#EF4444]'" class="text-sm font-semibold">
            {{ selectedProduct.shariah ? '✓ Yes' : '✗ No' }}
          </span>
        </div>
      </div>

      <!-- Actions -->
      <div class="flex gap-3 mt-2">
        <button
          @click="addToComparison(selectedProduct); showDetailsModal = false"
          class="flex-1 border border-[#FD4F00] text-[#FD4F00] py-3 rounded-xl text-sm font-medium hover:bg-[#FFF0EB] transition-colors"
        >+ Add to Comparison Engine</button>
        <button
          @click="showDetailsModal = false"
          class="flex-1 bg-[#FD4F00] text-white py-3 rounded-xl text-sm font-medium"
        >Close</button>
      </div>

    </div>
  </div>
</Transition>
<!-- Download Toast -->
<Transition name="modal">
  <div
    v-if="showDownloadToast"
    class="fixed top-6 right-6 z-[9999] flex items-center gap-3 bg-white border border-gray-200 border-l-4 border-l-green-500 rounded-xl px-4 py-3 shadow-lg min-w-[300px]"
  >
    <div class="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-sm flex-shrink-0">
      ✓
    </div>
    <div class="flex-1">
      <p class="text-sm font-semibold text-gray-900">Download Started!</p>
      <p class="text-xs text-gray-500 mt-0.5">{{ downloadedDoc }} is being downloaded</p>
    </div>
    <button @click="showDownloadToast = false" class="text-gray-400 hover:text-gray-700 text-sm">✕</button>
  </div>
</Transition>

<!-- Edit Document Modal -->
<Transition name="modal">
  <div
    v-if="showEditModal && editingDoc"
    class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30"
    @click.self="showEditModal = false"
  >
    <div class="bg-white rounded-2xl p-8 w-[460px] flex flex-col gap-4 shadow-xl">

      <!-- Header -->
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-bold text-[#0F151F]">Edit Document</h2>
        <button @click="showEditModal = false" class="text-[#A9A9A9] hover:text-[#0F151F]">✕</button>
      </div>

      <!-- Status badge -->
      <div class="flex items-center gap-2">
        <span class="bg-[#FFF0EB] text-[#FD4F00] text-xs px-[12px] py-[4px] rounded-full">
          {{ editingDoc.status }}
        </span>
        <span class="text-xs text-[#A9A9A9]">Submit edits to update this document</span>
      </div>

      <!-- Form -->
      <div class="flex flex-col gap-4 border-t border-[#F5F5F5] pt-4">
        <div>
          <label class="text-xs font-medium text-[#0F151F] mb-1 block">Document Name</label>
          <input
            v-model="editName"
            type="text"
            class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#FD4F00]"
          />
        </div>
        <div>
          <label class="text-xs font-medium text-[#0F151F] mb-1 block">Date Filed</label>
          <input
            v-model="editDate"
            type="text"
            placeholder="e.g. Oct 12, 2024"
            class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#FD4F00]"
          />
        </div>
        <div>
          <label class="text-xs font-medium text-[#0F151F] mb-1 block">Auditor</label>
          <input
            v-model="editAuditor"
            type="text"
            class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#FD4F00]"
          />
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex gap-3 mt-2">
        <button
          @click="showEditModal = false"
          class="flex-1 border border-[#E5E7EB] text-[#4B5054] py-3 rounded-xl text-sm font-medium"
        >Cancel</button>
        <button
          @click="saveEdit"
          class="flex-1 bg-[#FD4F00] text-white py-3 rounded-xl text-sm font-medium"
        >Save Changes</button>
      </div>

    </div>
  </div>
</Transition>
<!-- Review Modal -->
<Transition name="modal">
  <div
    v-if="showReviewModal && reviewingItem"
    class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30"
    @click.self="showReviewModal = false"
  >
    <div class="bg-white rounded-2xl p-8 w-[480px] flex flex-col gap-4 shadow-xl">

      <!-- Header -->
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-bold text-[#0F151F]">Review Product</h2>
        <button @click="showReviewModal = false" class="text-[#A9A9A9] hover:text-[#0F151F]">✕</button>
      </div>

      <!-- Status -->
      <span class="bg-[#FFF0EB] text-[#FD4F00] text-xs px-[12px] py-[4px] rounded-full w-fit">
        {{ reviewingItem.status }}
      </span>

      <!-- Details -->
      <div class="flex flex-col gap-3 border-t border-[#F5F5F5] pt-4">
        <div class="flex justify-between">
          <span class="text-sm text-[#4B5054]">Product Name</span>
          <span class="text-sm font-semibold text-[#0F151F]">{{ reviewingItem.name }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-[#4B5054]">Type</span>
          <span class="text-sm font-semibold text-[#0F151F]">{{ reviewingItem.type }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-[#4B5054]">Submitted By</span>
          <span class="text-sm font-semibold text-[#0F151F]">{{ reviewingItem.submittedBy }}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-sm text-[#4B5054]">Date Submitted</span>
          <span class="text-sm font-semibold text-[#0F151F]">{{ reviewingItem.date }}</span>
        </div>
        <div class="flex flex-col gap-1">
          <span class="text-sm text-[#4B5054]">Description</span>
          <p class="text-sm text-[#0F151F] bg-[#F5F5F5] rounded-lg p-3">{{ reviewingItem.description }}</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 mt-2">
        <button
          @click="rejectItem"
          class="flex-1 border border-[#EF4444] text-[#EF4444] py-3 rounded-xl text-sm font-medium hover:bg-[#FEE2E2] transition-colors"
        >✗ Reject</button>
        <button
          @click="approveItem"
          class="flex-1 bg-[#22C55E] text-white py-3 rounded-xl text-sm font-medium hover:bg-[#16a34a] transition-colors"
        >✓ Approve</button>
      </div>

    </div>
  </div>
</Transition>

<!-- Draft Edit Modal -->
<Transition name="modal">
  <div
    v-if="showDraftModal2 && draftingItem"
    class="fixed inset-0 z-[9999] flex items-center justify-center backdrop-blur-sm bg-black/30"
    @click.self="showDraftModal2 = false"
  >
    <div class="bg-white rounded-2xl p-8 w-[460px] flex flex-col gap-4 shadow-xl">

      <!-- Header -->
      <div class="flex justify-between items-center">
        <h2 class="text-lg font-bold text-[#0F151F]">Edit Draft</h2>
        <button @click="showDraftModal2 = false" class="text-[#A9A9A9] hover:text-[#0F151F]">✕</button>
      </div>

      <span class="bg-[#EFF6FF] text-[#313EB2] text-xs px-[12px] py-[4px] rounded-full w-fit">Draft</span>

      <!-- Form -->
      <div class="flex flex-col gap-4 border-t border-[#F5F5F5] pt-4">
        <div>
          <label class="text-xs font-medium text-[#0F151F] mb-1 block">Product Name</label>
          <input
            v-model="draftName"
            type="text"
            class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#FD4F00]"
          />
        </div>
        <div>
          <label class="text-xs font-medium text-[#0F151F] mb-1 block">Product Type</label>
          <select
            v-model="draftType"
            class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none bg-white focus:border-[#FD4F00]"
          >
            <option>Real Estate</option>
            <option>Equities</option>
            <option>Sukuk</option>
            <option>VC Funds</option>
          </select>
        </div>
        <div>
          <label class="text-xs font-medium text-[#0F151F] mb-1 block">Description</label>
          <textarea
            v-model="draftDescription"
            rows="3"
            class="w-full border border-[#E5E7EB] rounded-[8px] px-[14px] py-[10px] text-sm outline-none focus:border-[#FD4F00] resize-none"
          ></textarea>
        </div>
      </div>

      <!-- Buttons -->
      <div class="flex gap-3 mt-2">
        <button
          @click="showDraftModal2 = false"
          class="flex-1 border border-[#E5E7EB] text-[#4B5054] py-3 rounded-xl text-sm font-medium"
        >Cancel</button>
        <button
          @click="saveDraft"
          class="flex-1 bg-[#313EB2] text-white py-3 rounded-xl text-sm font-medium"
        >Save Draft</button>
      </div>

    </div>
  </div>
</Transition>
  </div>
</template>
<script setup>
    import LineChart from '../components/LineChart.vue'
    import { ref, computed, reactive } from 'vue'
    import orangeIcon from '../assets/orange-spin.svg'
    import purpleIcon from '../assets/purple-spin.svg'
    import greenIcon from '../assets/green-spin.svg'
    import globeIcon from '../assets/globe.svg'
    import microchipIcon from '../assets/microchip.svg'

    import navbar from '../components/navbar.vue'
   
    const activeTab = ref('All')
    const tabs = ['All', 'Real Estate', 'Equities', 'Sukuk', 'VC Funds']

    // ── PRODUCT DATA ──────────────────────────────────────────
    const products = ref([
      {
        id: 1,
        name: 'Global REIT Fund',
        category: 'Real Estate',
        subCategory: 'Real Estate • High Yield',
        tag: 'SHARIAH',
        tagColor: 'bg-[#FD4F0033] text-[#FD4F00]',
        iconBg: 'bg-[#FD4F0033]',
        icon: orangeIcon,
        minInvestment: '$5,000',
        expReturn: '8.5% p.a.',
        returnColor: 'text-[#FF8D28]',
        riskDots: ['#FF8D28','#FF8D28','#D9D9D9','#D9D9D9','#D9D9D9'],
        assetClass: 'Real Estate',
        riskProfile: 'Moderate',
        riskProfileColor: 'bg-[#FFF0EB] text-[#FD4F00]',
        liquidity: 'Quarterly',
        shariah: true,
        tab: 'Real Estate',
        complete: true,
      },
      {
        id: 2,
        name: 'Tech Ventures II',
        category: 'Equities',
        subCategory: 'Private Equity • Series B',
        tag: 'GROWTH',
        tagColor: 'bg-[#CB30E033] text-[#CB30E0]',
        iconBg: 'bg-[#A855F733]',
        icon: purpleIcon,
        minInvestment: '$5,000',
        expReturn: '18-22%',
        returnColor: 'text-[#A855F7]',
        riskDots: ['#E50303','#E50303','#E50303','#E50303','#D9D9D9'],
        assetClass: 'Private Equity',
        riskProfile: 'High',
        riskProfileColor: 'bg-[#FEE2E2] text-[#EF4444]',
        liquidity: 'Quarterly',
        shariah: true,
        tab: 'Equities',
        complete: true,
      },
      {
        id: 3,
        name: 'Green Sukuk',
        category: 'Sukuk',
        subCategory: 'Infrastructure • Core',
        tag: 'SHARIAH',
        tagColor: 'bg-[#228B2233] text-[#228B22]',
        iconBg: 'bg-[#22C55E33]',
        icon: greenIcon,
        minInvestment: '$5,000',
        expReturn: '6.5% p.a.',
        returnColor: 'text-[#0F151F]',
        riskDots: ['#313EB2','#313EB2','#D9D9D9','#D9D9D9','#D9D9D9'],
        assetClass: 'Infrastructure',
        riskProfile: 'Low',
        riskProfileColor: 'bg-[#DCFCE7] text-[#22C55E]',
        liquidity: 'Monthly',
        shariah: true,
        tab: 'Sukuk',
        complete: true,
      },
      {
        id: 4,
        name: 'AI Innovation Fund',
        category: 'VC Funds',
        subCategory: 'Private Equity • Series A',
        tag: 'GROWTH',
        tagColor: 'bg-[#CB30E033] text-[#CB30E0]',
        iconBg: 'bg-[#22C55E33]',
        icon: microchipIcon,
        minInvestment: '$25,000',
        expReturn: 'TBD',
        returnColor: 'text-[#0F151F]',
        riskDots: [],
        assetClass: 'Private Equity',
        riskProfile: 'Pending',
        riskProfileColor: 'bg-[#F5F5F5] text-[#4B5054]',
        liquidity: 'TBD',
        shariah: false,
        tab: 'VC Funds',
        complete: false,
      },
    ])

    // ── DETAILS MODAL ─────────────────────────────────────────
    const showDetailsModal = ref(false)
    const selectedProduct = ref(null)

    function openDetails(product) {
      selectedProduct.value = product
      showDetailsModal.value = true
    }

    // ── ADD TO COMPARISON ─────────────────────────────────────
    const comparisonList = ref([
      { id: 1 }, // preloaded
      { id: 2 }, // preloaded
    ])

    const comparisonProducts = computed(() =>
      comparisonList.value.map(c => products.value.find(p => p.id === c.id)).filter(Boolean)
    )

    function addToComparison(product) {
      if (comparisonList.value.find(c => c.id === product.id)) return // already added
      if (comparisonList.value.length >= 4) {
        alert('You can only compare up to 4 products.')
        return
      }
      comparisonList.value.push({ id: product.id })
    }

    function removeFromComparison(productId) {
      comparisonList.value = comparisonList.value.filter(c => c.id !== productId)
    }

    // ── GENERATE MATRIX ───────────────────────────────────────
    const matrixGenerated = ref(true) // true by default since products are preloaded
    const matrixProducts = ref([
      products.value[0],
      products.value[1],
    ])

    function generateMatrix() {
      if (comparisonProducts.value.length < 2) {
        alert('Please add at least 2 products to compare.')
        return
      }
      matrixProducts.value = [...comparisonProducts.value]
      matrixGenerated.value = true
    }

    // ── COMPLIANCE DOCUMENTS ──────────────────────────────────
const documents = ref([
  { id: 1, name: 'Annual Prospectus 2025', date: 'Oct 12, 2024', status: 'Approved', auditor: 'Lagos Auditing Office' },
  { id: 2, name: 'Q3 Financial Report',    date: 'Oct 12, 2024', status: 'Approved', auditor: 'Lagos Auditing Office' },
  { id: 3, name: 'Risk Disclosure Form',   date: 'Oct 12, 2024', status: 'Approved', auditor: 'Lagos Auditing Office' },
  { id: 4, name: 'Compliance Certificate', date: 'Oct 12, 2024', status: 'Pending Review', auditor: 'Lagos Auditing Office'},
  { id: 5, name: 'Annual Prospectus 2025', date: 'Oct 12, 2024', status: 'Approved', auditor: 'Lagos Auditing Office' },
  { id: 6, name: 'Q3 Financial Report',    date: 'Oct 12, 2024', status: 'Approved', auditor: 'Lagos Auditing Office' },
  { id: 7, name: 'Compliance Certificate', date: 'Oct 12, 2024', status: 'Pending Review', auditor: 'Lagos Auditing Office'},
  { id: 8, name: 'Risk Disclosure Form',   date: 'Oct 12, 2024', status: 'Approved', auditor: 'Lagos Auditing Office'},
  { id: 9, name: 'Compliance Certificate', date: 'Oct 12, 2024', status: 'Pending Review', auditor: 'Lagos Auditing Office'}
])

// ── DOWNLOAD FUNCTION ─────────────────────────────────────
const showDownloadToast = ref(false)
const downloadedDoc = ref('')

function downloadDocument(doc) {
  downloadedDoc.value = doc.name
  showDownloadToast.value = true
  setTimeout(() => {
    showDownloadToast.value = false
  }, 3000)
}

// ── EDIT MODAL ────────────────────────────────────────────
const showEditModal = ref(false)
const editingDoc = ref(null)
const editName = ref('')
const editDate = ref('')
const editAuditor = ref('')

function openEditModal(doc) {
  editingDoc.value = doc
  editName.value = doc.name
  editDate.value = doc.date
  editAuditor.value = doc.auditor
  showEditModal.value = true
}

function saveEdit() {
  if (!editName.value || !editDate.value || !editAuditor.value) {
    alert('Please fill in all fields')
    return
  }
  // update the document in the array
  editingDoc.value.name = editName.value
  editingDoc.value.date = editDate.value
  editingDoc.value.auditor = editAuditor.value
  editingDoc.value.status = 'Pending Review' // stays pending until approved
  showEditModal.value = false
}

// ── PENDING APPROVAL ──────────────────────────────────────
const pendingItems = ref([
  { id: 1, name: 'Green Sukuk Fund', type: 'Sukuk', status: 'Pending Review', submittedBy: 'Jane Peters', date: 'Oct 12, 2024', description: 'New Shari\'ah compliant Sukuk fund targeting infrastructure projects across West Africa.' },
  { id: 2, name: 'Growth ETF',       type: 'Equities', status: 'Draft',          submittedBy: 'John Adeyemi', date: 'Oct 10, 2024', description: 'Exchange traded fund focused on high growth equities in the Nigerian stock exchange.' },
])

// Review Modal
const showReviewModal = ref(false)
const reviewingItem = ref(null)

function openReviewModal(item) {
  reviewingItem.value = item
  showReviewModal.value = true
}

function approveItem() {
  reviewingItem.value.status = 'Approved'
  showReviewModal.value = false
  // also reduce the pending count
  pendingCount.value--
}

function rejectItem() {
  reviewingItem.value.status = 'Rejected'
  showReviewModal.value = false
  pendingCount.value--
}

// Draft Modal
const showDraftModal2 = ref(false)
const draftingItem = ref(null)
const draftName = ref('')
const draftType = ref('')
const draftDescription = ref('')

function openDraftModal(item) {
  draftingItem.value = item
  draftName.value = item.name
  draftType.value = item.type
  draftDescription.value = item.description
  showDraftModal2.value = true
}

function saveDraft() {
  if (!draftName.value || !draftType.value) {
    alert('Please fill in all fields')
    return
  }
  draftingItem.value.name = draftName.value
  draftingItem.value.type = draftType.value
  draftingItem.value.description = draftDescription.value
  showDraftModal2.value = false
}

// Pending count (tracks number)
const pendingCount = ref(2)

// --- PAGINATION LOGIC ---
const currentPage = ref(1)
const itemsPerPage = 3

const paginatedDocuments = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return documents.value.slice(start, end)
})

const totalPages = computed(() => Math.ceil(documents.value.length / itemsPerPage))

const pageStart = computed(() => (currentPage.value - 1) * itemsPerPage + 1)
const pageEnd = computed(() => Math.min(currentPage.value * itemsPerPage, documents.value.length))

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}

const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

// ── CHART TIME RANGE ───────────────────────────────────────
const chartRange = ref('1Y')

const chartDataSets = {
  '1M': {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    fundData: [22, 23, 24, 25],
    benchmarkData: [21, 22, 22, 23],
  },
  '3M': {
    labels: ['Month 1', 'Month 2', 'Month 3'],
    fundData: [18, 22, 25],
    benchmarkData: [17, 20, 23],
  },
  '1Y': {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    fundData: [5, 11, 8, 10, 17, 18, 14, 16, 24, 25, 22, 29],
    benchmarkData: [5, 6, 8, 9, 10, 11, 11, 13, 15, 18, 22, 26],
  },
}

const currentChartData = computed(() => chartDataSets[chartRange.value])

function setChartRange(range) {
  chartRange.value = range
}
</script>