<template>
  <section class="social-media">
    <SocialMediaIconLink
      v-for="(item, index) in socialMedia"
      :key="index"
      class="social-media__icon"
      v-bind="item"
    />
  </section>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SocialMedia',
  props: {
    socialMedia: {
      type: Array,
      default: /* istanbul ignore next */ () => [],
    },
  },
})
</script>

<style lang="scss">
.social-media {
  @apply col-span-full;
  @apply py-6;
  @apply flex justify-center gap-6;

  @screen md {
    @apply py-10;
  }

  &__icon {
    @apply text-grey-48;
    @apply p-1;
    @apply transition-colors ease-out;

    &:hover {
      @apply text-grey-32;
    }

    @screen md {
      @apply p-3;
    }
  }
}
</style>
