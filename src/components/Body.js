import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockdata";
import { useState } from "react";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    

     return(
         <div className="body">
              <div className="filter">
              <button
                    className="filter-btn"
                    onClick={() => {
                    // * Filter logic
                    const filteredList = listOfRestaurants.filter(
                    (res) => res.data.avgRating > 4
                    );

            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
                    
                    Top Rated Restaurants</button>  

             </div>
              <div className="res-container">
                   {/* <RestaurantCard resName = "Manish Eating Point" cuisine="Biryani, Chinese"/>
                   <RestaurantCard resName = "KFC" cuisine="Burgers, Fries" />
                   <RestaurantCard/> */}
                   {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                   ))}
              </div>

         </div>
    )
}

export default Body;