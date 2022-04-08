import { useState } from 'react';

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  return (
    <Card className="expense-item" >
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">
          ${props.amount}
        </div>
      </div>

    </Card>
  );

}

//A different syntax for functions:

/* function ExpenseItem(props) {

  return(
    <div className="expense-item" >
      <div className="expense-item__description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item__price">
        {props.amount}
      </div>
      
        <ExpenseDate date={props.date}/>
      
    </div>
  );

} */

export default ExpenseItem;