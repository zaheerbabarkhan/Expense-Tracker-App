import React from 'react';
import { GlobalContext } from '../context/GlobalState';




function Balance() {


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
        <div className='d-flex flex-column mt-4'>
            <h4 className='my-0'>YOUR BALANCE</h4>
            <h1 className='my-0'>${ income - expense}</h1>
        </div>
    )
}

export default Balance
