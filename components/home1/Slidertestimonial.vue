<template>
  <Opinions :images="imgs"/>
</template>

<script>
import Opinions from '@/components/home1/Opinions.vue'
  export default {
    name: 'Slidertestimonial',
    components: {
      Opinions
    },
    data() {
      return {
        imgs: [
          {
            message: '“For my work, I really needed a dedicated space that made it easy to focus. Not only did Lifebreak offer that, but I also really enjoyed the way I spent my off time. The yoga classes, the conversations, the nature, and the food...all of it made the place hard to leave.”',
            autor: 'Alexis Haakonson',
            what: 'Digital nomad',
            src: require('@/assets/img/testimonial/testimonila01.png')
          },
          {
            message: '“Siempre había tenido ganas de viajar al extranjero para vivir en un lugar que se hable Inglés. Pensé que iba a tener que pagar Millones para visitar la USA o Canada y poder tener esta experiencia. Pero la encontré aquí en Colombia. Super recomendado sin importar que nivel de Inglés tengas.”',
            autor: 'Felipe Toro',
            what: 'Emprendedor',
            src: require('@/assets/img/testimonial/testimonila02.png')
          },

        ],
      };
    }
  }
</script>