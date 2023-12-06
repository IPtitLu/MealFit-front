<script setup lang="ts">
import NavBar from '@/views/NavBar.vue';

</script>

<template>
  <div class="w-full flex items-center flex-col transition-global bg-[#FFF4D8] min-h-screen">

    <NavBar />
    <div class="w-full">
      <slot />
    </div>
  </div>
</template>