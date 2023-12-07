<template>
  <!--
    This example requires updating your template:

    ```
    <html class="h-full bg-white">
    <body class="h-full">
    ```
  -->
  <div class="w-full h-screen">
    <div class="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8 ">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col justify-center items-center ">
        <MainLogo class="w-[50px] h-auto mb-4"/>
        <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Connectez vous</h2>
      </div>

      <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Adresse mail</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" v-model="email" autocomplete="email" required  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between place-content-center">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
              <div class="text-sm">
                <RouterLink to="/mdp-oublie" class="font-semibold text-primary-700 hover:text-primary-400">
                  <button type="button">Mot de passe oublié</button>
                </RouterLink>
              </div>
            </div>

            <div>
              <div class="mt-2 mb-10">
                <input id="password" name="password" type="password" v-model="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6" />
              </div>
            </div>

            <div class="flex justify-between space-x-4">
              <RouterLink to="/" class="flex w-1/2 justify-center rounded-md bg-gray-300 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-700 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                <button type="button">Retour</button>
              </RouterLink>
              <button type="submit" class="flex w-1/2 justify-center rounded-md bg-primary-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600">
                Connexion
              </button>
            </div>
          </div>
        </form>

        <p class="mt-10 text-center text-sm">
          <RouterLink to="/inscription" class="font-semibold leading-6 text-primary-700 hover:text-primary-400">S'inscrire</RouterLink>
        </p>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useLogin } from '../composables/useLogin';

const email = ref('');
const password = ref('');
const { isLoading, error, login } = useLogin();

const handleLogin = async () => {
  try {
    await login(email.value, password.value);
  } catch (err) {
    // Gérez les erreurs ici
  }
};

// Utilisez `isLoading` et `error` pour afficher des messages d'état
</script>