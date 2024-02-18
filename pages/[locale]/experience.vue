<template>
  <section class="experience">
    <SectionHeadline line1="Explore My" line2="Experience" />
    <div class="experience__container-wrapper">
      <div class="experience__details-container">
        <h2 class="experience__container-title">Frontend Development</h2>
        <div class="experience__container-skills">
          <ExperienceEntry skill="Nuxt" level="Experienced" />
          <ExperienceEntry skill="React" level="Intermediate" />
          <ExperienceEntry skill="Python" level="Intermediate" />
          <ExperienceEntry icon="verified" skill="Java" level="Experienced" />
          <ExperienceEntry icon="verified" skill="Swift" level="Intermediate" />
        </div>
      </div>
      <div class="experience__details-container">
        <h2 class="experience__container-title">Scrum Master</h2>
        <div class="experience__container-skills">
          <ExperienceEntry skill="Events" level="Experienced" />
          <ExperienceEntry skill="Scrum Guide" level="Experienced" />
          <ExperienceEntry skill="Kanban" level="Intermediate" />
          <ExperienceEntry skill="Waterfall" level="Intermediate" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.experience {
  position: relative;

  &__container-wrapper {
    @apply gap-y-9;
    @apply mt-8;
    @apply mb-4;
    @apply flex flex-col;
  }

  &__details-container {
    padding: 1.5rem;
    background: white;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
    text-align: center;
  }

  &__container-skills {
    display: flex;
    text-align: initial;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2.5rem;
    justify-content: space-around;
  }

  &__container-title {
    @apply text-grey-16;
    @apply font-bold;
    @apply text-2xl;
    @apply mb-8;
  }
}
</style>
