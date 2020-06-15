<template>
  <div v-col v-row-flow="1" layout="start center" class="development-flex mv5">
    <div
      v-row
      v-col-flow:200:500="0"
      layout="between center"
      wrap="between"
      class="example-container mt10"
    >
      <div v-row-flow:80:80="0" class="item m5"></div>
      <div v-row-flow:50:50="0" class="item m5"></div>
      <div
        v-row
        layout="center center"
        v-row-flow:50::30-80:40-60="1"
        v-self:stretch
        class="item m5"
      >center</div>
      <div v-row-flow:50:50="0" v-self:end class="item m5"></div>
      <div v-row-flow:50:50="0" v-self:start class="item m5"></div>
      <div v-row-flow:50="0" v-self:stretch class="item m5"></div>
      <div v-row-flow:50:50="0" v-self:center class="item m5"></div>
      <div v-row-flow:50:50="0" class="item m5"></div>
      <div v-row-flow:50:50="0" class="item m5"></div>
      <div v-row-flow:50:50="0" class="item m5"></div>
      <div v-row-flow:50:50="0" class="item m5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.example-container {
  background-color: aqua;
}
.item {
  background: cornflowerblue;
}
</style>
