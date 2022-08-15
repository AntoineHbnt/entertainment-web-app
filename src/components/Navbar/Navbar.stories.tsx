import { ComponentMeta, ComponentStory } from "@storybook/react";
import { styled } from "stitches.config";
import { Navbar } from "./Navbar";
import { ReactComponent as HomeIcon} from "assets/icon-nav-home.svg";
import { ReactComponent as MoviesIcon} from "assets/icon-nav-movies.svg";
import { ReactComponent as BookmarkIcon} from "assets/icon-nav-bookmark.svg";
import { ReactComponent as TvIcon} from "assets/icon-nav-tv-series.svg";

export default {
  title: "Component/Navbar",
  component: Navbar,
  parameters: { layout: 'fullscreen' }
} as ComponentMeta<typeof Navbar>;

const Container = styled("div", {
  width: "100vw",
  height: "100vh",

  "@tablet": {
    padding: "25px",
  },
  "@smallScreen": {
    padding: "32px",
  }
});

const Template: ComponentStory<typeof Navbar> = (args) => (
  <Container>
    <Navbar {...args} />
  </Container>
  
);

export const Primary = Template.bind({});
Primary.args = {
  navigation: [
    { icon: <HomeIcon/>, link: "", alt:"home" },
    { icon: <MoviesIcon/>, link: "", alt:"movies" },
    { icon: <TvIcon />, link: "", alt:"tv" },
    { icon: <BookmarkIcon/>, link: "", alt:"bookmark" },
  ],
};
