<template>
  <Carousel
    :items-to-show="3.95"
    :wrap-around="true"
    :transition="1000"
    :breakpoints="breakpoints"
    :autoplay="1000"
    :pause-autoplay-on-hover="true"
  >
    <slot name="slides">
      <Slide v-for="slide in 10" :key="slide">
        <div class="carousel__item" />
      </Slide>
    </slot>

    <template #addons>
      <Pagination />
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'GenericCarousel',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  setup() {
    const breakpoints = {
      0: {
        itemsToShow: 1,
      },
      576: {
        itemsToShow: 1.95,
      },
      768: {
        itemsToShow: 2.95,
      },
      1200: {
        itemsToShow: 3.95,
      },
    }

    return {
      breakpoints,
    }
  },
})
</script>

<style>
.carousel {
  &__item {
    @apply rounded-2xl;
    padding: 20px;
  }

  &__pic {
    @apply w-[210px] h-[297px];
    @apply rounded-2xl;
  }
}
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  padding-top: 20px;
  padding-bottom: 20px;
  perspective: 2000px;
}

.carousel__pagination {
  @apply pt-10;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
}
</style>
