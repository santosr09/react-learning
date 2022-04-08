import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (values) => {  

  const [ filteredYear, setFilteredYear ] = useState('');

  const filterChangeHandler = (value) => {
    setFilteredYear(value);
    console.log("Year selected: " + value);
  }

  // https://stackoverflow.com/questions/30803168/data-map-is-not-a-function
  
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {values.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))
      }
    </Card>
  );
}

export default Expenses;