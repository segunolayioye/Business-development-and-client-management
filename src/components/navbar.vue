<template>
  <nav class="h-[95px] w-full bg-white shadow-md flex items-center justify-between px-[40px] flex-shrink-0">
    
    <!-- Left: Page Title -->
    <div>
      <p class="font-semibold text-[20px] text-[#0F151F]">{{ title }}</p>
      <p v-if="subtitle" class="text-xs text-[#A9A9A9]">{{ subtitle }}</p>
    </div>

    <!-- Middle: Search -->
    <div class="bg-[#F5F5F5] rounded-lg px-5 py-3 flex items-center gap-2 w-[320px]">
      <img src="../assets/search-icon.svg" class="w-[18px] h-[18px]" alt="search icon">
      <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="searchPlaceholder"
        class="bg-transparent focus:outline-none w-full text-sm text-[#A5A5A8]"
      />
    </div>

    <!-- Right: User -->
    <div class="flex items-center gap-[10px]">
      <img src="../assets/notification.svg" class="w-[22px] h-[24px]" alt="notification icon">
      <img src="../assets/picture.svg" class="w-[42px] h-[42px] rounded-full" alt="user avatar">
      <span class="text-sm font-medium text-gray-800">Jane Peters</span>
      
    </div>

  </nav>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  searchPlaceholder: {
    type: String,
    default: 'Search clients, products or campaigns...'
  },
  // Add modelValue to accept v-model from the parent
  modelValue: {
    type: String,
    default: ''
  }
})

// Declare the emit for two-way binding
defineEmits(['update:modelValue'])
</script>