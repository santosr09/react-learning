import Expenses from './components/Expenses/Expenses'; 

import ITEMS from './dummy-data.json'

import logo from './logo.svg';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import ExpensesFilter from './components/Expenses/ExpensesFilter';


function App() {

  const addExpenseHandler = () => {
    console.log("In App.js");
    console.log(ITEMS);
  };
  
  const selectYearHandler = (value) => {
    console.log("Year selected: " + value);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter OnSelectYear={selectYearHandler} />
      <Expenses items={ITEMS}/>
    </div>
  );
}

export default App;
