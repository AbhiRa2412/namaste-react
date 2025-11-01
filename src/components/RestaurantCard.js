import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  // console.log(props);

  const { restaurantData } = props;

  // console.log(restaurantData)

  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  const { loggedInUser } = useContext(UserContext);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    restaurantData;
  return (
    // <div className="res-card m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200" style={styleCard}>
    <div data-testid = "resCard" className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
      {/* <img
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      /> */}
      <img
        src={
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?_gl=1*11g61ld*_ga*NTM3NjQxNzIxLjE3NjE1NjkwODI.*_ga_8JE65Q40S6*czE3NjE1NjkwODIkbzEkZzEkdDE3NjE1NzA3MTkkajQ3JGwwJGgw"
        }
        alt="res-logo"
        className="res-logo"
      />
      <h3 className="font-bold pt-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>ETA {restaurantData.info?.sla.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard =>> RestaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
