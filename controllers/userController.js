const bcrypt = require("bcrypt");
const User = require("../model/userSchema");
const userSchema = require('../model/userSchema');
const{transporter,mailOptions}=require('../service/mailService')

const userSignup = async (req, res) => {
    let email = req.body.email;
    const cruddata = new userSchema({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        number: req.body.number,
        city: req.body.city,
        state: req.body.state,
        isActive: req.body.isActive,
        role: req.body.role
    })

    console.log(req.body.name);

    try {
        const { email, password } = req.body;
        const new_user = new userSchema(req.body);
        //sbse phle check kr rhe h ki user already register h ya nhi ....agar h to yhi se return kr jao ...nhi to register krvao
        const userExists = await User.findOne({ email: email })
        if (userExists) {
            return res.status(400).json({ status: 400, error: "Email already exit" });
        }

        //password ko encrypt kr diya
        const salt = await bcrypt.genSalt(10);
        new_user.password = await bcrypt.hash(password, salt);
        new_user.email = await bcrypt.hash(email, salt);
        let addRes = await new_user.save();

        console.log("inside try ...");
        //  const addRes= await cruddata.save();
        res.json(addRes);
    }
    catch (err) {
        res.send("Error" + err);
    }


}


const sendmail=async(req,res)=>{
    transporter.sendMail(mailOptions,(error,info)=>{
     if(error){
         console.log(error);
     }else{
         console.log('Email Sent Succesfully'+info.response);
     }
    })
 }
 const sendMail=async(req,res)=>{          //function bnaya
    console.log("hlooo");
}

 const sendmailAt5pm=async(req,res)=>{
    transporter.sendMail(mailOptions,(error,info)=>{
     if(error){
         console.log(error);
     }else{
         console.log('Email Sent Succesfully'+info.response);
     }
    })
 }

 const sendmailAt12pm=async(req,res)=>{
    transporter.sendMail(mailOptions,(error,info)=>{
     if(error){
         console.log(error);
     }else{
         console.log('Email Sent Succesfully'+info.response);
     }
    })
 }


module.exports = {
    userSignup,sendmail,sendmailAt5pm,sendMail,sendmailAt12pm
};


