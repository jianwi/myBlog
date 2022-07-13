<template>
  <div>
    <header>
      <div>
        <h1>小杜同学的博客</h1>
        <p>学习新思想，争做新青年！</p>
      </div>

    </header>
    <main class="main">
      <div class="list">
        <List></List>
      </div>
      <div class="aside">
        <Aside></Aside>
      </div>
    </main>
  </div>

</template>

<script setup>
 import Aside from "@/components/Home/Aside";
 import List from "@/components/Home/List";



</script>

<style scoped>
.main{
  display: flex;
}
.list{
  flex-basis: 100px;
  flex-grow: 2;
  flex-shrink: 0;
}
.aside{
  flex: 0;
  flex-basis: 180px;
}
</style>