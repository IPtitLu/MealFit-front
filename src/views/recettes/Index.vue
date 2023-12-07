<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-4/5">
    <!-- Bloc tabs -->
      <div class="mb-4">
        <div class="sm:hidden">
          <label for="tabs" class="sr-only">Select a tab</label>
          <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
          <select id="tabs" name="tabs" class="block w-full rounded-md border-gray-300 focus:border-primary-700 focus:ring-primary-700">
            <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">{{ tab.name }}</option>
          </select>
        </div>
        <div class="hidden sm:block">
          <nav class="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
            <RouterLink v-for="(tab, tabIdx) in activeTabs" :to="'/recettes' + tab.href" :key="tab.name" :class="[tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700', tabIdx === 0 ? 'rounded-l-lg' : '', tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '', 'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10 cursor-pointer']">
              <span>{{ tab.name }}</span>
              <span aria-hidden="true" :class="[tab.current ? 'bg-primary-700' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']" />
            </RouterLink>
          </nav>
        </div>
      </div>
    <router-view></router-view>
    </div>
  </div>
  
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const tabs = [
  { name: 'Parcourir les recettes', href: '', current: true },
  { name: 'Mes recettes', href: '/mes-recettes', current: false },
  { name: 'Suggestion de recettes', href: '/suggestions', current: false },
];

const route = useRoute();

// Propriété calculée pour déterminer l'onglet actif en fonction de la route actuelle
const activeTabs = computed(() => {
  return tabs.map(tab => ({
    ...tab,
    current: route.path === tab.href
  }));
});
</script>