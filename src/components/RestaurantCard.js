import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating, id }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL+cloudinaryImageId}></img>
      <h2>{name}</h2>
      <h3>{cuisines?.join(", ")}</h3>
      <h4>{avgRating} star</h4>
    </div>
  );
};

export default RestaurantCard;
