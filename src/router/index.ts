
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import PlanificateurDeRepas from '@/views/PlanificateurDeRepas.vue'
import MesRecettes from '@/views/MesRecettes.vue'
import SeConnecter from '@/views/SeConnecter.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/planificateur-de-repas', component: PlanificateurDeRepas },
    { path: '/mes-recettes', component: MesRecettes },
    { path: '/se-connecter', component: SeConnecter, meta: {layout: "withoutNavbar"} },
  ];

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

export default router;