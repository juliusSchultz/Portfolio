<template>
  <div class="contact">
    <SectionHeadline line1="Get in Touch" line2="Contact Me" />
    <div class="contact__input-fields">
      <InputField
        v-model="requestData.firstName"
        label="First name"
        placeholder="First name"
        @input="$emit('update', requestData)"
      />
      <InputField
        v-model="requestData.lastName"
        label="Last name"
        placeholder="Last name"
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
        @input="$emit('update', requestData)"
      />
    </div>
    <Button label="Submit" icon="mail" @click="submit" />
  </div>
</template>

<script setup lang="ts">
import { useContactStore } from '~/stores/contact/contact'

const requestData = ref({
  firstName: 'Peter',
  lastName: 'Fuss',
  company: 'Company',
  mail: 'peter@fuss.de',
  telephone: '0177 4444',
  message: 'Nachricht',
})

const contactStore = useContactStore()
const { sendMail } = contactStore

const submit = async () => {
  await sendMail()
}
</script>

<style>
.contact {
  @apply text-grey-16;

  &__input-fields {
    @apply flex flex-col;
    @apply gap-4;
    @apply mb-4;
  }
}
</style>
