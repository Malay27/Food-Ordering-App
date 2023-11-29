import { useState } from "react";
import logoImage from "../assets/images/Logo.png";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className="logo" src={logoImage} alt="logo"></img>
  </a>
);

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
        </ul>
      </div>
      {isLogedIn ? (
        <button onClick={() => setIsLogedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
