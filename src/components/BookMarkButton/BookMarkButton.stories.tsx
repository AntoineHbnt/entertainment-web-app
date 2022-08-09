import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BookMarkButton } from "./BookMarkButton";

export default {
  title: "component/BookMarkButton",
  component: BookMarkButton,
  argTypes: {
    defaultState: {
      defaultValue: true,
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof BookMarkButton>;

const Template: ComponentStory<typeof BookMarkButton> = (args) => (
  <BookMarkButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  defaultState: true,
};
