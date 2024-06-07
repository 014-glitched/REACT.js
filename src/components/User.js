import { useState } from "react";

const User = (props) => {

    const [count, setcount] = useState(0);
    //const [count2] = useState(1);
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            {/* <button onClick={() => {
                setcount(count+1)
            }}>Count Increase</button> */}
            <h1>Name: {props.name}</h1>
            <h2>Location: Lucknow</h2>
            <h4>Contact: abhyu0011@gmail.com</h4>
    </div>
    );
}

export default User;