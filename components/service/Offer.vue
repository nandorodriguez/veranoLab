<template>
  <div v-if="offeri" class="container-fluid">
    <div class="container mb-5 pb-5">
      <div class="row mg-bottom">
        <div class="col-xs-12 col-sm-12 col-md-6">
          <h4 class="subtitle mb-1">{{offeri.subtitle}}</h4>
          <h1 class="title mb-3">{{offeri.title}}</h1>
        </div>
        <div class="col col-xs-12 col-sm-12 col-md-6">
          <p class="desc">{{offeri.desc}}</p>
        </div>
      </div>
    </div>
    <div class="container my-5 pb-5">
      <div class="row mx-0">
        <div class="col-xs-12 col-sm-12 col-md-6">
          <div :key="idx" v-for="(i, idx) in offeri.gallery"  :class="`row ${ idx< Math.round(offeri.gallery.length/2) ? '': 'hide' }`">
            <div class="row mx-0 img-hover-zoom">
              <b-img :src="i.image" fluid alt="image"></b-img>
            </div>
            <div class="row mx-0 py-5 px-1 bg-box justify-content-center flex-column w-100">
              <h1 class="gall-title text-center">{{i.title}}</h1>
              <p class="gall-desc text-center">{{i.desc}}</p>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 mg-top">
          <div :key="idx" v-for="(i, idx) in offeri.gallery"  :class="`row ${ idx >= Math.round(offeri.gallery.length/2) ? '': 'hide' }`">
            <div class="row mx-0 img-hover-zoom">
              <b-img :src="i.image" fluid alt="image"></b-img>
            </div>
            <div class="row mx-0 py-5 px-1 bg-box justify-content-center flex-column w-100">
              <h1 class="gall-title text-center">{{i.title}}</h1>
              <p class="gall-desc text-center">{{i.desc}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Offer',
  props: {
    offeri: {
      type: Object,
      required: true,
    }
  }
}
</script>
<style scoped>
  .hide {
    display: none;
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

  .mg-top {
    margin-top: 9.5rem;
  }

  .mg-bottom {
    margin-top: 6rem !important;
  }

  .bg-box {
    background-color: #55bbaf
  }

  .gall-title {
    font-family: "Mukta",Sans-serif;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: -1.1px;
    color: #fff;
    white-space: initial;
  }

  .gall-desc {
    font-family: "Mukta",Sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.88em;
    letter-spacing: -.8px;
    color: #fff;
    white-space: initial;
  }

  .img-hover-zoom {
    overflow: hidden; /* [1.2] Hide the overflowing of child elements */
  }

  .img-hover-zoom img {
    transition: transform 2s, filter 1.5s ease-in-out;
    transform-origin: center center;
    filter: brightness(100%);
  }

  .img-hover-zoom:hover img {
    filter: brightness(50%);
    transform: scale(1.3);
  }

  @media(max-width: 768px){
    .title {
      font-size: 40px;
      line-height: 40px;
      letter-spacing: -1px;
    }

    .mg-top {
      margin-top: 0rem;
    }
  }
</style>