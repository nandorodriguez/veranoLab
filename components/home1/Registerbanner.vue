<template>
  <main class="row register-main mt-md-5">
    <section class="container-main-left col-lg-4 col-md-5 col-sm-8 mr-lg-5 ">
      <div class="section-learn">
        <span>{{body.subtituloContenido}}</span>
        <h1 class="color-dark">{{body.tituloContenido}}</h1>
        <img src="@/assets/img/logobanner.png" alt="mini-logo" />
        <p>
          {{body.descripcionContenido}}
        </p>
      </div>
      <div class="question-item">
        <div v-if="body.contenidoGeneral" v-html="body.contenidoGeneral"></div>
      </div>
    </section>
    <section class="container-main-right col-lg-4 col-md-4 col-sm-8">
      <img v-if="body.imagenPromocional" :src="body.imagenPromocional.url" alt="" />
      <div class="main-text-container w-100 text-center my-4">
        <h2>Inscríbete al programa</h2>
        <h2>¡Ahora mismo!</h2>
        <p>Disponible por tiempo limitado</p>
      </div>
      <div class="content-number">
        <div class="data-number">
          <span>{{ days }}</span>
          <span>Days</span>
        </div>
        <div class="data-number">
          <span>{{ hours }}</span>
          <span>Hours</span>
        </div>
        <div class="data-number">
          <span>{{ minutes }}</span>
          <span>Minutes</span>
        </div>
        <div class="data-number">
          <span>{{ seconds }}</span>
          <span>seconds</span>
        </div>
      </div>
      <div class="main-text-register">
        <div class="banner-yellow">
          <a v-if="body.urlLink" :href="body.urlLink">Inscríbete al programa aquí </a>
        </div>
        <div>
          <p>Cupos vendidos hasta hoy</p>
        </div>
        <div v-if="body.porcentajeCupo" class="loading-bar"> <div class="load" :style="`width:${body.porcentajeCupo}%`"></div><span>{{body.porcentajeCupo}} %</span></div>
        <div v-if="body.cuposDisponible" class="final-title"><h2>{{body.cuposDisponible}} cupos disponibles</h2></div>
          <p>Si tienes preguntas haz <a href="#">clic aquí</a></p>
      </div>
    </section>
  </main>
</template>

<script>
import moment from "moment";
export default {
  props: {
    body: Array
  },
  data() {
    return {
      actualTime: moment().format("X"),
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      porcentaje:50
    };
  },
  computed:{
    getDate(){
      return this.body.tiempoPromocional;
    }
  },
  methods: {
    addOneSecondToActualTimeEverySecond() {
      var component = this;
      component.actualTime = moment().format("X");
      setTimeout(function () {
        component.addOneSecondToActualTimeEverySecond();
      }, 1000);
    },
    getDiffInSeconds() {
      
      return moment("2022-03-5 19:00:00").format("X") - this.actualTime;
    },
    compute() {
      document.cookie = `limit=${this.getDate}`;
      this.dateLimit = moment
      let  duration = moment.duration(this.getDiffInSeconds(), "seconds");
      this.years = duration.years() > 0 ? duration.years() : 0;
      this.months = duration.months() > 0 ? duration.months() : 0;
      this.days = duration.days() > 0 ? duration.days() : 0;
      this.hours = duration.hours() > 0 ? duration.hours() : 0;
      this.minutes = duration.minutes() > 0 ? duration.minutes() : 0;
      this.seconds = duration.seconds() > 0 ? duration.seconds() : 0;
    },
  },
  created() {
    this.compute();
    this.addOneSecondToActualTimeEverySecond();
  },
  watch: {
    actualTime(val, oldVal) {
      this.compute();
    },
  },
  mounted() {
    console.log('esta es la data: ', this.getDate);
  }
};
</script>

<style>
.register-main {
  margin: 0 auto;
  display: flex;
  justify-content: center;

}

.register-main p{
  color:#949598;
  font-family: Roboto-Condensed,roboto;
  font-size: 16px;
  font-weight:unset;
  }

