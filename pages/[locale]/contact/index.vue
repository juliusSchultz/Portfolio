<template>
  <div class="contact">
    <SectionHeadline
      :line1="$t('form.sectionHeadline1')"
      :line2="$t('form.sectionHeadline2')"
    />
    <form class="contact__input-fields">
      <InputField
        v-model="requestData.name"
        :label="$t('form.name')"
        :placeholder="$t('form.name')"
        :required="true"
        :rules="{
          required: helpers.withMessage(requiredMessage, required),
        }"
      />
      <InputField
        v-model="requestData.company"
        :label="$t('form.company')"
        :placeholder="$t('form.company')"
      />
      <InputField
        v-model="requestData.mail"
        :label="$t('form.mail')"
        :placeholder="$t('form.mail')"
      />
      <InputField
        v-model="requestData.subject"
        :label="$t('form.subject')"
        :placeholder="$t('form.subject')"
        :required="true"
        :rules="{
          required: helpers.withMessage(requiredMessage, required),
        }"
      />
      <TextArea
        v-model="requestData.message"
        :label="$t('form.messageLabel')"
        :placeholder="$t('form.messagePlaceholder')"
        :required="true"
        :rules="{
          required: helpers.withMessage(requiredMessage, required),
        }"
      />
    </form>
    <Button :label="$t('form.submit')" icon="mail" @click="submit" />
  </div>
</template>

<script setup lang="ts">
import { required, helpers } from '@vuelidate/validators'
import useVuelidate from '@vuelidate/core'
import { useMailSender } from '~/composables/useMailSender'
const { t } = useI18n()

const requiredMessage = t('form.requiredMessage')

const requestData = ref({
  name: '',
  company: '',
  mail: '',
  subject: '',
  message: '',
})

const mailSender = useMailSender()
const v = useVuelidate()

const formHasNoErrors = computed(() => {
  v.value.$validate()
  return v.value.$errors.length + v.value.$silentErrors.length === 0
})

const submit = async () => {
  if (formHasNoErrors.value) {
    await mailSender.sendMail(requestData.value)
    await navigateTo('/contact/success')
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
