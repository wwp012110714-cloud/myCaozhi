<script setup>
import { ref, onMounted } from 'vue'
import SiteNav from './components/SiteNav.vue'
import PoetIntro from './components/PoetIntro.vue'
import TimeLine from './components/TimeLine.vue'
import PoemList from './components/PoemList.vue'

const poet = ref(null)
const errorMsg = ref('')
const currentTheme = ref('light')
const currentQuote = ref('')

onMounted(() => {
  fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent('http://106.13.165.42/data?id=2529105'))

    .then(text => {
      try {
        poet.value = JSON.parse(text)
        document.title = poet.value.Title
        currentQuote.value = poet.value.Quotes[0]
      } catch (err) {
        errorMsg.value = text
      }
    })
    .catch(e => {
      errorMsg.value = "网络请求失败"
      console.error(e)
    })
})

function toggleTheme() {
  currentTheme.value = currentTheme.value === 'light' ? 'black' : 'light'
  document.body.setAttribute('class', currentTheme.value)
}

function randomQuote() {
  if (!poet.value) return
  const len = poet.value.Quotes.length
  currentQuote.value = poet.value.Quotes[Math.floor(Math.random() * len)]
}
</script>

<template>
  <div v-if="!poet && !errorMsg" style="text-align:center;font-size:20px;margin-top:100px;">数据加载中……</div>
  <div v-else-if="errorMsg" style="text-align:center;font-size:20px;margin-top:100px;">{{ errorMsg }}</div>

  <div id="root" v-else>
    <SiteNav :name="poet.Header.name" :subtitle="poet.Header.subtitle" />
    <PoetIntro :intro="poet.Intro" />
    <TimeLine :timeline="poet.Timeline" />
    <PoemList :poems="poet.Poems" />

    <div style="margin-top: 40px; text-align: center;">
      <h2 style="border-left: none; font-size: 24px; margin-bottom: 20px;">名句摘录</h2>
      <div style="background: white; padding: 30px 20px; margin: 20px 0;">
        <p style="font-size: 20px; line-height: 1.8; color: #333;">{{ currentQuote }}</p>
      </div>
      <button @click="randomQuote" style="background-color: #c0392b; color: white; border: none; padding: 12px 40px; font-size: 18px; cursor: pointer;">换一句</button>
    </div>

    <button @click="toggleTheme" style="margin-top: 30px; padding: 10px 20px; font-family: inherit; cursor: pointer;">更换主题</button>
  </div>
</template>

<style>
* { margin: 0; padding: 0; }
body {
  font-family: "KaiTi", "仿宋", serif;
  line-height: 150%;
}
body.black {
  background-color: #333333;
  color: rgb(247, 242, 231);
}
body.light {
  background-color: rgb(247, 242, 231);
  color: #333333;
}
#root {
  width: 1000px;
  margin: 0 auto;
  padding: 20px 0;
}
button {
  background-color: white;
  font-family: inherit;
  font-size: 16px;
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border: 1px solid #ccc;
}
button:hover {
  background-color: red;
  color: white;
  transition: 0.3s;
}
</style>