.section-learn span{
  color:#000000;
  font-family: Roboto-Condensed,roboto;
  font-size: 14px;
}
.section-learn h1{
  color:#253852;
  font-family: Roboto-Medium,roboto;
}

.container-main-left .section-learn img {
  width: 40px;
  padding: 10px 0;
}
.question-item {
  text-align: justify;
}
.question-item h2{
  color:#F6A838;
  font-family:Roboto-Condensed,roboto ;
  font-size: 2.49em;
}
.question-item h2 {
  border-top: 1.5px solid #282623;
  border-bottom: 1.5px solid #282623;
  padding: 15px 0;
  color: F6A838;
  margin: 20px 0;
  font-size:20px ;
}

.main-text-container h2:nth-child(1){
  color:#253852;
}
.main-text-container h2:nth-child(2){
  color:#CA3381;
}
.main-text-container p{
  color:#253852;
  font-weight: 500;
  font-style: italic;
}
.question ul li {
  list-style: circle;
  margin: 0 0 0 15px;
  color:#949598;
  font-family:Roboto-Condensed,roboto;
  font-size: 16px;
}
.question h2 {
  border-top: 1.5px solid #282623;
  border-bottom: 1.5px solid #282623;
  color: #F6A838;
  font-family: Roboto-Condensed,roboto;
  text-transform: uppercase;
}
.question h3 {
  color: #F6A838 !important;
  font-family: Roboto-Condensed,roboto;
  font-size: 20px;
  margin: 20px 0;
  text-transform: uppercase;
}
.question h4 {
  color: #F6A838 !important;
  font-family: Roboto-Condensed,roboto;
  font-size: 18px;
  margin: 20px 0;
  text-transform: uppercase;
}

/* container right*/

.container-main-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.content-number {
  display: flex;
  justify-content: center;
  padding: 8vw 15vw;
  width: 100%;
  background-color: #333333;
  border-radius: 10px;
}

.data-number {
  padding: 0 3vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 10px;
}
.data-number span:nth-child(1) {
  display: block;
  font-family: "Montserrat Bold", sans-serif;
  font-size: 8.6vw;
  color: #ffbc00;

}

.data-number span:nth-child(2) {
  display: block;
  font-family: "Montserrat Regular", sans-serif;
  font-size: 3.09vw;
  text-align: center;
}
.container-main-right img{
  width: 100%;
}
.main-text-register{
  width: 100%;
}
.main-text-register p{
  color:#253852;
  font-family: Roboto-Italic,Roboto;
  font-size: 1.6em;
  text-align: center;
  margin-top: 30px;
  font-style: italic;
}
.container-main-right .banner-yellow{
  background-color: #F6A838;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
  margin-top: 40px;
  width: 100%;
}
.container-main-right .banner-yellow a{
  text-align: center;
  font-size: 20px;
}
.loading-bar {
width: 100%;
height: 40px;
background-color:#DEDFE0;
margin-top: 20px;
display: flex;

}
.loading-bar .load{
  background-color:#25BC8E;
}
.loading-bar  span{
  color:#000000;
  padding-left:5px ;
  font-style: italic;
  font-weight: bold;
  padding-top: 10px;

}

.final-title{
  width: 100%;
  height: 60px;
  border-top: 2px  solid #25BC8E ;
  border-bottom:2px  solid #25BC8E ;
  margin-top:40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.final-title h2{
  font-family: Roboto-Medium,Roboto;
  font-size:20px;
  color:#25BC8E ;
}
.main-text-register p{
  color:#25BC8E ;
  font-style: italic;
}
.main-text-register p a{
  color:#25BC8E ;
  font-weight: bold;
}
@media (min-width: 768px){
.data-number span:nth-child(1) {
  font-size: 3.6vw;
}
.content-number {
  padding: 2vw 15vw;
}
.data-number span:nth-child(2) {
    font-size: 1.09vw;

}

}
</style>