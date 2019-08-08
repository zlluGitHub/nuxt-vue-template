<template>
  <div>
    <h2>详情页面</h2>
    <p>{{$route.params.iad}}</p>
  </div>
</template>

<script>
export default {
      middleware: 'auth'
};
</script>

<style>

</style>
