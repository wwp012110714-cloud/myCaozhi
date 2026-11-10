<script setup>
import { ref } from 'vue'
defineProps(['timeline'])
const activeIndex = ref(0)
</script>

<template>
  <div>
    <h2 style="border-left: 4px solid red; padding-left: 12px; margin: 35px 0 18px;">人生轨迹</h2>
    <div style="margin-bottom: 15px;">
      <button
        v-for="(item, idx) in timeline"
        :key="item.time"
        :style="activeIndex === idx ? 'background-color: #c0392b; color: white; border-color: #c0392b;' : ''"
        @click="activeIndex = idx"
      >
        {{ item.time }}
      </button>
    </div>
    <div style="background: white; padding: 25px; line-height: 1.9; font-size: 16px;">
      {{ timeline[activeIndex].action }}
    </div>
  </div>
</template>
