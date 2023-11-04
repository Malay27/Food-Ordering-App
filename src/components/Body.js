import { restaurantList } from "../constant";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="restraunt-list">
      {restaurantList.map((restaurant) => {
        return (
          <RestaurantCard {...restaurant} key={restaurant.id}></RestaurantCard>
        );
      })}
    </div>
  );
};

export default Body;