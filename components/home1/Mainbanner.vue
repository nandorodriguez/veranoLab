<template>
  <main >
    <div class="container-purple d-flex flex-wrap">
      <div class="text-banner-left">
        <p>LAB <br /><b>01</b></p>
      </div>
      <div class="text-banner-right"><p>Bienestar</p></div>
    </div>
    <div class="row container-banner-center d-flex justify-content-between">
      <div
        class="
          container-banner-right
          px-0
          text-justify
          col-lg-5 col-md-5 col-sm-12
        "
      >
        <span>NUESTROS BENEFICIOS</span>
        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <img src="@/assets/img/logobanner.png" alt="Beneficios" />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          doloribus sunt dignissimos nesciunt perspiciatis praesentium,
          voluptates, qui molestias minima enim tempora dolor fuga accusantium.
          Animi autem optio doloribus assumenda ullam.
        </p>
        <hr />
        <p><b>1.</b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <hr />
        <p><b>2.</b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <hr />
        <p><b>3.</b>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <hr />
      </div>
      <div class="container-banner-left col-lg-5 col-md-6 px-0 col-sm-12  "></div>
    </div>
      <div class="box-container justify-content-center">
        <div class="container-content row  ">
          <div class="content-title col-lg-6  col-md-6">
            <span>ESCOGE UNO DE</span>
            <h1>Nuestros cursos</h1>
          </div>
          <div class="descriptiong col-lg-6  col-md-5  ">
            <p >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
              harum quia ratione itaque neque dolores facere molestiae ipsum.
              Inventore temporibus doloribus autem illum nemo quia modi. Vel
              distinctio et dicta.
            </p>
          </div>
        </div>
        <div class="container-main  d-flex justify-content-center ">
          <div class="box-letf">
          <div class="box1">
            <img src="@/assets/img/1x/1x/recursos2.png" alt="banner" />
            <div class="description"><p>01.Lorem ipsum</p></div>
          </div>

          <div class="box2">
            <img src="@/assets/img/1x/1x/recursos3.png" alt="banner" />
            <div class="description"><p>02.Lorem ipsum</p></div>
          </div>
        </div>
        <div class="box-right">
          <div class="box3 ">
            <img src="@/assets/img/1x/1x/recursos4.png" alt="banner" />
            <div class="description"><p>03.Lorem ipsum</p></div>
          </div>
          <div class="box4 ">
            <img src="@/assets/img/1x/1x/recursos5.png" alt="banner" />
            <div class="description"><p>04.Lorem ipsum</p></div>
          </div>
        </div>
        </div> 
      </div>
    
  </main>
</template>

<script>
export default {};
</script>

<style>
.container-purple {
  height: 280px;
  width: 100%;
  background: linear-gradient(
    
    0deg,
    rgba(219, 104, 153, 1) 0%,
    rgba(77, 90, 152, 0.9864320728291317) 100%
  );
  justify-content: space-around;
  align-items: center;
}
.container-banner-right h1 {
  color: #253852;
  
}
.container-banner-right p b {
  color: #253852;
  font-weight: 600;
}
.container-banner-right hr {
  background-color: #777c87;
  height: 1px;
}
.container-banner-right img {
  width: 40px;
}
.text-banner-right p{
  font-family: 'Julietta',sans-serif;
  color: white;
  font-size: 90px;
}
.text-banner-left p{
 color: white;
 font-size:62px ; 
 line-height: 53px;
 font-family: "NunitoSans-Light",sans-serif;

}
.text-banner-left p b{
  font-weight: bold;
  font-size: 57px;
  font-family: "Roboto-Bold",sans-serif;
  line-height: inherit;
}
.container-banner-center {
  margin: 130px auto;
  width: 70%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.container-banner-center .container-banner-left {
  background-image: url("@/assets/img/1x/1x/recursos1.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  width:100%; 
  height:41rem;
  
  align-items: center;
 
}
/* .content-info h1 {
  color: #253852;
} */

.box-container{
  margin: 30px auto;
  width: 70%;
  
  

}
.content-title h1{
  color: #253852;
}

.container-main .box-letf img{
  width: 100%;
  
}
.container-main .box-right img{
  width: 100%;
}
.container-main .description{
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.container-main .description p{
 color: #253852;
 font-size: 24px;

  
}

.descriptiong {
  width:100% ;
  padding: 0;
  display: flex;
  justify-content: start;

}
.description h2{
  color: #253852;
}
 .box-letf .box1 {
  background-color: #f69d38;
}
 .box-letf .box2 {
  background-color: #25bc8e;
}
.box-letf img{
  height: 100%;
}
.box-right .box3{
  background-color: #ff8800;
}
.box-right .box4{
  background-color: yellow;
}
.box-right {
  margin-top: 80px ;
}
@media (max-width: 768px){
  .container-main{
    flex-wrap: wrap;
    width: 90%;
  }
  .container-banner-center .container-banner-left {
  margin-top: 40px;
}
.descriptiong p{
  padding: 15px 15px;
}
 .container-main  {
   width: 100%;
 } 
}
  
@media (max-width: 760px){
.container-purple{
  margin-top: 78px;
}
}

</style>
