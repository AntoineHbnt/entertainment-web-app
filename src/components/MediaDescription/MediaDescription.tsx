import * as React from "react";
import { Body, BodySize } from "components/Typography/Body/Body";
import {
  Heading,
  HeadingSize,
  HeadingWeight,
} from "components/Typography/Heading/Heading";
import { styled } from "stitches.config";

interface Media {
  title: string;
  year: number;
  category: string;
  rating: number;
}

export interface MediaDescriptionProps {
  media: Media;
}

export enum MediaCategory {
  Movie = "Movie",
  TvSerie = "TV Series",
}

export function MediaDescription(props: MediaDescriptionProps) {
  const { title, year, category, rating } = props.media;

  const categoryChoose = {
    [MediaCategory.Movie]: `url("data:image/svg+xml,%3Csvg width='12' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z' fill='%23FFF' opacity='.75'/%3E%3C/svg%3E")`,
    [MediaCategory.TvSerie]: `url("data:image/svg+xml,%3Csvg width='12' height='12' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z' fill='%23FFF' opacity='.75'/%3E%3C/svg%3E")`,
  };

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
    gap: "8px",
    opacity: "75%",

    "& > p:first-child:after": {
      content: "•",
      marginLeft: "8px",
    },
    
    "& > p:last-child:before": {
      content: "•",
      marginRight: "8px",
    },

    "& > p:nth-child(2):before": {
      content: `${categoryChoose[categoryConvert(category)]}`,
      marginRight: "6px",
    },
  });

  return (
    <>
      <Description>
        <Body size={BodySize.Medium}>{year}</Body>
        <Body size={BodySize.Medium}>{category}</Body>
        <Body size={BodySize.Medium}>{rating}</Body>
      </Description>
      <Heading size={HeadingSize.Medium} weight={HeadingWeight.Medium}>
        {title}
      </Heading>
    </>
  );
}
