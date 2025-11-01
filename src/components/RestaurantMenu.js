import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_RESTAURANTS } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  // console.log(resId);

  const dummy = "Dummy Data";

  //here all the fecthing related data is in custom hook
  //so RestrauntMenu component will be used only for UI related stuff
  //this approach AKA SRP (Single Responsibility Priniciple)
  const resInfo = useRestaurantMenu(resId);

  //this state variable is known as lifting the state up means passing props to parent indirectly
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="items-center p-4 m-4">
      <h1 className="font-bold text-2xl">{name}</h1>
      <h2>
        {cuisines.join(", ")} : {costForTwoMessage}
      </h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {" "}
              {item.card.info.name} - {"₹."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
      {/* categories accordions */}
      {categories.map((category, index) => (
        // controlled component because it's state is controlled by Parent component which is RestrauntMenu
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
