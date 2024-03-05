// const heading = React.createElement("h1", {}, "Frontend Developer");
// //{id: "Heading"} - this object is used to give attributes to the tag {id: "Heading"} here the attribute is id
// //React.createElement it creates an object a javascript object 

// console.log(heading); //it will return us an object


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); //render method is converting the object into a h1 tag 




const p1 = React.createElement("div", {id:"parent"}, 
React.createElement("div", {id: "child"}, 
[React.createElement("h1", {}, "I'm an h1 tag"), //array of child div
React.createElement("h1", {}, "I'm an h2 tag")]  //to add both h1 & h2 at the same level we use square brackets to define them and they will rendered in the DOM inside the child div
));

console.log(p1);

const ROOT = ReactDOM.createRoot(document.getElementById("root"))
ROOT.render(p1);

