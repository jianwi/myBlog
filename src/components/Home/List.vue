<template>
  <div v-for="item in list">
    <div style="margin: 30px" @click="toArticle" :data-slug="item.slug" :data-title="item.title">
      {{item.title}}
      {{item.description}}
      {{item.published_at}}
      字数： {{item.word_count}}
      阅读量: {{item.read_count}}
      点赞量：{{item.like_count}}
    </div>
  </div>
</template>

<script setup>
import {getArticles} from "@/request";
import {onMounted, reactive, ref, getCurrentInstance} from "vue";

const app = getCurrentInstance().appContext

let list = ref([])

async function loadList() {
  let r = await getArticles()
  console.log(r.data)
  list.value = r.data.data
  console.log(list)
}

function toArticle(e){
  console.log(e.target.dataset.slug)
  const {slug,title} = e.target.dataset
  app.route.to("article", {
    slug,
    title
  })
}

loadList()
</script>

<style scoped>

</style>