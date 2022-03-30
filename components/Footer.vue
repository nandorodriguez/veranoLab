<template>
<client-only>
  <div>
    <!-- Footer Start -->
    <footer class="copyrightarea">
        <div class="">
            <div class="row m-0 d-flex justify-content-center">
                <img class="logo mb-5" src="../assets/img/1x/logoverano.png" alt="">
            </div>
            <div class="row m-0 d-flex justify-content-center align-items-center">
                <ul class="d-flex py-4 px-3 mx-3 flex-wrap justify-content-center">
                    <li><a class="item-footer  px-3 mb-5" href="/">INICIO</a></li>
                    <li><a class="item-footer  px-3 mb-5" href="/#programas">CURSOS</a></li>
                    <li><a class="item-footer  px-3 mb-5" href="/#nosotros">NOSOTROS</a></li>
                    <li><a class="item-footer  px-3 mb-5" href="/#contacto">CONTACTO</a></li>

                </ul>
            </div>
            <div class="row m-0 flex-nowrap align-items-center align-content-center content">
                <div class="col-md-5">
                    <div class="divisor"></div>
                </div>
                <div class="col-md-2">
                    <div class="row mx-0 d-flex flex-nowrap justify-content-center align-items-center align-content-center">
                        <div class="col-2 text-center">
                            <a target="blank" href="https://www.instagram.com/verano.lab/"><i class="fab fa-instagram"></i></a>
                        </div>
                        <div class="col-2 text-center">
                            <a target="blank" href="https://web.facebook.com/Verano-Lab-691355358386266"><i class="fab fa-facebook"></i></a>
                        </div>
                        <div class="col-2 text-center">
                            <a target="blank" href="https://www.youtube.com/channel/UCsAhEhDboJiBqF7MiJTkrtg"><i class="fab fa-youtube"></i></a>
                        </div>

                    </div>
                </div>
                <div class="col-md-5">
                    <div class="divisor"></div>
                </div>
            </div>
            <div class="row m-0 justify-content-center flex-column mt-5">
                <p class="text-white text-center mb-3">Contactanos en:  hola@veranolab.com</p>
                <p class="text-white text-center">Copyright © 2022 - Madatto&MOSScreativo</p>
            </div>
        </div>
    </footer>
    <!-- Footer End -->
  </div>
</client-only>
</template>

<script>

export default {
  name: 'Footer',
}
</script>
<style scoped>
    .copyrightarea {
        background-color: #25BC8E;
        padding: 120px 0;
    }


     .links {
       font-size: 24px;
       font-weight: 400;
       color: #fff;
     }
    .divisor {
        border-top: 1px solid #ffffff80;
        width:100%
    }
    .content {
        margin-top: 6rem;
    }

    i {
        color: #fff;
        font-size: 20px;
    }
    .item-footer{
        color:#fff;
    }
    .item-footer:hover{
        font-weight: bold;
    }


</style>