<template>
  <div>
    <!-- Header Start -->
    <header v-if="data" class="page-banner-area" id="home" :style="`background-image: url(${data.image})`">
      <div class="section-overlay d-flex">
        <div class="container">
          <div class="header-caption position-relative wow fadeInLeft d-flex">
            <h1 class="header-caption-heading text-capitalize">{{data.title}}</h1>

          </div>
        </div>
      </div>
    </header>
    <!-- Header End -->
  </div>
</template>
<script>
export default {
  name: "Banner",
  props: {
    data: {
        type: Object,
        required: true,
    }
  },
  data() {
    return {
      items: [
        {
          text: "Home",
          to: "/"
        },
        {
          text: this.title,
          active: true
        }
      ]
    };
  }
};
</script>
