import { fireEvent, render, screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"


it("Should render the Header Component with a login button", () => {

    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"} );

    // const loginButton = screen.getByText("Login");

    expect(loginButton).toBeInTheDocument();
})

it("Should render the Header Component with cart items 0", () => {

    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 items)");

    // const loginButton = screen.getByText("Login");

    expect(cartItems).toBeInTheDocument();
})

it("Should render the Header Component with Cart item", () => {

    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const cartItem = screen.getByText(/Cart/); //Cart is written within Regular expression

    // const loginButton = screen.getByText("Login");

    expect(cartItem).toBeInTheDocument();
})

it("Should change Login button to Logout on Click", () => {

    render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"} );

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"} );

    expect(logoutButton).toBeInTheDocument();
})