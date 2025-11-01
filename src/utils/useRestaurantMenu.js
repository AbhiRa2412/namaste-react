import { useState, useEffect } from "react";

import { REST_MENU } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchRestaurant();
  }, []);

  const fetchRestaurant = async () => {
    //this CDN_RESTAURANTS has some issue as it is now coming from aws so will not work. still
    // writing code for future improvements
    const restaurantDataRes = await fetch(REST_MENU + resId);

    const restaurantDataResJSON = await restaurantDataRes.json();

    setResInfo(restaurantDataResJSON.data);

    console.log(resInfo);
  };

  return resInfo;
};

export default useRestaurantMenu;
