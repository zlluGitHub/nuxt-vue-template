<template>
  <div>
    <h2>商品列表</h2>
    <ul>
      <li v-for="(item,index) of list" :key="item.name">
        <nuxt-link :to="'/detail/'+item.id"> <span>{{item.name}}</span></nuxt-link>
       
        <span>{{item.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data:()=>({
    list:[
      {id:'001',name:'手机',price:1000},
      {id:'002',name:'电脑',price:2000},
      {id:'003',name:'空调',price:3000}
    ]
  })
};
</script>

<style>

</style>
