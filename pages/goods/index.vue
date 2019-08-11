<template>
  <div>
    <h2>商品列表</h2>
    <ul>
      <li v-for="(item,index) of list" :key="item.title">
        <a :href="'http://localhost:9096/detail/'+item.bid" >
          <span>{{item.title}}</span>
        </nuxt-link>
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
    // process.env.SERVER = 'ok';
    console.log("asyncData");
    console.log(context);
    console.log(process);
    // if (process.env.SERVER === 'ok') {
    return await context.app.$axios
      .get("http://localhost:9096/zllublogAdmin/article/get.article.php")
      .then(res => {
        // process.env.SERVER = "no";
        //  console.log(process.env.SERVER);
        context.datas = res.data.list;
        return {
          list: res.data.list
        };
      });
    // }
    // return await {
    //   list: context.reqData
    // };
  },
  mounted() {
    let _this = this;
    // this.$axios.get("api/zllublogAdmin/article/get.article.php").then(res => {
    //   _this.list = res.data.list;
    // });
  }
};
</script>

<style>
</style>
