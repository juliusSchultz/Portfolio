<template>
  <NuxtLink :to="to" target="_blank" rel="external">
    <Icon class="social-media__icon" v-bind="{ icon, title }" type="svg" />
  </NuxtLink>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SocialMediaIconLink',
  props: {
    icon: {
      type: String,
      required: true,
      validator: (val) => ['linkedin', 'github'].includes(val),
    },
    /**
     * The icon title for accessibility
     */
    title: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
  },
})
</script>
