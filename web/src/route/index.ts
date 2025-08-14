import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/pods' },
  { path: '/pods', component: () => import('../views/Pods.vue') },
  { path: '/exec/:pod/:container', component: () => import('../views/Exec.vue'), props: true },
  { path: '/edit/:kind/:name', component: () => import('../views/YamlEditor.vue'), props: true }
]

export default createRouter({ history: createWebHistory(), routes })