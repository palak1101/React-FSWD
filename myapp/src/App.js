import {useState} from 'react'
import ChildOne from "./components/childOne";

const App = () =>  {

  const [data, setData] = useState([{name: "Apple"}, {name: "Samsung"}, {name: "Nokia"}])

  return (
    <div className="App">
      <h1 style={{color: "red"}}>I'm the Parent</h1>
      <ChildOne data={data} />
    </div>
  );

}

export default App;
