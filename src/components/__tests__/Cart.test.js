import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import MOCK_DATA from "../mocks/resMenuMock.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import ResataurantMenu from "../RestaurantMenu";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load the restaurant menu component with props", async () => {
  await act(async () => {
    render(
      <Provider store={appStore}>
        <BrowserRouter>
          <Header />
          <ResataurantMenu />
          <Cart />
        </BrowserRouter>
      </Provider>
    );
  });

  const accordianHeader = screen.getByText("Veggie Burgers (2)");

  //assertion
  expect(accordianHeader).toBeInTheDocument();

  fireEvent.click(accordianHeader);

  //assertion
  expect(screen.getAllByTestId("foodItems").length).toBe(2);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  //assertion
  expect(screen.getByText("Cart - (1 Items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  //assertion
  expect(screen.getByText("Cart - (2 Items)")).toBeInTheDocument();

  fireEvent.click(screen.getByText("Cart - (2 Items)"));

  //assertion
  expect(screen.getAllByTestId("foodItems").length).toBe(4);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  //assertion
  expect(screen.getAllByTestId("foodItems").length).toBe(2);
});
