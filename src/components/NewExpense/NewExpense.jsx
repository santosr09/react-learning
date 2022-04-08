import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);

  }

  const startEditignHandler = () => {
    setIsEditing(true);
  }

  const stopEditignHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button type="buttom" onClick={startEditignHandler} >Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditignHandler}/>}
    </div>
  )
};

export default NewExpense;