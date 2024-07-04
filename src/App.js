import React, { useEffect, useState } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart"



const AppLayout = () => {

     const[userName, setUserName] = useState();

     useEffect(() => {
          const data = {
               name: "Abhyudai Srivastava",
          };
          setUserName(data.name);
     }, [])

     return (
          <Provider store={appStore}>
              <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
                 <div className="app">
                         <Header/>
                         <Outlet/>
                 </div>
              </UserContext.Provider>
          </Provider>
     )
}

const appRouter = createBrowserRouter([
     {
          path: "/",               //if my path is "/" this then load the AppLayout component.
          element: <AppLayout />,
          children: [
               {
                    path: "/",
                    element: <Body/>
               },
               {
                    path: "about",           //if we are on the about page then load the aboutUs component
                    element: <About/>,
               },
               {
                    path: "/contact",
                    element: <Contact />
               },
               {
                    path: "/restaurants/:id",
                    element: <RestaurantMenu/>
               },
               {
                    path: "/cart",
                    element: <Cart/>
               }
          ],
          errorElement: <Error/>
     },
     
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)