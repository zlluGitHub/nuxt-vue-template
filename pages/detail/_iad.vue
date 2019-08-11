<template>
  <div>
    <h2>详情页面</h2>
    <!-- <p>{{$route.params.iad}}</p> -->
    <p>{{id}}</p>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  async asyncData({ isStatic, params, payload }) {
    if (isStatic) {
      return await {
        user: params.iad,
        description: payload.description
      };
    } else {
      return await {
        id: params.iad,
        description: "asdas"
      };
    }
  }
};
</script>

<style>
</style>
