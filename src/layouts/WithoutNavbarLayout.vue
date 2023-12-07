<script setup lang="ts">
import Footer from '@/views/Footer.vue';
</script>

<template>
  <div class="w-full flex items-center flex-col transition-global bg-[#FFF4D8] min-h-screen">
    <div class="w-4/5 flex justify-center items-center">
      <slot />
    </div>
    <Footer />
  </div>
</template>