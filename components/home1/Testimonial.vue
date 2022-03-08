<template>
<div>
  <div v-if="opinions" class="container">
    <div class="row cont-desc ">
      <div class="col-md-6 col-sm-12 col-xs-12">
        <h4 class="subtitle">{{opinions.subtitle}}</h4>
        <h1 v-html="opinions.title"></h1>
      </div>
      <div class="col-md-6 col-sm-12 col-xs-12">
        <p v-html="opinions.desc"></p>
      </div>
    </div>
    <div class="row ">
      <div :key="idx" v-for="(item, idx) in opinions.boxs" class="col-md-4 col-sm-6 col-xs-12 my-3 type">
        <img :src="item.image" class="img-fluid" alt="box">
        <h5 class="title">{{item.title}}</h5>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'Testimonial',
  props: {
    opinions: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped>
  .bg-img {
    background-repeat: no-repeat;
    background-size: 50% 100%;
    background-position: right;
    overflow: hidden;
    z-index: 1;
  }
  h1 {
    color: #1e3954;
    font-size: 60px;
    font-weight: 500;
    letter-spacing: -3px;
  }
  .subtitle {
    font-family: "Mukta",Sans-serif;
    color: #888f96;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 64px;
    letter-spacing: 1.6px;
  }
  .container {
    margin-bottom: 10rem;
  }
  .cont-desc {
    margin: 7rem 0 2rem 0;
  }
  .type {
    position: relative;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
  }
  .title {
    position: absolute;
    top: 50%;
    text-align: center;
    z-index: 10;
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    display: block;
    white-space: initial;
    padding: 0.5rem 1.5rem;
    background-color: #428a70;
    border-radius: 2rem;
  }
</style>