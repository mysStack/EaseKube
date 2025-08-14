<template>
  <div ref="terminal" style="height:500px; background:black;"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Terminal } from 'xterm'
import 'xterm/css/xterm.css'
import { useRoute } from 'vue-router'

const terminal = ref<HTMLDivElement>()
const route = useRoute()

onMounted(() => {
  const term = new Terminal({ cols: 80, rows: 24 })
  term.open(terminal.value!)
  term.write('Connecting to pod...\r\n')

  const ws = new WebSocket(`ws://localhost:8080/ws/exec?pod=${route.params.pod}&container=${route.params.container}`)
  ws.onmessage = (e) => term.write(e.data)
  term.onData(data => ws.send(data))
})
</script>