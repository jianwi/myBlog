<template>
  <header></header>
  <h1 class="title">{{title}}</h1>
  <article>
    <div v-if="loading">
      加载中
    </div>
    <iframe :style="loading?'opacity:0':'overflow:none;'" :src="src" width="100%" :height="height" frameborder="0"></iframe>
  </article>
</template>

<script setup>

import {getCurrentInstance, ref} from "vue";


const current = getCurrentInstance()
const query = current.appContext.route.query()

let url = `https://www.yuque.com/fatalfault/na3rhl/${query.slug}?view=doc_embed&from=blog&outline=1`
const src = ref(url)
const height = ref("")
const title = ref(decodeURI(query.title))
const loading = ref(true)

window.addEventListener("message",function (e) {
  if (e.origin === "https://www.yuque.com"){
    if (!e.data.payload){
      return
    }
    if (e.data.payload.height){
      height.value = e.data.payload.height
      loading.value = false
    }
  }
})


</script>

<style scoped>
article{
  width: 96vw;
  max-width: 900px;
  margin: auto;
}
</style>