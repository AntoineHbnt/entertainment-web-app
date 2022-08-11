import * as React from "react";
import { ReactComponent as PlayIcon } from "assets/icon-play.svg";
import { styled } from "stitches.config";
import { Heading, HeadingSize, HeadingWeight } from "components/Typography/Heading/Heading";

export function PlayButton() {
  const Container = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255,255,255,0.5)",
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
  });

  return (
    <Container>
      <Button>
        <PlayIcon fill="$pureWhite" />
        <Heading size={HeadingSize.Small} weight={HeadingWeight.Medium}>Play</Heading>
      </Button>
    </Container>
  );
}
