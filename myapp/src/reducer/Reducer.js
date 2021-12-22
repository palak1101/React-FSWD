// const initialState = [
//     {password: 'acnikjf'},
//     {password: 'something'},
//     {password: 'dnbj56'}
// ]



const Reducer = (state = {}, action)=>{
    const {type, payload} = action
    switch (type){
        case 'ADD_PRODUCT':
            const {products} = state
            console.log(action)
            return {...state, products: [...products, payload]}

        default:
            return state
    }
}

export default Reducer;