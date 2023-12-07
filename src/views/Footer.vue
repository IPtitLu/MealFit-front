<template>
     <!-- FOOTER -->
  <footer class="bg-secondary-400 text-primary-700 mt-40 w-full">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <div class="flex flex-row justify-around w-2/3 m-auto my-4">
        <div class=" flex flex-row justify-center space-x-10 h-45 items-center">
          <MainLogo class="w-[50px]"/>
          <RouterLink to="/" class="hover:underline hover:underline-offset-4 hover:decoration-2"><h3 >MealFit</h3></RouterLink>
        </div>
        <div class=" flex justify-center space-x-10 h-45 items-center">
          <img src="../components/icons/email_icon_color.svg" class="w-6 h-full">
          <img src="../components/icons/insta_icon_color.svg" class="w-6 h-full">
          <img src="../components/icons/github_icon_color.svg" class="w-6 h-ful">
        </div>
      </div>
      <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        <div class="pb-6 flex flex-row w-1/3 justify-between">
          <RouterLink to="/planificateur-de-repas" class="text-sm leading-6 text-primary-700 font-semibold hover:underline hover:underline-offset-4 hover:decoration-2">Planificateur de repas</RouterLink>
          <RouterLink to="/mes-recettes" class="text-sm leading-6 text-primary-700 font-semibold hover:underline hover:underline-offset-4 hover:decoration-2">Mes recettes</RouterLink>
        </div>
      </nav>
      <hr>
      <p class="text-center text-xs leading-5 text-primary-700 font-semibold	">&copy; Copyright © 2023 MeatFil.fr - Tous droits réservés - Mentions légales - C.G. prestations de service</p>
    </div>
  </footer>
</template>

<style scoped>
hr{
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid #8A0B01;
}
</style>