import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {


    const handleClick = () => {
        setShowIndex();
    }

    return(
        <div>
                <div className="w-6/12 bg-gray-200 shadow-xl p-4 mx-auto my-4">  
                    <div className=" flex justify-between cursor-pointer" onClick={handleClick}> 
                        {/* {Accordion Header} */}
                        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                        <span>⬇</span>
                    </div>   

                {/* {Accordion Body} */}
                {showItems && <ItemList items={data.itemCards}/>} 
            </div>

        </div>
    )
}

export default RestaurantCategory;



// w-6/12 - tailwind divide the page into 12 sections and 6/12 means half the page
// {showItems && <ItemList items={data.itemCards}/>} --> Initially showItems is set to false and here the condition is using AND statement where both has to be true to print the result true but the showItems is set to false that is why the data or menu item is not shown in the application so now we have to write the logic where we click on the button and the menu item is shown onto the application.
// setShowItems(!showItems); --> this line of code will set a toggle feature where by clicking we can expand and collapse the menu 
// (!showItems) means it will reverse the condition if it is true it will set to false and vice versa.