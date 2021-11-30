//import ListItem from './ListItem'
import {useState} from 'react'

const Content = () => {

    const [items, setItems] = useState([])
    const [value, setValue] = useState('')

    const handleSubmit = () => {
        
        console.log(value)

        setItems(prev => [...prev, value])
        setValue('')
    }


    const handleInput = (e) => {
        setValue(e.target.value)
    }

    //console.log(value)

    const handleDelete = (item) =>{
        console.log(item)
        setItems(prev => prev.filter(i => i !== item))
    }
    
    return ( 
        <>
            <h2>Todo List</h2>
            
                <input value={value} onChange={handleInput} type="text" />
                <button onClick={handleSubmit} type="submit">Submit</button>
            
            
            <ul>
                {items.map(item => <li>{item} <button onClick={() => {handleDelete(item) }}>Delete</button></li>)}
            </ul>
        </>

    );
}

export default Content;