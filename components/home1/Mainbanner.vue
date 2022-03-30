import Category from '@/components/home1/Category.vue';
<template>
<client-only>
  <main v-if="category">
    <div class="container-purple d-flex flex-wrap justify-content-sm-center justify-content-md-between  align-items-center align-content-center">
      <div class="text-banner-left">
        <p>{{ category.titulo }} <br /><b>0{{idNumber}}</b></p>
      </div>
      <div class="text-banner-right"><p>{{category.bannerTitle}}</p></div>
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
        <span class="text-uppercase">{{ category.subtituloContenido }}</span>
        <h1>{{ category.tituloContenido }}</h1>
        <img src="@/assets/img/logobanner.png" alt="Beneficios" />
        <p class="container-banner-right-desc">
          {{ category.descripcionContenido }}
        </p>
        <p :key="idx" v-for="(lista, idx) of category.listaContenido">
          <b>{{ idx + 1 }}. </b>{{ lista }}
        </p>
      </div>
      <div
        v-if="category.imagenContenidoCategoria"
        class="container-banner-left col-lg-5 col-md-6 px-0 col-sm-12"
        :style="`backgroundImage: url(${category.imagenContenidoCategoria.url})`"
      ></div>
    </div>
    <div class="d-flex justify-content-center align-content-center align-items-center flex-column">
      <div class="box-container justify-content-center">
        <div class="container-content row mx-0">
          <div class="content-title col-lg-6  col-md-6">
            <span>{{ category.subtituloAreaCursos }}</span>
            <h1>{{ category.tituloAreaCursos }}</h1>
          </div>
          <div class="descriptiong col-lg-6  col-md-5  ">
            <p>
              {{ category.descripcionAreaCursos }}
            </p>
          </div>
        </div>
        <div class="container-main mb-5">
            <div class="row mx-0">
              
              <div v-if="category.cursosDisponibles" class="col-sm-12 col-md-6 p-0">
                <div :key="idx" v-for="(curso, idx) of category.cursosDisponibles" @click="redirectCourse(`/curso/${category.id}/${curso.id}`)" class="position-relative">
                  <img v-if="idx < secuencia && curso.imagePrincipal !=null"  :src="curso.imagePrincipal.url" class="box" :alt="curso.imagePrincipal.url">
                  <div class="description" :style="`backgroundColor: ${curso.color}`" v-if="idx < secuencia && curso.imagePrincipal !=null">
                      <p>0{{ idx + 1 }}. {{ curso.titulo }}</p>
                  </div>
                </div>
              </div>
              <div v-if="category.cursosDisponibles" class="col-sm-12 col-md-6 px-0" :class="(secuencia % 2 != 0)? 'mbm': ''">
                <div :key="idx" v-for="(curso, idx) of category.cursosDisponibles" @click="redirectCourse(`/curso/${category.id}/${curso.id}`)" class="position-relative">
                  <img v-if="idx>= secuencia && curso.imagePrincipal !=null"  :src="curso.imagePrincipal.url" class="box" :alt="curso.imagePrincipal.url">
                  <div class="description" :style="`backgroundColor: ${curso.color}`" v-if="idx>= secuencia && curso.imagePrincipal !=null">
                    <p>0{{ idx + 1 }}. {{ curso.titulo }}</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </main>
</client-only>
</template>

<script scoped>
import { gql } from "nuxt-graphql-request";
export default {
  data() {
    return {
      category: {},
      secuencia: 0,
      idNumber: localStorage.getItem('numID') || ''
    };
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
        const { categoria } = await this.$graphql.default.request(
          gql`
            query Categorias {
              categoria {
                id
                titulo
                descripcion
                subtituloContenido
                imagenContenidoCategoria {
                  url
                }
                bannerTitle
                tituloContenido
                descripcionContenido
                listaContenido
                tituloAreaCursos
                subtituloAreaCursos
                descripcionAreaCursos
                cursosDisponibles {
                  ... on Cursos {
                    id
                    titulo
                    descripcion
                    color
                    imagePrincipal {
                      url
                    }
                  }
                }
              }
            }
          `
        );
        console.log(categoria);
        this.category = categoria;
        this.secuencia = categoria[0].cursosDisponibles.length/2;
        console.log('ojo',this.secuencia);

        this.searchCategory();
      } catch (e) {
        console.log(e);
      }
    },
    searchCategory() {
      console.log(this.$route.params.id);
      let id = this.$route.params.id;
      let data = this.category.filter(r => r.id == id);
      console.log("esta es la data de category: ", data);
      if (data != []) {
        this.category = data[0];
      } else {
        this.$router.push("/");
      }
    },
    redirectCourse(link) {
      if(!link) {
        this.$router.push('/');
      }
      this.$router.push(link);
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.mbm {
  padding-top: 78px;
}
.container-content {
  margin-bottom: 6rem;
}
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
  padding: 0 15vw;
}
.container-banner-right h1 {
  color: #253852;
  margin-bottom: 1rem;
}
.container-banner-right p b {
  color: #253852;
  font-weight: 600;
}
.container-banner-right p {
  border-bottom: 1px solid #777c87;
}
.container-banner-right-desc {
  padding: 2rem 0;
}
.container-banner-right hr {
  background-color: #777c87;
  height: 1px;
}
.container-banner-right img {
  width: 40px;
}
.text-banner-right p {
  font-family: "Julietta", sans-serif;
  color: white;
  font-size: 90px;
}
.text-banner-left p {
  color: white;
  font-size: 62px;
  line-height: 53px;
  font-family: "NunitoSans-Light", sans-serif;
}
.text-banner-left p b {
  font-weight: bold;
  font-size: 57px;
  font-family: "Roboto-Bold", sans-serif;
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
  width: 100%;
  height: 41rem;

  align-items: center;
}


.container-main {
  width: 100%;
}
.box {
  min-width: 100%;
  width: 100%;
  position: relative;
  cursor: pointer;
  margin: 0;
}

.box-container {
  width: 70%;
}

.container-main .box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content-title h1 {
  color: #253852;
}

.container-main .description {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 130;
}
.container-main .description p {
  color: #253852;
  font-size: 24px;
  padding:0 1rem;
  cursor: pointer;
}

.descriptiong {
  width: 100%;
  padding: 0;
  display: flex;
  justify-content: flex-start;
}
.description h2 {
  color: #253852;
}
@media (max-width: 768px) {
  .container-main {
    flex-wrap: wrap;
    width: 90%;
  }
  .container-banner-center .container-banner-left {
    margin-top: 40px;
  }
  .descriptiong p {
    padding: 15px 15px;
  }
  .container-main {
    width: 100%;
  }
}

@media (max-width: 760px) {
 
  .descriptiong p, .content-title {
    padding: 15px 0px;
  }

  .box-container, .container-banner-center {
    width: 90%;
  }
  .container-purple {
    margin-top: 78px;
  }
  .text-banner-right p {
    font-size: 50px;
  }

  .text-banner-left p {
    font-size: 40px;
    line-height: 48px;
  }

  .text-banner-left p b {
    font-size: 44px;
  }
}
@media(max-width: 500px) {
 
  .box-container {
    width: 90%;
  }

}
</style>
