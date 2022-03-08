<template>
  <div v-if="abt" class="container">
    <div class="row justify-content-center my-5">
      <h4 class="subtitle text-center" data-aos="fade-up" data-aos-duration="500">{{abt.subtitle}}</h4>
      <div class="row justify-content-center">
        <h1 class="text-centermy-2 title w-100" data-aos="fade-up" data-aos-duration="800" v-html="abt.title"></h1>
        <img width="40px" class="mt-4" src="../../assets/img/home/lifebreak.svg" alt="">
        <p class="text-center my-4 desc" data-aos="fade-up" data-aos-duration="1100" v-html="abt.description"></p>
        <div class="hero-button-box box-btn" data-aos="fade-up" data-aos-duration="1400">
          <a :href="abt.urlbtn" class="theme-btn">{{abt.textbtn}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  props: {
    abt: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped>
 .container {
   padding: 6em 0;
 }
 .row {
  margin: 0;
 }
  .box-btn {
    width: 100%;
    text-align: center;
    margin-top: 2em;
  }
  .title {
    color: #1e3954;
    font-size: 60px;
    font-weight: 500;
    letter-spacing: -3px;
    text-align: center;
  }
  .desc {
    color: #888f96;
    font-size: 20px;
    line-height: 1.8em;
    font-weight: 400;
    padding: 0 10em;
  }
  .subtitle {
    font-weight: 400;
    color:#888f96;
    font-size: 18px;
    margin-bottom: 1.5em;
    letter-spacing: 1.8px;
  }
  @media(max-width: 728px){
    .desc {
      padding: 0 4em;
    }
  }
  @media(max-width: 500px){
    .desc {
      padding: 0 2em;
    }
  }
</style>
