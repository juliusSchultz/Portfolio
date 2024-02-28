<template>
  <div class="success">
    <SectionHeadline
      :line1="$t('form.success.sectionHeadline1')"
      :line2="$t('form.success.sectionHeadline2')"
    />
    <Icon class="success__icon" size="xlarge" icon="check_circle" />
    <div class="success__description">
      <p>{{ $t('form.success.successMessage1') }}</p>
      <p>{{ $t('form.success.successMessage2') }}</p>
    </div>
    <Button
      to="/"
      class="success__button"
      :label="$t('form.success.button')"
      icon="arrow_back"
      variant="secondary"
      shape="outlined"
      :prepend-icon="true"
    />
  </div>
</template>

<style lang="scss">
.success {
  @apply flex flex-col;

  &__icon {
    @apply text-green-lighter;
    @apply bg-white;
    @apply mb-10;
    @apply self-center;
  }

  &__description {
    @apply text-center;
    @apply text-grey-16;
  }

  &__button {
    @apply mt-10;
    @apply self-center;
    @apply w-fit;
  }
}
</style>
