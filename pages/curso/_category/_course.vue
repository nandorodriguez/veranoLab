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
      opt: {
        title: 'Nuestro equipo',
        subtitle:'Quienes somos',
        titleBanner: 'Nuestros Voluntarios',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, leo quis mattis laoreet, mi odio malesuada ligula, eget bibendum lacus ligula sed mauris. Cras tincidunt justo eu dignissim faucibus. Sed eleifend neque a congue mattis. Duis dictum dolor non gravida tincidunt. Etiam cursus eros quis pretium suscipit. Sed pellentesque gravida est, rhoncus nibus turpis ornare nec. Aliquam vitae pharetra felis, a fringilla enim. ',
        linkbanner:'',
        boxs:[
          {
            title: 'Alejandro',
            image: require('@/assets/img/somos/s1.jpg'),
            linkperson: '#',
            desc: 'Alejandro Tamayo: Ingeniero y profesor de Yoga. Ha viajado y trabajado profesionalmente en varios países de Europa, principalmente el Reino Unido. Actualmente trabaja remoto desde Guatapé para una compañía de Seguridad Informática basada en Singapur.',
          },
          {
            title: 'Tatiana',
            image: require('@/assets/img/somos/s2.jpg'),
            linkperson: '#',
            desc: 'Tatiana Prieto: Ingeniera , Fundadora de IMUKO.CO, fiel creyente que la tecnología transforma vidas de manera positiva y apasionada con que el talento profesional de Colombia, sea reconocido a nivel Internacional.',
          },
          {
            title: 'Raphaela',
            image: require('@/assets/img/somos/s3.jpg'),
            linkperson: '#',
            desc: 'Raphaela Szerb: Austriaca, Creció en el sector de la hostelería. Una enamorada de la Naturaleza Colombiana. Actualmente comparte sus estudios y pasión en  hotelería turismo. Ha trabajado en países como Mexico, Argentina e Inglaterra.',
          }
        ],
        background: 'url(https://demo2wpopal.b-cdn.net/co-workshop/wp-content/uploads/2018/11/bgoc-1.png)'
      },
      somos: {
        title: 'Quienes Somos',
        image: require('~/assets/img/somos/somos.jpg')
      },
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
                    linkTexto
                    urlLink
                    cuposTexto
                    porcentajeCupo
                    cuposDisponible
                    cuposOcupados
                  }
                }
              }
            }
          `
        );
        console.log(categoria);
        this.category = categoria;
        this.searchCategory();
      } catch (e) {
        console.log(e);
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
          console.log('>>>>>>>>>>>>>>>>>>>><',datos);
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