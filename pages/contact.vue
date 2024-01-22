<template>
  <div>
    <SectionHeadline line1="Get in Touch" line2="Contact Me" />
    <PvInput
      v-model="requestData.contact.firstName"
      label="Label"
      placeholder="Placeholder"
      @input="$emit('update', requestData)"
    />
    <button class="btn" :onclick="submit">Contact Info</button>
  </div>
</template>

<script setup lang="ts">
import { useContactStore } from '~/stores/contact/contact'

const requestData = ref({
  contact: {
    address: {
      companyName: '',
      country: undefined,
      region: undefined,
      phone: '',
    },
    firstName: '',
    lastName: '',
    email: '',
  },
  message: '',
  trainingContact: {
    trainingId: '',
  },
})

const contactStore = useContactStore()

const submit = () => {
  console.log('*** submit was exec')
  contactStore.sendMail(
    'Test Name',
    'julius.schultz@gmx.de',
    'Test Subject',
    'Test Message'
  )
}
</script>

<style>
.btn {
  @apply bg-blue;
  @apply text-white;
}
</style>
