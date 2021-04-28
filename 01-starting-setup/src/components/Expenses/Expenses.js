import React, { useState } from 'react';

import './Expenses.css';
import './ExpensesFilter.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';


function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState('2020');

  const changeYearHandler = selectedYear => {
    setEnteredYear(selectedYear);
  };

  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onYearHandler={changeYearHandler}/>
      {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} /> )}
    </Card>
    </div>
  );


}
export default Expenses
