import React from 'react'

function Income(props) {
    return (
        <div className='d-flex flex-column w-50 align-items-center bg-success'>
            <h5 className=''>Income</h5>
            <h3>${props.income}</h3>
        </div>
    )
}

export default Income;
