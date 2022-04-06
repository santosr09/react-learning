import './ExpenseDate.css'

function ExpenseDate(strDate) {

  //Why the param strDate is not recognized as a Date object, when the caller is passing a Date object, when that happens the line date.getFullYear(); fails saying that getFullYear() is not recognized as a function

  // https://eloquentjavascript.net/03_functions.html

  const date = new Date(strDate.date);
  
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', {month: 'long'});
  const day = date.toLocaleString('en-US', {day: '2-digit'});

  return (
    <div className="expense-date">
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );

}

export default ExpenseDate;