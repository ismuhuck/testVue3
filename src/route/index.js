import { createRouter, createWebHistory}  from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: () => import("../views/home.vue") },
    {path: '/test', component: () => import("../views/TestView.vue")}
  ]
});

export default router