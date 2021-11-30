//import ListItem from './ListItem'
import {useState, useEffect} from 'react'

const Content = () => {
    
    //console.log('render')
    const [counter, setCounter] = useState(0)
    const [content, setContent] = useState([])

    const APICall = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await res.json()
        setContent(data)
    }

    useEffect(() => {
        APICall()
    }, [])
    
    return ( 
        <>
            <h2>{counter}</h2>
            <button onClick= {() => { setCounter(prev => prev + 1) }}>Click Me!</button>

            <ul>
                {content.map(item => <li>{item.title}</li>)}
            </ul>
           
        </>

    );
}

export default Content;