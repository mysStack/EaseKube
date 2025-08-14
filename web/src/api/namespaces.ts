import http from './index'

export function listNamespaces() {
  return http.get('/namespaces')
}