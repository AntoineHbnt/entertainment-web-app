import { ComponentMeta, ComponentStory } from "@storybook/react";
import { styled } from "stitches.config";
import { PlayButton } from "./PlayButton";

export default {
  title: "Atoms/PlayButton",
  component: PlayButton,
} as ComponentMeta<typeof PlayButton>;

const Container = styled("div", {
  width: "140px",
  height: "100px",
});

const Template: ComponentStory<typeof PlayButton> = () => (
  <Container>
    <PlayButton />
  </Container>
);

export const Primary = Template.bind({});
