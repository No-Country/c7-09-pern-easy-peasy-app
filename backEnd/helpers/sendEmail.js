const sgMail = require('@sendgrid/mail')
// process.env.SENDGRID_API_KEY

const sendEmail = (email, name) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: `${email}`, // Change to your recipient
    from: 'easypeacy2022@gmail.com', // Change to your verified sender
    subject: 'Bienvenido a EasyPeasy',
    text: `Te damos la mas calida bienvenida a nuestra plataforma ${name}, aqui recien comienza tu camino hacia el exito`,
    html: `<strong>Te damos la mas calida bienvenida a nuestra plataforma ${name}, aqui recien comienza tu camino hacia el exito</strong>`,
  }
  try {
    sgMail.send(msg)
    console.log('Email sent')
  } catch (error) {
    console.error(error)
  }
}

module.exports = { sendEmail }