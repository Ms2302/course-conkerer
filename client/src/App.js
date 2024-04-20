import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/course";
import Userfront from "@userfront/react";
import Profile from "./components/Profile";
import SignUpPage from "./components/SignUp";
import SignInPage from "./components/Signin";
import Questionnaire from "./components/Questionnaire";
import Error from "./components/Error";
import { Routes, Route } from 'react-router-dom';





function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Product/>} />
        <Route path='/login' element={<SignInPage/>} />
        <Route path='/signUp' element={<SignUpPage/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/questionnaire' element={<Questionnaire/>} />
        <Route path='*' element={<Error/>}/>


      </Routes>
    </div>
  );
}

export default App;
