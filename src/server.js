import express from "express"
import bodyParser from "body-parser"
import nodemailer from "nodemailer"


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'darkdelll@gmail.com',  // Tu correo
    pass: 'ttum jexq puub pcsu'  // Tu contraseña
  }
});

app.post('/send-email', (req, res) => {
  const { nombre, mail, numero, detalles } = req.body;
  const mailOptions = {
    from: 'darkdelll@gmail.com',
    to: "darkdelll@gmail.com",  // o cualquier otro destinatario
    subject: 'Nuevo mensaje de formulario de contacto',
    text: `Nombre: ${nombre}\nEmail: ${mail}\nNúmero de contacto: ${numero}\nDetalles: ${detalles}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
      res.status(500).send(error.message);
    }
    console.log('Mensaje enviado: %s', info.messageId);
    res.status(200).send('Mensaje enviado: ' + info.response);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});