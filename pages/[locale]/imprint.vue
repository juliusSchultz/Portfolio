<template>
  <div class="impressum">
    <SectionHeadline :line2="$t('imprint.sectionHeadline2')" />
    <h6 class="impressum__headline">{{ $t('imprint.address.headline') }}</h6>
    <p class="impressum__text">{{ $t('imprint.address.name') }}</p>
    <p class="impressum__text">{{ $t('imprint.address.town') }}</p>
    <NuxtLink to="/contact">
      <p class="impressum__text impressum__link">
        {{ $t('imprint.address.contactLink') }}
      </p>
    </NuxtLink>
    <h5 class="impressum__headline">{{ $t('imprint.section1.headline') }}</h5>
    <h6 class="impressum__headline">{{ $t('imprint.section2.headline') }}</h6>
    <p class="impressum__text">
      {{ $t('imprint.section2.text') }}
    </p>
    <h6 class="impressum__headline">{{ $t('imprint.section3.headline') }}</h6>
    <p class="impressum__text">
      {{ $t('imprint.section3.text') }}
    </p>
    <h6 class="impressum__headline">{{ $t('imprint.section4.headline') }}</h6>
    <p class="impressum__text">
      {{ $t('imprint.section4.text') }}
    </p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.impressum {
  @apply text-center;
  @apply flex flex-col;
  @apply gap-y-6;
  @apply text-grey-16;

  &__headline {
    @apply font-bold;
  }

  &__link {
    @apply text-blue;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
