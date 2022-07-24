<template>
  <div v-for="item in list" class="item">
    <div>
      <h3 class="title"
          @click="toArticle" :data-slug="item.slug" :data-title="item.title">
        {{item.title}}
      </h3>
      <div class="info">
        <span style="margin-right: 15px">{{Math.ceil(item.word_count/75)}}分钟可读完</span>
        <span>作于: {{dayjs(item.created_at).format("YYYY-MM-DD")}}</span>
      </div>
      <p class="desc">{{item.description || "点进去看看"}} </p>
    </div>


  </div>
</template>

<script setup>
import {getArticles} from "@/request";
import {onMounted, reactive, ref, getCurrentInstance} from "vue";
import dayjs from "dayjs"

const app = getCurrentInstance().appContext

let list = ref([])

async function loadList() {
  let r = await getArticles()
  console.log(r.data)
  list.value = r.data.data.map(item=>{
    item.width = "100%"
    item.height = 300
    return item
  })

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
  color: #1e2022;
  padding: 5px;
  margin-bottom: 0;
}
.title:hover{
  background: #f0f5f9;
  color: #333;
  transition: .5s all;
}
.info{
  margin-top: 5px;
  font-size: .8rem;
  color: #666;
}
.desc,.info{
  padding: 0 5px;
}
.desc{
  color: #52616a;
  font-size: .9rem;
  min-width: 350px;
  max-width: 600px;
  line-height: 1.6;
  margin-top: 15px;
}
.item{
  margin: 15px;
}
.item+.item{
  margin-top: 50px;
}

</style>