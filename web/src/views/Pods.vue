<template>
  <el-page-header content="Pods 列表" />
  <el-table :data="pods" style="width:100%" class="mt-4">
    <el-table-column prop="metadata.name" label="名称"/>
    <el-table-column prop="status.phase" label="状态"/>
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="small" type="primary" @click="openExec(scope.row)">终端</el-button>
        <el-button size="small" @click="editYaml(scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { listPods } from '../api/pods'
import { useRouter } from 'vue-router'

const pods = ref<any[]>([])
const ns = 'default'  // 可从 Pinia 或下拉切换获取
const router = useRouter()

onMounted(async () => { pods.value = (await listPods(ns)).data })

function openExec(pod: any) { router.push(`/exec/${pod.metadata.name}/container1`) }
function editYaml(pod: any) { router.push(`/edit/Pod/${pod.metadata.name}`) }
</script>