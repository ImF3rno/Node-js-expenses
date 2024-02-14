const express=require('express');
const app=express();
app.use(express.json())
const expensesRoutes=require('./routes/expensesRoutes')
const morgan=require('morgan') 

app.use(morgan('dev'));

// ==================================================================== //
// Mounting router
app.use('/api/v1/expenses',expensesRoutes);
// ==================================================================== //

module.exports=app;