<template>
  <div class="home home-2" id="list-of-sections">
    <Header1/>
    <Mainbanner/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header1 from '@/components/Header1.vue';
import Mainbanner from '@/components/home1/Mainbanner.vue';
import Footer from '@/components/Footer.vue';
export default {

  components: {
    Header1,
    Mainbanner,
    Footer
  },
  head() {
      return {
        title: 'Categoria::',
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: 'description',
            name: 'description',
            content: 'En esta pagina encontraras material relacionado a un tema especifico, espero lo disfrutes.'
          }
        ],
        link: [
        {
          rel: 'canonical',
          href: window.location.href
        }
        ]
      }
    }
}
</script>