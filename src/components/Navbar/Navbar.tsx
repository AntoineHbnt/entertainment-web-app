import * as React from "react";
import { styled } from "stitches.config";
import { ReactComponent as Logo } from "assets/logo.svg";
import { CustomLink } from "components/atoms/CustomLink/CustomLink";

export interface NavbarProps {
  navigation: {
    alt: string;
    icon: React.ReactNode;
    link: string;
  }[];
}

export function Navbar(props: NavbarProps) {
  const { navigation } = props;

  const Container = styled("div", {
    position: "relative",
    width: "100%",
    height: "56px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    background: "$semiDarkBlue",

    "@tablet": {
      height: "72px",
      borderRadius: "10px",
      padding: "24px",
    },

    "@smallScreen": {
      flexDirection: "column",
      justifyContent: "start",
      gap: "75px",
      height: "100%",
      width: "fit-content",
      borderRadius: "20px",
      padding: "32px",
    },
  });

  const Navigation = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: "24px",

    "@tablet": {
      gap: "32px",
    },

    "@smallScreen": {
      flexDirection: "column",
      gap: "40px",
    },
  });

  const LogoContainer = styled("div", {
    transform: "scale(0.8)",

    "@tablet": {
      transform: "scale(1)",
    },
  });

  const Avatar = styled("img", {
    width: "24px",
    aspectRatio: "1/1",
    border: "1px solid $pureWhite",
    borderRadius: "100%",

    "@tablet": {
      width: "32px",
    },
    "@smallScreen": {
      position: "absolute",
      bottom: "32px",
      width: "40px",
    },
  });

  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Navigation>
        {navigation &&
          navigation.map((item, index) => (
            <CustomLink key={`navLink-${index}`} to={item.link}>
              {item.icon}
            </CustomLink>
          ))}
      </Navigation>
      <Avatar src="https://randomuser.me/api/portraits/men/3.jpg" />
    </Container>
  );
}
