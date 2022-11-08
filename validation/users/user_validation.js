const { userSignup } = require("../../controllers/userController")
const user = require("./user_schema")

module.exports = {
       registerUserValidation : async(req,res, next) =>{
        const value = await user.registerUser.validate(req.body,{abortEarly : false})
        if(value.error){
            res.json({
                success : 1,
                message : value.error.details[0].message
            })
        }else{
            next()           //error ke bad next lgana chahiye then call back 2 pr jayega
        }
       },
}