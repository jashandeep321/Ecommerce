// qbbz jxma hipz qixk

var nodemailer = require('nodemailer');
async function sendVarifyMail(to_email) {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 465,
        secure: false,
        auth: {
            user: "jashan010303@gmail.com",
            pass: 'qbbzjxmahipzqixk'//its the app password generated by gmail
        }
    });

    let info = await transporter.sendMail({
        to:to_email,
        from: "jashan010303@gmail.com",
        subject: "Verify your Mail to continue shoping",
        html: "<h2 style=\"color:red\">Please click on link to verify email id </h2><a href=\"http://localhost:8082/varifyemail?UEmail="+to_email+"\">Click here to Verify</a>"
    });
    

    // if (info.messageId) {
    //     // Successfully sent the verification email
    //     // Now, send the password change email

    //     let pass = await transporter.sendMail({
    //         to: to_email,
    //         from: "jashan010303@gmail.com",
    //         subject: "Change Password for your Twitter account",
    //         html: "<h2 style=\"color:red\">Please click on link to verify it's you </h2><a href=\"http://localhost:8080/varifyemail?email=" + to_email + "\">Click here to Verify</a>"
    //     });

    //     if (pass.messageId) {
    //         // Successfully sent the password change email
    //         return true;
    //     } else {
    //         // Failed to send the password change email
    //         return false;
    //     }
    // } else {
    //     // Failed to send the verification email
    //     return false;
    // }
}

module.exports = sendVarifyMail;