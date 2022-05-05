<template>
  <section v-if="body.urlLink" class="p-0">
    <a :href="body.urlLink" target="blank">
      <button class="btn-prom">
        <small>{{body.linkTexto}}</small>
      </button>
    </a>
  </section>
</template>
<script>
export default {
props:['body'],
data(){
    return {
      imagenes: {},
      imagenMain: ''
    }
  },
}
</script>
<style lang="scss" scoped>
.btn-prom {
  margin: 1rem auto;
  position: relative;
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 3rem;
  padding: 1.4rem 4.5rem ;
  background: rgb(255,147,17);
  background: linear-gradient(90deg, rgba(255,147,17,1) 23%, rgba(214,82,110,1) 100%);
  small {
    color: #fff;
    font-family: 'Roboto-Condensed',sans-serif;
    font-size: 1.8rem;
    text-transform: uppercase;
  }

  &:after {
    content: '\276D';
    font-size: 20px;
    position: absolute;
    right: 1.8rem;
    color: #fff;
  }

  &:hover {
    background: rgb(202,51,129);
    background: linear-gradient(90deg, rgba(202,51,129,1) 56%, rgba(255,147,17,1) 100%);
  }
}
</style>