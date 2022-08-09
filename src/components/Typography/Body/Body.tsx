import * as React from "react";
import styled from "styled-components";

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

  const sizeChoose = {
    [BodySize.Medium]: "0.9375rem",
    [BodySize.Small]: "0.8125rem",
  };

  const StyledBody = styled.p`
    font-family: ${({ theme }) => theme.main.fontFamily};
    color: ${({ theme }) => theme.main.pureWhite};
    font-size: ${sizeChoose[size]};
  `;

  return <StyledBody>{children}</StyledBody>;
}
