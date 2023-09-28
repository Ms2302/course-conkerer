import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/course";
import Userfront from "@userfront/react";
import Dashboard from "./components/dashboard";
import SignUpPage from "./components/SignUp";
import LoginPage from "./components/Login";
import Questionnaire from "./components/Questionnarie";
import { Routes, Route } from 'react-router-dom';



Userfront.init("vndy4rvb");

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/questionnaire' element={Questionnaire}/>
        <Route path='/courses' element={<Product/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/signUp' element={<SignUpPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />

      </Routes>
      <Questionnaire></Questionnaire>
    </div>
  );
}

export default App;
