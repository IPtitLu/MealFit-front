<template>
  <!-- HERO HEADER SECTION-->
  <div class="relative isolate overflow-hidden h-[530px] mb-28">
    <img src="../assets/img/img_background_section_1_lp.svg" alt="" class="absolute inset-0 -z-10 w-full h-full object-cover" />
    <div class="mx-auto max-w-3xl sm:py-48 lg:py-56 h-full">
      <div class="text-start">
        <h1 class="mt-6 text-8xl font-extrabold tracking-tight text-primary-700 sm:text-6xl">Meal Fit</h1>
        <p class="mt-1 text-xl max-w-md	font-semibold leading-8 text-primary-700">Optimisez votre nutrition et simplifiez votre routine alimentaire</p>
      </div>
    </div>
  </div>
  <!-- IMAGE GRID SECTION -->
  <div class="flex flex-col mx-auto max-w-5xl px-12">
    <h2 class="m-auto mb-12 text-3xl font-semibold leading-8 text-primary-400 text-center">Plus de 1000 recettes pour vous aidez à mieux vous nutritionnez.</h2>
    <ul role="list" class="grid grid-cols-2 gap-5 ">
      <li v-for="file in files" :key="file.source">
        <div class="group w-full m-auto flex flex-row justify-center">
          <img :src="file.source" alt="" class="pointer-events-none object-cover" />
        </div>
      </li>
    </ul>
    <RouterLink to="/mes-recettes" class="m-auto text-center w-1/3 rounded-full bg-secondary-400 px-3.5 py-2 text-sm mt-5 text-primary-700 font-semibold">Découvrir nos recettes</RouterLink>
  </div>
  <!-- HERO SECTION -->
  <div class="relative isolate overflow-hidden h-[530px] mt-28 mb-28 flex flex-row justify-center">
    <img src="../assets/img/Rectangle_45.png" alt="" class="absolute inset-0 -z-10 w-full h-full object-cover" />
    <div class="flex flex-col w2/3 justify-start">
        <div class="flex flex-col w-1/3 h-full justify-center">
        <h2 class="text-2xl w-full font-extrabold tracking-tight text-primary-700">Nous créons et gérons vos liste de course en fonction de vos envies</h2>
        <RouterLink to="/planificateur-de-repas" class="text-center rounded-full bg-secondary-400 px-3.5 py-2 text-sm mt-5 text-primary-700 font-semibold">Créer mon programme</RouterLink>
      </div>
    </div>
  </div>
  <!-- TESTIMONIALS SECTION -->  
  <div>
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-xl text-center">
        <h2 class="m-auto text-3xl font-semibold leading-8 text-primary-400 text-center">Ils ont testés, Ils ont adorés.</h2>
      </div>
      <div class="mx-auto flow-root max-w-2xl mt-6 lg:mx-0 lg:max-w-none">
        <div class="grid grid-cols-3 gap-5">
          <div v-for="testimonial in testimonials" :key="testimonial.author.handle" class="pt-8 sm:inline-block sm:w-full sm:px-4">
            <figure class="rounded-2xl bg-secondary-400 p-12 text-sm leading-6">
              <figcaption class="flex items-center gap-x-4">
                <img class="h-10 w-10 rounded-full bg-gray-50" :src="testimonial.author.imageUrl" alt="" />
                <div>
                  <div class="font-semibold text-gray-900">{{ testimonial.author.name }}</div>
                  <div class="text-gray-600">{{ `@${testimonial.author.handle}` }}</div>
                </div>
              </figcaption>
              <blockquote class="text-primary-700 my-4">
                <p class="text-center">{{ `“${testimonial.body}”` }}</p>
              </blockquote>
              <div class="flex flex-row justify-center mt-4">
                <img class="mx-1" src="../assets/img/star_icon.svg" />
                <img class="mx-1" src="../assets/img/star_icon.svg" />
                <img class="mx-1" src="../assets/img/star_icon.svg" />
                <img class="mx-1" src="../assets/img/star_icon.svg" />
              </div>
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

  //fake data image grid
  const files = [
    {
      source: new URL ('@/assets/img/img_grid_lp.png', import.meta.url).href,
    },
    {
      source: new URL ('@/assets/img/img_grid_lp_2.png', import.meta.url).href,
    },
    {
      source: new URL ('@/assets/img/img_grid_lp_3.png', import.meta.url).href,
    },
    {
      source: new URL ('@/assets/img/img_grid_lp_4.png', import.meta.url).href,
    },
    {
      source: new URL ('@/assets/img/img_grid_lp_5.png', import.meta.url).href,
    },
    {
      source: new URL ('@/assets/img/img_grid_lp_6.png', import.meta.url).href,
    },
  ]

  //fake data testimonials
  const testimonials = [
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More testimonials...
]

</script>

<style scoped>
hr{
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid #8A0B01;
}
</style>