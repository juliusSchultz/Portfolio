<template>
  <section class="profile">
    <div class="profile__pic-container">
      <NuxtImg src="profile.png" alt="Profile picture" />
    </div>
    <div class="profile__text">
      <p class="profile__text--p1">👋 Hello, I'm</p>
      <h1 class="profile__title">Julius Schultz</h1>
      <p class="profile__text--p2">Frontend Developer</p>
      <div class="profile__btn-container">
        <Button
          to="https://www.diva-e.com/de/"
          label="Company"
          variant="secondary"
          class="profile__btn"
          icon="apartment"
        />
        <Button
          to="./contact"
          label="Contact"
          variant="secondary"
          shape="outlined"
          class="profile__btn"
          icon="connect_without_contact"
        />
      </div>
    </div>
  </section>
</template>

<style>
.profile {
  @apply flex flex-col;
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
