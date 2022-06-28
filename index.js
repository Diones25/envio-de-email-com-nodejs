import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: "email",
        pass: "senha"
    }
});

transporter.sendMail({
    from: "Diones <email>",
    to: "email de destino",
    subject: "Teste de envio de e-mail com Node JS",
    text: "Testando o lib nodemailer para enviar e-mail"
}).then(message => {
    console.log(message)
}).catch(err => {
    console.log(err);
})
