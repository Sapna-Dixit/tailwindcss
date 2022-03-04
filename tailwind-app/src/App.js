
import './App.css';
import Lorem from './Lorem';
 import Login from './Login';
 import Test from './Test';
 import Register from'./Register';
 import {Routes, Route} from 'react-router-dom';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      
    <Navigation />
      <Routes>
        <Route exact path="/" element={<Lorem/>}></Route>
        <Route path = "/login" element={<Login />}></Route>
        <Route path ="/register" element={<Register />}></Route>
        
        <Route path = "/test" element={<Test />}></Route>
      </Routes>
  </div>
  );
}

export default App;
