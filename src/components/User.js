import { useState, useEffect } from "react";

const User = (props) => {

    const[userInfo, setUserInfo] = useState("");

    useEffect(() => {
      fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://api.github.com/users/014-glitched");
        const json = await data.json();

        console.log(json);

        setUserInfo(json);
    }

    
    return (
        <div className="user-card">
            <h1></h1>
            {/* <button onClick={() => {
                setcount(count+1)
            }}>Count Increase</button> */}
            <img src={userInfo.avatar_url}/>
            <h1>Name: {userInfo.name}</h1>
            <h2>URL: {userInfo.url} </h2>

            <h4>Contact: abhyu0011@gmail.com</h4>
    </div>
    );
}

export default User;


// const [count, setcount] = useState(0);
//     //const [count2] = useState(1);
//     return (
//         <div className="user-card">
//             <h1>Count: {count}</h1>
//             {/* <button onClick={() => {
//                 setcount(count+1)
//             }}>Count Increase</button> */}
//             <h1>Name: {props.name}</h1>
//             <h2>Location: {props.location}</h2>
//             <h4>Contact: abhyu0011@gmail.com</h4>
//     </div>
//     );