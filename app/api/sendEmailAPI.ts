"use server"

import nodemailer from "nodemailer"

function createTransporter() {
  return nodemailer.createTransport({
    /* your SMTP config */
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  })
}

export async function sendEmail({
  to = process.env.SMTP_EMAIL,
  cc,
  bcc,
  subject,
  html,
}: {
  to?: string | string[]
  cc?: string | string[]
  bcc?: string | string[]
  subject: string
  html: string
}) {
  const transporter = createTransporter()

  return await transporter.sendMail({
    from: process.env.SMTP_EMAIL,
    to,
    cc,
    bcc,
    subject,
    html,
  })
}
