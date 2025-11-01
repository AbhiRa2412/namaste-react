import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

describe("reastaurantcard component test case", () => {
  it("Should render the restaurant card component with props", () => {
    render(<RestaurantCard restaurantData={MOCK_DATA } />);
    const name = screen.getByText("Pizza Paradise");

    //assertion
    expect(name).toBeInTheDocument();
  });
});
