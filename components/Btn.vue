<template>
  <section v-if="body.urlLink" class="p-0">
    <a :href="body.urlLink" target="blank">
      <div class="border-prom">
        <div class="btn-prom">
          <small>{{body.linkTexto}}</small>
        </div>
      </div>
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
  width: 100%;
  display: flex;
  position: relative;
  flex-direction: row;
  border-radius: 10px;
  padding: 2.8rem 3.1rem 2.8rem 1.2rem;
  background: rgb(255,147,17);
  background: linear-gradient(90deg, rgba(255,147,17,1) 23%, rgba(214,82,110,1) 100%);
  small {
    color: #fff;
    font-family: 'Roboto-Condensed',sans-serif;
    font-size: 20px;
    text-transform: uppercase;
  }

  &:after {
    content: '\276D\276D';
    font-size: 18px;
    position: absolute;
    right: 20px;
    color: #fff;
  }

  &:hover {
    background: rgb(202,51,129);
    background: linear-gradient(90deg, rgba(202,51,129,1) 56%, rgba(255,147,17,1) 100%);
  }
}
</style>