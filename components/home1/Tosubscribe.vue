<template name="contacto">
<client-only>
<section class="py-0" id="contacto">
  <div class="d-flex justify-content-center bg-blue parallax">
    <div class="row m-0 d-flex justify-content-center flex-column my-5">
      <h2 class="text-center title mb-4">Contactanos</h2>
      <p class="text-center desc mb-4">Suscríbete a nuestro club y recibe todos los beneficios.</p>

      <b-form  @submit.stop.prevent="submitData()">
        <div class="p-2 row mx-0 text-center d-flex justify-content-center flex-row designForm"  id="feedback-user">
          <div class="col-xs-4 col-sm-4 col-md-8">
            <b-form-input class="input-email" autocomplete="off" v-model="email" placeholder="">
          </b-form-input></div>
          <div class="g-recaptcha" data-sitekey="6LcaEwsfAAAAAJgw5TonP2BmhKKqzYoKet3GTSfo"></div>
          <div class="col-xs-4 col-sm-4 col-md-2">
            <b-button type="submit" class="theme-btn">Enviar</b-button>
          </div>
        </div>

        <b-form-invalid-feedback :state="validation">
          El email ingresado no es valido.
        </b-form-invalid-feedback>
        <h6 :class="`text-center py-3 ${color}`" v-if="succesmsg">
          {{this.msg}}
        </h6>
      </b-form>
  </div>
  </div>
  </section>
</client-only>
</template>

<script>
  export default {
    name: 'Tosubscribe',
    data() {
      return {
        email: '',
        succesmsg: false,
        msg: ''
      }
    },
    computed: {
      validation() {
        if (this.email.length > 0) {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(this.email)
        }
      }
    },
    methods: {
      submitData() {
        if(this.validation) {
          fetch('https://formspree.io/f/myyodykd', {
              method: 'POST',
              body: JSON.stringify({
                email: this.email,
                message: "Quiero suscribirme a veranolab"
              }),
              headers: {
                'Accept': 'application/json'
              }
            }).then(response => {
              console.log('respuesta: ', response.status);
              if(response.status == 200) {
                this.color= 'color-s';
                this.succesmsg = true;
                this.msg ="Gracias por tu suscripción!";
                this.email='';
              } else {
                this.color= 'color-r';
                console.log('error: ', error);
                this.succesmsg ='danger';
                this.msg='Oops! There was a problem submitting your form';
                this.email='';
              }
            })
        } else {
          console.log(false);
        }
      }
    }
  }
</script>
<style scoped>

  .parallax {
    /* The image used */
    background-image: url("@/assets/img/1x/bannerfinal.png") !important;

    /* Set a specific height */
    min-height: 500px;
    padding: 150px 30px 190px;
    width: 100%;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor:pointer;
  }
  .title {
   color: #F07533;
   font-family: 'Roboto-Bold';
  }

  .color-r {
    color: rgb(252, 72, 72);
  }
  .color-s {
    color: #25BC8E;
  }

  .desc {
    color: #F07533;
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
  }

  input:-internal-autofill-selected {
    background-color: #fff !important;
  }

  .theme-btn {
    padding: 0;
    border: 0;
    width: 100px;
    line-height: 50px;
     background-color: #F07533;

  }
  .theme-btn:hover {
    background-color: #d35e1f;
    border-color: #F07533;
    color: white;
  }

  .designForm {
    display: block;
    padding: 10px;
    background-color: #fff;
    border-radius: 32px 32px 32px 32px;
  }

  .designForm .input-email {
    background-color: transparent;
    width: 100%;
  }
</style>