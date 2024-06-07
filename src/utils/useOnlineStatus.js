import { useEffect, useState } from "react";

const useOnlineStatus = () => {

    const[onlineStatus, setonlineStatus] = useState(true);
    //chechk if online

    useEffect(() => {
        
        window.addEventListener("offline", () => {
            setonlineStatus(false)
        })

        window.addEventListener("online", () => {
            setonlineStatus(true)
        })
    }, [])

    //boolean value
    return onlineStatus;
}

export default useOnlineStatus;