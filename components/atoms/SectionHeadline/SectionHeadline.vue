<template>
  <div class="section-headline">
    <span v-if="line1" class="section-headline__headline--1">{{ line1 }}</span>
    <h3 v-if="line2" class="section-headline__headline--2">{{ line2 }}</h3>
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
  @apply text-center;

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
