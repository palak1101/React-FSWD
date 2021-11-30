//import ListItem from './ListItem'
import {useState, useEffect} from 'react'

const Content = () => {
    
    //console.log('render')
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        console.log('Mounted')
    }, [])
    
    return ( 
        <>
            <h2>{counter}</h2>
            <button onClick= {() => { 
                setCounter(prev => prev + 1) }}>Click Me!</button>
           
        </>

    );
}

export default Content;