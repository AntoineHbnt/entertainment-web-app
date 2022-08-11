import * as React from "react";
import { styled } from "stitches.config";

export enum HeadingSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

export enum HeadingWeight {
  Light = "light",
  Medium = "medium",
}

export enum HeadingColor {
  Primary = "primary",
  Secondary = "secondary",
}

export interface HeadingProps {
  size?: HeadingSize;
  weight?: HeadingWeight;
  color?: HeadingColor;
  children: React.ReactNode;
}

export function Heading(props: HeadingProps) {
  const {
    size = HeadingSize.Medium,
    weight = HeadingWeight.Light,
    color = HeadingColor.Primary,
    children,
  } = props;

  const chooseSizeLargeScreen = {
    [HeadingSize.Large]: "$32",
    [HeadingSize.Medium]: "$24",
    [HeadingSize.Small]: "$18",
  };

  const chooseSizeMobile = {
    [HeadingSize.Large]: "$20",
    [HeadingSize.Medium]: "$15",
    [HeadingSize.Small]: "$14",
  }

  const chooseWeight = {
    [HeadingWeight.Light]: "$light",
    [HeadingWeight.Medium]: "$medium",
  };

  const chooseColor = {
    [HeadingColor.Primary]: "100%",
    [HeadingColor.Secondary]: "50%",
  };

  const StyledHeading = styled("h1", {
    fontFamily: "$outfit",
    fontSize: `${chooseSizeMobile[size]}`,
    fontWeight: `${chooseWeight[weight]}`,
    color: "$pureWhite",
    opacity: `${chooseColor[color]}`,

    "@tablet": {
      fontSize: `${chooseSizeLargeScreen[size]}`,
    }
  });

  return <StyledHeading>{children}</StyledHeading>;
}
