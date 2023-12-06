<template>
    <div class="relative isolate overflow-hidden h-[530px] mb-28">
      <img src="../assets/img/img_background_section_1_lp.svg" alt="" class="absolute inset-0 -z-10 w-full h-full object-cover" />
      <div class="mx-auto max-w-3xl sm:py-48 lg:py-56 h-full">
        <div class="text-start">
          <h1 class="text-8xl font-extrabold tracking-tight text-primary-700 sm:text-6xl">Meal Fit</h1>
          <p class="mt-6 text-xl max-w-md	font-semibold leading-8 text-primary-700">Optimisez votre nutrition et simplifiez votre routine alimentaire</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col mx-auto max-w-5xl px-12">
      <h2 class="m-auto mb-12 text-3xl font-semibold leading-8 text-primary-400 text-center">Plus de 1000 recettes pour vous aidez à mieux vous nutritionnez.</h2>
      <ul role="list" class="grid grid-cols-2 gap-5 ">
        <li v-for="file in files" :key="file.source">
          <div class="group w-full m-auto flex flex-row justify-center">
            <img :src="file.source" alt="" class="pointer-events-none object-cover" />
          </div>
        </li>
      </ul>
      <button type="button" class="rounded-full w-1/3 m-auto mt-7 bg-secondary-400 px-3.5 py-2 text-sm mt-5 text-primary-700 font-semibold">Découvrir nos recettes </button>
    </div>
    <div class="relative isolate overflow-hidden h-[530px] mt-28 mb-28 flex flex-row justify-center">
      <img src="../assets/img/Rectangle_45.png" alt="" class="absolute inset-0 -z-10 w-full h-full object-cover" />
      <div class="flex flex-col w2/3 justify-start">
         <div class="flex flex-col w-1/3 h-full justify-center">
          <h2 class="text-2xl w-full font-extrabold tracking-tight text-primary-700">Nous créons et gérons vos liste de course en fonction de vos envies</h2>
          <button type="button" class="rounded-full bg-secondary-400 px-3.5 py-2 text-sm mt-5 text-primary-700 font-semibold">Créer mon programme</button>
        </div>
      </div>
    </div>
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
  <footer class="bg-secondary-400 text-primary-700 mt-40">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <div class="flex flex-row justify-around w-2/3 m-auto my-4">
        <div class=" flex flex-row justify-center space-x-10 h-45 items-center">
          <MainLogo class="w-[50px]"/>
          <h3>MealFit</h3>
        </div>
        <div class=" flex justify-center space-x-10 h-45 items-center">
          <a v-for="item in navigation.social" :key="item.name" :href="item.href" class="text-primary-700">
            <span class="sr-only">{{ item.name }}</span>
            <component :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          </a>
        </div>
      </div>
      <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
        <div v-for="item in navigation.main" :key="item.name" class="pb-6">
          <a :href="item.href" class="text-sm leading-6 text-primary-700 font-semibold	">{{ item.name }}</a>
        </div>
      </nav>
      <hr>
      <p class="text-center text-xs leading-5 text-primary-700 font-semibold	">&copy; Copyright © 2023 MeatFil.fr - Tous droits réservés - Mentions légales - C.G. prestations de service</p>
    </div>
  </footer>
</template>

<script setup>
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
import { defineComponent, h } from 'vue'

const navigation = {
  main: [
    { name: 'Programme Sportif', href: '#' },
    { name: 'Nos Recettes', href: '#' },
  ],
  social: [
    {
      name: 'Instagram',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
    {
      name: 'Twitter',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              d: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
            }),
          ]),
      }),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  ],
}
</script>

<style scoped>
hr{
  margin-top: 15px;
  margin-bottom: 15px;
  border: 1px solid #8A0B01;
}
</style>