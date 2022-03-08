<template>
  <div class="container p-0">
        <div class="row m-0">
        <div class="col-12 col-md-6 col-lg-4 justify-content-md-start ">
          <div class="row elements m-0">
              <div class="col-12 col-md-2  d-flex justify-content-center align-items-center align-content-center mb-4">
            <div class="elementor-icon-box circur ">
            <span class="elementor-icon ">
              <i class="fas fa-map-marker-alt "></i>
            </span>
          </div>
          </div>
          <div class="col-12 col-md-10 d-flex justify-content-center align-items-center align-content-center d-flex justify-content-md-start">
          <div class="elementor-icon-box-content mb-4">
            <h3 class="elementor-icon-box-title d-flex justify-content-center d-flex justify-content-md-start"><span>Dirección</span></h3>
            <p class="elementor-icon-box-description d-flex justify-content-center text-align-center d-flex justify-content-md-start">
              Estamos localizado<br>
              entre Guatapé y el Peñol<br>
              vereda la meseta
            </p>
          </div>
          </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="row elements m-0">
            <div class="col-12 col-md-2 d-flex justify-content-center align-items-center align-content-center mb-4">
            <div class="elementor-icon-box circur">
              <span class="elementor-icon ">
                <i class="fas fa-phone-alt"></i>
              </span>
            </div>
          </div>
          <div class="col-12 col-md-10 d-flex justify-content-center d-flex justify-content-md-start align-items-center align-content-center">
            <div class="elementor-icon-box-content mb-4">
              <h3 class="elementor-icon-box-title d-flex justify-content-center d-flex justify-content-md-start "><span>Teléfono</span></h3>
              <p class="elementor-icon-box-description d-flex justify-content-md-start">
                (600) 313 462 00 98
              </p>
            </div>
         </div>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4">
          <div class="row elements m-0">
             <div class="col-12 col-md-2 d-flex justify-content-center align-items-center align-content-center mb-4">
            <div class="elementor-icon-box circur">
              <span class="elementor-icon ">
                <i class="far fa-envelope"></i>
              </span>
            </div>
          </div>
          <div class="col-12 col-md-10 d-flex justify-content-center d-flex justify-content-md-start align-items-center align-content-center mb-4">
            <div class="elementor-icon-box-content mb-4">
              <h3 class="elementor-icon-box-title d-flex d-flex justify-content-md-start justify-content-center"><span>Email</span></h3>
              <p class="elementor-icon-box-description d-flex justify-content-md-start">Lifebreakcolombia@gmail.com</p>
            </div>
          </div>
          </div>
        </div>

     </div>
  </div>
</template>
<style scoped>
.container{
  padding-bottom: 80px;
}

 .elementor-icon > i{
   font-size: 15px;
   width: 22px;
  text-align: center;

}
.elements{
 margin-right: 5px;
}


.elementor-icon-box-title{
    color: #1e3954;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    font-family: "Mukta",Sans-serif;
    text-align: center;
}
.elementor-icon-box-description{
    color: #888f96;
    font-size: 18px;
    line-height: 24px;
    font-family: "Mukta",Sans-serif;
    font-weight: 400;
}

  .circur{
   background-color: #eef8f7;;
   padding: 20px;
   color:#55bbaf;
   border-radius: 50% ;
 }

  .circur:hover{
   background-color: #55bbaf;
   color:#eef8f7;
 }
</style>
<script>
export default {
  name: "Infoperson"
};
</script>
<script>

//  #55bbaf