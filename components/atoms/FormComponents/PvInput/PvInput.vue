<template>
  <div class="pv-input">
    <PvLabel :optional="!required" :label="label" />
    <div class="pv-input__wrapper">
      <input
        v-bind="{ placeholder, disabled, ...$attrs }"
        ref="input"
        v-model="internalValue"
        :required="required"
        :type="inputType"
        :min="min"
        class="pv-input__element"
        :class="{
          'pv-input__element--icon': icon,
          'pv-input__element--error': !!validation.getError(),
        }"
        :placeholder="placeholder"
        @keypress.enter="$emit('submit', internalValue)"
        @focus="$emit('focus', true)"
        @blur="$emit('focus', false), validation.validateInput()"
        @input="updateValue"
      />
      <Icon
        v-if="icon || validation.getError()"
        class="pv-input__icon"
        :class="{ 'pv-input__icon--error': !!validation.getError() }"
        :icon="!!validation.getError() ? 'error_outline' : icon"
        @click.native="$emit('click:icon', internalValue)"
      />
    </div>
    <ErrorMessage
      v-if="!!validation.getError()"
      :error-message="validation.getError()"
    />
  </div>
</template>

<script>
import { defineComponent, ref, toRefs, watch } from 'vue'
import { useInputValidator } from '~/composables/useValidator'

export default defineComponent({
  name: 'PvInput',
  props: {
    /**
     * The input value
     * @model
     */
    modelValue: {
      type: [String, Number],
      default: undefined,
    },
    /**
     * The input type
     * @model
     */
    inputType: {
      type: String,
      default: 'text',
    },
    /**
     * An optional icon that can be shown
     * @see [Icon List] (https://fonts.google.com/icons?selected=Material+Icons)
     */
    icon: {
      type: String,
      default: null,
    },
    /**
     * A text which is displayed if no value given
     */
    placeholder: {
      type: String,
      default: '',
    },
    /**
     * The text displayed over the form component via PvLabel component
     */
    label: {
      type: String,
      default: '',
    },
    /**
     * The isRequired prop, which defines if the text field is required or not
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * The disabled prop, which defines if it should be possible to enter text into text field or not
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * defines what should be validated
     */
    rules: {
      type: Object,
      default: () => ({}),
    },

    min: {
      type: String,
      default: null,
    },
  },
  emits: [
    /**
     * Fired on focus and blur.
     *
     * @event focus
     * @property {boolean} isFocused
     */
    'focus',
    /**
     * Fired on icon clicked.
     *
     * @event click:icon
     * @property {object} $event
     */
    'click:icon',
    /**
     * Fired on enter key.
     *
     * @event submit
     * @property {string} value
     */
    'submit',
    'input',
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const { modelValue: propsValue, min } = toRefs(props)
    const internalValue = ref(props.modelValue)

    const updateValue = () => {
      if (min.value && internalValue.value < min.value) {
        internalValue.value = min
      } else {
        emit('update:modelValue', internalValue.value)
      }
    }

    const validation = useInputValidator(props.rules, internalValue)

    watch(propsValue, () => {
      if (
        !min.value ||
        (propsValue.value >= min.value &&
          propsValue.value !== internalValue.value)
      ) {
        internalValue.value = propsValue.value
      }
    })

    return {
      // States
      internalValue,

      // Actions
      validation,
      updateValue,
    }
  },
})
</script>

<style lang="scss" scoped>
.pv-input {
  @apply relative;
  @apply w-full;

  &__wrapper {
    @apply relative;
  }

  &__icon {
    @apply absolute;
    @apply top-1/2 right-2;
    @apply cursor-pointer;
    @apply text-grey-64;
    transform: translateY(-50%);

    &--error {
      @apply text-red;
    }
  }

  &__element {
    @apply block;
    @apply w-full;
    @apply text-grey-16;
    @apply px-4;
    @apply py-3;
    @apply shadow-border-grey-80;
    @apply rounded-md;

    // fix for mobile safari to show box-shadow
    appearance: none;

    &:focus {
      @apply border-grey-16;
      @apply ring-0;
      @apply text-grey-16;
      @apply shadow-border-grey-16;

      // safari fix to prevent focus outline
      outline: 0;
    }

    &:disabled {
      @apply bg-grey-96;
      @apply cursor-not-allowed;
    }

    &::placeholder {
      @apply text-grey-64;
    }

    &:focus + .pv-input__icon {
      @apply text-grey-16;
    }

    &--icon {
      @apply pr-10;
    }

    &--error {
      @apply rounded-t-md;
      @apply shadow-border-blue;
      @apply rounded-b-none;

      &::-webkit-contacts-auto-fill-button {
        @apply mr-6;
      }
    }
  }
}
</style>
