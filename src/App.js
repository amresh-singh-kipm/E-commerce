import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Cart from './frontend/Cart';
import Home from './frontend/Home';
import Login from './frontend/Login';
import Navbar from './frontend/Navbar';


function App() {
  return (
    <div className="App">
      
     <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path ="/login" element={<Login/>}/>
     <Route exact path='/cart' element={<Cart/>}/>
     <Route exact path='/navbar' element={<Navbar/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
