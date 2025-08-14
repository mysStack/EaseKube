<template>
  <el-header height="60px" class="header">
    <div class="logo">K8s 管理平台</div>
    <el-dropdown>
      <span class="el-dropdown-link">
        当前命名空间: {{ namespace }} <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click="changeNamespace('default')">default</el-dropdown-item>
        <el-dropdown-item @click="changeNamespace('kube-system')">kube-system</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '../store'

const store = useAppStore()
const namespace = computed(() => store.namespace)

function changeNamespace(ns: string) {
  store.setNamespace(ns)
}
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #409EFF;
  color: white;
}
.logo {
  font-size: 18px;
  font-weight: bold;
}
</style>
