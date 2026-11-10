<script setup>
defineProps(['name', 'subtitle'])
</script>

<template>
  <header style="text-align: center; line-height: 250%; margin-bottom: 20px;">
    <h1 style="color: #c0392b; font-size: 48px; letter-spacing: 8px;">{{ name }}</h1>
    <p style="color: #888; font-size: 16px; margin-top: 8px;">{{ subtitle }}</p>
  </header>
</template>
