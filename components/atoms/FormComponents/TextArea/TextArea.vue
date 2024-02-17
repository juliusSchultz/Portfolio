<template>
  <div class="textarea">
    <PvLabel :optional="!required" :label="label" tag-name="textarea" />
    <div class="textarea__wrapper">
      <textarea
        v-model="internalValue"
        name="textarea"
        v-bind="{ placeholder, required, disabled }"
        class="textarea__input"
        :class="{ 'textarea__input--error': !!validation.getError() }"
        @focus="$emit('focus', true)"
        @blur="$emit('focus', false), validation.validateInput()"
        @input="updateValue"
      />
      <Icon
        v-if="!!validation.getError()"
        class="textarea__icon-error"
        icon="error_outline"
      />
    </div>
    <ErrorMessage
      v-if="!!validation.getError()"
      :error-message="validation.getError()"
    />
  </div>
</template>

<script>
import { defineComponent, toRefs, ref, watch } from 'vue'
import { useInputValidator } from '~/composables/useValidator'
import { useSanitizer } from '~/composables/sanitizer/useSanitizer'

export default defineComponent({
  name: 'TextArea',
  props: {
    /**
     * The internal value
     */
    modelValue: {
      type: String,
      default: '',
    },
    /**
     * The text displayed at the textarea on the left
     */
    label: {
      type: String,
      default: '',
    },
    /**
     * The placeholder
     */
    placeholder: {
      type: String,
      default: '',
    },
    /**
     * The required prop, which defines if the text field is required or not
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
     * Fired on keystroke.
     *
     * @event change
     * @property {string} value
     */
    'update:modelValue',
  ],
  setup(props, { emit }) {
    const sanitizer = useSanitizer()

    const { modelValue: propsValue } = toRefs(props)
    const internalValue = ref(props.modelValue)

    const updateValue = () => {
      emit('update:modelValue', sanitizer.clear(internalValue.value))
    }

    watch(propsValue, () => {
      if (propsValue.value !== sanitizer.clear(internalValue.value)) {
        internalValue.value = propsValue.value
      }
    })

    const validation = useInputValidator(props.rules, internalValue)

    return { internalValue, validation, updateValue }
  },
})
</script>

<style lang="scss">
.textarea {
  &__wrapper {
    @apply relative;
  }

  &__input {
    @apply block;
    @apply px-3;
    @apply py-2;
    @apply border-2;
    @apply rounded-md;
    @apply border-grey-80;
    @apply text-grey-16;
    @apply w-full;

    &:focus {
      @apply border-grey-16;
      @apply text-grey-16;
      outline: 0;
    }

    &:focus + .textarea__icon-error {
      @apply text-grey-16;
    }

    &:disabled {
      @apply bg-grey-96;
      @apply cursor-not-allowed;
    }

    &::placeholder {
      @apply text-grey-64;
    }

    &--error {
      @apply rounded-t-md;
      @apply rounded-b-none;
      @apply border-red;
    }
  }

  &__icon-error {
    @apply absolute;
    @apply top-0 right-2;
    @apply cursor-pointer;
    margin-top: 10px;
    @apply text-red;
  }
}
</style>
