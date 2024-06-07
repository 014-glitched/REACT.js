import { useEffect } from "react";
import { MENU_API } from "../utils/constants";
import { useState } from "react";

const useRestaurantMenu = (id) => {

    const [resInfo, setResInfo] = useState(null);


    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch(MENU_API + id);
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    
    return resInfo;
}

export default useRestaurantMenu;

//resInfo is the local variable for this hook.