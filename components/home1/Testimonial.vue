<template>
<client-only>
<div class="testimonial">
  <hooper :itemsToShow="1" :centerMode="true" pagination="no" :autoplay ="true" :infiniteScroll="true" :playSpeed="5000" :wheelControl="false">>
    <slide v-if="testimonials" key="idx" v-for="(testimonio, idx) in testimonials" class="testimonial-slider">
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
import { gql } from "nuxt-graphql-request";
export default {
  name: 'Testimonial',
  components:{
    Hooper, 
    Slide,
    HooperNavigation
  },
  data() {
    return {
      testimonials: {}
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData"
  },
  methods: {
    async fetchData() {
      const query = gql`
        query Testimonios {
          testimonio {
            imagenPersona {
              url
              fileName
            }
            descripcion
            nombrePersona
            personaInfo
          }
        }
      `;

      try {
        const data = await this.$graphql.default.request(query);
        this.testimonials = data.testimonio;
        // console.log(JSON.stringify(data.testimonio, undefined, 2));
      } catch (e) {
        console.error(JSON.stringify(e, undefined, 2));
      }
    }
  },
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