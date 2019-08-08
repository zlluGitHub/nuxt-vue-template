<template>
  <div>
    <h1>{{name}}</h1>
    <ul>
      <li v-for="item of dataList" :key="item.title">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data: () => ({
    name: "文章列表"
    // dataList:[]
  }),
  asyncData({ app }) {
    // //并发请求 async
    // let [listA, listB] = await  app.$axios.all([
    //           app.$axios.get("api/zllublogAdmin/article/get.article.php"),
    //           app.$axios.get("api/zllublogAdmin/article/get.article.php")
    //      ])
    //      console.log("listA",listA)
    //      console.log("listB",listB)
    //    return {
    //     listA:listA,
    //     listB:listB
    //    }
    return app.$axios
      .get("api/zllublogAdmin/article/get.article.php")
      .then(res => {
        return { dataList: res.data.list };
      });
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 500);
      console.log(this.$store);
      console.log(this.name);
      //   console.log(this.$axios);

      this.open(true);
    });
  },
  methods: {
    open(nodesc) {
      this.$Notice.open({
        title: "这是通知标题",
        desc: nodesc
          ? ""
          : "这里是通知描述这里,是通知描述这里是通知描述这里,是通知描述这里,是通知描述这里是通知描述这里是通知描述"
      });
    }
  }
};
</script>

<style>
</style>
