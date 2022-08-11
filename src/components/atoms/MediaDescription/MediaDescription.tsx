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
  const { type, media } = props;
  const { title, year, category, rating } = media;

  const chooseType = {
    [MediaType.Trending]: {
      body: BodySize.Medium,
      heading: HeadingSize.Medium,
    },
    [MediaType.Regular]: {
      body: BodySize.Small,
      heading: HeadingSize.Small,
    },
  }

  const Description = styled("div", {
    display: "flex",
    opacity: "75%",

    "& > p:first-child:after": {
      content: "•",
      margin: "0 6px",

      "@tablet": {
        margin: "0 8px",
      },
    },

    "& > p:last-child:before": {
      content: "•",
      margin: "0 6px",

      "@tablet": {
        margin: "0 8px",
      },
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
