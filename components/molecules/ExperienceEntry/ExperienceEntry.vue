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
  display: flex;
  width: 10rem;
  justify-content: space-around;
  gap: 0.5rem;
}
</style>
