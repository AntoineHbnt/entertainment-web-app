import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchBar from "./SearchBar";

export default {
  title: "component/SearchBar",
  component: SearchBar,
  argTypes: {
    placeholder: {
      defaultValue: "Search for movies or TV series",
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args}>SearchBar</SearchBar>
);

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Search for movies or TV series",
};
