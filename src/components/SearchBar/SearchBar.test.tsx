import { render } from "@testing-library/react";
import SearchBar, { SearchBarProps } from "./SearchBar";

describe("SearchBar", () => {
  let props: SearchBarProps;

  it("should render succefully", () => {
    const { baseElement } = render(
        <SearchBar {...props} />
    );
    expect(baseElement).toBeTruthy();
  });
});
