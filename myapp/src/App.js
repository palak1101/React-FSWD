import Products from './components/Products';
import Details from './components/Details';
import Navbar from './layouts/Navbar';
import {Routes, Route} from 'react-router-dom';


const App = () =>  {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/product/:name' element={<Details />} />
      </Routes>
    </div>
  );

}

export default App;
