const mongoose=require('mongoose')

const expensesSchema=new mongoose.Schema({
    name:{
        type:String,
        require:[true, 'Must have a name'],
        unique:true
    },
    amount:{
        type:Number,
        require:[true, 'Must have an amount']
    },
    notes:{
        type:String,
        require:false
    },
    createdAt:{
        type:Date,
        default:Date.now,
    }
})

const Expenses=mongoose.model('Expenses', expensesSchema)

module.exports=Expenses