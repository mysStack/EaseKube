<template>
  <Header />      <!-- 公共 Header -->
  <router-view /> <!-- 路由页面显示 -->
</template>

<script setup lang="ts">
import Header from './components/Header.vue'
</script>

<style>
/* 可选全局样式 */
body {
  margin: 0;
  font-family: "Helvetica Neue", Arial, sans-serif;
}
</style>
