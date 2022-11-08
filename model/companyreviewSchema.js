const { default: mongoose } = require('mongoose');
const mongosse = require('mongoose');
const companyreviewSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
                                                 //do foreign key get kri h 
    },
    companyId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'company'

    },
    subject:{
        type:'String',
        require:true
    },
    review:{
        type:'String',
        require:true
    },
    rating:{
        type:'Number',
        require:true
    },
    isActive:{
        type:'Boolean',
        default:true
    }
})

companyreview.set('timestamps',true);
module.exports=mongoose.model('companyreview',companyreviewSchema);