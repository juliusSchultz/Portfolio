<template>
  <NuxtLink
    v-bind="{
      to,
      target,
    }"
    class="button"
    :class="[
      `button--${variant}`,
      `button--${size}`,
      `button--cutaway-${cutaway}`,
      `button--${isPrimary ? 'filled' : shape}`,
      {
        'button--disabled': disabled,
        'button--icon-only': !label,
        'button--no-linebreaks': !allowLabelLineBreak,
        'button--text-center': textCenter,
        'button--prevent-full': preventFull,
      },
      `button--gap-${gap}`,
    ]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <!-- eslint-disable vue/no-v-html -->
    <span v-if="label" class="button__label" v-html="label" />
    <!-- eslint-enable vue/no-v-html -->
    <Icon
      v-if="icon"
      :icon="icon"
      :size="iconSize"
      :class="{ 'button__icon--prepend': label && prependIcon }"
    />
    <!-- This makes sure there is at least whitespace as
    content in the button if no icon or label are provided -->
    <template v-if="!icon && !label">&nbsp;&nbsp;</template>
  </NuxtLink>
</template>

<script>
import { computed, defineComponent } from 'vue'
import propsData from './partials/props.js'

export default defineComponent({
  name: 'Button',
  props: propsData,
  emits: ['click'],
  setup(props) {
    const iconSize = computed(() =>
      props.size === 'xsmall' ? 'xsmall' : 'base'
    )

    const isPrimary = computed(() => props.variant === 'primary')

    return {
      isPrimary,
      iconSize,
    }
  },
})
</script>

<style lang="scss">
.button {
  all: unset;
  @apply rounded-md;
  @apply inline-flex;
  @apply items-center;
  @apply cursor-pointer;
  @apply font-bold;
  @apply basis-full;
  @apply justify-between;
  @apply text-left;

  &__label {
    @apply break-words;
    hyphens: auto;
  }

  @screen md {
    @apply basis-auto;
  }

  &--prevent-full {
    @apply basis-auto;
  }

  &--text-center {
    @apply justify-center;
  }

  &--no-linebreaks {
    @screen md {
      @apply whitespace-nowrap;
    }
  }

  &--disabled {
    @apply cursor-default;
  }

  &--normal {
    @apply py-3 px-4;
    @apply leading-6;
    @apply text-base;

    &.button--icon-only {
      @apply px-3;
    }
  }

  &--small {
    @apply py-2 px-3;
    @apply leading-6;
    @apply text-sm;

    &.button--icon-only {
      @apply px-2;
    }
  }

  &--xsmall {
    @apply py-2 px-3;
    @apply leading-4;
    @apply text-sm;

    &.button--icon-only {
      @apply px-2;
    }
  }

  &--filled {
    &.button--primary {
      background-color: yellow;
      @apply text-grey-16;
      -webkit-text-fill-color: var(--grey-16);
      @apply shadow-button;

      &:hover,
      &:focus {
        @apply bg-yellow-lighter;
      }
    }

    &.button--secondary {
      @apply bg-blue;
      @apply text-white;
      -webkit-text-fill-color: var(--white);
      @apply shadow-button;

      &:hover,
      &:focus {
        @apply bg-blue-lighter;
      }
    }

    &.button--variant-selection-preselected,
    &.button--variant-selection {
      @apply bg-blue;
      @apply text-white;
      -webkit-text-fill-color: var(--white);
      @apply shadow-button;

      &:hover {
        @apply bg-blue-lighter;
      }
    }

    &.button--variant-selection-preselected {
      @apply shadow-border-blue;
      @apply bg-white;
      @apply text-grey-16;
      -webkit-text-fill-color: var(--grey-16);

      &:hover {
        @apply shadow-border-blue-lighter;
        @apply text-white;
        -webkit-text-fill-color: var(--white);
      }
    }

    &.button--inverted {
      @apply bg-white;
      @apply text-black;
      -webkit-text-fill-color: var(--black);
      @apply shadow-button-inverted;

      &:hover,
      &:focus {
        @apply text-grey-32;
        -webkit-text-fill-color: var(--grey-32);
      }
    }

    &.button--disabled,
    &.button--disabled:hover,
    &.button--disabled:focus {
      @apply bg-grey-80;
      @apply text-grey-96;
      -webkit-text-fill-color: var(--grey-96);
      @apply shadow-none;

      &.button--inverted {
        @apply bg-grey-64;
        @apply text-grey-80;
        -webkit-text-fill-color: var(--grey-80);
      }
    }
  }

  &--outlined {
    @apply rounded-md;

    &.button--secondary {
      @apply text-blue;
      -webkit-text-fill-color: var(--blue);
      @apply shadow-border-blue;

      &:hover,
      &:focus {
        @apply outline-blue-lighter;
        @apply text-blue-lighter;
        -webkit-text-fill-color: var(--blue-lighter);
        @apply bg-blue-lighter;
        @apply bg-opacity-10;
      }
    }

    &.button--variant-selection-preselected,
    &.button--variant-selection {
      @apply shadow-border-grey-80;
      @apply bg-white;

      &:hover {
        @apply shadow-border-blue-lighter;
        @apply bg-blue-lighter;
        @apply text-white;
        -webkit-text-fill-color: var(--white);
      }
    }

    &.button--inverted {
      @apply outline-grey-96;
      @apply text-grey-96;
      -webkit-text-fill-color: var(--grey-96);
      @apply shadow-border-white;

      &:hover,
      &:focus {
        @apply outline-white;
        @apply text-white;
        -webkit-text-fill-color: var(--white);
        @apply bg-white;
        @apply bg-opacity-10;
      }
    }

    &.button--disabled,
    &.button--disabled:hover,
    &.button--disabled:focus {
      @apply shadow-border-grey-80;
      @apply bg-transparent;
      @apply text-grey-80;
      -webkit-text-fill-color: var(--grey-80);

      &.button--inverted {
        @apply outline-grey-48;
        @apply bg-transparent;
        @apply text-grey-48;
        -webkit-text-fill-color: var(--grey-48);
      }
    }
  }

  &--plain {
    @apply bg-transparent;
    @apply px-0;

    &.button--secondary {
      @apply text-blue;
      -webkit-text-fill-color: var(--blue);

      &:hover,
      &:focus {
        @apply text-blue-lighter;
        -webkit-text-fill-color: var(--blue-lighter);
      }
    }

    &.button--inverted {
      @apply text-grey-96;
      -webkit-text-fill-color: var(--grey-96);

      &:hover,
      &:focus {
        @apply text-white;
        -webkit-text-fill-color: var(--white);
      }
    }

    &.button--disabled,
    &.button--disabled:hover,
    &.button--disabled:focus {
      @apply text-grey-80;
      -webkit-text-fill-color: var(--grey-80);

      &.button--inverted {
        @apply text-grey-48;
        -webkit-text-fill-color: var(--grey-48);
      }
    }
  }

  &--cutaway-left {
    @apply rounded-r-none;
    @apply rounded-l-md;
  }

  &--cutaway-right {
    @apply rounded-l-none;
    @apply rounded-r-md;
  }

  &--cutaway-bottom {
    @apply rounded-b-none;
  }

  &--gap {
    &-normal {
      &.button--normal {
        @apply gap-4;
      }

      &.button--small {
        @apply gap-3;
      }

      &.button--xsmall {
        @apply gap-3;
      }
    }

    &-narrow {
      @apply gap-2;
    }
  }

  &__icon {
    &--prepend {
      @apply order-first;
    }
  }
}
</style>
