<template>
<client-only>
  <div class="social">
    <div class="social-items">
      <a class="my-1" href="https://wa.me/+573153092054?text=Hola%20Veranolab,%20quiero%20mas%20información%20de%20sus%20productos" target="_blank" >
        <img class="social-items-img" src="@/assets/img/icons/whatsapp.png" alt="Facebook" srcset="@/assets/img/icons/whatsapp.png" loading="lazy">
      </a>
    </div>
  </div>
</client-only>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.social {
  position:fixed;
  right:2rem;
  bottom:-1rem;
  transform:translateY(-50%);
  z-index: 300;
  padding: 0 .5rem;

  &-items {
    display: flex;
    flex-direction: column;
    &-img {
      width: 4rem;
    }
  }
}
  @media(max-width: 766px) {
    .social {
      display: none;
    }
  }
</style>