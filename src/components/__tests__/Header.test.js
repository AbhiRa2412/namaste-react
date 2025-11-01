import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("header component test case", () => {
  it("Should render the header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    //assertion
    expect(loginButton).toBeInTheDocument();
  });

  it("Should render the header with cart with 0 items", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 Items)");

    //assertion
    expect(cartItems).toBeInTheDocument();
  });

  it("Should change login button to the logout button on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    //clickEvent
    fireEvent.click(loginButton);

    // after click
    const logioutButton = screen.getByRole("button", { name: "Logout" });

    //assertion
    expect(logioutButton).toBeInTheDocument();
  });
});
