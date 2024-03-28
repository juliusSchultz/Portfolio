export const useMailSender = () => {
  const config = useRuntimeConfig()

  const sendMail = async (requestData) => {
    console.log('*** requestData', requestData)
    await $fetch('api/send-email', {
      baseURL: config.public.baseURL,
      mode: 'no-cors',
      method: 'POST',
      body: { ...requestData },
    })
  }

  return {
    sendMail,
  }
}
