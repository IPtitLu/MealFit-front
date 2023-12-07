<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center">
      <MainLogo class="w-[50px] h-auto mb-4"/>
      <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Inscrivez-vous</h2>
    </div>

    <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6"  @submit.prevent="handleRegister">
        <div>
          <label for="firstName" class="block text-sm font-medium leading-6 text-gray-900">Prénom</label>
          <div class="mt-2">
            <input id="firstName" name="firstName" type="text" v-model="firstName" autocomplete="firstName" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="lastName" class="block text-sm font-medium leading-6 text-gray-900">Nom</label>
          <div class="mt-2">
            <input id="lastName" name="lastName" type="text" v-model="lastName" autocomplete="lastName" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Adresse mail</label>
          <div class="mt-2">
            <input id="email" name="email" type="email" v-model="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
          <div class="mt-2">
            <input id="password" name="password" type="password" v-model="password" autocomplete="new-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <label for="confirmPassword" class="block text-sm font-medium leading-6 text-gray-900">Confirmer le mot de passe</label>
          <div class="mt-2">
            <input id="confirmPassword" name="confirmPassword" type="password" v-model="passwordConfirm" autocomplete="new-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <p v-if="passwordConfirmError" class="text-red-400">Les mots de passe doivent être identiques.</p>

        <div class="flex justify-between space-x-4">
          <RouterLink to="/" class="flex w-1/2 justify-center rounded-md bg-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
            <button type="button" >Retour</button>
          </RouterLink>
          
          <button :disabled="passwordConfirmError" type="submit" class="flex w-1/2 justify-center rounded-md bg-primary-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">Inscription</button>
        </div>
      </form>
      <p class="mt-10 text-center text-sm text-gray-700">
        <span>Déjà inscrit? </span>
        <RouterLink to="/se-connecter" class="font-semibold leading-6 text-primary-700 hover:text-primary-400">Connectez-vous</RouterLink>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRegister } from '../composables/useRegister';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const password = ref('');
const passwordConfirm = ref('');
const passwordConfirmError = computed(() => ( password.value !== '' && passwordConfirm.value !== '' ) && password.value !== passwordConfirm.value);
const { isLoading, error, register } = useRegister();

const handleRegister = async () => {
  await register(firstName.value, lastName.value, email.value, password.value);
};

// Utilisez `isLoading` et `error` pour afficher des messages d'état
</script>../composables/useRegister