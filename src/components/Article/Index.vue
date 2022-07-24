<template>
  <div v-if="loading" class="loading">
    努力加载中...
  </div>
  <article style="position:relative;display: flex">
<!--    <section @click="goBack" class="back">-->
<!--      <svg t="1658600158176" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2263" width="32" height="32"><path d="M532.526499 904.817574L139.506311 511.797385 532.526499 118.777197c12.258185-12.258185 12.432147-32.892131-0.187265-45.51052-12.707416-12.707416-32.995485-12.703323-45.511543-0.187265L75.166957 484.739123c-7.120165 7.120165-10.163477 17.065677-8.990768 26.624381-1.500167 9.755178 1.5104 20.010753 8.990768 27.491121l411.660734 411.660734c12.258185 12.258185 32.892131 12.432147 45.511543-0.187265 12.707416-12.707416 12.7023-32.995485 0.187265-45.51052z" p-id="2264"></path></svg>-->
<!--      返回-->
<!--    </section>-->
    <iframe id="web" :src="src" class="web" width="100%" :height="height"  frameborder="0"></iframe>
  </article>
  <div>
  </div>
</template>

<script setup>

import {getCurrentInstance, ref} from "vue";


const current = getCurrentInstance()
const query = current.appContext.route.query()

let url = `https://www.yuque.com/fatalfault/na3rhl/${query.slug}?view=doc_embed&from=blog&outline=0`
const src = ref(url)
const height = ref("")
const title = ref(decodeURI(query.title))
const loading = ref(true)

window.addEventListener("message",function (e) {
  if (e.origin === "https://www.yuque.com"){
    loading.value = false
    if (!e.data.payload){
      return
    }
    if (e.data.payload.height){
      height.value = e.data.payload.height
    }
  }
})

function goBack() {
  if (history.length > 1){
    history.back()
  }
  }

</script>

<style scoped>
.loading{
  width: 99vw;
  height: 98vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
article{
  width: 96vw;
  max-width: 900px;
  margin: auto;
}
.web{
  box-sizing: border-box;
  height: calc(100vh - 22px);
  max-height: calc(100vh - 22px);
  margin: 0;
}
.back{
  basic: 200px;
  width: 150px;
  display: flex;
  align-items: center;
}
</style>