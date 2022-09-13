import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Cart from './frontend/Cart';
import HighOC from './frontend/HighOC';
import Home from './frontend/Home';
import Login from './frontend/Login';
import Navbar from './frontend/Navbar';
import ParentCallback from './frontend/ParentCallback';
import UseCallback from './frontend/UseCallback';


function App() {
  return (
    <div className="App">
      
     <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path ="/login" element={<Login/>}/>
     <Route exact path='/cart' element={<Cart/>}/>
     <Route exact path='/navbar' element={<Navbar/>}/>
     <Route exact path="/callback" element={<UseCallback/>}/>
     <Route exact path='/parentcallback' element={<ParentCallback/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
