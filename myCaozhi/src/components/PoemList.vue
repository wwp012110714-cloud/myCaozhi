<script setup>
defineProps(['poems'])
</script>

<template>
  <div>
    <h2 style="border-left: 4px solid red; padding-left: 12px; margin: 35px 0 18px;">代表作品</h2>
    <div style="display: flex; flex-direction: row; justify-content: space-between; gap: 15px; flex-wrap: wrap;">
      <div
        v-for="poem in poems"
        :key="poem.title"
        style="background: white; border-top: 3px solid #c0392b; padding: 20px 15px; width: 220px;"
      >
        <h3 style="color: #c0392b; margin-bottom: 10px; font-size: 18px;">{{ poem.title }}</h3>
        <p style="font-size: 15px; color: #555; line-height: 1.8;">{{ poem.line }}</p>
      </div>
    </div>
  </div>
</template>
