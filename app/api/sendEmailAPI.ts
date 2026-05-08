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
  subject,
  html,
}: {
  to?: string
  subject: string
  html: string
}) {
  const transporter = createTransporter()

  return await transporter.sendMail({
    from: "test@example.com",
    to,
    subject,
    html,
  })
}
