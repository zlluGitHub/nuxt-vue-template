<template>
  <div>
    <h2>商品列表</h2>
    <ul>
      <li v-for="(item,index) of list" :key="item.title">
        <a :href="'http://localhost:9096/detail/'+item.bid">
          <span>{{item.title}}</span>
        </a>
        <span>{{item.price}}</span>
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
        // context.datas = res.data.list;
        return {
          list: res.data.list
        };
      });
  },
  mounted() {}
};
</script>

<style>
</style>
