// mail send krna h  or transpotor h 
var nodemailer = require('nodemailer')
var transporter = nodemailer.createTransport({
    service :"gmail",
    auth:{
        user: "chachriaa@gmail.com",
        pass: "lnedekgzshwwqsyn"
    }
});

//send out email through nodemailer
var mailOptions={
    from:"chachriaa@gmail.com",
    to:"arun.lal@graffersid.com",
    subject:"Hye this is test mail",
    text:"hye this is body part"
}

module.exports={
    transporter,
    mailOptions
}