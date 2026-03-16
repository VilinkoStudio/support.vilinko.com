<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})
</script>

<template>
  <h1>{{ msg }}</h1>

  <p class="read-the-docs">Copyright © 2026 Vilinko Studio</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
