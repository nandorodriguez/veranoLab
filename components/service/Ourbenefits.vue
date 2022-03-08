<template>
  <div v-if="ourbenefit" class="container">
    <div class="row mx-0 my-5">
      <div data-aos="fade-right" data-aos-duration="2000" class="col-xs-12 col-sm-12 col-md-6 p-xs-2">
        <h4 class="subtitle mb-1">{{ourbenefit.subtitle}}</h4>
        <h1 class="title mb-3">{{ourbenefit.title}}</h1>
        <p class="desc mb-3">{{ourbenefit.desc}}</p>
        <ul class="mb-5">
          <li :key="idx" v-for="(l ,idx) in ourbenefit.list" :class="`list py-2 ${ idx == 0 ?'linetop linebottom': 'linebottom' }`">
            <span>{{idx+1}}.</span>{{l}}
          </li>
        </ul>
        <div class="hero-button-box box-btn">
          <a :href="ourbenefit.urlbtn" data-aos="fade-left" data-aos-duration="3000" class="theme-btn">{{ourbenefit.textbtn}}</a>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="2000" class="col-xs-12 col-sm-12 col-md-6 p-xs-2 p-md-5">
        <b-img :src="ourbenefit.image" fluid alt="image"></b-img>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ourbenefits',
  props: {
    ourbenefit: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped>
  .mgs{
    margin-top: 150px;
    margin-bottom: 150px;
  }
  .box-btn{
    height: 80px;
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
  .title {
    font-size: 64px;
    font-weight: 500;
    line-height: 64px;
    letter-spacing: -3.2px;
    color: #1e3954;
    font-family: "Mukta",Sans-serif;
    word-wrap: break-word;
  }

  .desc {
    color: #888f96;
    font-size: 20px;
    font-family: "Mukta",Sans-serif;
    font-weight: 400;
    line-height: 1.667;
  }
  .list {
    font-size: 18px;
    color: #888f96;
  }
  .linetop {
    border-top: 1px solid #ebebeb ;
  }

  .linebottom {
    border-bottom: 1px solid #ebebeb ;
  }

  .list span {
    color: #55bbaf;
    padding-right: 10px;
    font-weight: 600;
    font-size: 20px;
  }
  @media(max-width: 1024px){
    .title {
      font-size: 40px;
      line-height: 40px;
      letter-spacing: -1px;
    }
  }
</style>
