<template>
  <div>
    <h2>详情页面</h2>
    <!-- <p>{{$route.params.iad}}</p> -->
    <p>{{user}}</p>
    <p>{{description}}</p>
  </div>
</template>

<script>
export default {
  // middleware: 'auth'

  async asyncData({ isStatic, params, payload }) {
      return await {
        user: params.iad,
        description: payload.description
      };
  }
};
</script>

<style>
</style>
