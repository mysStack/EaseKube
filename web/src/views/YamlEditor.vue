<template>
  <div style="height:calc(100vh - 50px)">
    <monaco-editor v-model="yamlText" language="yaml" theme="vs-dark"/>
    <el-button type="primary" @click="saveYaml" style="margin-top:10px;">保存</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import * as yaml from 'yaml'

const route = useRoute()
const yamlText = ref('')

onMounted(() => {
  yamlText.value = `
apiVersion: v1
kind: ${route.params.kind}
metadata:
  name: ${route.params.name}
`
})

function saveYaml() {
  const obj = yaml.parse(yamlText.value)
  console.log('保存 YAML 对象:', obj)
  // TODO: 调后端 API 提交
}
</script>