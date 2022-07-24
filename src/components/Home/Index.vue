<template>
  <div>
    <header>
      <div>
        <h1>简微的博客</h1>
        <p>简单且微不足道，不足为外人道也！</p>
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
    <footer class="footer">
      myBlog@2022
      <a href="http://beian.miit.gov.cn/">陕ICP备17019361号-2</a>
    </footer>
  </div>

</template>

<script setup>
 import Aside from "@/components/Home/Aside";
 import List from "@/components/Home/List";



</script>

<style scoped>
header{
  text-align: center;
}
.main{
  display: flex;
  justify-content: space-around;
}
.list{
  min-width: 380px;
}
.aside{
  flex: 0;
  flex-basis: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer{
  text-align: center;
  padding: 30px;
  font-size: .9rem;
  line-height: 1.5;
}
</style>