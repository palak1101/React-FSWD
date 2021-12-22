// const initialState = [
//     {password: 'acnikjf'},
//     {password: 'something'},
//     {password: 'dnbj56'}
// ]



const Reducer = (state = {}, action)=>{
    switch (action.type){
        case 'ADD_DATA':
            return [...state, action.payload]
        default:
            return state
    }
}

export default Reducer;