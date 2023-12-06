<script setup lang="ts">
import NavBar from '@/views/NavBar.vue';

</script>

<template>
  <div class="w-full flex items-center flex-col transition-global bg-[#FFF4D8] min-h-screen">

    <NavBar />
    <div class="w-4/5 flex justify-center items-center">
      <slot />
    </div>
  </div>
</template>