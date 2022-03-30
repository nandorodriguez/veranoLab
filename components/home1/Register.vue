<template>
<client-only>
  <main>
      <hooper :itemsToShow="1" :centerMode="true" :progress="true" :autoPlay="true" :playSpeed="5000" :hoverPause="true" :infiniteScroll="true" :wheelControl="false" :transition="300">
        <slide :key="idx" v-for="(img, idx) of header.imagenesSecundarias" class="course-slider" :style="`backgroundImage: url(${img.url})`" >

        </slide>
      </hooper>
      <div class="row py-5 justify-content-center m-0 course-main">
        <div class="col-md-8">
          <h1 class="text-uppercase course-title">{{header.titulo}}</h1>
        </div>
      </div>
      <div class="row m-0 py-3 justify-content-center align-content-center align-items-center course-secundary">
          <div class="text-md-right text-sm-center mx-2">
            <h2 class="course-promocion">{{header.tituloPromicion}} /</h2>
            <span class="course-promocion"> {{header.descripcionPromocion}}</span>
          </div>
          <div class="mx-2">
            <div class="course-porcentaje">
              <h2>{{header.porcentajeCupo}}%</h2>
              <p>Descuento</p>
            </div>
          </div>
        </div>
  </main>
</client-only>
</template>

<script>
  import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper';
  import 'hooper/dist/hooper.css';

  export default {
    props: ['header'],
    components:{
      Hooper,
      Slide,
      HooperNavigation
    }
  };
</script>

<style lang="scss"  scoped>
.hooper {
  height: 100%;
  padding: 0;
}
.course {
  &-slider {
    width: 100% !important;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    height: 70vh;
  }

  &-main {
    background-color: #F6A838;
  }

  &-secundary {
    background-color: #25BC8E;
  }

  &-title {
    font-family: 'MyriadPro-Semibold', sans-serif;
    font-size: 3rem;
    color: #fff;
    text-align: center;
  }
  &-promocion {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: flex-end;
    font-family: 'MyriadPro-Semibold', sans-serif;
    font-size: 1.3rem;
    color: #fff;
    text-align: center;
    span:nth-child(1) {
      display: block;
      margin-left: 3px;
      font-weight: 600;
    }
  }

  &-porcentaje {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    width:150px;
    margin: 1rem auto;
    padding:1.2rem .2rem;
    background-color: #F6A838;
    border-radius: 15px;
      h2 {
        font-family: 'MyriadPro-Semibold', sans-serif;
        font-size: 2.5rem;
        color:#fff;
      }
      p {
        font-family: 'MyriadPro-Semibold', sans-serif;
        font-size: 1rem;
        color:#fff;
      }
    }
}



</style>