import * as React from "react";
import { styled } from "stitches.config";

interface IconProps {
  src: string;
  size?: number;
}

export function Icon(props: IconProps) {
  const { src, size = 24 } = props;

  const IconStyled = styled("img", {
    width: size,
    height: size,
  });

  return <IconStyled src={src} />;
}
