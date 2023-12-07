<template>
    <nav style="background-color: #FFF3D6; color: #8A0B01;" class="w-full flex justify-center items-center flex-col mb-12 border-b border-[#28100b3b]">
      <div class="w-4/5 flex flex-row justify-center items-center">
        <div class="container mx-auto px-6 flex items-center justify-between">
          <MainLogo class="w-[50px]"/>
          <ul class="flex items-center">
            <li class="mr-6">
              <RouterLink to="/" class="text-sm"><h2 class="hover:text-primary-600 transition-global">Accueil</h2></RouterLink>
            </li>
            <li class="mr-6">
              <RouterLink to="/planificateur-de-repas" class="text-sm"><h2 class="hover:text-primary-600 transition-global">Planificateur de repas</h2></RouterLink>
            </li>
            <li>
              <RouterLink to="/recettes" class="text-sm"><h2 class="hover:text-primary-600 transition-global">Mes recettes</h2></RouterLink>
            </li>
            <li v-if="user" class="ml-6 flex flex-row">
              <svg @click="handleLogout" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 cursor-pointer hover:text-primary-500 mr-1">
                <path fill-rule="evenodd" d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z" clip-rule="evenodd" />
              </svg>
              {{ user.firstName }} {{ user.lastName }}
            </li>
            <li v-else class="ml-6">
              <RouterLink to="/se-connecter"><IconProfile class="hover:text-primary-600 transition-global" /></RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>

<script setup>
import { ref, watch, onMounted, computed } from 'vue';
import { useAuthStore } from '../composables/authStore';

const authStore = useAuthStore();
const user = computed(() => authStore.state.user);

const handleLogout = () => {
  authStore.logout();
};
</script>