<!-- Bloc suggestion de recettes -->
<template>
    <section class="bg-white drop-shadow-lg pt-6 pb-10 rounded-md mb-4">
        <div
            class="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8 flex flex-col justify-center items-center mb-6"
        >
            <h2
                class="text-2xl font-bold tracking-tight text-gray-900 text-center mb-6"
            >
                Suggestion de recettes
            </h2>
            <div v-if="recipes.length < 1" class="text-center">
                Aucune recette actuellement
            </div>
            <div
                class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            >
                <div
                    v-for="recipe in recipes"
                    :key="recipe.id"
                    class="group relative shadow-lg rounded-lg p-4 cursor-pointer"
                >
                    <div
                        class="min-w-12 h-40 rounded-md overflow-hidden relative"
                    >
                        <img
                            :src="recipe.image"
                            :alt="recipe.title"
                            class="w-full h-full object-cover aspect-video absolute"
                        />
                    </div>
                    <div class="mt-4 flex justify-between">
                        <div>
                            <p class="text-sm text-gray-700">
                                {{ recipe.title }}
                            </p>
                        </div>
                        <span
                            @click="addRecipeToFavorites(recipe.id)"
                            class="text-sm font-medium text-red-900 cursor-pointer hover:text-red-400 inline-flex"
                        >
                            <Icon
                                icon="mdi:heart-outline"
                                class="w-6 h-6"
                            ></Icon>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full flex justify-center">
          <button
              type="button"
              class="inline-flex items-center gap-x-2 rounded-md px-3.5 py-2.5 text-sm font-semibold text-primary-600 hover:text-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
          >
              Voir plus
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6"
              >
                  <path
                      fill-rule="evenodd"
                      d="M12 3.75a.75.75 0 01.75.75v13.19l5.47-5.47a.75.75 0 111.06 1.06l-6.75 6.75a.75.75 0 01-1.06 0l-6.75-6.75a.75.75 0 111.06-1.06l5.47 5.47V4.5a.75.75 0 01.75-.75z"
                      clip-rule="evenodd"
                  />
              </svg>
          </button>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { useAuthStore } from "../../composables/authStore";
import { useRecipe, useRecipeToFavorite } from "../../composables/useRecipe"; // Importez useRecipe
import { useRecipeStore } from "../../composables/recipeStore"; // Importez recipeStore
import { Icon } from "@iconify/vue";

const authStore = useAuthStore();
const user = computed(() => authStore.state.user);

const { suggestRecipes } = useRecipe(); // Utilisez suggestRecipes pour récupérer les recettes
const recipeStore = useRecipeStore(); // Accédez à recipeStore

const recipes = computed(() => recipeStore.state.recipes ?? []); // Accédez aux recettes stockées

onMounted(async () => {
  if (recipes.value.length === 0) {
    await suggestRecipes(["rice"]);
  }
});

const { addRecipeToFavorites } = useRecipeToFavorite();
</script>
