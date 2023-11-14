import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  let searchTxt = "Zaika";
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchTxt}
          onChange={(e)=>console.log("malay")}
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
