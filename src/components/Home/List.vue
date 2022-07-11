<template>
  <div v-for="item in list">
    <div>
      {{item.title}}
    </div>
    <code>{{item}}</code>
  </div>
</template>

<script setup>
import {getArticles} from "@/request";
import {onMounted, reactive, ref} from "vue";

let list = ref([])

async function loadList() {
  let r = await getArticles()
  console.log(r.data)
  list.value = r.data.data
  console.log(list)
}

loadList()
</script>

<style scoped>

</style>