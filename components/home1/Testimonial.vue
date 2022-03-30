<template>
<client-only>
<div class="testimonial">
  <hooper :itemsToShow="1" :centerMode="true" pagination="no" :autoplay ="true" :infiniteScroll="true" :playSpeed="5000" :wheelControl="false">
    <slide v-if="data" :key="idx" v-for="(testimonio, idx) in data" class="testimonial-slider">
      <div class="d-flex justify-content-center align-items-center slign-content-center flex-column">
        <img class="mb-4" :src="testimonio.imagenPersona.url" alt="testimonio.imagenPersona.fileName">
        <div class="desc">“{{testimonio.descripcion}}”</div>
        <div class="d-flex justify-content-center flex-column text-center mt-3">
          <big>{{testimonio.nombrePersona}}</big>
          <small>{{testimonio.personaInfo}}</small>
        </div>
      </div>
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
  </hooper>
</div>
</client-only>
</template>
<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
import 'hooper/dist/hooper.css';
export default {
  name: 'Testimonial',
  props:['data'],
  components:{
    Hooper,
    Slide,
    HooperNavigation
  }
}
</script>
<style scoped>
.hooper {
  height: 100%;
}
.testimonial {
  width: 100%;
  height: 500px;
  background-color: #333333;
}
.testimonial-slider .desc {
  color: #fff;
  font-family: 16px;
  font-size: 'Roboto-Black';
  text-align: center;
  min-width: 12rem;
  width: 35rem;
}
.testimonial-slider img {
  margin:  1rem auto;
  width: 100px;
  height: 100px;
  border-radius: 60px;
  border: 1px solid #fff;
}
.testimonial-slider big {
  color: #0D9973;
  font-size: 16px;
}
.testimonial-slider small {
  color: #0D9973;
  font-size: 14px;
}

@media(max-width: 500px){
  .testimonial-slider .desc {
    color: #fff;
    font-family: 16px;
    font-size: 'Roboto-Black';
    text-align: center;
    min-width: 12rem;
    width: 90%;
  }
}

</style>