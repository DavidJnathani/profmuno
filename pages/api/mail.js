// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// require('dotenv').config()
// const mail = require('@sendgrid/mail');
// mail.setApiKey(process.env.SENDGRID_API_KEY);
// console.log(process.env.SENDGRID_API_KEY)

const SparkPost = require("sparkpost");

// export default (req, res) => {
//   const body =JSON.parse(req.body);
//   const message=`
//     name=${body.fname}\r\n
//    country=${body.country}\r\n
//     email=${body.email}\r\n
//     numba=${body.numba}\r\n
//     message=${body.message}
//   `;
//   const data={
//     to:'profmunno2021@gmail.com',
//     from:'hello@profmunno.epizy.com',
//     subject:'New web form message',
//     text:message,
//     html:message.replace(/\r\n/g,'<br/>')
//   };
//   mail.send(data)
//   res.status(200).json({ status:'Ok' })
// }
 constsparkPost = require("sparkpost")

 async function emailHander(req,res){
   const client =  new SparkPost(process.env.SPARKPOST);
  const body =JSON.parse(req.body);
  const {fname,country,email,numba,message} = data
 
  client.transmissions.send({
    content:{
      from:'hello@profmunno.epizy.com',
      subject:"New Message",
      html:`<html><body><p>${message}</p><p>--Prof. Munno</p></body></html>`
    },
    recipients:[{address:email}]
  }).then(()=>{
    res.statusCode = 200;
    res.setHeader("Content-Type","application-json");
    res.end(JSON.stringify({error:null}))
  }).catch(()=>{
    res.statusCode = 500;
    res.setHeader("Content-Type","application-json");
    res.end(JSON.stringify({error:"error sending mail"}))
   
 });
}
 
export default emailHander;