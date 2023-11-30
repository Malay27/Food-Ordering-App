import { IMG_CDN_URL } from "../constant";

const RestaurantCard = ({ cloudinaryImageId, name, cuisines, avgRating, id }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL+cloudinaryImageId}></img>
      <h4>{name}</h4>
      <h6>{cuisines?.join(", ")}</h6>
      <h6>{avgRating} star</h6>
      <h6>{id}</h6>
    </div>
  );
};

export default RestaurantCard;
