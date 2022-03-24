<template>
  <div class="home home-1" id="list-of-sections">
    <Header1/>
    <Register :header="curso"/>
    <Registerbanner :body="curso"/>
    <Footer/>
  </div>
</template>
<script>
import Header1 from '@/components/Header1.vue'
import Footer from '@/components/Footer.vue'
import Register from '@/components/home1/Register.vue'
import Registerbanner from '@/components/home1/Registerbanner.vue'
import { gql } from "nuxt-graphql-request";

export default {
  components: {
    Header1,
    Register,
    Registerbanner,
    Footer
  },
  data() {
    return {
      category: {},
      curso: []
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
        const { categoria } = await this.$graphql.default.request(
          gql`
            query Categorias {
              categoria {
                id
                tituloAreaCursos
                subtituloAreaCursos
                descripcionAreaCursos
                cursosDisponibles {
                  ... on Cursos {
                    id
                    titulo
                    descripcion
                    imagePrincipal {
                      url
                    }
                    imagenesSecundarias {
                      url
                    }
                    tituloPromicion
                    descripcionPromocion
                    porcentajePromocion
                    tituloContenido
                    descripcionContenido
                    subtituloContenido
                    contenidoGeneral
                    imagenPromocional {
                      url
                    }
                    tiempoPromocional
                    incrementoDias
                    linkTexto
                    urlLink
                    cuposTexto
                    porcentajeCupo
                    cuposDisponible
                    cuposOcupados
                    imagenesExtras {
                      url
                      fileName
                    }
                  }
                }
              }
            }
          `
        );
        this.category = categoria;
        this.searchCategory();
      } catch (e) {
        // console.log(e);
      }
    },
    searchCategory() {
      let courseID = this.$route.params.course;
      let categoryID = this.$route.params.category;

      let data = this.category.filter(r => r.id == categoryID);
      if (data.length>0) {
        this.category = data[0];
        let curso = this.category.cursosDisponibles.filter(r => r.id == courseID);
        if (curso.length>0) {
          this.curso = curso[0];
          // this.curso.cursosDisponibles.contenidoGeneral.text = this.curso.cursosDisponibles.contenidoGeneral.text.replace('\n', '');
          let datos = this.curso.contenidoGeneral.text.replace(/\n/g, ' ')
          this.curso.cursosDisponibles.contenidoGeneral.text = datos;
        } else {
          this.$router.push("/");
        }
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
}
</script>