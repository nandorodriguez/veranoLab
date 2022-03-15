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
  }
}
</script>