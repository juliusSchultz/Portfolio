import { defineStore } from 'pinia'
export const useContactStore = defineStore('contact', () => {
  const apiKey = 'c63eac43fa6ea44763557f9ae3c8bea0'
  const secretKey = '57a4e8dd5caf5df963f52ce1bc78e01c'

  function sendMail(name, email, subject, message) {
    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.set('Authorization', 'Basic ' + btoa(apiKey + ':' + secretKey))

    const data = JSON.stringify({
      Messages: [
        {
          From: { Email: 'julius.schultz@gmx.de', Name: 'Julius Schultz' },
          To: [{ Email: email, Name: name }],
          Subject: subject,
          TextPart: message,
        },
      ],
    })

    const requestOptions = {
      method: 'POST',
      dataType: 'jsonp',
      headers: myHeaders,
      body: data,
    }

    $fetch('https://api.mailjet.com/v3.1/send', requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
  }

  return {
    // actions
    sendMail,
  }
})
