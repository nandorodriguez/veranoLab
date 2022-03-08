<template>
  <div class="home home-1" id="list-of-sections">
    <Header1/>
    <Banner :data="banner"/>
    <Ourbenefits :ourbenefit="benefits"/>
    <Offer :offeri="offeri"/>
    <Gallery :images="imgs"/>
    <About :abt="about"/>
    <Testimonial :opinions="opt"/>
    <Footer/>
  </div>
</template>
<script>
import Header1 from '@/components/Header1.vue'
import Banner from '@/components/contacts/Banner.vue'
import Ourbenefits from '@/components/service/Ourbenefits.vue'
import Offer from '@/components/service/Offer.vue'
import Gallery from '@/components/home1/Gallery.vue'
import About from '../../components/home1/About.vue'
import Testimonial from '@/components/home1/Testimonial.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Header1,
    Banner,
    Ourbenefits,
    Offer,
    Gallery,
    About,
    Testimonial,
    Footer,

  },
  data() {
    return {
      benefits:{
        title: 'Benefits to Setting Up Your Startup in Our Coworking Space',
        subtitle: 'OUR BENEFITS',
        desc: 'We are proud of what we have come up to at our center! Only here you get to enjoy with talented people who work in different areas, designers, photographers, engineers etc. ',
        list: [
          'Actual office space that promoting productivity',
          'Meaningful connections with your team',
          'Increased productivity to get some work done'
        ],
        textbtn: 'Schedule My Tour',
        urlbtn: '#',
        image: 'https://demo2wpopal.b-cdn.net/co-workshop/wp-content/uploads/2018/11/bannercw1-2.jpg'
      },
      offeri: {
        title: 'What We Offer',
        subtitle: 'LEARN AND GROW',
        desc: 'We are a community of bold minds who have decided to work under the same roof. Our workspace and the people around us inspire us to take action, to grow, to do better. By saying that our coworking space.',
        gallery: [
          {
            title: 'Private Office',
            desc: 'Drop in whenever you or your team need',
            image: 'https://demo2wpopal.b-cdn.net/co-workshop/wp-content/uploads/2018/11/h4_img_sec4_11.jpg'
          },
          {
            title: 'Private Office2',
            desc: 'Drop in whenever you or your team need',
            image: 'https://demo2wpopal.b-cdn.net/co-workshop/wp-content/uploads/2018/11/h4_img_sec4_11.jpg'
          },
          {
            title: 'Private Office3',
            desc: 'Drop in whenever you or your team need',
            image: 'https://demo2wpopal.b-cdn.net/co-workshop/wp-content/uploads/2018/11/h4_img_sec4_11.jpg'
          },
          {
            title: 'Private Office4',
            desc: 'Drop in whenever you or your team need',
            image: 'https://demo2wpopal.b-cdn.net/co-workshop/wp-content/uploads/2018/11/h4_img_sec4_11.jpg'
          },
        ]
      },
      imgs: [
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
          'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg'
      ],

      about: {
        subtitle: 'ABOUT US',
        title: 'Community, creativity,<br>comfort & more',
        description: 'We are a community of bold minds who have decided to work under the same roof. Our workspace and the people around us inspire us to take action, to grow, to do better. By saying that our coworking space is sustainable and comfy we confirm that you will get 100% satisfaction from working here and making the best out of this experience.',
        textbtn: 'Leam more',
        urlbtn: '#',
      },
      opt: {
        title: 'People Talkings<br> About US',
        subtitle:'Testimonial',
        desc: '...una forma distinta de ver el trabajo, que intenta que este sea una parte integral del estilo de vida, y no compartimentos diferenciados de trabajo y ocio. En LifeBreak podrás trabajar cómodamente además de disfrutar de las instalaciones y las variadas actividades que ofrecemos. El propósito de nuestro coliving es crear un ambiente internacional y relaciones que vayan más allá de lo profesional, buscando interacciones de aprendizaje y colaboración entre los profesionales que lo habitan y los voluntarios internacionales que ayudan en el proyecto.',
        boxs: [
          {
            title: 'COWORKING',
            image:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg'
          },
          {
            title: 'SERVICIOS',
            image:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg'
          },
          {
            title: 'ROOMS',
            image:'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg'
          }
        ],
        background: 'url(https://demo2wpopal.b-cdn.net/co-workshop/wp-content/uploads/2018/11/bgoc-1.png)'
      },
      banner: {
        title: 'Programa Inglés',
        image: require('~/assets/img/contact/contactbanner.jpg')
      }
    }
  }
}
</script>