import * as React from "react";
import { ReactComponent as PlayIcon } from "assets/icon-play.svg";
import { styled } from "stitches.config";
import {
  Heading,
  HeadingSize,
  HeadingWeight,
} from "components/Typography/Heading/Heading";
import "animate.css";

export function PlayButton() {
  const Container = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    animation: "fadeIn 0.2s ease-in",
  });

  const Button = styled("button", {
    display: "flex",
    alignItems: "center",
    padding: "8px",
    gap: "16px",
    background: "$pureWhite",
    width: "117px",
    height: "48px",
    borderRadius: "28.5px",
    backgroundColor: "rgba(255,255,255,0.25)",
    cursor: "pointer",
    transition: "transform .1s ease-in-out",
    animation: "fadeInDown .2s ease-in-out",
    fontFamily: "$outfit",
    fontSize: "$18",
    fontWeight: "$medium",
    color: "$pureWhite",

    "&:hover": {
      transform: "scale(1.05)",
    },
  });

  return (
    <Container>
      <Button>
        <PlayIcon fill="$pureWhite" />
        Play
      </Button>
    </Container>
  );
}
