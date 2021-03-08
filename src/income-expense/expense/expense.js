import React from 'react'

function Expense(props) {
    return (
        <div className='d-flex flex-column w-50  bg-warning align-items-center'>
            <h5>Expense</h5>
            <h3>${props.expense}</h3>
        </div>
    )
}

export default Expense
