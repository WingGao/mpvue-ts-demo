<template>
  <div class="counter-warp">
    <p>Vuex counter：{{counter}}</p>
    <a :href="AppUrls.COUNTER" class="home">去往计算</a>
  </div>
</template>

<script src="./index.ts">
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

</style>
