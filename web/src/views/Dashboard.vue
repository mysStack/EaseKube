<template>
  <div>
    <Header />
    <el-main style="padding: 20px;">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card>
            <div class="stat-title">节点数</div>
            <div class="stat-value">{{ nodesCount }}</div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <div class="stat-title">命名空间数</div>
            <div class="stat-value">{{ namespaces.length }}</div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <div class="stat-title">Pod 总数</div>
            <div class="stat-value">{{ podsCount }}</div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
// Ensure Header.vue exists at ../components/Header.vue
// If not, update the path below to the correct location or create the file.
import Header from '../components/Header.vue'
import { listNamespaces } from '../api/namespaces'
import { listPods } from '../api/pods'

const namespaces = ref<any[]>([])
const nodesCount = ref(0)
const podsCount = ref(0)

onMounted(async () => {
  // 获取命名空间列表
  namespaces.value = (await listNamespaces()).data

  // 模拟获取节点数
  const nodes = await fetch('/k8s-admin-api/nodes').then(r => r.json())
  nodesCount.value = nodes.length

  // 计算所有命名空间的 Pods 数量
  let totalPods = 0
  for (const ns of namespaces.value) {
    const podsResponse = await listPods(ns.metadata.name)
    totalPods += podsResponse.data.length
  }
  podsCount.value = totalPods
})
</script>

<style scoped>
.stat-title {
  font-size: 16px;
  color: #666;
}
.stat-value {
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
}
</style>
