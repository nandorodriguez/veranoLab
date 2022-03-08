<template>
  <div>
    <div class="content-flex mt-5">
      <div
        class="cursor-pointer self-center px-8"
        @click.stop="prev"
        :class="{ invisible: !hasPrev() }"
      >
        <svg
          class="pointer-events-none"
          fill="#ccc"
          height="48"
          viewBox="0 0 24 24"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
          <path d="M0-.5h24v24H0z" fill="none" />
        </svg>
      </div>
      <div v-if="images" class="lightbox-image" @click.stop="">
        <div class="row d-flex justify-content-center my-4">
          <b-avatar  :src="images[index].src" size="10rem"></b-avatar>
        </div>
        <h1 class="text-center message">{{images[index].message}}</h1>
        <p class="my-1 text-center autor">{{images[index].autor}}</p>
        <p class="my1 text-center what">{{images[index].what}}</p>
      </div>
      <div
        class="cursor-pointer self-center px-8"
        @click.stop="next"
        :class="{ invisible: !hasNext() }"
      >
        <svg
          class="pointer-events-none"
          fill="#ccc"
          height="48"
          viewBox="0 0 24 24"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" />
          <path d="M0-.25h24v24H0z" fill="none" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Opinions',
  props: {
    images: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      visible: false,
      index: 0
    };
  },
  methods: {
    hasNext() {
      return this.index + 1 < this.images.length;
    },
    hasPrev() {
      return this.index - 1 >= 0;
    },
    prev() {
      if (this.hasPrev()) {
        this.index -= 1;
      }
    },
    next() {
      if (this.hasNext()) {
        this.index += 1;
      }
    },
    onKeydown(e) {
      if (this.visible) {
        switch (e.key) {
          case "ArrowRight":
            this.next();
            break;
          case "ArrowLeft":
            this.prev();
            break;
          case "ArrowDown":
          case "ArrowUp":
          case " ":
            e.preventDefault();
            break;
        }
      }
    }
  },
  mounted() {
    console.log(this.images[0].src);
    window.addEventListener("keydown", this.onKeydown);
  },
  destroyed() {
    window.removeEventListener("keydown", this.onKeydown);
  }
};
</script>

<style scoped>

.content-flex {
  background-color: #f8f9fe;
  padding: 0 !important;
}
.lightbox {
  background: rgba(0, 0, 0, 0.8);
}
.lightbox-image {
  padding: 10rem 0;
  width: 90%;
}
.lightbox-image img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: calc(100vh - 90px);
}
.message {
  font-family: 'Mukta', sans-serif;
  color: #888f96;
  font-weight: 400;
  font-size: 32px;
  line-height: 1.3em;
  letter-spacing: 0.8px;
  margin: 0px 0px 60px 0px;
  padding: 0 10vw;
}
.autor {
  font-family: 'Mukta', sans-serif;
  color: #55bbaf;
  font-weight: 400;
  font-size: 24px;
  letter-spacing: -1px;
}

.what {
  font-family: 'Mukta', sans-serif;
  color: #888f96;
  font-weight: 400;
  font-size: 24px;
}

.modal-header {
  border-bottom: inherit;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  padding: 1rem 2rem;
  margin: 0px 4rem;
  background-color: #00000090;
}

.modal-header .close {
  color: white;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 0rem 1rem;
}

.btng {
  background-color: transparent !important;
  border: none !important;
}
.btng:hover {
  background-color: transparent;
}

.content-flex {
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: nowrap;
}
.modal-content {
  background-color: inherit;
  border: inherit;
}
@media(max-width: 500px){
  .message {
    padding: 0 ;
  }
}
</style>
