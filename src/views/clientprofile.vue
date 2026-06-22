<template>
  <div class="p-8">
    <button @click="$router.back()" class="mb-6 text-gray-500 hover:text-black">
      ‹ Back to Retail Clients
    </button>

    <div v-if="client" class="bg-white p-6 rounded-lg shadow-sm">
      <h2 class="text-xl font-bold mb-4">Basic Information & KYC</h2>
      <p class="text-sm text-gray-500 mb-6">Viewing details for {{ client.name }}</p>

      <div class="grid grid-cols-2 gap-6">
        <div>
          <label class="text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" :value="client.name" readonly class="mt-1 w-full border rounded-md p-2 bg-gray-50 outline-none" />
        </div>
        
        <div>
          <label class="text-sm font-medium text-gray-700">Email Address</label>
          <input type="text" :value="client.email" readonly class="mt-1 w-full border rounded-md p-2 bg-gray-50 outline-none" />
        </div>

        <div>
          <label class="text-sm font-medium text-gray-700">BVN</label>
          <input type="text" :value="client.bvn" readonly class="mt-1 w-full border rounded-md p-2 bg-gray-50 outline-none" />
        </div>
      </div>
    </div>

    <div v-else>
      Loading client profile...
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const client = ref(null)

// If you are using a hardcoded array for now, you can keep it here or import it.
// If you have a backend later, you will use axios/fetch here instead.
const allClients = [
  { id: '12345', name: 'Sarah Akpola', email: 'sarah@example.com', bvn: '22233344455' },
  { id: '12346', name: 'John Doe', email: 'john@example.com', bvn: '11122233344' },
]

onMounted(() => {
  // 1. Grab the ID from the URL (e.g., '12345')
  const idFromUrl = route.params.id

  // 2. Find the client in your data that matches this ID
  const foundClient = allClients.find(c => c.id === idFromUrl)

  // 3. Set the ref so the template updates
  if (foundClient) {
    client.value = foundClient
  } else {
    alert("Client not found!")
  }
})
</script>