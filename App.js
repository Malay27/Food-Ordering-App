import React from "react";
import ReactDOM from "react-dom/client";
import logoImage from "./images/Logo.png";

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

const restrauntList={
  img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpISLzf2yeqCLYdGAm14256zLbsa4yI8hWEg&usqp=CAU",
  name:"Pizza Place",
  cusines:["Pizza","American"],
  rating:"4.2"

};

const RestrauntCard = () => {
  return (
    <div className="card">
      <img src={restrauntList.img}></img>
      <h2>{restrauntList.name}</h2>
      <h3>{restrauntList.cusines.join(", ")}</h3>
      <h4>{restrauntList.rating} start</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restraunt-list">
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
      <RestrauntCard />
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
