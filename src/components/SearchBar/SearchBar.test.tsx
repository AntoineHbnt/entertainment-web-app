import { render, screen } from "@testing-library/react";
import SearchBar, { SearchBarProps } from "./SearchBar";

describe("SearchBar", () => {
  let props: SearchBarProps;

  it("should render succefully", () => {
    const { baseElement } = render(<SearchBar {...props} />);
    expect(baseElement).toBeTruthy();
  });

  it("should update the value of the input", () => {
    render(<SearchBar {...props} />);
    const input = screen.getByPlaceholderText("Search");
    expect(input).toBeTruthy();
    input.innerHTML = "search terms";
    expect(input.innerHTML).toBe("search terms");    
  });
});
