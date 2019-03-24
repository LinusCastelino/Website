const nodeMailer = require('nodemailer');
const express = require('express');

const mailTransporter = nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:'465',    //SSL port
    secure: true,
    tls: { rejectUnauthorized: false },
    auth:{
        user: 'websitemessagenotification@gmail.com',
        pass: ''
    }
});

const recipient = 'castelinolinus@gmail.com';
const successStatus = 200;
const errorStatus = 500;

function emailHandler(req, res) {
    console.log("Inside email handler");
    console.log("Received request : "+JSON.stringify(req.body));

    var mailOptions ={
        from : req.body.email,
        to: recipient,
        subject: 'Website Message : ' + req.body.subject,
        html: ` <html>
                    <body>
                        <b>Name : </b> ${req.body.name}
                        <br />
                        <b>Email : </b> ${req.body.email}
                        <br />
                        <b>Phone : </b> ${req.body.phone}
                        <br />
                        <b>Subject : </b> ${req.body.subject}
                        <br />
                        <b>Message : </b> ${req.body.text}
                    </body>
                </html>`
    }

    mailTransporter.sendMail(mailOptions,(err, info) =>{
        if(err){
            console.log('Error encountered while sending email - '+err);
            res.status(errorStatus).send(err);
        }
        else{
            console.log('Email sent successfully : '+info.response);
            res.status(successStatus).send(info);
        }
    })
}

module.exports = emailHandler;