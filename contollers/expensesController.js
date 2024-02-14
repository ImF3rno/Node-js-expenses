const Expenses=require('../models/Expenses')
const fs=require('fs')

// ==================================================================== //
// Testing
const expenses=JSON.parse(fs.readFileSync(`${__dirname.at}/../data/expenses.json`));
// ==================================================================== //

// ==================================================================== //
//Callbacks
exports.getAllExpenses=async(req,res)=>{
    try{
        const expenses=await Expenses.find()
        res.status(200).json({
            status:'Success',
            result:expenses.length,
            data:{
                expenses
            }
        })
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err
        })
    }
}

exports.createExpense=async(req,res)=>{
    try{
        const newExpense=await Expenses.create(req.body)
        res.status(201).json({
            status:'Success',
            message:'New expense created',
            data:newExpense
        })
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err
        })
    }
};

exports.updateExpense=async(req,res)=>{
    try{
        const expense=await Expenses.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true
        });
        res.status(200).json({
            status:'Success',
            message: "Expense Updated",
            data:{
                hotel
            }
        })
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err
        })
    }
};

exports.removeExpense=async(req,res)=>{
    try{
        await Expenses.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status:'Success',
            message:'Deleted',
            data:null,
        })
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err.message,
        })
    }
}

exports.getPeriod=async(req,res)=>{
    let data=[]
    try {
        data=await Expenses.find({
            createdAt:{
                $gte:new Date(req.body.from),
                $lt:new Date(req.body.to),
            },
        })        
    }catch(err){
        res.status(404).json({
            status:'Failed',
            message:err.message,
        })
    }
    res.status(200).json({
        status:'Success',
        data: data,
    })
}

exports.sumPeriod=async(req,res)=>{
    const records=await Expenses.find()
    let total=0
    for(const record of records){
        total+=record.amount
    }
    res.status(200).json({
        status:'Success',
        data:total,
    })
}
// ==================================================================== //