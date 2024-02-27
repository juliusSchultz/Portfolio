<template>
  <section class="profile">
    <div class="profile__pic-container">
      <img src="~/assets/images/profile.png" alt="Profile picture" />
    </div>
    <div class="profile__text">
      <p class="profile__text--p1">👋 {{ $t('indexPage.introduction') }}</p>
      <h1 class="profile__title">{{ $t('indexPage.name') }}</h1>
      <p class="profile__text--p2">{{ $t('indexPage.jobTitle') }}</p>
      <div class="profile__btn-container">
        <Button
          :to="`https://www.diva-e.com/${locale}/`"
          :label="$t('indexPage.companyButtonLabel')"
          variant="secondary"
          class="profile__btn"
          icon="apartment"
        />
        <Button
          to="./contact"
          :label="$t('indexPage.contactButtonLabel')"
          variant="secondary"
          shape="outlined"
          class="profile__btn"
          icon="connect_without_contact"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { locale } = useI18n()

useSeoMeta({
  title: 'Julius Schultz - Web Development',
  ogTitle: 'Julius Schultz - Web Development',
  description:
    'This is the website of the software developer Julius Schultz. Go check it out!',
  ogDescription:
    'This is the website of the software developer Julius Schultz. Go check it out!',
  ogImage: 'https://www.juliusschultz.com/_nuxt/profile.BipV7A1d.png',
  twitterCard: 'summary_large_image',
})
</script>

<style>
.profile {
  @apply flex;
  @apply flex-col;
  @apply justify-center;
  @apply my-10;
  @apply gap-y-8;
  @apply items-center;

  @screen md {
    @apply flex-row;
    @apply gap-x-20;
    @apply my-20;
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

  &__title {
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
