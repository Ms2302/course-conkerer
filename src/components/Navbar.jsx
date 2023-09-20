import { Link } from "react-router-dom"
import Userfront from "@userfront/react";

Userfront.init("vndy4rvb");

export default function Navbar() {
  if(!Userfront.accessToken()){
    return (
      <nav className="nav">
        <Link to="/" className="site-title">
          Course Curator
        </Link>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav__item">
            <Link to={"/courses"}>Courses</Link>
          </li>
          <li className="nav__item">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="nav__item">
           <Link to={"/login"}>Log in</Link>
          </li>
          <li className="nav__item">
            <Link to={"/signUp"}>Sign Up</Link>
          </li>
         <li className="nav__item">
         <Link to={"/login"}>Points?</Link>
      </li>
        </ul>
      </nav>
    )
  }
  else{
    return (
      <nav className="nav">
        <Link to="/" className="site-title">
          Course Curator
        </Link>
        <ul className="nav__list">
          <li className="nav__item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="nav__item">
            <Link to={"/courses"}>Courses</Link>
          </li>
          <li className="nav__item">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="nav__item">
            <Link to={"/dashboard"}>Dashboard</Link>
         </li>
         <li className="nav__item">
           <Link to={"/dashboard"}>Points :  {Userfront.user.data.points}</Link>
        </li>
        </ul>
      </nav>
    )
  }
  
  
};