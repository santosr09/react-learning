import ExpenseItem from './components/ExpenseItem/ExpenseItem';
import Expenses from './components/Expenses/Expenses';

import ITEMS from './dummy-data.json'

import logo from './logo.svg';
import './App.css';


function App() {
  
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
      <Expenses items={ITEMS}/>
    </div>
  );
}

export default App;
