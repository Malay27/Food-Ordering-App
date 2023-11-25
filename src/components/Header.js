import { useState } from "react";
import logoImage from "../../images/Logo.png";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
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
