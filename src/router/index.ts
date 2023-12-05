
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import NosRecettes from '@/views/NosRecettes.vue'
import SeConnecter from '@/views/SeConnecter.vue'
import ProgrammeSportif from '@/views/ProgrammeSportif.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/nos-recettes', component: NosRecettes },
    { path: '/se-connecter', component: SeConnecter },
    { path: '/programme-sportif', component: ProgrammeSportif },
  ];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;