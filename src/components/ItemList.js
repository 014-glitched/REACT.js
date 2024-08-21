import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";


const ItemList = ({items}) => {
    // console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //Dispatch an action
        dispatch(addItem(item));
    }

    return (
        <div>
            {items.map((item) => 
                <div data-testid="foodItems" key={item?.card?.info?.id} className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
                    
                <div className="w-8/12">
                    <div className="py-2">
                        <span>{item?.card?.info?.name}</span>
                        <span> - ₹ {item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice/100 : item?.card?.info?.price/100}</span>
                    </div>
                    <p className="text-xs">{item?.card?.info?.description}</p>
                </div>
                    <div className="p-4 w-3/12">
                            <div className="relative flex">
                                <button className="px-2 py-[2px] mx-4 bg-white text-rose-400 rounded-lg shadow-lg absolute"
                                onClick={() => handleAddItem(item)}>
                                    ADD
                                </button>
                            </div>
                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-20 object-cover h-{15}" /> 
                    </div>
                </div>
            )}
        </div>
    )
}

export default ItemList;


//Dispatch is function that we get from a hook useDispatch() and it is given us by react-redux.
//Whatever we pass in the dispatch function dispatch(addItem) here addItem is the reducer function and inside addItem we have a action parameter so if we pass dispatch(addItem("pizza")) then the pizza will be passed in the action payload that we wrote in the cartSlice component.
//Whenever we will dispatch the addItem action redux will create a object and it will create a payload inside the object and it will add whatever data is added to the object and it will take this and pass as the second argument inisde the reducer function where addItem: (state,action) is given
//onClick={handleAddItem(item)} -- calling the function right away
//onClick={() => handleAddItem(item)} -- find the differences bewteen the three
//onClick={handleAddItem}