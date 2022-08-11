import { render } from '@testing-library/react';
import { MediaCard, MediaCardProps } from "./MediaCard";

describe("MediaCard", () => {
let props: MediaCardProps;
  it("should render succefully", () => {
    const { baseElement } = render(<MediaCard {...props} />);
    expect(baseElement).toBeTruthy();
  });

});
