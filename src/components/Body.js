import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    console.log('Body rendered');
    
     useEffect(() => {
          fetchData();
     }, [])

      const fetchData = async () => {
          const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8741674&lng=80.9777585&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
          

          const json = await data.json();

          console.log(json);
          

          setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      };     


     const onlineStatus = useOnlineStatus();

     if(onlineStatus === false) 
          return 
               <h1>Look's like you're offline!! Please check your Internet connection.</h1>

     return (listOfRestaurants.length === 0) ? <Shimmer/> :          //writing the condition using ternary operator
     ( 
         <div className="body">
              <div className="filter">
               <div className="search">
                    <input type="text" 
                    className="search-box" 
                    value={searchText}  //here we are binding the searchText to the input box that means whatever will be in the searchText variable will be there inside the value box so when we are changing the value of input box the value of input box is still tight to the searchText because the value is bind to the searchText and searchText initially is empty so the input box will not change untill we change the searchTextto fix this we will use onChange handler. onChange function will update the searchText. Each time we are writing anything inside our input box the whole body component is getting rendered if we write "Cafe" so it will render 4 times like on a single word we write inside the box it renders the whole component and compare the old DOM with the new DOM.
                    onChange={(e) => {
                         setSearchText(e.target.value);
                    }} />
                    
                    <button onClick={() => {
                         //Filter the restaurant cards and update the UI
                         const filteredRestaurant = listOfRestaurants.filter((res) => 
                         res.info.name.toLowerCase().includes(searchText.toLowerCase())
                         );

                         setFilteredRestaurant(filteredRestaurant);
                    }}>
                         Search</button>
               </div>
                    <button
                              className="filter-btn"
                              onClick={() => {
                              // * Filter logic
                              const filteredList = listOfRestaurants.filter(
                              (res) => res.info.avgRating > 4.3
                              );

                    setListOfRestaurants(filteredList);
                    //console.log(filteredList);
                    }}
               >
                         Top Rated Restaurants</button>  

             </div>
              <div className="res-container">
                   {/* <RestaurantCard resName = "Manish Eating Point" cuisine="Biryani, Chinese"/>
                   <RestaurantCard resName = "KFC" cuisine="Burgers, Fries" />
                   <RestaurantCard/> */}
                   {filteredRestaurant?.map((restaurant) => (
                    <Link  
                         key={restaurant.info.id}
                         to={"/restaurants/" + restaurant.info.id}
                    >
                         <RestaurantCard resData={restaurant} /> 
                    </Link>
                   ))}
              </div>

         </div>
    )
}

export default Body;