import { useState, useEffect } from "react";
import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import notFound from "../assets/images/notFound.png";
import { Link } from "react-router-dom";

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
      json?.data?.cards[2]?.card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card.card.gridElements.infoWithStyle.restaurants
    );
    setAllRestaurants(
      json?.data?.cards[2]?.card.card.gridElements.infoWithStyle.restaurants
    );
  }

  if (!allRestaurants) return null;

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
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info}></RestaurantCard>
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
