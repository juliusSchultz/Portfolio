<template>
  <div class="contact">
    <SectionHeadline line1="Get in Touch" line2="Contact Me" />
    <div class="contact__input-fields">
      <InputField
        v-model="requestData.firstName"
        :label="$t('form.firstName')"
        :placeholder="$t('form.firstName')"
        :required="true"
        :rules="{
          required: helpers.withMessage(requiredMessage, required),
        }"
        @input="$emit('update', requestData)"
      />
      <InputField
        v-model="requestData.lastName"
        label="Last name"
        placeholder="Last name"
        :required="true"
        :rules="{
          required: helpers.withMessage(requiredMessage, required),
        }"
        @input="$emit('update', requestData)"
      />
      <InputField
        v-model="requestData.company"
        label="Company"
        placeholder="Company"
        @input="$emit('update', requestData)"
      />
      <InputField
        v-model="requestData.mail"
        label="E-Mail"
        placeholder="E-Mail"
        @input="$emit('update', requestData)"
      />
      <InputField
        v-model="requestData.telephone"
        label="Telephone"
        placeholder="+49111 1111111"
        @input="$emit('update', requestData)"
      />
      <TextArea
        v-model="requestData.message"
        label="Message"
        placeholder="Your message"
        :required="true"
        :rules="{
          required: helpers.withMessage(requiredMessage, required),
        }"
        @input="$emit('update', requestData)"
      />
    </div>
    <Button label="Submit" icon="mail" @click="submit" />
  </div>
</template>

<script setup lang="ts">
import { useContactStore } from '~/stores/contact/contact'
import { required, helpers } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'

const requiredMessage = 'This field is required'

const requestData = ref({
  firstName: '',
  lastName: '',
  company: '',
  mail: '',
  telephone: '',
  message: '',
})

const contactStore = useContactStore()
const { sendMail } = contactStore
const v = useVuelidate()

const formHasNoErrors = computed(() => {
  v.value.$validate()
  return v.value.$errors.length + v.value.$silentErrors.length === 0
})

const submit = async () => {
  if (formHasNoErrors.value) {
    await sendMail(requestData.value)
  }
}
</script>

<style>
.contact {
  @apply text-grey-16;

  &__input-fields {
    @apply flex flex-col;
    @apply gap-4;
    @apply mb-7;
  }
}
</style>
