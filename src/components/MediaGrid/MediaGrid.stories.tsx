import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MediaGrid } from "./MediaGrid";

export default {
  title: "component/MediaGrid",
  component: MediaGrid,
  argTypes: {
    title: {
      defaultValue: "Media Grid",
      control: "text",
    },
    type:{
        defaultValue: "regular",
        options: ["trending", "regular"],
        control: "select"
    },
    mediaArray: {
      defaultValue: [
        {
          title: "Beyond Earth",
          thumbnail: {
            trending: {
              small: "assets/thumbnails/beyond-earth/trending/small.jpg",
              large: "assets/thumbnails/beyond-earth/trending/large.jpg",
            },
            regular: {
              small: "assets/thumbnails/beyond-earth/regular/small.jpg",
              medium: "assets/thumbnails/beyond-earth/regular/medium.jpg",
              large: "assets/thumbnails/beyond-earth/regular/large.jpg",
            },
          },
          year: 2019,
          category: "Movie",
          rating: "PG",
          isBookmarked: false,
          isTrending: true,
        },
        {
          title: "Bottom Gear",
          thumbnail: {
            trending: {
              small: "assets/thumbnails/bottom-gear/trending/small.jpg",
              large: "assets/thumbnails/bottom-gear/trending/large.jpg",
            },
            regular: {
              small: "assets/thumbnails/bottom-gear/regular/small.jpg",
              medium: "assets/thumbnails/bottom-gear/regular/medium.jpg",
              large: "assets/thumbnails/bottom-gear/regular/large.jpg",
            },
          },
          year: 2021,
          category: "Movie",
          rating: "PG",
          isBookmarked: false,
          isTrending: true,
        },
        {
          title: "Undiscovered Cities",
          thumbnail: {
            trending: {
              small: "assets/thumbnails/undiscovered-cities/trending/small.jpg",
              large: "assets/thumbnails/undiscovered-cities/trending/large.jpg",
            },
            regular: {
              small: "assets/thumbnails/undiscovered-cities/regular/small.jpg",
              medium:
                "assets/thumbnails/undiscovered-cities/regular/medium.jpg",
              large: "assets/thumbnails/undiscovered-cities/regular/large.jpg",
            },
          },
          year: 2019,
          category: "TV Series",
          rating: "E",
          isBookmarked: false,
          isTrending: true,
        },
        {
          title: "1998",
          thumbnail: {
            trending: {
              small: "assets/thumbnails/1998/trending/small.jpg",
              large: "assets/thumbnails/1998/trending/large.jpg",
            },
            regular: {
              small: "assets/thumbnails/1998/regular/small.jpg",
              medium: "assets/thumbnails/1998/regular/medium.jpg",
              large: "assets/thumbnails/1998/regular/large.jpg",
            },
          },
          year: 2021,
          category: "Movie",
          rating: "18+",
          isBookmarked: false,
          isTrending: true,
        },
        {
          title: "Dark Side of the Moon",
          thumbnail: {
            trending: {
              small:
                "assets/thumbnails/dark-side-of-the-moon/trending/small.jpg",
              large:
                "assets/thumbnails/dark-side-of-the-moon/trending/large.jpg",
            },
            regular: {
              small:
                "assets/thumbnails/dark-side-of-the-moon/regular/small.jpg",
              medium:
                "assets/thumbnails/dark-side-of-the-moon/regular/medium.jpg",
              large:
                "assets/thumbnails/dark-side-of-the-moon/regular/large.jpg",
            },
          },
          year: 2018,
          category: "TV Series",
          rating: "PG",
          isBookmarked: true,
          isTrending: true,
        },
      ],
    },
  },
} as ComponentMeta<typeof MediaGrid>;

const Template: ComponentStory<typeof MediaGrid> = (args) => (
  <MediaGrid {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};