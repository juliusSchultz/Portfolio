<template>
  <div class="section-headline">
    <h6 class="section-headline__headline--1">{{ line1 }}</h6>
    <h1 class="section-headline__headline--2">{{ line2 }}</h1>
  </div>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SectionHeadline',
  props: {
    line1: {
      type: String,
      default: '',
    },
    line2: {
      type: String,
      default: '',
    },
  },
})
</script>

<style>
.section-headline {
  margin-bottom: 40px;
  @apply text-grey-16;

  &__headline {
    &--1 {
      @apply text-grey-32;
      text-align: center;
    }

    &--2 {
      font-size: 3rem;
      text-align: center;
      @apply font-bold;
    }
  }
}
</style>
