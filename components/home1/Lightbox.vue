<template>
    <div>
      <b-button v-if="nameModal" class="btng" href="#" @click="$bvModal.show(nameModal)" >
          <slot name="image"></slot>
      </b-button>
      <div>

        <b-modal :id="`modal-${idx}`" size="xl" centered  :hide-footer="true">
            <div class="content-flex">
                    <div class="cursor-pointer self-center px-8"
                    @click.stop="prev()"
                    :class="{'invisible': ! hasPrev()}"
                    >
                        <svg class="pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                        <path d="M0-.5h24v24H0z" fill="none"/>
                        </svg>
                    </div>
                <div class="lightbox-image" @click.stop="">
                  <img class="w-100" :src="images[index]">
              </div>
              <div class="cursor-pointer self-center px-8"
                   @click.stop="next()"
                   :class="{'invisible': ! hasNext()}">
                  <svg class="pointer-events-none" fill="#fff" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                      <path d="M0-.25h24v24H0z" fill="none"/>
                  </svg>
              </div>
          </div>
        </b-modal>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Lightbox',
    props: {
        thumbnail: {
            type: String,
            required: true,
        },
        images: {
            type: Array,
            default: () => [],
        },
        idx: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {
            visible: false,
            index: 0,
            nameModal: 'modal-' + this.idx
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
                    case 'ArrowRight':
                        this.next();
                        break;
                    case 'ArrowLeft':
                        this.prev();
                        break;
                    case 'ArrowDown':
                    case 'ArrowUp':
                    case ' ':
                        e.preventDefault();
                        break;
                }
            }
        },
    },
    mounted() {
        this.index =this.idx;
        window.addEventListener('keydown', this.onKeydown)
    },
    destroyed() {
        window.removeEventListener('keydown', this.onKeydown)
    },
};
</script>

<style>
.lightbox {
    background: rgba(0, 0, 0, 0.8);
}
.lightbox-image img {
    width:100%;
    height: auto;
}

.modal-header {
    border-bottom: inherit;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    padding: 1rem 2rem;
    margin: 0px 4rem;
    background-color: #428a70;
}

.modal-header .close {
    color:white
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
.btng:hover{
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
</style>