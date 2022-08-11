import * as React from "react";
import { Body, BodySize } from "components/Typography/Body/Body";
import {
  Heading,
  HeadingSize,
  HeadingWeight,
} from "components/Typography/Heading/Heading";
import { styled } from "stitches.config";
import { Media } from "utils/dataTypes";
import { CardSize, CardType } from "components/MediaCard/MediaCard";

export interface MediaDescriptionProps {
  media: Media;
  type: CardType;
  size: CardSize;
}

export enum MediaCategory {
  Movie = "Movie",
  TvSerie = "TV Series",
}

export enum MediaType {
  Trending = "trending",
  Regular = "regular",
}

export function MediaDescription(props: MediaDescriptionProps) {
  const { type, media, size } = props;
  const { title, year, category, rating } = media;

  const chooseCategory = {
    [MediaCategory.Movie]: `url("data:image/svg+xml,%3Csvg width='12' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z' fill='%23FFF' opacity='.75'/%3E%3C/svg%3E")`,
    [MediaCategory.TvSerie]: `url("data:image/svg+xml,%3Csvg width='12' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z' fill='%23FFF' opacity='.75'/%3E%3C/svg%3E")`,
  };

  const chooseSize = {
    [CardSize.Small]: "6px",
    [CardSize.Medium]: "8px",
    [CardSize.Large]: "8px",
  }

  const chooseType = {
    [MediaType.Trending]: {
      body: size === CardSize.Large || size === CardSize.Medium ? BodySize.Medium : BodySize.Small,
      heading: size === CardSize.Large || size === CardSize.Medium ? HeadingSize.Medium : HeadingSize.Small,
    },
    [MediaType.Regular]: {
      body: BodySize.Small,
      heading: HeadingSize.Small,
    },
  }

  const categoryConvert = (category: string): MediaCategory => {
    switch (category) {
      case "TV Series":
        return MediaCategory.TvSerie;
      default:
        return MediaCategory.Movie;
    }
  };

  const Description = styled("div", {
    display: "flex",
    opacity: "75%",

    "& > p:first-child:after": {
      content: "•",
      margin: `0 ${chooseSize[size]}`,
    },
    
    "& > p:last-child:before": {
      content: "•",
      margin: `0 ${chooseSize[size]}`,
    },

    "& > p:nth-child(2):before": {
      content: `${chooseCategory[categoryConvert(category)]}`,
      marginRight: "6px",
    },
  });

  return (
    <>
      <Description>
        <Body size={chooseType[type].body}>{year}</Body>
        <Body size={chooseType[type].body}>{category}</Body>
        <Body size={chooseType[type].body}>{rating}</Body>
      </Description>
      <Heading size={chooseType[type].heading} weight={HeadingWeight.Medium}>
        {title}
      </Heading>
    </>
  );
}
