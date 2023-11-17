import { useState, useEffect } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) => {
    return restaurant.name.includes(searchText)
  });
}

const Body = () => {
  const [searchText, setsearchText] = useState("");

  const [restaurants, setRestaurants] = useState(restaurantList);

  useEffect(()=>{
    // API call
  },[]);

  // console.log("render");

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {restaurants.map((restaurant) => {
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
