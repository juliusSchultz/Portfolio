<template>
  <article class="experience-entry">
    <Icon :icon="icon" />
    <div>
      <h3>{{ skill }}</h3>
      <p>{{ level }}</p>
    </div>
  </article>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExperienceEntry',
  props: {
    icon: {
      type: String,
      default: 'verified',
    },
    skill: {
      type: String,
      default: '',
      required: true,
    },
    level: {
      type: String,
      default: '',
      required: true,
    },
  },
})
</script>

<style>
.experience-entry {
  @apply flex justify-around;
  @apply cursor-pointer;
  @apply w-40;
  @apply gap-x-2;
  @apply text-grey-16;

  &:hover {
    @apply text-grey-32;
  }
}
</style>
