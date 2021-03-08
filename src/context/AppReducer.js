export default (state, action) => {
    switch (action.type) {

        case 'DELETE_TRANSACTION':

        return {
            ...state, transaction: state.transaction.filter(trans => trans.id !== action.payload.id)
        }

            break;

        case 'ADD_TRANSACTION':
            // console.log(action.payload);

            return {
                ...state, transaction: [action.payload, ...state.transaction]
            }
            break;
        default:
            return state;
            break;
    }
}