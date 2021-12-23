import { useSelector, useDispatch } from 'react-redux';
import AddItem from './AddItem';

function List() {

    const items = useSelector(state => state)
    console.log(items)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        //console.log(id)
        const action = {
            type: "DELETE_ITEM",
            payload: id
        }

        dispatch(action)
    }

    return (
        <div>
            <AddItem />
            <ul>
                {
                    items.map(item => <><li>{item.text}<button onClick={() => {
                        handleDelete(item.id)
                    }}>Delete</button></li></>)
                }
            </ul>
        </div>
    )
}

export default List;
