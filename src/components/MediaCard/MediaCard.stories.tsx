import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MediaCard } from "./MediaCard";

export default {
  title: "component/MediaCard",
  component: MediaCard,
  argTypes: {
    type: {
      options: ["trending", "regular"],
      defaultValue: "trending",
      control: "select"
    },
    size: {
      options: ["small", "medium", "large"],
      defaultValue: "small",
      control: "select"
    },
    media: {
      defaultValue: {
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
    },
  },
} as ComponentMeta<typeof MediaCard>;

const Template: ComponentStory<typeof MediaCard> = (args) => (
  <MediaCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
