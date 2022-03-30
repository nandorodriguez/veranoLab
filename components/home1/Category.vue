<template >
<client-only>
<div>

    <div class="row mx-0 container-banner d-flex justify-content-center mt-5">
    <div class="col-lg-3 col-md-3 item-image mt-md-5 d-flex justify-content-lg-end justify-content-md-end  mt-lg-5 justify-content-center my-5" >
     <img src="@/assets/img/logobanner.png"  class="item-image-banner px-lg-4"  alt="">
    </div>
    <div class="col-lg-5 col-md-6 item-text d-flex text-justify justify-content-lg-start  justify-content-md-end ">
      <p>
        El bienestar es un concepto que nos genera plenitud y satisfacción en
        varios aspectos de nuestras vidas que incluye el aspecto físico,
        emocional, y profesional, entre otros.<br /><br />
        Verano Lab es un laboratorio de experiencias de bienestar para todos. La
        vida es una sola, cada minuto que pasa es irrecuperable y debemos ser
        los responsables de vivir como queremos. Solo necesitamos adoptar un
        estilo de vida y una mentalidad adecuada para permitirnos sentirnos
        merecedores de todo aquello que nos trae bienestar.<br /><br />
        Sabemos que lo ideal es vivir de vacaciones todo el tiempo, a veces no
        es posible por lo tanto este laboratorio de experiencias te lleva a ti,
        donde quieras que estés; a tu casa, oficina, o a cualquier lugar del
        mundo a vivir y disfrutar de algunos placeres.<br /><br />
        En este laboratorio encontrarás a diferentes expertos en muchos temas,
        todos enfocados a llevar bienestar a tu vida.<br /><br />
        Programas digitales innovadores y de alta calidad, te invitan a vivir
        diferente, aprender y desarrollar habilidades, expandir la mente y sobre
        todo a disfrutar
      </p>
    </div>
    <section id="programas">
    <div class="row mx-0 mt-5  justify-content-center">
      <div class="col-md-3 col-sm-12 box-item color" :key="idx" v-for="(data, idx) in category" :style="`background:${data.colorGradiente}`">
          <a @click="number(idx+1)" :href="`/detalle/${data.id}`">
          <h1 class="title-box">{{data.titulo}} 0{{idx+1}}</h1>
          <h3 class="subtitle-box">{{data.subtitulo}}</h3>
          <p class="desc-box">{{data.descripcion}}</p>
        </a>
      </div>
    </div>
    </section>
  </div>

</div>
</client-only>
</template>

<script>
import { gql } from 'nuxt-graphql-request';
export default {
  name: "Category",

  data(){
    return{
      category: {}
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: 'fetchData',
  },
  methods: {
    number(id) {
      if (id) {
        localStorage.setItem('numID', id);
      }
    },
    async fetchData() {
      this.service = null
      try {
        const { categoria } = await this.$graphql.default.request(
          gql`
            query Categorias {
              categoria {
                id
                titulo
                subtitulo
                descripcion
                colorGradiente
              }
            }
          `
        );
        this.category= categoria;
      } catch (e) {
        console.log(e);
      }
    }
  },
};


</script>

<style scoped>
.mbm {
  margin-top: 78px;
}
.container-banner{
    margin: 100px 0;
}

.contain-boxs  {

}

.item-image-banner{
 height: 180px;
}

.item-text{
  color: #777c87;
}

.item-text p{
  line-height:1.6rem ;
  font-weight: 100 !important;
  font-family: "Roboto-Condensed",sans-serif;
}

.box-item{
    min-height: 300px;
    width:250px;
    margin: 8px;
    padding: 1.5rem 1.8rem;
    color:white !important;
}

.title-box{
  font-family: "NunitoSans-Light",sans-serif;
  font-size: 42px;
}

.subtitle-box{
  font-family: 'Roboto-Condensed',sans-serif;
  font-size: 30px;
  padding: 0.5rem 0;

}
.desc-box{
  font-family: 'Roboto-Condensed',sans-serif;
  color: #fff;
  font-size: 20px;
}
</style>
