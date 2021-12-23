import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {v4 as uuidv4} from 'uuid';


function AddItem() {
    
    const [item, setItem] = useState('')
    const dispatch = useDispatch()



    const addTask = () => {
        console.log(item)
        const action = {
            type: "ADD_ITEM",
            payload: {
                id: uuidv4(),
                text: item
            }
        }

        dispatch(action)
    }


    return (
        <div>
            <input onChange={(e) => { setItem(e.target.value) }}type="text" /> <button onClick={addTask}>Add</button>
        </div>
    )
}

export default AddItem;
