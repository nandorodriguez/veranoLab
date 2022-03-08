<template>
  <div>
    <div class="container">
      <div class="row m-0 ">
        <div class="col-12 pb-3 col-md-6 col-lg-5 mr-lg-3 ml-lg-5 pt-lg-5 pt-lg-5 position-relative">
          <img src="../../assets/img/iconflex.png" class="iconflex" alt="image">
          <p class="sub-titlel">CONTACTO</p>
          <h1 class="main-title">¿Estás interesado en participar?</h1>
        </div>
        <div class="col-12  col-md-6 col-lg-5 d-flex justify-content-start  align-items-end pb-3">
          <p class="sub-titler ">
           Si sientes el llamado a formar parte de esta experiencia o si tienes alguna duda, déjanos  tu dirección de email y nuestro equipo se pondrá en contacto contigo.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  padding: 80px 0 70px 0px;
}
.iconflex  {
    position: absolute;
    left: -10px;
    top: 0;
    width: 15rem;
    z-index: -1;
  }
.sub-titlel {
  color: #888f96;
  font-size: 18px;
  text-transform: uppercase;
  line-height: 50px;
  letter-spacing: 1.8px;
  font-family: "Mukta", -apple-system, BlinkMacSystemFont, Sans-serif;
}
.sub-titler {
  color: #888f96;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: 0.5px;
  font-family: "Mukta", Sans-serif;
  font-weight: 400;
}
.main-title {
  color: #1e3954;
  font-size: 40px;
  line-height: 40px;
  letter-spacing: 0px;
   font-weight: 500;
  font-family: "Mukta", Sans-serif;

}
@media (min-width: 1024px){

.main-title {
    font-size: 60px;
    font-weight: 500;
    line-height: 60px;
    letter-spacing: -3px;

}
}
</style>
<script>
export default {
  name: "Seccion"
};
</script>
