module.exports = function EnviaEmail(obj) {
  const nodemailer = require("nodemailer");
  //constantes por favor esconder
  const tipoEmail = "gmail";
  const de = "smpttestalejo@gmail.com";
  const pwd = "ThisIsATest.net";
  //variables
  const para = obj.para;
  const asunto = obj.asunto;
  const msg = obj.msg;

  //email part
  let mailTransporter = nodemailer.createTransport({
    service: tipoEmail,
    auth: {
      user: de,
      pass: pwd,
    },
  });

  //opciones del email
  let mailDetails = {
    from: de,
    to: para,
    subject: asunto,
    html: msg
      //"<h1>Esto es Una prueba. No te alarmes.</h1><br><p>Ahora que tengo tu atencion, por favor doname pizza 🍕 :(</p>",
  };

  mailTransporter.sendMail(mailDetails, (err, data) => {
    if (err) {
      console.log("Sucedieron errores "+err);
    } else {
      console.log("Email se envio correctamente.");
    }
  });
};
