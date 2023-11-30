import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';
import { IoMdMenu } from "react-icons/io";
const Navbar = () => {

    const [media, setMedia] = useState(false);

  return (
    <nav>
      <NavLink to="/" className="title">
        <h1>🆃🆄🆃🅾🆁</h1>
      </NavLink>

     

      <ul className={media ? "active" : ""}>
        <li>
          <NavLink to="/"  className="navlink ">
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/services" className="navlink">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="navlink">
            Contact
          </NavLink>
        </li>
       
      </ul>
      <div className="button">
        <button className="btn">Sign in</button>
        <button className="btn">Sign up</button>
      </div>

      <div className="barger">
        <span className="icon" onClick={()=>setMedia(!media)}><IoMdMenu  /></span>
      
      </div>

    </nav>
  );
};

export default Navbar;
