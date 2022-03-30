<template>
  <div class="home home-1 " id="list-of-sections">
    <Header1/>
    <Banner1/>
    <Category/>
    <Galleryredes/>
    <Tosubscribe/>
    <Footer/>
    <Social/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header1 from '@/components/Header1.vue'
import Banner1 from '@/components/home1/Banner1.vue'
import Category from '@/components/home1/Category.vue'
import Galleryredes from '@/components/home1/Galleryredes.vue'
import Tosubscribe from '@/components/home1/Tosubscribe.vue'
import Footer from '@/components/Footer.vue'



export default {
  components: {
    Header1,
    Banner1,
    Category,
    Galleryredes,
    Tosubscribe,
    Footer
  },
  data() {
    return {
    }
  },
  scrollToTop: true
}
</script>
