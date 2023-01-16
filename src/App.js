import './App.css';
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Homepage from './pages/hompage/Homepage';
=======
import { Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
>>>>>>> d7aaae44b9138b65f10df0ea63b6914b3fab6916

function App() { 
  return (
    <>
    <Navbar />
<<<<<<< HEAD
=======
    <p>Hello There</p>
>>>>>>> d7aaae44b9138b65f10df0ea63b6914b3fab6916
    <Routes>
      <Route path='/' element={<Homepage />}/>
    </Routes>
    </>
  );
}

export default App;
