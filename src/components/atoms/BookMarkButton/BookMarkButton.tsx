import * as React from "react";
import { styled } from "stitches.config";
import { ReactComponent as BookMarkIcon } from "assets/icon-bookmark-full.svg";
import { ReactComponent as EmptyBookMarkIcon } from "assets/icon-bookmark-empty.svg";

export interface BookMarkButtonProps {
  defaultState: boolean;
  state?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export function BookMarkButton(props: BookMarkButtonProps) {
  const { state = props.defaultState, onClick } = props;

  const Button = styled("button", {
    width: "32px",
    height: "32px",
    borderRadius: "100%",
    background: "$darkBlue",
    cursor: "pointer",
    opacity: "50%",

    "&:hover": {
      background: "$pureWhite",
      opacity: "100%",
      "& > svg.full > path": {
        fill: "$darkBlue",
        transition: "fill 0.2s ease-in-out",
      },
      "& > svg.empty > path": {
        stroke: "$darkBlue",
        transition: "fill 0.2s ease-in-out",
      },
    },
  });



  return (
    <Button onClick={(e) => onClick && onClick(e)} aria-label="bookmark">
      {state ? (
        <BookMarkIcon className="full" />
      ) : (
        <EmptyBookMarkIcon className="empty" />
      )}
    </Button>
  );
}
