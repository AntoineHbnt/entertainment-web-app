import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
  theme: {
    colors: {
      red: "#FC4747",
      pureWhite: "#FFFFFF",
      darkBlue: "#10141E",
      greyishBlue: "#5A698F",
      semiDarkBlue: "#161d2f",
    },
    space: {
      32: "2rem",
      24: "1.5rem",
      18: "1.25rem",
      16: "1rem",
      15: "0.9375rem",
      13: "0.8125rem",
    },
    fontSizes: {
      32: "2rem",
      24: "1.5rem",
      18: "1.25rem",
      16: "1rem",
      15: "0.9375rem",
      14: "0.875rem",
      13: "0.8125rem",
      12: "0.75rem",
      11: "0.6875rem",
    },
    fonts: {
      outfit: "Outfit, sans-serif",
    },
    fontWeights: {
      light: 300,
      medium: 500,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {
      regularCardWidt: "100%",
      regularCardHeightSmall: "110px",
      regularCardHeightMedium: "140px",
      regularCardHeightLarge: "174px",

      trendingCardWidthSmall: "240px",
      trendingCardHeightSmall: "140px",
      trendingCardWidthLarge: "470px",
      trendingCardHeightLarge: "230px",
    },
    borderWidths: {},
    borderStyles: {},
    radii: {
      cardBorderRadius: "8px",
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    tablet: '(min-width: 481px)',
    smallScreen: '(min-width: 769px)',
    largeScreen: '(min-width: 1025px)',
  },
});
