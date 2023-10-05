import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom";
//Nav bar for each page

export default function Navbar() {
  const location = useLocation()
  const user = location.state
  //Navbar will change depending on if user is logged in or not
  return(
    <div>
    {!user ?
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
                <Link to={"/questionnaire"}>Questionnaire</Link>
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
        
      : 
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
                <Link to={"/questionnaire"}>Questionnaire</Link>
              </li>
              <li className="nav__item">
                <Link to={"/profile"}>Dashboard</Link>
             </li>
             <li className="nav__item">
               <Link to={"/profile"}>Points :</Link>
            </li>
            </ul>
          </nav>
      }
    </div>
  )
  
};