import React, { useState } from 'react';
import Expenses from './Expenses/Expenses';
import ExpensesFilter from './Expenses/ExpensesFilter';
import NewExpense from './NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { 
      id: 'e2', 
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Mobile',
    amount: 350,
    date: new Date(2018, 3, 12),
  },
  {
    id: 'e6',
    title: 'Laptop',
    amount: 650,
    date: new Date(2019, 9, 23),
  },
  {
    id: 'e7',
    title: 'Charger',
    amount: 150,
    date: new Date(2020, 8, 8),
  },
  {
    id: 'e8',
    title: 'Mirror',
    amount: 350,
    date: new Date(2018, 7, 4),
  },
];

const App=()=>{

  const[expenses, setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler=(expense)=>{
    console.log("Inside APP comp");
    setExpenses((prevExpenses)=>{
       return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );

  // return React.createElement(
  //   'div',{},
  //   React.createElement('h2',{},'Lets get started!'),
  //   React.createElement(Expenses,{items:expenses}))

}

export default App;