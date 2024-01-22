<template>
  <label v-if="label" :for="tagName" class="pv-label">
    <span>{{ label }}</span>
    <span v-if="optional" class="pv-label__optional">Optional</span>
  </label>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PvLabel',
  props: {
    /**
     * The text displayed over the form component on the left
     */
    label: {
      type: String,
      default: '',
    },
    /**
     * The optional prop, which defines if the form component is optional
     */
    optional: {
      type: Boolean,
      default: false,
    },
    /**
     * The tag name of the component the label is for
     */
    tagName: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss">
.pv-label {
  @apply text-grey-16;
  @apply flex;
  @apply justify-between;

  &__optional {
    @apply text-grey-64;
  }
}
</style>
