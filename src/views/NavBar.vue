<template>
    <nav style="background-color: #FFD966; color: #8A0B01;" class="p-4 w-full">
      <div class="container mx-auto px-6 flex items-center justify-between">
        <MainLogo />
        <ul class="flex">
          <li class="mr-6">
            <RouterLink to="/" class="text-lg">Home</RouterLink>
          </li>
          <li class="mr-6">
            <RouterLink to="/nos-recettes" class="text-lg">Nos Recettes</RouterLink>
          </li>
          <li class="mr-6">
            <RouterLink to="/se-connecter" class="text-lg">Se Connecter</RouterLink>
          </li>
          <li>
            <RouterLink to="/programme-sportif" class="text-lg">Programme Sportif</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </template>