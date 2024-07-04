//import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {
    
    //const [resInfo, setResInfo] = useState(null);

    const {id} = useParams();    //resId will contain the id of th e restaurants, we can also console log useParams like const params = useParams();  and console log params it will give us the id which we can further use to pass in for routing different restaurant
    
    const resInfo = useRestaurantMenu(id);

    const[showIndex, setShowIndex] = useState(0);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () =>  {
    //     const data = await fetch(MENU_API + id);
    //     const res = await data.json();
    //     console.log(res); 
    //     setResInfo(res.data);
    // };

    if(resInfo === null) return <Shimmer/>;

    const {name, 
        cuisines,  
        costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);   

    const categories = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(categories);


    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}- {costForTwoMessage}</p >
            {/* {categories accordion} */}
            {categories.map((category, index) => {
                return <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex= {() => setShowIndex(index)}
                />
            })}
            
        </div>
    );
};

export default RestaurantMenu;



// {/* <ul>
//{itemCards.map((item) => 
//<li key={item.card.info.id}>
//{item.card.info.name} - { "Rs."} 
//{item.card.info.defaultPrice/ 100 || item.card.info.price/ 100}
//</li>
//)}      {/*here the map function will iterate over the itemCards and for each item we want the name of it. We want list of item out from it that is why we are using li tag here.*/}
                
// </ul> 
                