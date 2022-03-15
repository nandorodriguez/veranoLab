<template>
  <div class="m-0">
    <div class="banner-orange d-flex justify-content-center align-items-center m-0">
      <p>Ingresa y síguenos en nuestras redes @verano.lab</p>
    </div>
    <div class="folliwing justify-content-xl-around m-0">
      <div class="framework d-flex justify-content-center ">
           <!-- <img src="@/assets/img/1x/image1.png" alt="" /> -->
      </div>
      <div class="gallery d-flex flex-wrap justify-content-center m-0 p-0">
        <img src="@/assets/img/1x/image1.png" alt="" />
        <img src="@/assets/img/1x/image2.png" alt="" />
        <img src="@/assets/img/1x/image3.png" alt="" />
        <img src="@/assets/img/1x/image4.png" alt="" />
        <img src="@/assets/img/1x/image5.png" alt="" />
        <img src="@/assets/img/1x/image7.png" alt="" />
        <img src="@/assets/img/1x/image8.png" alt="" />
        <img src="@/assets/img/1x/image9.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Galleryredes",
};
</script>

<style>

.banner-orange {
  background-color: rgb(255, 136, 0);
  height: 100px;
  text-align: center;
}
.banner-orange p {
  color: #ffffff;
  font-family: 'Roboto-Bold',sans-serif;
  font-size: 1.2rem;
}
.folliwing{
  width: 100%;
  height:auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

}
.framework {
  width:344px;
  height:340px;
  background-image: url("@/assets/img/1x/image2.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

}
.gallery{
  width:680px;
}

.gallery img{
    height:auto;
    width:170px;
    margin: 0 !important;

}

@media (max-width:340px) {
.framework {
  width:250px;
  height:250px;
}
.gallery img{
    height:auto;
    width:250px;

}
}
</style>