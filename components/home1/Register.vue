<template>
  <main class="Register-main">
    <div class="container-banner">
      <div class="banner-purple ">
       <div class="row banner-purple-text">
          <p class="lab col-12 col-sm-3 text-center ">LAB <span>01</span></p>
        <p class=" col-12 col-sm-5 text-center">Inscribete ya</p>
       </div>
         <div class="container-box ">
          <div class="item-box bg-dark"></div>
          <div class="item-box bg-dark"></div>
          <div class="item-box bg-dark"></div>
        </div>
      </div>
      <div class=" banner-green">
          <div class="box-porcentaje">
            <div class="title-box">
              <h2>DISPONIBLE HASTA HOY</h2>
              <h2>Última oportunidad para inscribirse</h2>
              </div>
            <div class="box-off text-center ">
                <div class="percentage"><h1>50%</h1></div>
                <h1>
                    descuento
                </h1>
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
.banner-purple {
  background: linear-gradient(
    0deg,
    rgba(219, 104, 153, 1) 0%,
    rgba(77, 90, 152, 0.9864320728291317) 100%
  );
  height: 280px;
  display: flex;
 justify-content: center;
}

.banner-purple .banner-purple-text{
  display: flex;
  margin:0 auto;
  flex-wrap:wrap;
  justify-content:center !important;
  width: 100%;
  height: 200px;
  margin-top: 20px;
  line-height: inherit;
}
.banner-purple-text p:nth-child(1){
   color: white;
   font-weight:normal;
   font-size: 40px;
   font-family: "NunitoSans-Light",sans-serif;
   padding: 0;
    margin: 0;
    line-height:43px;
}

.banner-purple-text .lab {
   display: flex;
   flex-wrap: wrap;
   color: white;
   font-size: 50px;
   flex-direction: column;
   line-height: inherit;
}
.banner-purple-text .lab span{
   font-size: 50px;
   font-weight: bold;
   font-family: "Roboto-Bold",sans-serif;

}
.banner-purple-text p:nth-child(2){
   font-family:'Julietta',sans-serif;
   font-size: 55px;
   color: white;
}
.banner-green {
  background: #25bc8e;
  height: 250px;
  display: flex;
  justify-content: center;
  flex-direction:row;

}
.banner-green .box-off{
  width: 150px;
  height: 138px;
  min-width:180px;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color:#F8DB3B;
  border-radius: 10px;
  margin-left: 70px;
  flex-wrap: wrap;
  line-height: 10px;
}
.banner-green .box-off h1{
  font-size: 30px;
}
.title-box {
  align-items: flex-end;
}
.box-porcentaje{
  display: flex;
  position: absolute;
  align-items: center;
  bottom: -57px;


}
.box-porcentaje .title-box h2:nth-child(1){
  font-size:42px;
}
.box-porcentaje .title-box h2:nth-child(2){
  color:#25BC8E;
  font-size:28px;
}
.box-porcentaje .box-off h1{
  color:#25BC8E;

}

.box-porcentaje .box-off .percentage h1{
  font-size: 70px;
  line-height: 50px;
}
.container-banner {
  position: relative;
  margin: 0;
}
.container-box {
  display: flex;
  position: absolute;
  align-items: center;
  bottom:150px;

}
.container-box .item-box{
  width: 200px;
  height:200px;
  margin: 10px;
}

@media (min-width: 780px) and (max-width: 1024px){
.banner-purple .banner-purple-text{
  display: flex;
  flex-wrap:wrap;
  width: 100%;
  height: 50%;
  margin-top: 90px;
}
.banner-purple {
  height: 320px;
  display: flex;
 justify-content: center;
}

}


@media (max-width: 768px){

.container-box {
  position:inherit;
  flex-direction: column;
  margin-bottom:20px ;

}
.container-box .item-box{
  width: 200px;
  height:200px;
  margin: 10px;
}

.banner-purple {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: inherit;
  }
.banner-purple .banner-purple-text{
  margin-top: 80px;
}
.banner-purple-text h1{
  flex-wrap:wrap ;
}
.banner-green {

  display: flex;
  justify-content: center;
  flex-direction: column;

}
.box-porcentaje{
  position: inherit;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  justify-content: center;

}

.banner-green .box-off{
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: inherit;
  margin-top: 15px;


}
.box-porcentaje .title-box h2:nth-child(1){
  color:white;
  font-size: 25px;
  margin-top: 20px;
  text-align: center;

}
.box-porcentaje .title-box h2:nth-child(2){
  color:white;
   text-align: center;

}
}

</style>