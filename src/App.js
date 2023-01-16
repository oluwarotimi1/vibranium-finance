import './App.css';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/hompage/Homepage';

function App() { 
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Homepage />}/>
    </Routes>
    </>
  );
}

export default App;
