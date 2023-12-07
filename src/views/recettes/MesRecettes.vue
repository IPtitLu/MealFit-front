<template>
    <!-- Bloc mes recettes -->
    <section class="bg-white drop-shadow-lg pt-6 pb-10 rounded-md mb-4">
      <div class="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 flex flex-col justify-center items-center">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900 text-center mb-6">Mes recettes</h2>
        <div v-if="favoritesRecipes.length < 1 && user != null" class="text-center mb-10">Aucune recette actuellement</div>
        <div v-if="favoritesRecipes.length < 1 && user == null" class="text-center mb-10">Vous devez être connecté pour voir les recettes en favoris.</div>
        <div v-else class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 mb-6">
          <div v-for="recipe in favoritesRecipes" :key="recipe.title" class="group relative">
            <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img :src="recipe.image" :alt="recipe.title" class="h-full w-full object-cover" />
            </div>
            <div class="mt-4 flex justify-between">
              <div>
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0" />
                    <h3>{{ recipe.title }}</h3>
                </h3>
              </div>
              <p class="text-sm font-medium text-red-900">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </p>
            </div>
            <p class="text-sm font-medium text-red-900">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path
                  d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </p>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-center">
        <button type="button"
          class="inline-flex items-center gap-x-2 rounded-md  px-3.5 py-2.5 text-sm font-semibold text-primary-600 hover:text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500">
          Voir plus
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
            <path fill-rule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { useAuthStore } from '../../composables/authStore';
import { useGetFavoritesRecipes } from '../../composables/useRecipe'; // Importez useRecipe
import { useRecipeStore } from '../../composables/recipeStore'; // Importez recipeStore

const authStore = useAuthStore();
const user = computed(() => authStore.state.user);

const { isLoading, error, getFavoritesRecipes } = useGetFavoritesRecipes();
const recipeStore = useRecipeStore();

console.log('here : ', recipeStore.state.favoritesRecipes);

const favoritesRecipes = computed(() => recipeStore.state.favoritesRecipes ?? []);
watch(favoritesRecipes, async (newvalue) => {
  console.log('store : ', newvalue);
})

onMounted(async () => {
  if (user && favoritesRecipes.value.length === 0) {
    await getFavoritesRecipes();
  }
});
</script>