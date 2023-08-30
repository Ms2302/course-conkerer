import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Product from "./components/course";
import Userfront from "@userfront/react";
import { Routes, Route } from 'react-router-dom';
import { redirect } from 'react-router-dom';
Userfront.init("vndy4rvb");

const SignupForm = Userfront.build({
  toolId: "nkordkm"
});

const LoginForm = Userfront.build({
  toolId: "mlarblm"
});

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/courses' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/sign up' element={<SignUpPage/>} />
        <Route path='/dashboard' element={<Dashboard/>} />

      </Routes>
    </div>
  );
}

function Dashboard() {
    if (!Userfront.accessToken()) {
      return <p>Please Log In OR Sign Up</p>;
    }

  const userData = JSON.stringify(Userfront.user, null, 2);
  return(
    <div>
      <h2>Dashboard</h2>
      <pre>{userData}</pre>
      <button onClick={Userfront.logout}>Logout</button>
    </div>
   );
  
}

function SignUpPage(){
  return(
  <div className='signup'>
    <h1>This is the Sign Up Page</h1>
    <SignupForm />
  </div>
  );
}

function Login(){
  return(
  <div className='login'>
    <h1>This is the Login Up Page</h1>
    <LoginForm />
  </div>
  );
}



export default App;
