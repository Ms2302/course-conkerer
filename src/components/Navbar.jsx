import { Link } from "react-router-dom"

export default function Navbar() {
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
          <Link to={"/sign up"}>Sign Up</Link>
        </li>
        <li className="nav__item">
          <Link to={"/dashboard"}>Dashboard</Link>
       </li>
      </ul>
    </nav>
  )
};