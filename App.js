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

const restaurantList=[
    {
      "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbuN38lotdnj89kfeaqHsVvkIl8kuwu6qyA&usqp=CAU",
      "name": "TORITOS Restaurant",
      "cuisines": "American, Italian, Mexican",
      "rating": "4.0"
    },
    {
      "image_link": "https://d4t7t8y8xqo0t.cloudfront.net/resized/292X204/restaurant%2F642236%2F0.jpg",
      "name": "Just Live Restaurant",
      "cuisines": "American, Chinese, Italian, Mexican",
      "rating": "4.2"
    },
    {
      "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZz5GnhDtlbAvyTbPN2lgC_TE3QwfPoU5Mig&usqp=CAU",
      "name": "The Big Texan",
      "cuisines": "American",
      "rating": "4.5"
    },
    {
      "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdssKuO3X-R0TJHL06oF5CGuDK8NdytXgrbA&usqp=CAU",
      "name": "China Garden",
      "cuisines": "Chinese",
      "rating": "4.7"
    },
    {
      "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF50K9q2dfg-uV3-nbrMxbJkV6CbcY2Ln3wA&usqp=CAU",
      "name": "Little Italy",
      "cuisines": "Italian",
      "rating": "4.8"
    },
    {
      "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPlsXNT0cZixgcB5iZobs9XM3sj8oN5p-Hg&usqp=CAU",
      "name": "Mexico City Restaurant",
      "cuisines": "Mexican",
      "rating": "4.9"
    },
    {
      "image_link": "https://d1ralsognjng37.cloudfront.net/6ec4ca38-fb73-479b-865f-3464fbdb5ab3.webp",
      "name": "The Yellow Chilli",
      "cuisines": "North Indian, Chinese",
      "rating": "4.3"
    },
    {
      "image_link": "https://media-cdn.tripadvisor.com/media/photo-s/17/e2/fa/74/img20190610224410-largejpg.jpg",
      "name": "Zaika",
      "cuisines": "Mughlai, Chinese",
      "rating": "4.4"
    },
    {
      "image_link": "https://b.zmtcdn.com/data/pictures/chains/3/3001723/206973b45e3e43636e10ea448b814d48.jpg",
      "name": "The Great Kebab Factory",
      "cuisines": "Indian, Continental, Chinese",
      "rating": "4.5"
    },
    {
      "image_link": "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/h/n/p95-16444959626205045ab0b43.jpg?w=400",
      "name": "Barbeque Nation",
      "cuisines": "Indian, Chinese, Continental",
      "rating": "4.6"
    }  
];

const RestaurantCard = ({ image_link,name,cuisines,rating }) => {
  return (
    <div className="card">
      <img src={image_link}></img>
      <h2>{name}</h2>
      <h3>{cuisines}</h3>
      <h4>{rating} star</h4>
    </div>
  );
};


const Body = () => {
  return (
    <div className="restraunt-list">
      {
        restaurantList.map(restaurant => {
          return <RestaurantCard {...restaurant}></RestaurantCard>;
        })
      }
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
