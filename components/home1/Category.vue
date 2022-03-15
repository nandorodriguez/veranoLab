<template >
  <div class="row container-banner d-flex justify-content-center mt-5">
    <div class="col-lg-3 col-md-3 item-image mt-md-5 d-flex justify-content-lg-end justify-content-md-end  mt-lg-5 justify-content-center my-5" >
     <img src="@/assets/img/logobanner.png"  class="item-image-banner px-lg-4"  alt="">
    </div>
    <div class="col-lg-7 col-md-6 item-text d-flex text-justify justify-content-lg-start  justify-content-md-end ">
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
    <div class="box col-lg-11 box col-md-11 d-flex flex-wrap  justify-content-center">
    <a  class="box-item color  p-4  m-sm-4  m-lg-3 "  :key="idx" v-for="(data, idx) in category" :style="`background:${data.colorGradiente}`" :href="`/detalle/${data.id}`">
      <p>{{data.titulo}}</p>
      <h1>0{{idx+1}}</h1>
      <p>{{data.descripcion}}</p>
    </a>
    </div>
  </div>
</template>

<script>
import { gql } from 'nuxt-graphql-request';
export default {
  name: "Category",

  data(){
    return{
      box:[
        {
          title:"LAB1",
          number:"01",
          desc:"Descriptor de lo que es este laboratorio promueve.",
          color:"linear-gradient(0deg, rgba(219,104,153,1) 0%, rgba(77,90,152,0.9864320728291317) 100%)"
         },
         {
          title:"LAB2",
          number:"02",
          desc:"Descriptor de lo que es este laboratorio promueve.",
          color:"linear-gradient(0deg, rgba(226,195,88,1) 0%, rgba(108,190,203,1) 100%)"
         },
         {
          title:"LAB3",
          number:"03",
          desc:"Descriptor de lo que es este laboratorio promueve.",
          color:"linear-gradient(0deg, rgba(214,235,239,1) 0%, rgba(108,190,203,1) 100%)"
         },
         {
          title:"LAB4",
          number:"04",
          desc:"Descriptor de lo que es este laboratorio promueve.",
          color:"linear-gradient(0deg, rgba(243,206,167,1) 0%, rgba(215,71,123,1) 100%)"
         },{
          title:"LAB5",
          number:"05",
          desc:"Descriptor de lo que es este laboratorio promueve.",
          color:"linear-gradient(0deg, rgba(229,158,192,1) 0%, rgba(141,200,192,1) 100%)"
         },
         {
          title:"LAB6",
          number:"06",
          desc:"Descriptor de lo que es este laboratorio promueve.",
          color:"linear-gradient(0deg, rgba(114,177,224,1) 0%, rgba(221,114,137,1) 100%)"
         }
      ],
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
    async fetchData() {
      this.service = null
      try {
        const { categoria } = await this.$graphql.default.request(
          gql`
            query Categorias {
              categoria {
                id
                titulo
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
.item-image-banner{
 height: 180px;
}
.box{
    margin: 40px 0;

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
    color:white !important;
}
.box-item p:nth-child(1){
  font-family: "NunitoSans-Light",sans-serif;
  font-size: 42px;
}
.box-item h1:nth-child(2){
  font-family: 'Roboto-Condensed',sans-serif;
  font-weight: bold;
  font-size: 42px;

}
.box-item p:nth-child(2){
  font-family: 'Roboto-Condensed',sans-serif;
}
</style>
