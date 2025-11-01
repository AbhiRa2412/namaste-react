import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

// not using keys (not acceptable) <<<<<<<<< use keys as indexes <<<<<<<<<<<<<< use unique keys (best practice)

const Body = () => {
  // const [filterRes, setFilterRes] = useState(resList);
  //onload passing empty array mock data is not needed to show
  //local state variable  =>. rerenders the component (aka reconcilation cycle)
  const [filterRes, setFilterRes] = useState([]);
  const [filterListOfResturant, setFilterListOfResturant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CDN_URL + "listRestaurants");
    const jsonData = await data.json();
    console.log(jsonData);
    // optional chaining
    setFilterRes(
      jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterListOfResturant(
      jsonData?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks like you're offline!! Please check your internet!</h1>;
  }

  const handleInputChange = (e) => {
    e.target.value == "" ? fetchData() : setSearchText(e.target.value);
  };

  //Conditional Rendering
  // console.log(resList);
  return filterRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-2 p-4">
          <input
            type="text"
            className="border border-black border-solid"
            value={searchText}
            onChange={handleInputChange}
          />
          <button
            className="px-2 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const fitlerResult = filterRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              console.log(fitlerResult);
              setFilterListOfResturant(fitlerResult);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-btn m-2 p-4 flex items-center">
          <button
            className="px-2 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              console.log(filterRes);
              const listOfFilter = filterRes.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilterRes(listOfFilter);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="filter-btn m-2 p-4 flex items-center">
          <input
            type="text"
            className="border border-black"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterListOfResturant.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            <RestaurantCard restaurantData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
