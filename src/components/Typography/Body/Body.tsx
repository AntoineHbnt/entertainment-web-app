import * as React from "react";
import { styled } from "stitches.config";

export enum BodySize {
  Medium = "medium",
  Small = "small",
}

export interface BodyProps {
  size?: BodySize;
  children: React.ReactNode;
}

export function Body(props: BodyProps) {
  const { size = BodySize.Medium, children } = props;

  const sizeChooseLargeScreen = {
    [BodySize.Medium]: "$15",
    [BodySize.Small]: "$13",
  };

  const sizeChooseMobile = {
    [BodySize.Medium]: "$12",
    [BodySize.Small]: "$11",
  }

  const StyledBody = styled("p", {
    fontFamily: "$outfit",
    color: "$pureWhite",
    fontWeight: "$light",
    fontSize: `${sizeChooseMobile[size]}`,

    "@tablet": {
      fontSize: `${sizeChooseLargeScreen[size]}`,
    },
  })

  return <StyledBody>{children}</StyledBody>;
}
