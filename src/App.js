import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/hompage/Homepage';
import Newsletter from './pages/newletter/Newsletter';
import Axios from './pages/axios/Axios';

function App() { 
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/newsletter' element={<Newsletter />}/>
      <Route path='/axios' element={<Axios />}/>
    </Routes>
    </>
  );
}

export default App;