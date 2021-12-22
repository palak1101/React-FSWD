import { useSelector } from "react-redux";

const Two = () =>  {
    
    const state = useSelector(state => state.products)
    console.log(state)
    
    return (
      <div>
         <h2>I'm component two</h2>
      </div>
    );
  
  }
  
  export default Two;
  