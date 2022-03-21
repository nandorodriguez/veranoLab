
export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'veranolab',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.2.5/jquery.fancybox.min.css" },
      { href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css", rel:"stylesheet", integrity: "sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN", crossorigin:"anonymous"},
    ],
    scripts: [
      { src: "//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"},
      { src: "https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.4.1/jquery.fancybox.min.js" }
    ]
  },

  graphql: {
    clients: {
      default: {
        endpoint: 'https://api-us-west-2.graphcms.com/v2/cl0b8uzbw3cxo01z75q35ajvm/master',
        options: {
          headers: {
            authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NDcyODI2NDEsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuZ3JhcGhjbXMuY29tL3YyL2NsMGI4dXpidzNjeG8wMXo3NXEzNWFqdm0vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZjcxMzA0MTQtMWUyYy00ZWU2LWJlNDQtNmY5NjA1M2ZlZmJhIiwianRpIjoiY2wwcjFqd2sxMGh5ZzAxejhiZjFlOGR1ZSJ9.xJD_FiKi38RoFKG9LkrThuHw5M6i20xKwr3rjzOlC-Pc0hSKbLuTXpbzqN1zXlBd3g06LoUwD7m56aPIwiiLLdwOdkDjncTVcXx5aRaXAzvk-Q6t9OjjryvIyDvM88rP7Ql_MMfdtLZu_7D6LLe6Yj7O7mrBNBopMbQr9-cZjkHXOVGcZFfEzJl52M7Vw7z7SsIDo8F9dG29JCkl5-LVYLPARROCqOyOL6VesTb8gFhmQ3iriOL5m4uIsG9HACIIxkZvvybyZ35bJi6KXDzNZgYsWAT91F3lS7q6k2uG0J1C9OIBGXXU98D4vg27kRC8XHOSW4eOipacf5Pe3EeMpTuVssLrrsMwFenGzCpDi9ev0WaUPO2UUIgwKlmvJpNK-YnJ3L8eHKxDRJJNHeyU3IVbxr_4EvOH2kQN2GxHgC_tr6YwueckFZMAqsyR6_TbhUdQYRIvf1GQj_TR5YIx9qK0QAmBUdMmCKum1nfK-ac4BDvTa8nIxPv0PGCMhN7CgkXNNAU6J9Js1bKD_YKvStAMYGCYKgBDbJOdLyIXY1M8uMf9sRcT2pus5I37oEF4gqY2eCKDvxVi7vWa_KNqkamIIl2eMWWxBhyb_XKR4nYdwAz0aQ0ZaKOTNl4gR85TC5-dsWvLoo0VaeJAYBq_4Y9PcPQ1mFjOeKbvPg2dOIM',
          },
        },
      },
    },
    useFetchPolyfill: true,
    includeNodeModules: true,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/style.css',
    '~/assets/app.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/main.js'},
    {src: '~/plugins/lightbox.js', ssr: false},
    {src: '~/plugins/carousel.js', ssr: false},
    {src: '~/plugins/aos.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-graphql-request'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],
  static: {
    prefix: false
  },
  generate: {
    fallback: true
  },
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'custom',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      })
    }
  },
  // // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
