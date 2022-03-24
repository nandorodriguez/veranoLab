<template>
<client-only>
  <div class="m-0">
    <div class="banner-orange d-flex justify-content-center align-items-center m-0">
      <p>Ingresa y síguenos en nuestras redes @verano.lab</p>
    </div>
    <div v-if="imagenes" class="row m-0">
      <div v-if="imagenMain" class="col-sm-12 col-md-5 m-0 image-main" :style="`backgroundImage: url(${imagenMain})`">
      </div>
      <div class="col-sm-6 col-md-7 p-0">
        <div class="row m-0">
          <div :key="idx" v-for="(imagen,idx) in imagenes.imagenesProducto" v-if="idx <=7" class="col-sm-12 col-md-3 p-0 image-secundary" :style="`backgroundImage: url(${imagen.url})`"></div>
        </div>
      </div>
    </div>
  </div>
</client-only>
</template>

<script>
import { gql } from "nuxt-graphql-request";
export default {
  name: "Galleryredes",
  data(){
    return {
      imagenes: {},
      imagenMain: ''
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
      try {
        const { imagenesRed } = await this.$graphql.default.request(
          gql`
            query Categorias {
              imagenesRed {
                imagenesProducto {
                  url
                }
              }
            }
          `
        );
        this.imagenes = imagenesRed[0];
        this.imagenMain= imagenesRed[0].imagenesProducto[0].url;
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>

<style scoped>

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

.image-main {
  width: 100%;
  height: 600px;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
}

.image-secundary {
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: cover;
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