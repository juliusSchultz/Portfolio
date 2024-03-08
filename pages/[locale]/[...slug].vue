<template>
  <section class="profile">
    <div class="profile__picture-with-text">
      <div class="profile__pic-container">
        <img src="~/assets/images/profile.png" alt="Profile picture" />
      </div>
      <div class="profile__text">
        <span class="profile__text--p1"
          >👋 {{ $t('indexPage.introduction') }}</span
        >
        <h1 class="profile__title">{{ $t('indexPage.name') }}</h1>
        <h2 class="profile__text--p2">{{ $t('indexPage.jobTitle') }}</h2>
        <div class="profile__btn-container">
          <Button
            :to="`https://www.diva-e.com/${locale}/`"
            :label="$t('indexPage.companyButtonLabel')"
            variant="secondary"
            class="profile__btn"
            icon="apartment"
          />
          <Button
            to="/contact"
            :label="$t('indexPage.contactButtonLabel')"
            variant="secondary"
            shape="outlined"
            class="profile__btn"
            icon="connect_without_contact"
          />
        </div>
      </div>
    </div>
    <div class="profile__about">
      <SectionHeadline :line2="$t('aboutPage.sectionHeadline2')" />
      <p class="profile__about-me">
        {{ $t('aboutPage.introduction1') }}
        <br />
        <br />
        {{ $t('aboutPage.introduction2')
        }}<NuxtLink
          v-if="locale !== 'zh'"
          class="profile__about-me--inline-link"
          :to="`https://www.diva-e.com/${locale}/`"
          >#divae</NuxtLink
        >
      </p>
    </div>
    <div class="profile__certificates">
      <SectionHeadline :line2="$t('experiencePage.certificates')" />
      <div class="profile__certificate-elements">
        <CertficateCarousel />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()
defineOgImageComponent('BrandedLogo', {
  headline: 'Julius Schultz',
  title: 'Hello, I am Julius Schultz 👋💻',
})
</script>

<style>
.profile {
  @apply flex flex-col;
  @apply gap-y-36;
  @apply my-10;

  @screen md {
    @apply my-20;
  }

  &__picture-with-text {
    @apply flex;
    @apply flex-col;
    @apply justify-center;
    @apply gap-y-8;
    @apply items-center;

    @screen md {
      @apply flex-row;
      @apply gap-x-20;
    }
  }

  &__pic-container {
    @apply flex;
    @apply w-[280px] h-[280px];

    @screen lg {
      @apply w-[400px] h-[400px];
    }
  }

  &__text {
    @apply self-center;
    @apply text-center;
    @apply font-semibold;

    &--p1 {
      @apply text-grey-32;
    }

    &--p2 {
      @apply text-2xl;
      @apply mb-4;
      @apply text-grey-32;
    }
  }

  &__about-me {
    &--inline-link {
      @apply text-blue;

      &:hover {
        @apply text-blue-lighter;
        @apply underline;
      }
    }
  }

  &__title {
    @apply text-grey-16;
    @apply text-5xl;
    @apply text-center;
  }

  &__btn-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  &__btn {
    transition: all 100ms ease;

    &:hover {
      font-style: italic;
      box-shadow: 0 0 10px 5px rgba(5, 19, 255, 0.3);
    }
  }
}
</style>
