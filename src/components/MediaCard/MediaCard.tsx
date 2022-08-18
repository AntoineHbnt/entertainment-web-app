import { BookMarkButton } from "components/atoms/BookMarkButton/BookMarkButton";
import { MediaDescription } from "components/atoms/MediaDescription/MediaDescription";
import { PlayButton } from "components/atoms/PlayButton/PlayButton";
import { toggleBookmark } from "features/media/mediaSlice";
import { useDispatch } from "react-redux";
import { styled } from "stitches.config";
import { defaultMedia, Media } from "utils/dataTypes";

export enum CardType {
  Trending = "trending",
  Regular = "regular",
}

export enum CardSize {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

export interface MediaCardProps {
  media: Media;
  type: CardType;
}

export function MediaCard(props: MediaCardProps) {
  const {
    type = CardType.Regular,
    media = defaultMedia,
  } = props;
  const { isBookmarked, thumbnail } = media;
  const { trending, regular } = thumbnail;
  const dispatch = useDispatch()<any>;

  const chooseType = {
    [CardType.Trending]: "trending",
    [CardType.Regular]: "regular",
  };

  const handleClick = (event: React.MouseEvent) => {
    dispatch(toggleBookmark(media))
  }


  const chooseParams = {
    [CardSize.Small]: {
      thumbnail: type === CardType.Trending ? trending.small : regular.small,
      bookmarkTop: "8px",
      bookmarkRight: "8px",
    },
    [CardSize.Medium]: {
      thumbnail: type === CardType.Trending ? trending.large : regular.medium,
      bookmarkTop: "16px",
      bookmarkRight: "16px",
    },
    [CardSize.Large]: {
      thumbnail: type === CardType.Trending ? trending.large : regular.large,
      bookmarkTop: "16px",
      bookmarkRight: chooseType[type] === "$trending" ? "24px" : "16px",
    },
  };

  const Container = styled("div")


  const MediaCard = styled("div", {
    position: "relative",
    width: type === CardType.Trending ? `$trendingCardWidthSmall` : `$regularCardWidth`,
    height: type === CardType.Trending ? `$trendingCardHeightSmall` : `$regularCardHeightSmall`,
    borderRadius: "$cardBorderRadius",
    overflow: "hidden",
    background: `url("${chooseParams[CardSize.Small].thumbnail}") center center / cover no-repeat`,

    
    "@tablet": {
      width: type === CardType.Trending ? `$trendingCardWidthLarge` : `$regularCardWidth`,
      height: type === CardType.Trending ? `$trendingCardHeightLarge` : `$regularCardHeightMedium`,
      background: `url("${chooseParams[CardSize.Medium].thumbnail}") center center / cover no-repeat`,
    },
    "@smallScreen":{
      width: type === CardType.Trending ? `$trendingCardWidthLarge` : `$regularCardWidth`,
      height: type === CardType.Trending ? `$trendingCardHeightLarge` : `$regularCardHeightLarge`,
      background: `url("${chooseParams[CardSize.Large].thumbnail}") center center / cover no-repeat`,
      "&:hover": {
        ".playButton": {
          display: "block",
        },
      },
    }

  });

  const TrendingDescription = styled("div", {
    position: "absolute",
    bottom: 0,
    width: "100%",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.75) 100%)",
    padding: "16px",

    "@tablet": {
      padding: "24px",
    }
  });

  const RegularDescription = styled("div", {
    marginTop: "8px",
  });

  const BookMark = styled("div", {
    position: "absolute",
    top: chooseParams[CardSize.Small].bookmarkTop,
    right: chooseParams[CardSize.Small].bookmarkRight,

    "@tablet": {
      top: chooseParams[CardSize.Medium].bookmarkTop,
      right: chooseParams[CardSize.Medium].bookmarkRight,
    },
    "@smallScreen":{
      top: chooseParams[CardSize.Large].bookmarkTop,
      right: chooseParams[CardSize.Large].bookmarkRight,
    }
  });

  const PlayButtonContainer = styled("div", {
    display: "none",
    height: "100%",
  });

  return (
    <Container>
      <MediaCard>
        <BookMark>
          <BookMarkButton defaultState={isBookmarked} onClick={handleClick}/>
        </BookMark>
        <PlayButtonContainer className="playButton">
          <PlayButton />
        </PlayButtonContainer>
        {type === CardType.Trending && (
          <TrendingDescription>
            <MediaDescription media={media} type={type} />
          </TrendingDescription>
        )}
      </MediaCard>
      {type === CardType.Regular && (
        <RegularDescription>
          <MediaDescription media={media} type={type} />
        </RegularDescription>
      )}
    </Container>
  );
}