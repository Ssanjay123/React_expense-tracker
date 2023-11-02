import React ,{ useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpense";


const DUMMY_EXPENSES = [
  {id:"e1", title: "Birthday gift", amount: 100, date: new Date(2023,7,21) },
  {id:"e2", title: "food", amount: 50, date: new Date(2022,7,21) },
  {id:"e3", title: "fuel", amount: 150, date: new Date(2023,7,21) }
];

function App() {
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense =>{
  setExpenses((prevExpenses)=>{
    return [expense,...prevExpenses]
  })   
  }
  return (
    <div className="App">
      <p>This is my first react project.</p>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
