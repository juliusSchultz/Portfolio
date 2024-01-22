<template>
  <div class="error-message">
    {{ errorMessage }}
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorMessage',
  props: {
    /**
     * The error message displayed under the form component
     */
    errorMessage: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss">
.error-message {
  @apply block;
  @apply px-2;
  @apply py-1;
  @apply border-2;
  @apply rounded-b-md;
  @apply border-red;
  @apply bg-red;
  @apply text-xs;
  @apply text-white;
  @apply w-full;
}
</style>
