const mongoose = require('mongoose');
const companySchema = new mongoose.Schema({
    //spse phle foreign key bnate h pichle vale schema ki id ref. leke
    userId:{
        type: mongoose.Schema.Types.ObjecId,  //pichli vali table ki id get kri h
        require:true,
        ref: 'user'//ye user schema vali table ka ref. liya h uske collection ka name user likha tha
    },

    companyName:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    location:{
    type:String,
    require:true
    },
    foundeAt:{
        type:String,
        require:true
    },
    isActive:{
        type:Boolean,
        default: true
    }
})

companySchema.set('timestamps',true);
module.exports=mongoose.model('company',companySchema);
