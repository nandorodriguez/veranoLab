<template>
<client-only>
  <div>
    <header id="home" class="position-relative ">
      <div v-if="slider">
        <Loading v-if="loading"/>
        <div v-if="slider[index]" class="row mx-0 d-flex justify-content-center flex-row home-banner" :style="`background-image: url('${slider[index].imagenSlider.url}');`">
          <div class="col-md-10">
            <div class="container hg">
              <div class="hero-area-wrapper d-flex flex-row wow fadeInLeft">
                <div class="hero-area-content text-break">
                  <div class="hero-area-content-img"></div>
                  <p class="title text-center "></p>
                  <br>
                  <p class="desc text-center">{{ slider[index].descripcionSlider }}</p>
                  <br>
                  <div v-if="slider[index].textoBoton " class="hero-button-box py-2 py-md-5">
                    <a :href="slider[index].urlBoton" class="theme-btn">{{ slider[index].textoBoton }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="circle">
        <span class="px-1" :key="idx" v-for="(i ,idx) in slider">
        <i :class="`fas fa-circle ${ idx == index ? 'active-color': ''}`"  @click.stop="changeSlider(idx)"></i>
        </span>
      </div>
    </header>
    <a class="nosotros" name="nosotros">
    <div class="banner-yellow d-flex align-items-center justify-content-center">
      <p class="text-center">Quienes somos y que ofrecemos?</p>
    </div>
    </a>
  </div>
</client-only>
</template>

<script>
import { gql } from "nuxt-graphql-request";
export default {
  name: "Banner1",
  data() {
    return {
      loading: false,
      slider: {},
      index: 0,
      vol:0,
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
      this.loading = true;
      try {
        const {slider} = await this.$graphql.default.request(
          gql`
            query Categorias {
              slider {
                id
                textoBoton
                urlBoton
                imagenSlider {
                  url
                }
                descripcionSlider
              }
            }
          `
        );
        this.slider = slider;
        this.loading = false;
      } catch (e) {
        console.log(e);
        this.loading= false;
      }
    },
    changeSlider(id) {
      this.index = id;
    },
    prev() {
      if (this.index - 1 >= 0) {
        this.index -= 1;
      }
      else{
        this.index = this.slider.length;
        this.index -= 1;
      }

    },
    next() {
      if (this.index === this.slider.length-1) {
        this.index = 0;
      }
      else{
        this.index += 1;
      }
    },
    intervalTime(){
      setInterval(()=>{
        this.next();
      }, 15000);
    },
    onKeydown(e) {
      switch (e.key) {
        case "ArrowRight":
          this.next();
          break;
        case "ArrowLeft":
          this.prev();
          break;
        case "ArrowDown":
        case "ArrowUp":
        case " ":
          e.preventDefault();
          break;
      }
    }
  },
  mounted() {
    this.intervalTime();
    this.vol = this.slider.length;
    window.addEventListener("keydown", this.onKeydown);
  },
  destroyed() {
    window.removeEventListener("keydown", this.onKeydown);
  }
};
</script>
<style lang="scss" scoped>

.line {
  display: block;
  margin-left: -4rem;
  margin-right: 8rem ;

  .vertical {
    display: block;
    background-color: #fff;
    width: 2px;
    height: 150px;
  }

  .number-indice h2 {
    display: block;
    z-index: 29;
    min-width: 37px;
    max-width: 37px;
    white-space: nowrap;
    font-size: 17px;
    line-height: 19px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    letter-spacing: 0px;
    font-family: 'Mukta', sans-serif;
    visibility: inherit;
    transition: none 0s ease 0s;
    text-align: inherit;
    border-width: 0px;
    margin: 0px;
    padding: 0px;
    min-height: 29px;
    max-height: 29px;
    opacity: 1;
    transform: matrix3d(0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    transform-origin: 50% 50% 0px;
  }
}

.arrows-g {
  width: 60px;
}

.img-ico {
  width: 50px;
}

.subtitle {
  font-family: "Mukta",Sans-serif;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 64px;
  letter-spacing: 1.6px;
  margin-top: 0;
}

.title {
  z-index: 9;
  font-size: 1.8rem;
  color: rgb(255, 255, 255);
  font-family: 'Julietta', sans-serif;
  visibility: inherit;
  text-align: center;
  align-items: flex-start;
  border-width: 0px;
  margin: 0px;
  padding: 0px;
  opacity: 1;
  white-space: initial;
  width: 100%;
  line-height: 3.6rem;
}
.desc {
  z-index: 10;
  white-space: normal;
  font-size: 25px;
  line-height: 31px;
  font-weight: 300;
  color: rgb(255, 255, 255);
  margin: 0px;
  padding: 0px;
  opacity: 1;
  white-space: initial;
  margin-top: 80px;
  width: 80%;

}

.home-banner {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  z-index: 1;
  height: 100%;

}
.hero-area-wrapper{
background-image: url("@/assets/img/1x/verano.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  position: relative;
  top: -100px;

}

.hero-area-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 100%;
  position: absolute;
  bottom: -198px;

}



.home-arrows {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  z-index: 100;
  line-height: 50px;
}

.circle {
  display: block;
  position: absolute;
  width: 100%;
  bottom: 1rem;
  text-align: center;
}
.circle span  i {
  color: #fff;
}

.active-color {
  color: #CA3381 !important;
}

.banner-yellow{
  background-color: #F6A838;
  height: 150px;

}
.banner-yellow p{
   color:#fff;
   font-family:'Julietta',sans-serif;
   font-size: 3.2rem;
   line-height: 3.2rem;



}

@media(max-width: 1024px ){
    .desc {
  margin-top: 97px;

}
  .line {
    display: none;
    .vertical {
      display: none;
    }
    .number-indice h2 {
      display: none;
    }
  }

}
@media(max-width: 768px) {

  .banner-yellow p {
    font-size: 2.4rem;
  }

  .home-banner-rg {
    display: none;
  }

  .hg {
    min-height: 680px;
    max-height: 800px;
  }

  .arrows-g {
    width: 30px;
  }



  .line {
    display: none;
    margin-left: 0;
    margin-right: 0 ;
  }
  .desc {
    margin-top: 60px;
    width:100%;
  }
  .hero-area-content {
  bottom: -176px;

}

}

@media(min-width:768px){
  .title {
    font-size: 3.4rem;
  }
  
}
</style>
