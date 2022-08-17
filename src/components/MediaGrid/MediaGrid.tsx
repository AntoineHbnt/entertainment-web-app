import { CardType, MediaCard } from "components/MediaCard/MediaCard";
import { Heading, HeadingSize } from "components/Typography/Heading/Heading";
import * as React from "react";
import { styled } from "stitches.config";
import { defaultMedia, Media } from "utils/dataTypes";

export interface MediaGridProps {
  title: string;
  type: CardType;
  mediaArray: Media[];
}

enum Direction {
  Left = "left",
  Right = "right",
}

export function MediaGrid(props: MediaGridProps) {
  const { title, mediaArray = [defaultMedia], type } = props;

  const chooseType = {
    [CardType.Trending]: "trending",
    [CardType.Regular]: "regular",
  };

  const handleClick = (direction: Direction) => {
    const trendingGrid = document.getElementById("trending-grid");

    if (trendingGrid) {
      const gridElemWidth = trendingGrid?.children[0].clientWidth;
      const nbChildren = trendingGrid?.children.length;
      const gridGap =
        (trendingGrid?.scrollWidth - nbChildren * gridElemWidth) /
        (nbChildren - 1);

      // check if user can scroll right
      if (
        trendingGrid.scrollLeft + trendingGrid.clientWidth <
        trendingGrid.scrollWidth
      ) {
        if (direction === Direction.Left) {
          trendingGrid.scrollLeft -= gridElemWidth + gridGap;
        } else {
          trendingGrid.scrollLeft += gridElemWidth + gridGap;
        }
      }
      // if user is at the end of the grid, scroll to the beginning or go back to the last element
      else {
        if (direction === Direction.Left) {
          const nbVisibleGridElem = Math.floor(
            trendingGrid.clientWidth / (gridElemWidth + gridGap)
          );
          trendingGrid.scrollLeft -=
            gridElemWidth -
            (trendingGrid.clientWidth -
              (gridElemWidth + gridGap) * nbVisibleGridElem);
        } else {
          trendingGrid.scrollLeft = 0;
        }
      }
    }
  };

  const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "16px",

    "@tablet": {
      gap: "24px",
    },

    "@desktop": {
      gap: "32px",
    },
  });

  const Header = styled("div", {
    display: "flex",
    justifyContent: "space-between",
  });

  const ButtonContainer = styled("div", {
    display: "flex",
    gap: "8px",
  });

  const Button = styled("button", {
    fontWeight: "bold",
    color: "$pureWhite",
    cursor: "pointer",
  });

  const Grid = styled("div", {
    width: "100%",
    overflowX: "scroll",
    gap: "16px",
    scrollBehavior: "smooth",

    "&::-webkit-scrollbar": {
      display: "none",
    },

    "&.regular": {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",

      "@tablet": {
        gridTemplateColumns: "repeat(3, 1fr)",
      },

      "@smallScreen": {
        gridTemplateColumns: "repeat(4, 1fr)",
      },
    },

    "&.trending": {
      display: "flex",
    },

    "@tablet": {
      gap: "24px",
    },
    "@smallScreen": {
      gap: "32px",
    },
  });

  return (
    <Container>
      <Header>
        <Heading size={HeadingSize.Large} children={title}/>
        {type === CardType.Trending && <ButtonContainer>
          <Button onClick={() => handleClick(Direction.Left)}>ᐸ</Button>
          <Button onClick={() => handleClick(Direction.Right)}>ᐳ</Button>
        </ButtonContainer>}
      </Header>
      <Grid
        id={type === CardType.Trending ? "trending-grid" : "regular-grid"}
        className={chooseType[type]}
      >
        {mediaArray.map((media, index) => (
          <MediaCard key={`card-${index}`} media={media} type={type} />
        ))}
      </Grid>
    </Container>
  );
}
