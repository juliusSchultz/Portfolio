import { defineStore } from 'pinia'
export const useContactStore = defineStore('contact', () => {
  const sendMail = async () => {
    await useFetch('api/send-email')
  }

  return {
    sendMail,
  }
})
