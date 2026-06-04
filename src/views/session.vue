<template>

  <div class="relative min-h-screen bg-gray-100">

    <!-- PAGE CONTENT -->
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-6">Homepage</h1>
    </div>

    <!-- OVERLAY -->
    <div class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">

      <!-- MODAL -->
      <div class="bg-white w-[400px] rounded-3xl p-8 shadow-2xl">

        <h2 class="text-3xl font-semibold text-center mb-8">
          Sign In
        </h2>

        <div class="space-y-4">

          <input
            type="email"
            placeholder="Email"
            class="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="password"
            placeholder="Password"
            class="w-full border rounded-xl px-4 py-3"
          />

          <button
            class="w-full bg-pink-400 text-white py-3 rounded-full"
          >
            Sign In
          </button>

        </div>

      </div>

    </div>

  </div>

</template>