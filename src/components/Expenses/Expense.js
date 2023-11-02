import React,{useState} from "react";

import ExpenseFilter from "./ExpenseFilter"


import ExpsenseList from "./ExpenseList";

import './Expense.css'


import Card from '../UI/Card'

function Expenses(props){
    const [filteredYear,setFilteredYear] = useState('2023')

    const filterChangeHandler = (selectedYear)=>{
          setFilteredYear(selectedYear);
        };
    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
        <Card className='expenses'>
            <ExpenseFilter 
              selected={filteredYear}
              onChangeFilter={filterChangeHandler}
            />
           <ExpsenseList items={filteredExpenses}/>
            {/* {filteredExpenses.length===1 && <p>Only One expnse.Please add more<p/>} */}
        </Card>
        </div>
    )
}

export default Expenses;