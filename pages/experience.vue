<template>
  <section class="experience">
    <SectionHeadline line1="Explore My" line2="Experience" />
    <div class="experience__container-wrapper">
      <div class="experience__details-container">
        <h2 class="experience-sub-title">Frontend Development</h2>
        <div class="experience__article-container">
          <ExperienceEntry skill="Nuxt" level="Experienced" />
          <ExperienceEntry skill="React" level="Intermediate" />
          <ExperienceEntry skill="Python" level="Intermediate" />
          <ExperienceEntry icon="verified" skill="Java" level="Experienced" />
          <ExperienceEntry icon="verified" skill="Swift" level="Intermediate" />
        </div>
      </div>
      <div class="experience__details-container">
        <h2 class="experience-sub-title">Scrum Master</h2>
        <div class="experience__article-container">
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
    flex: 1;
    background: white;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
    text-align: center;
    cursor: pointer;
  }

  &__article-container {
    display: flex;
    text-align: initial;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 2.5rem;
    justify-content: space-around;
  }

  &__icon {
    cursor: default;
    width: 30px;
    height: 30px;
  }
}

.experience-sub-title {
  color: rgb(85, 85, 85);
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 2rem;
}
</style>
