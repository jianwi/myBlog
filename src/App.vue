<template>
  <component :is="currentComponent"></component>
</template>

<script setup>
import {ref, onBeforeMount} from "vue";
import Index from "@/components/Home/Index";
import Article from "@/components/Article/Index"

const currentComponent = ref(Index)

const routes = {
  '/': Index,
  'article': Article,
}


window.addEventListener("hashchange",function (res) {
  checkRoute()
})

function checkRoute() {
  let path = window.location.hash.slice(1)
  console.log(path)
  const route = path.split("?")[0]
  console.log("route",route)
  currentComponent.value = routes[route] || Index
}

onBeforeMount(()=>{
  checkRoute()
})

</script>

<style>
#app {
  margin: 0;
}
a{
  text-decoration: none;
  color: #52616a;
  padding: 5px;
  transition: .5s all;
}
a:hover{
  background: #f0f5f9;
}
</style>
