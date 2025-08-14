import { createPinia, defineStore } from 'pinia'
import type { App } from 'vue'

export const store = createPinia()

export const useAppStore = defineStore('app', {
  state: () => ({ namespace: 'default' }),
  actions: { setNamespace(ns: string) { this.namespace = ns } }
})

export const setupStore = (app: App) => app.use(store)