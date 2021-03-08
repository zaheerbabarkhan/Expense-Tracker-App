import React from 'react';
import { GlobalContext } from '../context/GlobalState'

function History() {



    const context = React.useContext(GlobalContext);
    // console.log(context.transaction);
    return (
        <div className='d-flex flex-column mt-4 mb-2'>
            <h5>History</h5>
            {
                context.transaction.map(trans => {
                    return (
                        <div key={trans.id} className={`d-flex justify-content-between my-1 bg-light text-dark py-2 rounded border-end border-4 ${trans.type === 'expense' ? 'border-danger' : 'border-success'}`}>
                            <h5 className='m-0 py-2'>{trans.text}</h5>
                            <h5 className='m-0 py-2'>{trans.type === 'income' ? ' + ' : ' - '}${trans.amount}</h5>
                            <button className='btn-sm btn-warning' onClick={() => {context.deleteTrans(trans.id)}}>X</button>
                        </div>
                    )
                })
            }


            {/* <ul className='w-100 border border-success'>
                {
                    context.transaction.map(trans => {
                        return (
                            <li className='d-flex justify-content-between my-1 bg-dark text-white py-2 rounded border border-5 w-100'>
                            <h6 className='m-0 p-0'>{trans.text}</h6>
                            <h6 className='m-0 p-0'>${ trans.amount}</h6>
                        </li>
                        )
                    })
                }
            </ul> */}






            {/* <div className='d-flex justify-content-between my-1 bg-dark text-white py-2 rounded'>
                <h6 className='m-0 p-0'>Cash</h6>
                <h6 className='m-0 p-0'>$500</h6>
            </div> */}


        </div>
    )
}

export default History
