import ExpenseItem from './components/Expenses/ExpenseItem';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {

  const addExpenseHandler = expense => {
    console.log('in app.js');
    console.log(expense);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>

      <Expenses  />
    </div>
  );
}

export default App;
