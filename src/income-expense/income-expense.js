import React from 'react'
import Income from './income/income.js'
import Expense from './expense/expense.js'
import { GlobalContext } from '../context/GlobalState'


function Income_Expense() {

    const context = React.useContext(GlobalContext);
    // console.log(context.transaction.map(trans => trans.amount));
    let expense = 0;
    let income = 0;
    context.transaction.map(
        trans => {
            if (trans.type === 'income') {
                income = income + trans.amount;
            }
            else {
                expense = expense + trans.amount;
            }
        }
    );


    return (
        <div className='d-flex d-row mt-2'>
            <Income income={income}/>
            <Expense expense={expense}/>
        </div>
    )
}

export default Income_Expense
