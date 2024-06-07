//CBC(Class based component)
//Writing class based component for User.js
//Class based component -- it is a normal javascript class
//class keyword tells us this is a class based component
//extends React.Component -- this will tell react that this is a class based component
//React.Component is a classs which is given by React and UserClass is inheriting some properties from it
//It will always have a render method this render method will return a piece of JSX which will be displayed onto the UI
//In this CBC to add props we will use constructor and will pass props as a parameter and then we will use super(props) always in CBC. If not using super(props) it will always throw an error.
//Whenever a new instance of the class is created the constructor is called and the props are extracted over and then after writing super(props) we can access these props by using {this.props}.
//All the props that we have passed will be combined into an single object and then the object will be passed in the props.
//To create state variable here we will use this.state
//Here the state object will contain all the state variable we will not have to create another state variable to use it we can just create it inside the existing state variable.

//Never update STATE VARIABLE directly by assigning values.
//this.setState -- will contain the updated value of the state variable.

//Mounting cycle finished when the component was rendered once with the dummy data very quickly when we use the setState updating phase starts
//setState update the state variable which is initialized with some default data
//when the state variable is updated then react triggers the render method once again only render method no constructor call is done again
//when the render is triggered again this time the state variable is changed with the updated value.
//when react has updated out DOM then is calls a function named as "componentDidUpdate"


import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            // count: 0,
            // count2: 1,
            userInfo : {
                name: "Dummy",
                location: "Delhi",
            },
        };
        // console.log(props);
        // console.log("Child COnstructor");
    }

    async componentDidMount(){
        //api call
        const data = await fetch("https://api.github.com/users/014-glitched");
        const json = await data.json();

        this.setState({
             userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate(){
        console.log("Component did update");
    }

    componentWillUnmount(){
        console.log("Component will unmount");
    }
    
    render(){
        // const {name, location} = this.props; //destructuring
        // const {count} = this.state;
        
        //console.log("Child render");

        return (
        <div className="user-card">
            {/* <h1>Count: {count}</h1>
            <button onClick={() => {
                this.setState({ 
                    count: count + 1,  //react is re rendering the component everytime the button is clicked.
                })
            }}>Increase COUNT</button> */}
            {/* <h1>Name: {name}</h1> */}
            <img src={this.state.userInfo.avatar_url}/>
            <h2>Name: {this.state.userInfo.name}</h2>
            <h2>URL: {this.state.userInfo.html_url}</h2>
            
            <h4>Contact: abhyu0011@gmail.com</h4>
    </div>
    );
    }
}

export default UserClass;



/*
*MOUNTING CYCLE ------
    Constructor (dummy data)
    Render (Dummy data)
        <HTML dummy>
    ComponentDidMount()
        <API call>
        <this.setState>  --> state variable is updated

* UPDATE CYCLE ------
    render(API data)
    <HTML loaded with new API data>
    componentDidUpdate()

*/
