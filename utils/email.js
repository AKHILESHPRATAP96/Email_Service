const nodemailer = require("nodemailer");

const sendEmail=async (option)=>{

    //trasporter
    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
       
        auth: {
          user: "4b5c729a972f28",
          pass: "d1bb2837c25ba2",
        },
      });

const emailOption=
    {
        from: '"Akhilesh👻" <akhilesh2060@gmail.com>', 
        to: option.email, 
        subject: option.subject, 
        text: option.message, 
        html: "<b>Hello world?</b>", 
      
}
await transporter.sendMail(emailOption)


}


module.exports=sendEmail