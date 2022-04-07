import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {

  // Managing state using multiple states.
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");


  /* You can use one state instead multiple states, using object and spread operator to update the state.
  Initializing the state */
  /* const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: ""
  }); */

  const titleChangeHandler = (event) => {

    /* When you update state that depends on previous state you should set the new state by passing a function. 
    This due to the fact that React schedule the updating for the state, so you could be working with old states. */

    /* setUserInput({
      enteredTitle: event.target.value,
      ...userInput
    }); */

    // Use this syntax to avoid working with old state when dependeing on previous states.
    // setUserInput( () => {} );
    
    /* setUserInput( (prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value
      }
    } ); */

  };

  const amountChangeHandler = (event) => {

    setEnteredAmount(event.target.value);
    
    /* setUserInput({
      enteredAmount: event.target.value,
      ...userInput
    }); */
  };

  const dateChangeHandler = (event) => {

    setEnteredDate(event.target.value);

    /* setUserInput({
      enteredDate: event.target.value,
      ...userInput
    }); */

  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2022-04-01" onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )

}

export default ExpenseForm;