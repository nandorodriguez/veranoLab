<template>
  <div>
    <div class="container pt-5">
      <div class="row m-0">
        <div class="col-12 col-lg-5 pb-5">
          <p class="sub-title">LIFEBREAK BY IMUKO</p>
          <h1 class="main-title d-flex justify-content-center">
            Se parte de nuestra experiencia
          </h1>
        </div>
        <div class="col-12 col-lg-7 m-0 ">
          <h2 class="Sub-titler text-left">Déjanos tu contacto:</h2>
         <div class="row ">
           <div class="col-12">
              <span class="inputtext ">
            <div class="efect">
              <input
                class="inputr"
                type="text"
                name="your-name"
                value
                size="40%"
                aria-required="true"
                aria-invalid="false"
                placeholder="Nombre"
              />
            </div>
          </span>
           </div>
         </div>

         <div class="row ">
            <div class="col-12">
              <span class="inputtext">
            <div class="efect">
              <input
                class="inputr"
                type="text"
                name="E-mail"
                value
                size="40%"
                aria-required="true"
                aria-invalid="false"
                placeholder="Email"
              />
            </div>
          </span>
            </div>
         </div>
          <div class="row ">
           <div class="col-12">
              <span class="inputtext  ">
            <div class="efect ">
              <input
                class="inputrm "
                type="text"
                name="Message"
                value
                size="40%"
                aria-required="true"
                aria-invalid="false"
                placeholder="Mensaje"
              />
            </div>
          </span>
           </div>
          </div>

        </div>
        <div
          class=" hero-button-box box-btn col-12 offset-md-5 mt-5 text-md-left text-sm-center text-center pb-5"
        >
          <button class="theme-button ">Enviar</button>
        </div>
      </div>
    </div>
    <div class="container-fluid px-0">
      <div class="row m-0 ">
        <div class="col-12 px-0">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.597202464541!2d-75.2233040848039!3d6.184626728724663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46a7999d1506eb%3A0xde7e5adc664f658b!2sLifebreak!5e0!3m2!1ses-419!2sco!4v1632513848490!5m2!1ses-419!2sco"
          height="280"
          style="border:0;"
          frameborder="0"
          allowfullscreen
          loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.sub-title {
  font-size: 16px;
  font-weight: 550;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: rgba(136, 143, 150, 0.6);
}
.main-title {
  font-size: 50px;
  font-weight: 600;
  letter-spacing: -1.4px;
  font-family: "Mukta", -apple-system, BlinkMacSystemFont, Sans-serif;
}
.Sub-titler {
  font-size: 18px;
  font-weight: 550;
  font-family: "Mukta", -apple-system, BlinkMacSystemFont, Sans-serif;
  color: #1e3954;
}

.efect {
  width: 0px;
  border-bottom: 2px solid #55bbaf;
  transition: width 1s;


}

.inputtext:hover .efect {
  width: 100%;
}

.inputr {
  font-size: 16px;
  font-weight: 400;
  color: rgba(136, 143, 150, 0.6);
  background-color: transparent;
  border-style: solid;
  border-width: 0 0 2px;
  border-color: rgba(188, 188, 188, 0.2);
  padding: 10px 0;
  height: 70px;


}
.inputrm {
  font-size: 16px;
  font-weight: 400;
  color: rgba(136, 143, 150, 0.6);
  background-color: transparent;
  border-style: solid;
  border-width: 0 0 2px;
  border-color: rgba(188, 188, 188, 0.2);
  padding: 10px 0;
  height: 140px;
}

.efect:focus-within {
  width: 100%;
  border-bottom: 2px solid #55bbaf;
}
.call {
  font-size: 24px;
  letter-spacing: -1.2px;
  color: #55bbaf;
}
iframe {
  max-width: 100%;
  width: 100%;
  margin: 0;
  line-height: 1;
}

</style>
