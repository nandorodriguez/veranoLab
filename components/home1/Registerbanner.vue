<template>
  <main class="row register-main mt-md-5">
    <section class="container-main-left col-lg-4 col-md-5 col-sm-8 mr-lg-5 ">
      <div class="section-learn">
        <span>VAMOS A APRENDER</span>
        <h1 class="color-dark">¡Aprende a empacar regalos!</h1>
        <img src="@/assets/img/logobanner.png" alt="mini-logo" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nisi
          vero molestias natus non quos labore nihil quia repellendus aut atque
          amet cumque saepe voluptatem, laudantium velit obcaecati. Ut, dolore!
        </p>
      </div>
      <div class="question-item">
        <div class="question-one">
          <h2>1.¿Qué vamos a lograr?</h2>

          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              eos sit odit, at repudiandae unde perspiciatis inventore dolorem
              cumque, distinctio amet esse reiciendis neque libero, modi illo
              quidem veniam vitae.
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a
              assumenda recusandae quod, sint voluptates quis laborum vero animi
              laboriosam nihil nulla, facilis facere aut totam? Modi tempore
              ratione eius?
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a
              assumenda recusandae quod, sint voluptates quis laborum vero animi
              laboriosam nihil nulla, facilis facere aut totam? Modi tempore
              ratione eius?
            </li>
          </ul>
        </div>
        <div class="question-two">
          <h2>2.¿Como lo lograremos?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            exercitationem optio repellat autem ut amet, quidem quisquam
            cupiditate officia tenetur mollitia reprehenderit placeat illo, quos
            minima maxime laborum veritatis quae!
          </p>
        </div>
        <div class="question-three">
          <h2>3.¿Como voy a acceder?</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            similique animi recusandae perspiciatis magnam harum placeat ut quae
            eaque explicabo. Reiciendis dignissimos excepturi asperiores impedit
            nihil ipsam iusto provident consequatur?
          </p>
        </div>
      </div>
    </section>
    <section class="container-main-right col-lg-4 col-md-4 col-sm-8">
      <img src="@/assets/img/bannerthree.png" alt="" />
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
          <h2>Inscríbete al programa aquí </h2>
        </div>
        <div>
          <p>Cupos vendidos hasta hoy</p>
        </div>
        <div class="loading-bar"> <div class="load" :style="`width:${porcentaje}%`"></div><span>{{porcentaje}} %</span></div>
        <div class="final-title"><h2>80 cupos disponibles</h2></div>
          <p>Si tienes preguntas haz <a href="#">clic aquí</a></p>
      </div>
    </section>
  </main>
</template>

<script>
import Web3 from "web3";
import saleContratJSON from "@/util/tokensale.json";
import tokenContratJSON from "@/util/erc20token.json";
import moment from "moment";
let porcentaje
export default {
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
  methods: {
    async getWeb3() {
      if (window.provider == null) {
        this.messageButton = "Connect Wallet";
        this.messageButtonT = "Connect Wallet";
      } else {
        this.messageButton = "Swap MATIC";
        this.messageButtonT = "Swap USDC";
        window.saleContract = new window.$web3.eth.Contract(
          saleContratJSON,
          "0xC79778e6C127c7fe31aE870A019F484a82B532F7"
        );
        window.javaContract = new window.$web3.eth.Contract(
          tokenContratJSON,
          "0x4aFaE971Ac146d4028c3Ed581Eb307A1615E59Fe"
        );
        window.usdcContract = new window.$web3.eth.Contract(
          tokenContratJSON,
          "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        );
        window.address = await $web3.eth.getAccounts();
      }
    },
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
      var duration = moment.duration(this.getDiffInSeconds(), "seconds");
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
    setTimeout(() => {
      this.getWeb3();
    }, 2000);
    // console.log("moment", moment().format("X"));
  },

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
.question-one ul li {
  list-style: circle;
  margin: 0 0 0 15px;
  color:#949598;
  font-family:Roboto-Condensed,roboto;
  font-size: 16px;

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
.container-main-right .banner-yellow h2{
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