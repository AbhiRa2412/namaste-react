import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact test case", () => {
  it("Should load the contact component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load the contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load the button inside the document", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    //assertion
    expect(button).toBeInTheDocument();
  });

  it("should load the two input field inside the document", () => {
    render(<Contact />);

    const inputBoxes = screen.getAllByRole("textbox");

    //assertion
    expect(inputBoxes.length).toBe(2);
  });
});
