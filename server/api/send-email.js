import { EmailParams, MailerSend, Recipient, Sender } from 'mailersend'
import { useCompiler } from '#vue-email'

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_KEY || '',
})

const usedMail = process.env.USED_MAIL

const sentFrom = new Sender(usedMail, 'Julius Schultz')
const recipients = [new Recipient(usedMail, 'Julius Schultz')]

export default defineEventHandler(async (event) => {
  const body = JSON.parse(await readBody(event))

  const template = await useCompiler('NormalTemplate.vue', {
    props: {
      name: body?.name || '',
      company: body?.company || '-',
      mail: body?.mail || '-',
      message: body?.message || '',
    },
  })

  const options = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setSubject(body?.subject)
    .setHtml(template.html)

  await mailerSend.email.send(options)
  return { message: 'Email sent' }
})
