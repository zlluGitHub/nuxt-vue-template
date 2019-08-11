<template>
  <div>
    <h2>商品列表</h2>
    <ul>
      <li v-for="(item,index) of list" :key="item.title">
        <a v-if="item.isStatic" :href="'http://localhost:9096/detail/'+item.bid">
          <span>{{item.title}}</span>
        </a>
        <nuxt-link :to="'/detail/'+item.bid">
           <span>{{item.title}}</span>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    list: []
  }),
  middleware: "auth",
  async asyncData(context) {
    console.log(context);
    console.log(process);
    console.log(process.env.baseUrl)
    return await context.app.$axios
      .get(process.env.baseUrl + "/zllublogAdmin/article/get.article.php")
      .then(res => {
        let data = res.data.list;
        data.forEach(ele => {
          ele.isStatic = context.isStatic
        });
        console.log(data);
        
        return {
          list: data
        };
      });
  },
  mounted() {}
};
</script>

<style>
</style>
