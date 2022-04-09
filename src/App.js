import Expenses from './components/Expenses/Expenses'; 

import ITEMS from './dummy-data.json'

import logo from './logo.svg';
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';


function App() {

  const [ expenses, setExpenses ] = useState(ITEMS);

  const addExpenseHandler = (expense) => {
    //Updating an state that depends on previous state
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  
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
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
