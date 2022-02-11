import React, {useState} from "react"

import ExpenseFilter from "./ExpenseFilter"
import ExpenseList from "./ExpenseList"
import ExpenseChart from "./ExpensesChart"
import Card from "../UI/Card"

import "./Expenses.css"

const Expenses = (props) =>{
  const [filteredYear, setFilteredYear] = useState("2020")

  const filterChangeHandler = (selectedYear)=>{
    setFilteredYear(selectedYear)
  }

  const filteredExpense = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear
  })

  return (
  <div>
    <Card className="expenses">
      <ExpenseFilter
      selectedDefault={filteredYear}
      onChangeFilter = {filterChangeHandler}/>
      <ExpenseChart expenses={filteredExpense}/>
      <ExpenseList items={filteredExpense}/>
    </Card>
  </div>
  )

}

export default Expenses
