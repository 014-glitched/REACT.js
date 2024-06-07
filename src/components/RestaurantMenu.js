//import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {
    
    //const [resInfo, setResInfo] = useState(null);

    const {id} = useParams();    //resId will contain the id of th e restaurants, we can also console log useParams like const params = useParams();  and console log params it will give us the id which we can further use to pass in for routing different restaurant
    
    const resInfo = useRestaurantMenu(id);

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
    //console.log(itemCards);   


    return(
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}- {costForTwoMessage}</p >
            <ul>
                 {itemCards.map((item) => 
                    <li key={item.card.info.id}>
                        {item.card.info.name} - { "Rs."} 
                        {item.card.info.defaultPrice/ 100 || item.card.info.price/ 100}
                    </li>
                 )}                                         {/*here the map function will iterate over the itemCards and for each item we want the name of it. We want list of item out from it that is why we are using li tag here.*/}
                
            </ul>
        </div>
    );
};

export default RestaurantMenu;