<template>
  <div class="container">
    <div id="top">
      <a href="https://www.yuque.com/fatalfault/na3rhl" target="_blank">去语雀阅读</a>
    </div>
    <div id="center">
      <div style="margin-top: 66px"></div>
    </div>
    <div>
      <p><a>#全栈工程师</a> <a>#人工智能</a> <a>#程序</a> <a href="">#计算机</a><a href="">#杂记</a></p>
    </div>
  </div>

</template>

<script>
export default {
  name: "Aside"
}
</script>

<style scoped>
  a{
    display: flex;
  }
  .container{
    height: 100%;
    padding-top: 30px;
  }
  @media screen and (max-width: 500px){
    .container{
      display: none;
    }
  }
</style>