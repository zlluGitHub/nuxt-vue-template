<template>
  <div>
    <nuxt-link to="/">首页</nuxt-link>
    <nuxt-link to="/home">页面1</nuxt-link>
    <nuxt-link to="/goods">商品列表</nuxt-link>
    <!-- <a href="http://localhost:9096/goods">商品列表</a> -->
    <nuxt-link to="/orders">页面2</nuxt-link>
    <nuxt-link to="/users">用户</nuxt-link>
    <nuxt />
  </div>
</template>

<style lang="scss" scoped>
div{
  padding: 20px;
  a{
    margin-right: 20px;
  }
}
</style>

