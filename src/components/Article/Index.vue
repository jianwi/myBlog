<template>
  <h1>{{title}}</h1>
  <div v-if="loading">
    加载中
  </div>
  <iframe :style="loading?'opacity:0':''" :src="src" width="100%" :height="height" frameborder="0"></iframe>
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
  if (e.origin === "https://www.yuque.com" && e.data.type === "doc_ready"){
    console.log(e.data.payload)
    height.value = e.data.payload.height
    loading.value = false
  }
})


</script>

<style scoped>

</style>