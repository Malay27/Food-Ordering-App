import React from "react";
import ReactDOM from "react-dom/client";
import logoImage from "./images/Logo.png";

const Title = () => (
  <a href="/">
    <img className="logo" src={logoImage} alt="logo"></img>
  </a>
);

const HeaderComponents = () => {
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


const Body = () =>{
  
}
// const AppLayout = () =>{
//   return (
//     <Header/>
//     <Body/>
//     <Footer/>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponents />);
