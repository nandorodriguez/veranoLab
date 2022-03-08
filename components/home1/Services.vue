<template>
  <div class="container">
    <div class="row">
      <div :key="idx" v-for="(service, idx) in services" class="col-xs-6 col-sm-4 col-md-3 col-lg-3 py-5 px-2 cont-efect d-flex justify-content-center align-items-center  align-content-center justify-content-center flex-column">
        <div class="image-framed ">
          <figure class="image-box-img">
            <img :src="require(`~/assets/img/icons/${service.svg}`)" alt="image">
          </figure>
        </div>
        <div class="row d-flex flex-column">
          <h5 class="title-g  text-center mt-4 mb-2">{{service.title}}</h5>
          <p class="desc  text-center">{{service.desc}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Services',
    data() {
      return{
        services: [
          {
            title:'Internet alta velocidad',
            desc: '',
            svg: 'internetaltavelocidad.svg'
          },
          {
            title:'Ambiente natural',
            desc: '',
            svg: 'ambientenatural.svg'
          },
          {
            title:'Clases inglés',
            desc: '',
            svg: 'clasesingles.svg'
          },
          {
            title:'Extranjeros',
            desc: '',
            svg: 'extranjeros.svg'
          },
          {
            title:'Excursiones',
            desc: '',
            svg: 'excursiones.svg'
          },
          {
            title:'Entretenimiento',
            desc: '',
            svg: 'entretenimiento.svg'
          },
          {
            title:'Comida saludable',
            desc: '',
            svg: 'comidasaludable.svg'
          },
          {
            title:'Yoga',
            desc: '',
            svg: 'yoga.svg'
          },
          {
            title:'Huerta orgánica',
            desc: '',
            svg: 'huertaorganica.svg'
          },
          {
            title:'Alojamiento',
            desc: '',
            svg: 'alojamiento.svg'
          },
          {
            title:'Slackline',
            desc: '',
            svg: 'slackline.svg'
          },
          {
            title:'Cancha baloncesto/fútbol',
            desc: '',
            svg: 'canchabaloncestofutbol.svg'
          },
        ]
      }
    }
  }
</script>
<style scoped>
  .cont-efect {
    word-wrap: break-word;
    height: 300px;
  }
  .cont-efect:hover {
    background-color: #54a66a70;
  }

  .image-box-img {
    position: relative;
    width: 95px;
    height: 95px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #eef8f7;
    border-radius: 50%;
    cursor: pointer;
    transition-duration: .5s;
  }

  .image-box-img svg {
    width: 45px;
    height: 45px;
  }
  .desc {
    display: none;
    width: 12em;
  }
  .cont-efect:hover .desc {
    display: block;
  }

  .cont-efect:hover .title-g, .cont-efect:hover .desc {
    color: #fff;
  }

  .cont-efect:hover .image-box-img {
    animation: beat-after 1.5s ease infinite
  }

  .cont-efect:hover .image-box-img svg {
    fill: #fff;
    animation: zoom-in-zoom-out 2s ease-out infinite;
  }
  .cont-efect:hover .image-box-img  {
    background-color: transparent;
    border: 1px solid rgba(34,34,34,.05);
    animation: zoom-in-zoom-out 2s ease-out infinite;
    transform: translateX(-50%) translateY(-50%);
    transition-duration: .5s;
    content: "";
  }

  @keyframes zoom-in-zoom-out {
    0% {
      transform: scale(0.5, 0.5);
    }
    50% {
      transform: scale(1.1, 1.1);
    }
    100% {
      transform: scale(0.8, 0.8);
    }
  }

  .image-box-img:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: transparent;
    border-radius: inherit;
    box-sizing: content-box;
    transform: translateX(-50%) translateY(-50%);
    transition-duration: .5s;
  }

  .cont-efect:hover .image-box:before {
    animation: beat-before 1.5s ease infinite;
  }

  </style>