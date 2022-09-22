import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Detail from './frontend/Detail';
import Cart from './frontend/Cart';
import ErrorBoundary from './frontend/ErrorBoundary';
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
     <Route exact path='/detail' element={<Detail/>}/>
     <Route exact path='/error' element={<ErrorBoundary/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
