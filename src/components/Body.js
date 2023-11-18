import { useState, useEffect } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) => {
    return restaurant.name.includes(searchText);
  });
}

const Body = () => {
  const [searchText, setsearchText] = useState("");

  const [restaurants, setRestaurants] = useState(restaurantList);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants(){
    const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json);
console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info);

  }

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
