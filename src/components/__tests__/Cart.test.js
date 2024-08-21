import { act, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom"
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    });
})


it("should load Restaurant Menu Component", async () => {

    await act( async () => render(
    <BrowserRouter>
        <Provider store={appStore}> 
            <Header/>
            <RestaurantMenu/> 
        </Provider> 
    </BrowserRouter>
    ));

    const accordionHeader = screen.getByText("Sawan Special (7)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(7);

    const addBtns = screen.getAllByRole("button", {name: "ADD"});
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();
})     