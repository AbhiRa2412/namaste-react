import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListDataMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Body component test cases", () => {
  beforeEach(async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
  });

  beforeAll(async () => {
    console.log("-----All tests started-----");
  });

  it("Should load all the resCards and then filter with spcie and list all the res cards", () => {
    //commenting common call and rendering in beforeEach block
    // await act(async () => {
    //   render(
    //     <BrowserRouter>
    //       <Body />
    //     </BrowserRouter>
    //   );
    // });

    //cards before search

    const cardsBefore = screen.getAllByTestId("resCard");

    //assertion
    expect(cardsBefore.length).toBe(9);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    //assertion
    expect(searchBtn).toBeInTheDocument();

    const inputBox = screen.getByTestId("searchInput");
    //assertion
    expect(inputBox).toBeInTheDocument();

    fireEvent.change(inputBox, { target: { value: "spice" } });

    fireEvent.click(searchBtn);

    //cards after search
    const cardsAfterSearch = screen.getAllByTestId("resCard");

    //assertion
    expect(cardsAfterSearch.length).toBe(2);
  });

  it("Should show all the top rated restaurants when user click on the top reated filter", () => {
    //commenting common call and rendering in beforeEach block
    // await act(async () => {
    //   render(
    //     <BrowserRouter>
    //       <Body />
    //     </BrowserRouter>
    //   );
    // });

    const topRatedFilterBtn = screen.getByText("Top Rated Restaurants");

    //assertion
    expect(topRatedFilterBtn).toBeInTheDocument();

    fireEvent.click(topRatedFilterBtn);

    const cardsAfterClickingTopRated = screen.getAllByTestId("resCard");

    //assertion
    expect(cardsAfterClickingTopRated.length).toBe(9);
  });
});
