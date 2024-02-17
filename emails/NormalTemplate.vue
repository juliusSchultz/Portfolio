<template>
  <e-html lang="en">
    <ERow>
      <EText>Name: {{ firstName }} {{ lastName }}</EText>
      <EText>Firma: {{ company }}</EText>
      <EText>E-Mail: {{ mail }}</EText>
      <EText>Telefon: {{ telephone }}</EText>
      <EText>Nachricht: {{ message }}</EText>
    </ERow>
  </e-html>
</template>

<script setup>
defineProps({
  firstName: {
    type: String,
    default: '',
  },
  lastName: {
    type: String,
    default: '',
  },
  company: {
    type: String,
    default: '',
  },
  mail: {
    type: String,
    default: '',
  },
  telephone: {
    type: String,
    default: '',
  },
  subject: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    default: '',
  },
})
</script>
