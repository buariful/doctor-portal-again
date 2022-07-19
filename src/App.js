
import './App.css';
import Navbar from './Shared/Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound';
import Appoinment from './Pages/Appoinment/Appoinment';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appoinment' element={<Appoinment></Appoinment>}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div >
  );
}

export default App;
