import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpenseChart from './ExpensesChart';
import Card from "../UI/Card";


import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');
    const filterChangeYear = selectedYear => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.items.filter(expense => {
        return (expense.date.getFullYear()).toString() == filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeYear} />
                <ExpenseChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />

            </Card>
        </div>
    );
}

export default Expenses;