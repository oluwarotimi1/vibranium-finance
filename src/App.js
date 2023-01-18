import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './pages/hompage/Homepage';
import Newsletter from './pages/newletter/Newsletter';

function App() { 
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Homepage />}/>
      <Route path='/newsletter' element={<Newsletter />}/>
    </Routes>
    </>
  );
}

export default App;