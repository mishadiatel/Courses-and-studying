import React, { useState } from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import Card from "../UI/Card";


import './Expenses.css';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023');
    const filterChangeYear = selectedYear => {
        setFilteredYear(selectedYear)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeYear} />
                {props.items.map(expense =>
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date} />
                )}

            </Card>
        </div>
    );
}

export default Expenses;