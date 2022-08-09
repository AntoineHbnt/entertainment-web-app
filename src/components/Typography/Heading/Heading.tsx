import * as React from "react";
import styled from "styled-components";

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
    [HeadingSize.Large]: "2rem",
    [HeadingSize.Medium]: "1.5rem",
    [HeadingSize.Small]: "1.25rem",
  };

  const weightChoose = {
    [HeadingWeight.Light]: "300",
    [HeadingWeight.Medium]: "500",
  };

  const colorChoose = {
    [HeadingColor.Primary]: "100%",
    [HeadingColor.Secondary]: "50%",
  };

  const StyledHeading = styled.h1`
    font-family: ${({ theme }) => theme.main.fontFamily};
    font-size: ${sizeChoose[size]};
    font-weight: ${weightChoose[weight]};
    color: ${({ theme }) => theme.main.pureWhite};
    opacity: ${colorChoose[color]};
  `;

  return <StyledHeading>{children}</StyledHeading>;
}
