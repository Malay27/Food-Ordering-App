import { useState, useEffect } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import notFound from "../../images/notFound.png";

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) => {
    return restaurant?.info?.name?.toLowerCase().includes(searchText);
  });
}

const Body = () => {
  const [searchText, setsearchText] = useState("");

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.591945&lng=73.73897649999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    // console.log(json?.data?.cards[3]?.card);
    // console.log(json?.data?.cards[3]?.card.card);
    // console.log(json?.data?.cards[3]?.card.card.gridElements);
    // console.log(json?.data?.cards[3]?.card.card.gridElements.infoWithStyle);
    console.log(
      json?.data?.cards[5]?.card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card.card.gridElements.infoWithStyle.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[5]?.card.card.gridElements.infoWithStyle.restaurants
    );
  }

  if (!allRestaurants) return null;

  // if(filteredRestaurants.length == 0) return (
  //   <div>
  //     <img src={notFound}></img>
  //     <h3>Not Found</h3>
  //   </div>
  // );

  return allRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
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
            const data = filterData(searchText.toLowerCase(), allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restraunt-list">
        {filteredRestaurants.length == 0 ? (
          <div>
            <img src={notFound}></img>
            <h3>Not Found</h3>
          </div>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              {...restaurant?.info}
              key={restaurant?.info?.id}
            ></RestaurantCard>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
