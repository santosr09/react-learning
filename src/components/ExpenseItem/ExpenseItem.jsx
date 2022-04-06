import ExpenseDate from "../ExpenseDate/ExpenseDate";

const ExpenseItem = (props) => {

  return(
    <div className="expense-item" >
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
        {props.amount}
      </div>
      </div>
      
    </div>
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