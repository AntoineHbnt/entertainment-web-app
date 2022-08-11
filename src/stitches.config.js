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
      13: "0.8125rem",
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
      regularCardWidthSmall: "164px",
      regularCardHeightSmall: "110px",
      regularCardWidthMedium: "220px",
      regularCardHeightMedium: "140px",
      regularCardWidthLarge: "280px",
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
});
