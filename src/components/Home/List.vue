<template>
  <div v-for="item in list">
    <div style="margin: 30px">
      <h1 class="title" @click="toArticle" :data-slug="item.slug" :data-title="item.title" :data-desc="item.description">
        {{item.title}}
      </h1>
      <p class="desc">{{item.published_at}} </p>
      <p>
        {{item.description}}
      </p>
       {{Math.ceil(item.word_count/2/60)}} 分钟
      阅读量: {{item.read_count}}
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
  console.log(e)
  console.log(e.currentTarget)
  console.log(e.currentTarget.dataset.slug)
  const {slug,title,desc} = e.currentTarget.dataset
  console.log(desc)
  if (/^\s*###网页html###/.test(desc)){
    console.log("去渲染")
    window.open("/api/page?slug="+slug,"_self")
    return
  }
  app.route.to("article", {
    slug,
    title,
  })
}

loadList()
</script>

<style scoped>
.title{
  color: #5676ff;
}
.title:hover{
  text-decoration: #5676ff solid;
  color: #333;
}
.desc{
  color: #666;
  font-size: .8rem;
}
</style>