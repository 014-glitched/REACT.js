import User from "./User"
import UserClass from "./UserClass";
import React from "react"; // or we can destructure it and can write import { Component  } from "react";  this import statement the only thing that will change is we will not write React.component instead we will write Component only.


// class About extends React.Component{

//     constructor(props){
//         super(props);

//         //console.log("Parent constructor");
//     }

//     componentDidMount(){
//         //console.log("Parent component did mount");
//     }

//     render(){

//         //console.log("Parent render");
//         return (
            
//             <div>
//             <h1>About Class Component</h1>
//             <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quis iure praesentium ipsa soluta aut error consequuntur voluptatem adipisci saepe voluptatum molestias itaque, sed corporis nemo magnam neque delectus obcaecati!
//             Earum illo tenetur maiores. Quibusdam eius iure, optio voluptas itaque perferendis illum animi aliquid ut voluptates! Nemo distinctio modi repudiandae ea quam praesentium aut molestiae hic, nulla libero adipisci.</div>
//             <User name={"Abhyudai (function component)"} location={"LUCKNOW"}/>
    
//             {/* <UserClass name={"Abhyudai (class component)"} location={"LKO class"}/>
//             {/* <UserClass name={"Harshuuu (class component)"} location={"Lucknow class"}/> */}
//             </div> 
//         )
//     }
// }

//Functional compnent

const About = () => {
    return (
        <div>
        <h1>About</h1>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quis iure praesentium ipsa soluta aut error consequuntur voluptatem adipisci saepe voluptatum molestias itaque, sed corporis nemo magnam neque delectus obcaecati!
        Earum illo tenetur maiores. Quibusdam eius iure, optio voluptas itaque perferendis illum animi aliquid ut voluptates! Nemo distinctio modi repudiandae ea quam praesentium aut molestiae hic, nulla libero adipisci. Expedita.
        Totam architecto illo reiciendis animi, sed ipsam sit amet, nulla minima quod natus alias, temporibus odit voluptates. Eveniet sequi amet voluptatibus perferendis! Aliquam rerum animi blanditiis quis, ipsum ipsa molestiae?
        sint velit cupiditate molestiae deserunt sit deleniti ipsa aperiam culpa. Modi.</div>
        <User/>
        </div>
    )
}

export default About;