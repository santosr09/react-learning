import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import './Expenses.css';

const Expenses = (props) => {  

  const [ filteredYear, setFilteredYear ] = useState('2022');  

  const filterChangeHandler = (value) => {
    setFilteredYear(value);
  }

  const filteredExpenses = props.items.filter(expense => {
    return new Date(expense.date).getFullYear().toString() === filteredYear;
  });
  
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
  );
}

export default Expenses;