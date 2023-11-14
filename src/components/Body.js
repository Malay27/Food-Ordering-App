import { useState } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [searchInput,setSearchInput]=useState("Zaika");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e)=>{
            setSearchInput(e.target.value);
          }}
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="restraunt-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard
              {...restaurant}
              key={restaurant.id}
            ></RestaurantCard>
          );
        })}
      </div>
    </>
  );
};

export default Body;
