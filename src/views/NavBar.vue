<template>
    <nav style="background-color: #FFD966; color: #8A0B01;" class="w-full flex justify-center items-center flex-col">
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
              <RouterLink to="/mes-recettes" class="text-sm"><h2 class="hover:text-primary-600 transition-global">Mes recettes</h2></RouterLink>
            </li>
            <li class="ml-6">
              <RouterLink to="/se-connecter" ><IconProfile class="hover:text-primary-600 transition-global" /></RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>