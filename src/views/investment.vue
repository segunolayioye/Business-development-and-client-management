<template>
  <div class="flex h-screen overflow-hidden bg-[#F4F0F0]">

    <!-- Sidebar -->
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
      <nav class="h-[95px] w-full bg-white shadow-md flex items-center justify-between px-[40px] flex-shrink-0">
        <div class="font-semibold text-[#0F151F] text-xl">InvestFlow</div>
        <div class="bg-[#F5F5F5] rounded-lg px-5 py-3 flex items-center gap-2 w-[320px]">
          <img src="../assets/search-icon.svg" class="w-[18px] h-[18px]" alt="search icon">
          <input
            type="text"
            placeholder="Search clients, accounts..."
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
      <!-- End Navbar -->

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
          <div class="flex-1 bg-white rounded-lg p-4">
            <div class="flex justify-between items-center mb-2">
              <div class="flex flex-col gap-[4px]">
                <span class="text-xs text-[#4B5054]">PENDING APPROVAL</span>
                <p class="text-xl font-semibold">5</p>
              </div>
              <img src="../assets/right-arrow.svg" alt="right-arrow-icon">
            </div>
            <div class="mt-3 flex justify-between">
              <div class="text-[#4B5054] text-xs">
                <p>Green Sukuk Fund</p>
                <p>Growth ETF</p>
              </div>
              <div class="flex flex-col gap-[4px]">
                <p class="text-[#FD4F00] text-xs">Review</p>
                <p class="text-[#313EB2] text-xs">Draft</p>
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
       <!-- Product Catalog Cards -->
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
        <span class="text-[#4B5054] cursor-pointer">⋮</span>
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
                  <button class="text-xs text-[#A9A9A9] px-[10px] py-[4px] rounded-[6px] hover:bg-[#F5F5F5]">1M</button>
                  <button class="text-xs text-[#A9A9A9] px-[10px] py-[4px] rounded-[6px] hover:bg-[#F5F5F5]">3M</button>
                  <button class="text-xs text-white bg-[#FD4F00] px-[10px] py-[4px] rounded-[6px]">1Y</button>
                  <button class="text-xs text-[#A9A9A9] px-[10px] py-[4px] rounded-[6px] hover:bg-[#F5F5F5]">ALL</button>
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
                    <LineChart />
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
              <tr>
                <td class="py-[14px]">
                  <div class="flex items-center gap-[10px]">
                    <div class="w-[32px] h-[32px] bg-[#FEE2E2] rounded-[6px] flex items-center justify-center">
                      <span class="text-[#EF4444] text-xs font-bold">PDF</span>
                    </div>
                    <span class="text-sm text-[#0F151F]">Annual Prospectus 2025</span>
                  </div>
                </td>
                <td class="py-[14px] text-sm text-[#4B5054]">Oct 12, 2024</td>
                <td class="py-[14px]">
                  <span class="bg-[#DCFCE7] text-[#22C55E] text-xs px-[12px] py-[4px] rounded-full">Approved</span>
                </td>
                <td class="py-[14px] text-sm text-[#4B5054]">Lagos Auditing Office</td>
                <td class="py-[14px]"><img src="../assets/dark-download.svg" alt="download"></td>
              </tr>
              <tr>
                <td class="py-[14px]">
                  <div class="flex items-center gap-[10px]">
                    <div class="w-[32px] h-[32px] bg-[#FEE2E2] rounded-[6px] flex items-center justify-center">
                      <span class="text-[#EF4444] text-xs font-bold">PDF</span>
                    </div>
                    <span class="text-sm text-[#0F151F]">Annual Prospectus 2025</span>
                  </div>
                </td>
                <td class="py-[14px] text-sm text-[#4B5054]">Oct 12, 2024</td>
                <td class="py-[14px]">
                  <span class="bg-[#DCFCE7] text-[#22C55E] text-xs px-[12px] py-[4px] rounded-full">Approved</span>
                </td>
                <td class="py-[14px] text-sm text-[#4B5054]">Lagos Auditing Office</td>
                <td class="py-[14px]"><img src="../assets/dark-download.svg" alt="download"></td>
              </tr>
              <tr>
                <td class="py-[14px]">
                  <div class="flex items-center gap-[10px]">
                    <div class="w-[32px] h-[32px] bg-[#FEE2E2] rounded-[6px] flex items-center justify-center">
                      <span class="text-[#EF4444] text-xs font-bold">PDF</span>
                    </div>
                    <span class="text-sm text-[#0F151F]">Annual Prospectus 2025</span>
                  </div>
                </td>
                <td class="py-[14px] text-sm text-[#4B5054]">Oct 12, 2024</td>
                <td class="py-[14px]">
                  <span class="bg-[#DCFCE7] text-[#22C55E] text-xs px-[12px] py-[4px] rounded-full">Approved</span>
                </td>
                <td class="py-[14px] text-sm text-[#4B5054]">Lagos Auditing Office</td>
                <td class="py-[14px]"><img src="../assets/dark-download.svg" alt="download"></td>
              </tr>
              <tr>
                <td class="py-[14px]">
                  <div class="flex items-center gap-[10px]">
                    <div class="w-[32px] h-[32px] bg-[#FEE2E2] rounded-[6px] flex items-center justify-center">
                      <span class="text-[#EF4444] text-xs font-bold">PDF</span>
                    </div>
                    <span class="text-sm text-[#0F151F]">Annual Prospectus 2025</span>
                  </div>
                </td>
                <td class="py-[14px] text-sm text-[#4B5054]">Oct 12, 2024</td>
                <td class="py-[14px]">
                  <span class="bg-[#FFF0EB] text-[#FD4F00] text-xs px-[12px] py-[4px] rounded-full">Pending Review</span>
                </td>
                <td class="py-[14px] text-sm text-[#4B5054]">Lagos Auditing Office</td>
                <td class="py-[14px]"><img src="../assets/edit-icon.svg" alt="edit"></td>
              </tr>
            </tbody>
          </table>
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
  </div>
</template>
<script setup>
    import LineChart from '../components/LineChart.vue'
    import { ref, computed } from 'vue'
    import orangeIcon from '../assets/orange-spin.svg'
    import purpleIcon from '../assets/purple-spin.svg'
    import greenIcon from '../assets/green-spin.svg'
    import globeIcon from '../assets/globe.svg'
    import microchipIcon from '../assets/microchip.svg'

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
</script>