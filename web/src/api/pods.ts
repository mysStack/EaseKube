import http from './index'

export function listPods(ns: string, labelSelector?: string) {
  const params: any = {}
  if (labelSelector) params.labelSelector = labelSelector
  return http.get(`/${ns}/pods`, { params })
}

export function getPodLogs(ns: string, pod: string, container?: string, tailLines = 200) {
  const params: any = { tailLines }
  if (container) params.container = container
  return http.get(`/${ns}/pods/${pod}/log`, { params })
}