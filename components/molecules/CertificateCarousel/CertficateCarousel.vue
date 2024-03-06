<template>
  <GenericCarousel>
    <template #slides>
      <slide :key="1">
        <div class="carousel__item">
          <img
            src="~/assets/images/Bestabsolventenurkunde-deutsch.png"
            alt="Bestabsolventenurkunde deutsch"
            class="carousel__pic"
          />
        </div>
      </slide>
      <slide :key="2">
        <div class="carousel__item">
          <img
            src="~/assets/images/Bestabsolventenurkunde-englisch.png"
            alt="Bestabsolventenurkunde english"
            class="carousel__pic"
          />
        </div>
      </slide>
      <slide :key="3">
        <div class="carousel__item">
          <img
            src="~/assets/images/ScrumMaster-Zertifikat.png"
            alt="Scrum Master certificate"
            class="carousel__pic"
          />
        </div>
      </slide>
      <slide :key="4">
        <div class="carousel__item">
          <img
            src="~/assets/images/Musikproduzent_ Julius.png"
            alt="Musikproduzent Zertifikat"
            class="carousel__pic"
          />
        </div>
      </slide>
    </template>
  </GenericCarousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'CertificateCarousel',
  components: {
    Slide,
  },
})
</script>

<style scoped>
.carousel {
  &__item {
    @apply rounded-2xl;
    padding: 20px;
  }

  &__pic {
    @apply w-[210px] h-[297px];
    @apply rounded-2xl;
    border-width: 1px;
    @apply text-grey-32;
    --tw-shadow: 0 12px 12px -12px rgba(51, 48, 0, 0.4);
    --tw-shadow-colored: 0 12px 12px -12px var(--tw-shadow-color);
    box-shadow: 0 0 #0000, 0 0 #0000, 0 12px 12px -12px rgba(51, 48, 0, 0.4);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
      var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  }
}
</style>
