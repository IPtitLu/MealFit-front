<template>
  <div class="w-full flex justify-center items-center">
    <div class="w-4/5 grid grid-cols-2 gap-8">
    <div class="w-full">
      <!-- Input -->  
      <div class="w-full flex justify-center items-center flex-col mb-10 px-6 rounded-md py-4 bg-white drop-shadow-lg pt-6 pb-10">
        <div class="w-full mb-8">
          <label for="add-ingredient" class="block text-sm font-medium leading-6 text-gray-900 text-center mb-1">
            <h2>Ajoutez un ingrédient</h2>
          </label>
          <p class="text-sm font-thin text-center">Insérez tous les ingrédients que vous possédez dans votre frigo</p>
          <div class="mt-10 flex">
            <input type="text" name="add-ingredient" id="add-ingredient" v-model="newIngredient"
                  class="block w-full rounded-l-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-700 sm:text-sm sm:leading-6"
                  placeholder="Poulet ..." />
            <button @click="addIngredient" class="bg-secondary-100 hover:bg-secondary-200 border border-s-0 border-gray-300 text-primary-700 py-1.5 px-4 rounded-r-md">
              Ajouter
            </button>
          </div>
        </div>

        <!-- Ingrédients avec le bouton de validation à la fin -->
        <div class="flex flex-wrap gap-4">
          <div v-for="(ingredient, index) in ingredients" :key="index" class="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-primary-700 focus-within:ring-offset-2">
            <div>
              <span class="focus:outline-none">
                <p class="text-sm font-medium text-gray-900">{{ ingredient }}</p>
              </span>
            </div>
            <button @click="removeIngredient(index)" class="text-primary-700 hover:text-primary-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <!-- Bouton de validation (affiché uniquement si la liste des ingrédients n'est pas vide) -->
          <div @click="validateIngredients" v-if="ingredients.length > 0" class="relative flex items-center space-x-3 rounded-lg bg-secondary-100 hover:bg-secondary-200 border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-primary-700 focus-within:ring-offset-2 hover:border-primary-700 cursor-pointer">
            <button class=" text-primary-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      </div>

      <div class="w-full h-fit px-4 rounded-md pt-6 pb-10 bg-white drop-shadow-lg">        
        <h2 class="mb-1 text-center">Liste d'ingrédients</h2>
        <p class="text-sm font-thin text-center">Liste des ingrédients présents dans votre frigo</p>

        <div class="px-4 sm:px-6 lg:px-8">
          <div class="mt-8 flow-root">
            <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">Ingrédient</th>
                      <th scope="col" class="relative py-3.5 pl-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white">
                    <tr v-for="(ingredient, index) in validatedIngredients" :key="index" class="even:bg-gray-50">
                      <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">{{ ingredient }}</td>
                      <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        <button @click="removeValidateIngredient(index)" class="text-primary-700 hover:text-primary-400">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                    <tr v-if="validatedIngredients.length === 0">
                      <td colspan="2" class="text-center text-gray-500 py-5">Aucun ingrédient sélectionné</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useGrocery } from '@/composables/useGrocery';
import { useAuthStore } from '@/composables/authStore';
 
const { groceryList, addGroceryItem, getGroceryList, updateGroceryItem } = useGrocery();`
`
const { state } = useAuthStore();
const userId = state.user ? state.user._id : null;

const ingredients = ref([]);
const newIngredient = ref('');
const validatedIngredients = ref([]);

const addIngredient = () => {
  if (newIngredient.value.trim()) {
    ingredients.value.push(newIngredient.value.trim());
    newIngredient.value = '';
  }
};

const removeIngredient = (index) => {
  ingredients.value.splice(index, 1);
};

const validateIngredients = async () => {
  for (const ingredient of ingredients.value) {
    await addGroceryItem(userId, ingredient.id, ingredient.qty, ingredient.unit);
  }

  await getGroceryList(userId);

  ingredients.value = [];
};

const removeValidateIngredient = async (index) => {
  await updateGroceryItem('6571b8abf76454c952ac9a69', validatedIngredients.value[index].id, {
    quantity: 0,
    unit: '',
  });

  await getGroceryList('6571b8abf76454c952ac9a69');

  validatedIngredients.value.splice(index, 1);
};
</script>
<!-- 
<script setup>
import { ref } from 'vue';

const ingredients = ref([]);
const newIngredient = ref('');
const validatedIngredients = ref([]);

const addIngredient = () => {
  if (newIngredient.value.trim()) {
    ingredients.value.push(newIngredient.value.trim());
    newIngredient.value = '';
  }
};

const removeIngredient = (index) => {
  ingredients.value.splice(index, 1);
};

const validateIngredients = () => {
  validatedIngredients.value.push(...ingredients.value); // Ajoute les nouveaux ingrédients
  ingredients.value = []; // Réinitialise la liste des ingrédients à ajouter
  console.log('Ingrédients validés:', validatedIngredients.value);
};

const removeValidateIngredient = (index) => {
  validatedIngredients.value.splice(index, 1);
};
</script> -->