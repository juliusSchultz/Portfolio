export const useMailSender = () => {
  const config = useRuntimeConfig()

  const sendMail = async (requestData) => {
    await useFetch('api/send-email', {
      baseURL: config.public.baseURL,
      method: 'POST',
      body: requestData,
    })
  }

  return {
    sendMail,
  }
}
