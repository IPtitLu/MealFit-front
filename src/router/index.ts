
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import PlanificateurDeRepas from '@/views/PlanificateurDeRepas.vue'
import Index from '@/views/recettes/index.vue'
import SeConnecter from '@/views/SeConnecter.vue'
import Inscription from '@/views/Inscription.vue'
import MdpOublie from '@/views/MdpOublie.vue'
import Parcourir from '@/views/recettes/Parcourir.vue'
import MesRecettes from '@/views/recettes/MesRecettes.vue'
import Suggestions from '@/views/recettes/Suggestions.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/planificateur-de-repas', component: PlanificateurDeRepas },
  {
    path: '/recettes', component: Index, children: [
      { path: '', component: Parcourir },
      { path: 'mes-recettes', component: MesRecettes },
      { path: 'suggestions', component: Suggestions },
    ]
  },
  { path: '/se-connecter', component: SeConnecter, meta: { layout: "WithoutNavbar" } },
  { path: '/inscription', component: Inscription, meta: { layout: "WithoutNavbar" } },
  { path: '/mdp-oublie', component: MdpOublie, meta: { layout: "WithoutNavbar" } },
];

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})

export default router;