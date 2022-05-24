import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PastePreview from "@/views/PastePreview";
import Paste from "@/components/Paste";

const routes = [
  {
    path: '/',
    name: 'Paste',
    component: Paste
  },
  {
    path: '/:id',
    name: 'PastePreview',
    component: PastePreview
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/:permalink',
    name: 'PastePreview',
    component: PastePreview
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
