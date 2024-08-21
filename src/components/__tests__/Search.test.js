import { fireEvent, render, screen } from "@testing-library/react"
// import { act } from "react";
import { act } from "@testing-library/react";
import Body from "../Body"
import MOCK_DATA from '../mocks/mockResLisData.json'
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {          //this will give us a mock fetch function
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should test Res List for burger text input", async () => {

    await act(async() => render(
        <BrowserRouter> 
            <Body/> 
        </BrowserRouter>
    ));
    
    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(8);
    //render(<Body/>)---> if we run this much then it will throw an ReferenceError: fetch is not defined. Here the body component is getting rendered in js dom which is a browser like thing but it isn't a browser so it will not understand fetch jest does not understand fetch, so here we will have to write mock function for fetch.

    const searchBtn = screen.getByRole("button", {name : "Search"});
    // console.log(searchBtn);

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "burger"}});

    fireEvent.click(searchBtn);
    expect(searchBtn).toBeInTheDocument();

    //screen should load 1 res cards
    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(1);

    
})

it("Should filter top rated restaurant", async () => {

    await act(async() => render(
        <BrowserRouter> 
            <Body/> 
        </BrowserRouter>
    ));

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(2);

});


//jest gives us access to two more features namely:
//beforeAll -- before running all our test cases if we want to do something then we will use this feature
//beforeEach -- before each test cases if we want to do something then we will use this feature
//afterAll -- after running all our test cases if we want to do something then we will use this feature
//afterEach -- after each test cases if we want to do something then we will use this feature

// beforeAll(() => {
//     console.log("Before All");
// })

// beforeEach(() => {
//     console.log("Before Each");
// })