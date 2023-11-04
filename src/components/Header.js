import logoImage from "../../images/Logo.png";

const Title = () => (
  <a href="/">
    <img className="logo" src={logoImage} alt="logo"></img>
  </a>
);

const Header = () => {
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
    </div>
  );
};


export default Header;