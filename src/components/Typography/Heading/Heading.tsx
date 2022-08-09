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

  const sizeChoose = {
    [HeadingSize.Large]: "$32",
    [HeadingSize.Medium]: "$24",
    [HeadingSize.Small]: "$18",
  };

  const weightChoose = {
    [HeadingWeight.Light]: "$light",
    [HeadingWeight.Medium]: "$medium",
  };

  const colorChoose = {
    [HeadingColor.Primary]: "100%",
    [HeadingColor.Secondary]: "50%",
  };

  const StyledHeading = styled("h1", {
    fontFamily: "$outfit",
    fontSize: `${sizeChoose[size]}`,
    fontWeight: `${weightChoose[weight]}`,
    color: "$pureWhite",
    opacity: `${colorChoose[color]}`,
  });

  return <StyledHeading>{children}</StyledHeading>;
}
