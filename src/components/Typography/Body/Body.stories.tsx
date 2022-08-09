import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Body, BodySize } from "./Body";

export default {
  title: "typography/Body",
  component: Body,
  argTypes: {
    size: {
      options: [BodySize.Medium, BodySize.Small],
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Body>;

const Template: ComponentStory<typeof Body> = (args) => (
  <Body {...args}>Body</Body>
);

export const Primary = Template.bind({});
Primary.args = {
  size: BodySize.Medium,
};
