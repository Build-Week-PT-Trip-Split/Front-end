import React from 'react';
import './App.css';
import ExpenseList from './components/expenses/ExpenseList';
// import Expense from './components/expenses/Expense';
// import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Trip Split</h1>
      <ExpenseList />
      {/* <Route path='/expense/:id' component={Expense} /> */}
    </div>
  );
}

export default App;
