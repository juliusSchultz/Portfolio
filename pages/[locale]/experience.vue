<template>
  <section class="experience">
    <SectionHeadline
      :line1="$t('experiencePage.sectionHeadline1')"
      :line2="$t('experiencePage.sectionHeadline2')"
    />
    <div class="experience__container-wrapper">
      <div class="experience__details-container">
        <h2 class="experience__container-title">
          {{ $t('experiencePage.frontendDevelopment') }}
        </h2>
        <div class="experience__container-skills">
          <ExperienceEntry
            :skill="$t('experiencePage.nuxt')"
            :level="$t('experiencePage.experiencedLevel')"
          />
          <ExperienceEntry
            :skill="$t('experiencePage.react')"
            :level="$t('experiencePage.intermediateLevel')"
          />
          <ExperienceEntry
            :skill="$t('experiencePage.python')"
            :level="$t('experiencePage.intermediateLevel')"
          />
          <ExperienceEntry
            icon="verified"
            :skill="$t('experiencePage.java')"
            :level="$t('experiencePage.experiencedLevel')"
          />
          <ExperienceEntry
            icon="verified"
            :skill="$t('experiencePage.swift')"
            :level="$t('experiencePage.intermediateLevel')"
          />
        </div>
      </div>
      <div class="experience__details-container">
        <h2 class="experience__container-title">
          {{ $t('experiencePage.scrumMaster') }}
        </h2>
        <div class="experience__container-skills">
          <ExperienceEntry
            :skill="$t('experiencePage.events')"
            :level="$t('experiencePage.experiencedLevel')"
          />
          <ExperienceEntry
            :skill="$t('experiencePage.scrumGuide')"
            :level="$t('experiencePage.experiencedLevel')"
          />
          <ExperienceEntry
            :skill="$t('experiencePage.kanban')"
            :level="$t('experiencePage.intermediateLevel')"
          />
          <ExperienceEntry
            :skill="$t('experiencePage.waterfall')"
            :level="$t('experiencePage.intermediateLevel')"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.experience {
  @apply relative;

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
