//import ListItem from './ListItem'
import {useState} from 'react'

const Content = () => {

    const [counter, setCounter] = useState(0)
    // console.log(counter)
    // console.log(mysteryfunction)

    return (
        <div className="container">
            <h2>{counter}</h2>
            <button onClick={() => {
                // counter = counter + 1
                // console.log(counter)
                setCounter(previousValue => {
                    console.log(previousValue)
                    return previousValue+1
                })
            }}>Click Me!</button>
        </div>
    );
}

export default Content;