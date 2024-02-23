import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend'
import { useCompiler } from '#vue-email'

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || '',
})

const sentFrom = new Sender(
  'julius.schultz@juliusschultz.com',
  'Julius Schultz'
)
const recipients = [
  new Recipient('julius.schultz@juliusschultz.com', 'Julius Schultz'),
]

export default defineEventHandler(async (event) => {
  const body = JSON.parse(await readBody(event))

  const template = await useCompiler('NormalTemplate.vue', {
    props: {
      firstName: body?.firstName || '',
      lastName: body?.lastName || '',
      company: body?.company || '',
      mail: body?.mail || '-',
      telephone: body?.telephone || '-',
      message: body?.message || '',
    },
  })

  const options = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setSubject('This is a Subject')
    .setHtml(template.html)

  await mailerSend.email.send(options)
  return { message: 'Email sent' }
})
