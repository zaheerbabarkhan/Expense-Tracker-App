import React from 'react'
import { GlobalContext } from '../context/GlobalState'

function Add_Trans() {

    const context = React.useContext(GlobalContext);
    const [text, setText] = React.useState('');
    const [amount, setAmount] = React.useState(0);
    const [type, setType] = React.useState('');

    // const amoun = parseInt(amount);
    // const object = { id: `${text + type}`, text: text, type: type, amount: amount}
    // console.log(text);
    // console.log(amount);

//    console.log(object)

   function onSubmit(e) {
       e.preventDefault();

       const newTrans = {
           id: Math.floor(Math.random()  * 1000),
           text,
           type,
           amount: +amount
       };
       console.log(newTrans);
       context.addTrans(newTrans);
   }





    return (
        <div>
            <h5>Add new Transaction</h5>

            <form onSubmit={onSubmit}>
                <h6>Description</h6>
                <input type='text' className='w-100' value={text} onChange={(e) => setText(e.target.value)} />



                <div className='d-flex justify-content-around py-1 fs-4'>
                    <div><input type='radio' name='transType' id='expense' onClick={() => setType('Expense')} style={{ width: '15px', height: '15px' }} />
                        <label><h5> Expense</h5></label>
                    </div>
                    <div>
                        <input type='radio' name='transType' id='income' onClick={() => setType('income')} style={{ width: '15px', height: '15px' }} />
                        <label><h5> Income</h5></label>
                    </div>
                </div>

                <div className='w-100'>
                    <h6>Amount</h6>
                    <input type='number' className='w-100' value={amount} onChange={(e) => setAmount(e.target.value)}/>

                </div>
                <div className='my-2'>
                    <input type='submit' value='Submit' className='btn btn-lg btn-info w-100 fs-4' />
                </div>
            </form>
        </div>
    )
}

export default Add_Trans
