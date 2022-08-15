import { render } from "@testing-library/react";
import { Navbar, NavbarProps } from "./Navbar";

describe("navbar", () => {
  let props: NavbarProps;
  it("should render succefully", () => {
    const { baseElement } = render(<Navbar {...props} />);
    expect(baseElement).toBeTruthy();
  });

});
