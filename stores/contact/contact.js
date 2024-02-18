import { defineStore } from 'pinia'
export const useContactStore = defineStore('contact', () => {
  const sendMail = async (requestData) => {
    await useFetch('api/send-email', { method: 'POST', body: requestData })
  }

  return {
    sendMail,
  }
})
