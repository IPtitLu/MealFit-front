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
          <a v-for="(tab, tabIdx) in tabs" :key="tab.name" @click.prevent="setActiveTab(tab.name)" :class="[tab.current ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700', tabIdx === 0 ? 'rounded-l-lg' : '', tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '', 'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10  cursor-pointer']">
            <span>{{ tab.name }}</span>
            <span aria-hidden="true" :class="[tab.current ? 'bg-primary-700' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']" />
          </a>
        </nav>
      </div>
    </div>

    <!-- Bloc parcourir les recettes -->
    <section v-if="activeTab === 'Parcourir les recettes'" class="bg-white drop-shadow-lg pt-6 pb-10 rounded-md mb-4">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 flex flex-col justify-center items-center">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center">Parcourir les recettes</h2>
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-6">
          <div v-for="product in products" :key="product.id" class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>
              <p class="text-sm font-medium text-red-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <button type="button" class="inline-flex items-center gap-x-2 rounded-md  px-3.5 py-2.5 text-sm font-semibold text-primary-600 hover:text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500">
          Voir plus
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </section>

    <!-- Bloc suggestion de recettes -->
    <section v-if="activeTab === 'Suggestion de recettes'" class="bg-white drop-shadow-lg pt-6 pb-10 rounded-md mb-4">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 flex flex-col justify-center items-center">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center">Suggestion de recettes</h2>
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-6">
          <div v-for="product in products" :key="product.id" class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>
              <p class="text-sm font-medium text-red-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <button type="button" class="inline-flex items-center gap-x-2 rounded-md  px-3.5 py-2.5 text-sm font-semibold text-primary-600 hover:text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500">
          Voir plus
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </section>

    <!-- Bloc mes recettes -->
    <section v-if="activeTab === 'Mes recettes'" class="bg-white drop-shadow-lg pt-6 pb-10 rounded-md mb-4">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 flex flex-col justify-center items-center">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center">Mes recettes</h2>
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-6">
          <div v-for="product in products" :key="product.id" class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                  <a :href="product.href">
                    <span aria-hidden="true" class="absolute inset-0" />
                    {{ product.name }}
                  </a>
                </h3>
                <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
              </div>
              <p class="text-sm font-medium text-red-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </p>
            </div>
          </div>
        </div>
        <button type="button" class="inline-flex items-center gap-x-2 rounded-md  px-3.5 py-2.5 text-sm font-semibold text-primary-600 hover:text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500">
          Voir plus
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd" d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
  </div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue';

const tabs = [
  { name: 'Parcourir les recettes', href: '#', current: true },
  { name: 'Mes recettes', href: '#', current: false },
  { name: 'Suggestion de recettes', href: '#', current: false },
]

const products = [
  {
    id: 1,
    name: 'Burger frites',
    href: '#',
    imageSrc: 'https://img.freepik.com/photos-gratuite/gros-sandwich-hamburger-burger-boeuf-juteux-fromage-tomate-oignon-rouge-table-bois_2829-19631.jpg?w=2000&t=st=1701871911~exp=1701872511~hmac=060dcf739bbe5db97f2aabcccece39e4745d66dfc5d523322f5ad43fe8acf75b',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Description de la recette',
  },
  {
    id: 1,
    name: 'Tacos au boeuf',
    href: '#',
    imageSrc: 'https://img.freepik.com/photos-gratuite/vue-laterale-doner-poulet-grille-vert-laitue-tomate-frites-table_141793-4881.jpg?w=2000&t=st=1701874340~exp=1701874940~hmac=b3379116a5dadac69709a3d07221443123aab561fa094dd7836999b86ee6709b',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Description de la recette',
  },
  {
    id: 1,
    name: 'Boeuf aux oignons',
    href: '#',
    imageSrc: 'https://img.freepik.com/photos-gratuite/saute-boeuf-aux-poivrons-doux-haricots-verts-riz_2829-20129.jpg?w=2000&t=st=1701874385~exp=1701874985~hmac=54654c48baa8ed080c9bf6f06f030283ac0febad67e924e8d47f5228599719f1',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Description de la recette',
  },
  {
    id: 1,
    name: 'Poulet salade',
    href: '#',
    imageSrc: 'https://img.freepik.com/photos-gratuite/filet-saumon-grille-salade-legumes_74190-6032.jpg?w=2000&t=st=1701874397~exp=1701874997~hmac=4b598fd02e58349c516b764d10a43b7dd410a524234fde7e90dc8cd314883bc8',
    imageAlt: "Front of men's Basic Tee in black.",
    color: 'Description de la recette',
  },
]

const activeTab = ref('Parcourir les recettes'); // Nom de l'onglet actif

const setActiveTab = (tabName) => {
  tabs.forEach(tab => {
    tab.current = tab.name === tabName;
  });
  activeTab.value = tabName;
};

setActiveTab('Parcourir les recettes');
</script>