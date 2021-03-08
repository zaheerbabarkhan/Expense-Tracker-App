import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

const intialState = {
    transaction: [
        
    ]
}



export const GlobalContext = createContext(intialState);



const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, intialState);


    function deleteTrans(id)
    {
        dispatch({
            
                type: 'DELETE_TRANSACTION',
                payload: {id: id}
            
        });
    }


    function addTrans(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }


    return(
        <GlobalContext.Provider value={{transaction: state.transaction, deleteTrans, addTrans}}>
            {children}
        </GlobalContext.Provider>
    )
} 

export default GlobalProvider;