<template>
  <div class="home home-1" id="list-of-sections">
    <Header1 />
    <Banner :data="banner"/>
    <BlogClassicSection />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header1 from '@/components/Header1.vue'
import Banner from '@/components/contacts/Banner.vue'
import BlogClassicSection from '@/components/blogs/BlogClassicSection.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'BlogClassic',
  components: {
    Header1,
    Banner,
    BlogClassicSection,
    Footer,
  },
  data() {
    return {
      banner: {
        title: 'Blog',
        image: require('~/assets/img/contact/contactbanner.jpg')
      }
    }
  }
}
</script>