<script setup>
defineProps(['intro'])
</script>

<template>
  <div style="display: flex; flex-direction: row; gap: 30px; margin: 20px 0; align-items: flex-start;">
    <div style="text-align: center;">
      <img :src="intro.portraitData" alt="诗人画像" style="width: 260px; border: 8px solid white; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
      <p style="margin-top: 10px; color: #666;">诗人画像</p>
    </div>
    <div style="flex: 1;">
      <h2 style="border-left: 4px solid red; padding-left: 12px; margin-bottom: 15px;">人物简介</h2>
      <p style="margin: 10px 0; line-height: 1.9;">{{ intro.description }}</p>
      <ul style="padding-left: 20px; line-height: 2.2; font-size: 16px;">
        <li v-for="f in intro.facts" :key="f.keyword">
          <strong>{{ f.keyword }}</strong>：{{ f.value }}
        </li>
      </ul>
    </div>
  </div>
</template>
