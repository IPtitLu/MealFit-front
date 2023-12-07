<!-- Bloc parcourir les recettes -->
<template>
<section class="bg-white drop-shadow-lg pt-6 pb-10 rounded-md mb-4">
    <div class="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 flex flex-col justify-center items-center">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center mb-6">Parcourir les recettes</h2>
        <div v-if="allProducts.length < 1" class="text-center">Aucune recette actuellement</div>
        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in allProducts" :key="product.id" class="group relative">
            <!-- <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
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
            </div> -->
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
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useAuthStore } from '../../composables/authStore';
import { useRecipe } from '../../composables/useRecipe'; // Importez useRecipe
import { useRecipeStore } from '../../composables/recipeStore'; // Importez recipeStore

const authStore = useAuthStore();
const user = computed(() => authStore.state.user);

const { suggestRecipes } = useRecipe(); // Utilisez suggestRecipes pour récupérer les recettes
const recipeStore = useRecipeStore(); // Accédez à recipeStore

const recipes = computed(() => recipeStore.state.recipes); // Accédez aux recettes stockées

const allProducts = [];

// onMounted(async () => {
//   if (recipes.value.length === 0) {
//     //await suggestRecipes(['rice']); 
//   }
// });
</script>