import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import LoginPage from "./components/Login";
import Profile from "./components/profile";
import Product from "./components/course";
import { Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Product/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
