import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState();
  const [basicInformation, setBasicInformation] = useState();
  const [menu, setMenu] = useState();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    console.log(id);
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.591945&lng=73.73897649999999&restaurantId=" +
        id
    );
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json?.data);
    // console.log(restaurant);
    // setBasicInformation(json?.data?.cards[0]?.card?.card?.info);
    // console.log(basicInformation);
    // setMenu(json?.data?.cards[3].groupedCard.cardGroupMap.REGULAR.cards);
    // console.log(menu);
  }

  useEffect(() => {
    if (restaurant) {
      setBasicInformation(restaurant?.cards[0]?.card?.card?.info);
      setMenu(restaurant?.cards[2].groupedCard.cardGroupMap.REGULAR.cards);
    }
  }, [restaurant]);

  // useEffect(() => {
  //   console.log(basicInformation);
  // }, [basicInformation]);

  // useEffect(() => {
  //   console.log(menu);
  // }, [menu]);

  return (
    <div className="menu">
      <div>
        <h1>RestaurantId: {basicInformation?.id}</h1>
        <h2>{basicInformation?.name}</h2>
        <img src={IMG_CDN_URL + basicInformation?.cloudinaryImageId} />
        <h3>{basicInformation?.areaName}</h3>
        <h3>{basicInformation?.city}</h3>
        <h4>{basicInformation?.avgRating}</h4>
        <h5>{basicInformation?.costForTwoMessage}</h5>
      </div>
      <div>
        <h3>Menu:</h3>
        {menu?.map((menuItem) => (
          <ul key={menuItem?.card?.info?.id}>
            {menuItem?.card?.card?.itemCards?.map((item) => (
              <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;

