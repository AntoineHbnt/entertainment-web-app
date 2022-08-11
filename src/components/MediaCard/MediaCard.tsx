import { BookMarkButton } from "components/atoms/BookMarkButton/BookMarkButton";
import { MediaDescription } from "components/atoms/MediaDescription/MediaDescription";
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
  size: CardSize;
}

export function MediaCard(props: MediaCardProps) {
  const { type = CardType.Regular, size = CardSize.Medium, media = defaultMedia } = props;
  const { isBookmarked, thumbnail } = media;
  const { trending, regular } = thumbnail;  

  const chooseType = {
    [CardType.Trending]: "trending",
    [CardType.Regular]: "regular",
  };

  const chooseParams = {
    [CardSize.Small]: {
      width: `$${chooseType[type]}CardWidthSmall`,
      height: `$${chooseType[type]}CardHeightSmall`,
      thumbnail: type === CardType.Trending ? trending.small : regular.small,
      bookmarkTop: "8px",
      bookmarkRight: "8px",
    },
    [CardSize.Medium]: {
      width:
        chooseType[type] === "trending"
          ? "$trendingCardWidthLarge"
          : `$${chooseType[type]}CardWidthMedium`,
      height:
        chooseType[type] === "trending"
          ? "$trendingCardHeightLarge"
          : `$${chooseType[type]}CardHeightMedium`,
      thumbnail: type === CardType.Trending ? trending.large : regular.medium,
      bookmarkTop: "16px",
      bookmarkRight: "16px",
    },
    [CardSize.Large]: {
      width: `$${chooseType[type]}CardWidthLarge`,
      height: `$${chooseType[type]}CardHeightLarge`,
      thumbnail: type === CardType.Trending ? trending.large : regular.large,
      bookmarkTop: "16px",
      bookmarkRight: chooseType[type] === "$trending" ? "24px" : "16px",
    },
  };

  const MediaCard = styled("div", {
    position: "relative",
    width: chooseParams[size].width,
    height: chooseParams[size].height,
    borderRadius: "$cardBorderRadius",
    overflow: "hidden",
    background: `url("${chooseParams[size].thumbnail}") center center / cover no-repeat`,
  });

  const TrendingDescription = styled("div", {
    position: "absolute",
    bottom: 0,
    width: "100%",
    background:
      "linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.75) 100%)",
    padding: "24px",
  });

  const RegularDescription = styled("div", {
    marginTop: "8px",
  });

  const BookMark = styled("div", {
    position: "absolute",
    top: chooseParams[size].bookmarkTop,
    right: chooseParams[size].bookmarkRight,
  });

  return (
    <>
      <MediaCard>
        <BookMark>
          <BookMarkButton defaultState={isBookmarked} />
        </BookMark>
        {type === CardType.Trending && (
          <TrendingDescription>
            <MediaDescription media={media} type={type} size={size} />
          </TrendingDescription>
        )}
      </MediaCard>
      {type === CardType.Regular && (
        <RegularDescription>
          <MediaDescription media={media} type={type} size={size} />
        </RegularDescription>
      )}
    </>
  );
}
