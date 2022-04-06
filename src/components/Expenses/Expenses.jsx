import ExpenseItem from "../ExpenseItem/ExpenseItem";

const Expenses = (values) => {  

  // https://stackoverflow.com/questions/30803168/data-map-is-not-a-function
  
  return (
    <div className="expenses">
      {values.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))
      }
    </div>
  );
}

export default Expenses;