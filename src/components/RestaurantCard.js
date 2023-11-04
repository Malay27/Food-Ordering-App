const RestaurantCard = ({ image_link, name, cuisines, rating, id }) => {
  return (
    <div className="card">
      <img src={image_link}></img>
      <h2>{name}</h2>
      <h3>{cuisines}</h3>
      <h4>{rating} star</h4>
    </div>
  );
};

export default RestaurantCard;
