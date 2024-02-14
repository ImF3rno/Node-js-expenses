const express=require('express')
const router=express.Router();
const expensesController=require('../contollers/expensesController');

router
.route('/')
.get(expensesController.getAllExpenses)
.post(expensesController.createExpense)
router
.route('/:id')
.patch(expensesController.updateExpense)
.delete(expensesController.removeExpense)
router
.route('/get-over-period')
.post(expensesController.getPeriod)
router
.route('/sum-over-period')
.post(expensesController.sumPeriod)

module.exports=router