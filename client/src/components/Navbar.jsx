import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import logo from "../data/logo.jpg"

//Nav bar for each page

export default function Navbar() {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn)
  
  const dispatch = useDispatch()

  //Navbar will change depending on if user is logged in or not 
 
    return (
      <nav className="nav">
        <Link to="/" className="site-title" id="logo">
        <img src={logo}></img>
        </Link>
        { loggedIn ?
        <ul className="nav__list">
          <li className="nav__item"><Link id="btn" to={"/"}>Home</Link></li>
          <li className="nav__item"><Link id="btn" to={"/courses"}>Courses</Link></li>
          <li className="nav__item"><Link id="btn" to={"/about"}>About</Link></li>
          <li className="nav__item"><Link id="btn" to={"/questionnaire"}>Questionnaire</Link></li>
          <li className="nav__item"><Link id="btn" to='/profile'>Profile</Link></li>
          <li className="nav__item"><Link  id="btn" to='/' onClick={() => dispatch(logout())}>Logout</Link></li>
        </ul>
        :
        <ul className="nav__list">
        <li className="nav__item">
          <Link id="btn" to={"/"}>Home</Link>
        </li>
        <li className="nav__item">
          <Link id="btn" to={"/courses"}>Courses</Link>
        </li>
        <li className="nav__item">
          <Link id="btn" to={"/about"}>About</Link>
        </li>

        <li className="nav__item"><Link id="btn" to='/signup'>Sign Up</Link></li>
        <li className="nav__item"><Link id="btn" to='/login'>Sign In</Link></li>


        </ul>
      }
      </nav>
    )
};