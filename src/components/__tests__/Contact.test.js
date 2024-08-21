import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("Contact Us Page Test Case", () => {

    // beforeAll(() => {
    //     console.log("Before All");
    // })

    // beforeEach(() => {
    //     console.log("Before Each");
    // })

    test('should load the contact us component', () => { 

        render(<Contact/>)  //this will be rendered to the js DOM
    
        const heading = screen.getByRole("heading");
    
        //Assertions
        expect(heading).toBeInTheDocument();
    })
    
    test('should load the button inside my contact component', () => { 
    
        render(<Contact/>) 
    
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
    
        //Assertions
        expect(button).toBeInTheDocument();
    })
    
    it('should load the input name inside my contact component', () => { 
    
        render(<Contact/>) 
    
    
        const input = screen.getByPlaceholderText("name");
    
        //Assertions
        expect(input).toBeInTheDocument();
    })
    
    it("Should load 2 input  boxes on the Contact component", () => {
    
        render(<Contact/>)
    
        const inputBoxes = screen.getAllByRole("textbox");
        console.log(inputBoxes.length);
        //When we do console log of inputBoxes it returns us the JSX element which is a React element.
    
        expect(inputBoxes.length).toBe(2);
    })
})

//test('string', () => {function}) first parameter it takes is string and second parameter is a function.
// test('should load the contact us component', () => { 

//     render(<Contact/>)  //this will be rendered to the js DOM

//     const heading = screen.getByRole("heading");

//     //Assertions
//     expect(heading).toBeInTheDocument();
// })

// test('should load the button inside my contact component', () => { 

//     render(<Contact/>) 

//     // const button = screen.getByRole("button");
//     const button = screen.getByText("Submit");

//     //Assertions
//     expect(button).toBeInTheDocument();
// })

// test('should load the input name inside my contact component', () => { 

//     render(<Contact/>) 


//     const input = screen.getByPlaceholderText("name");

//     //Assertions
//     expect(input).toBeInTheDocument();
// })

// test("Should load 2 input  boxes on the Contact component", () => {

//     render(<Contact/>)

//     const inputBoxes = screen.getAllByRole("textbox");
//     console.log(inputBoxes.length);
//     //When we do console log of inputBoxes it returns us the JSX element which is a React element.

//     expect(inputBoxes.length).toBe(2);
// })

// toBeInTheDocument() --> to check whether something ahs loaded or not we use this function
//getByRole() --> role can be differetn types of heading, button etc.
// getByText("Submit") --> if there will be any text related to submit on the screen the test case will be passed
// getAllByRole("textbox") --> if there are multiple items with same name then we will use getAllByRole because getByRole is used for a single query.