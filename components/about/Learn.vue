<template>
  <div class="container">
    <div class="row mx-0 mg-y">
      <div class="col-12 col-sm-12 col-md-6 pr-md-5">
        <div class="row pr-md-5 mb-5">
          <b-img class="pr-md-5" src="@/assets/img/somos/1.png" fluid alt="Responsive image"></b-img>
        </div>
        <div class="row">
          <div class="col-md-8 pt-md-4 text-center mb-5 mb-md-0 text-md-right">
            <b-img class="pt-md-1" src="@/assets/img/somos/2.png" fluid alt="Responsive image"></b-img>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-6">
        <h3 class="subtitle"></h3>
        <h1 class="title">Un espacio de “coliving”</h1>
        <br>
        <p class="desc">Diferentes, versátiles y conscientes. Creemos que la vida en comunidad en la
            naturaleza es algo vital y que debemos fomentar. La tecnología nos brinda la
            posibilidad de conectarnos con el mundo y trabajar de forma remota, pero somos
            nosotros los responsables de decidir cómo aprovechar esa oportunidad para
            beneficiarnos lo máximo posible. Ingenieros, yogis, profesionales, profesores de
            idiomas, nómadas digitales, viajeros...
        </p>
        <br>
        <p class="desc">
          En nuestro equipo creemos que los pequeños detalles y la simpleza de las cosas
          hacen de la vida algo mágico, pueden significar tanto como para llegar a convertir un
          espacio de trabajo en algo más que una oficina, un lugar donde conectarse con uno
          mismo y crecer tanto personal como profesionalmente.
        </p>
        <br>
        <h1 class="title">Nuestros clientes</h1>
        <br>
        <p class="desc">
          Nuestro espacio abierto a todos los nómadas digitales que deseen vivir una
          experiencia inolvidable.
        </p>
        <br>
        <p class="desc">
          Nuestro número de plazas es limitado se dará prioridad a aquellos cuyo trabajo se
          desenvuelva en el campo de IT y desarrolladores software para establecer vínculos en
          este ámbito.
        </p>

      </div>
    </div>
  </div>
</template>
<style scoped>
.subtitle {
    font-family: "Mukta",Sans-serif;
    color: #888f96;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 64px;
    letter-spacing: 1.6px;
  }
  .title {
    font-size: 64px;
    font-weight: 500;
    line-height: 60px;
    letter-spacing: -3.2px;
    color: #1e3954;
    font-family: "Mukta",Sans-serif;
    word-wrap: break-word;
  }

  .desc {
    color: #888f96;
    font-size: 20px;
    font-family: "Mukta",Sans-serif;
    font-weight: 400;
    line-height: 1.667;
  }

  .mg-y {
    margin: 170px 0 50px 0;
  }

  @media(max-width: 768px) {
    .mg-y {
      margin: 50px 0 50px 0;
    }
  }
</style>