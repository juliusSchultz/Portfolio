<template>
  <section class="about">
    <SectionHeadline
      :line1="$t('aboutPage.sectionHeadline1')"
      :line2="$t('aboutPage.sectionHeadline2')"
    />
    <p class="about__text">
      {{ $t('aboutPage.introduction1') }}
      <br />
      <br />
      {{ $t('aboutPage.introduction2')
      }}<NuxtLink
        v-if="locale !== 'zh'"
        class="about__text--inline-link"
        :to="`https://www.diva-e.com/${locale}/`"
        >#divae</NuxtLink
      >
    </p>
    <img
      src="../../assets/images/blick-nach-oben.jpeg"
      :alt="$t('aboutPage.profilePictureAlt')"
      class="about__pic"
    />
    <div class="about__experience-wrapper">
      <div class="about__experience-container">
        <Icon
          class="about__experience-icon"
          icon="cast_for_education"
          size="large"
        />
        <div class="about__experience-text">
          <h3 class="about__experience-text--headline">
            {{ $t('aboutPage.education.label') }}
          </h3>
          <p class="about__experience-text--description">
            {{ $t('aboutPage.education.bachelor') }}
            <br />
            {{ $t('aboutPage.education.university') }}
          </p>
        </div>
      </div>
      <div class="about__experience-container">
        <Icon class="about__experience-icon" icon="work_history" size="large" />
        <div class="about__experience-text">
          <h3 class="about__experience-text--headline">
            {{ $t('aboutPage.workExperience.label') }}
          </h3>
          <p class="about__experience-text--description">
            {{ $t('aboutPage.workExperience.time') }}
            <br />
            {{ $t('aboutPage.workExperience.profession') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>

<style>
.about {
  @apply flex flex-col;

  &__text {
    text-align: center;
    @apply mb-14;

    &--inline-link {
      @apply text-blue;

      &:hover {
        @apply text-blue-lighter;
        @apply underline;
      }
    }
  }

  &__pic {
    @apply w-[400px] h-[400px];
    @apply rounded-2xl;
    @apply self-center;
    @apply mb-14;
  }

  &__experience-wrapper {
    @apply flex flex-col;
    @apply justify-between;
    @apply gap-6;

    @screen md {
      @apply flex-row;
    }
  }

  &__experience-container {
    width: 100%;
    @apply text-white;
    @apply bg-grey-32;
    @apply rounded-2xl;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__experience-icon {
    @apply h-full;
    @apply flex;
    @apply items-center;
    @apply px-[46px];
    @apply py-[64px];
    @apply bg-blue;
    @apply rounded-l-2xl;

    @screen lg {
      @apply py-[50px];
    }
  }

  &__experience-text {
    @apply flex flex-col;
    @apply gap-y-2;
    @apply py-5;
    @apply px-12;
    @apply w-full;

    &--headline {
      @apply text-base;
    }

    &--description {
      @apply font-thin;
      @apply text-sm;
    }
  }
}
</style>
