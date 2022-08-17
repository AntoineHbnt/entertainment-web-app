import React from "react";
import { Navbar } from "components/Navbar/Navbar";
import { Home } from "pages/Home/Home";
import { styled } from "stitches.config";
import { ReactComponent as HomeIcon } from "assets/icon-nav-home.svg";
import { ReactComponent as MoviesIcon } from "assets/icon-nav-movies.svg";
import { ReactComponent as BookmarkIcon } from "assets/icon-nav-bookmark.svg";
import { ReactComponent as TvIcon } from "assets/icon-nav-tv-series.svg";
import { Media } from "utils/dataTypes";
import { Movies } from "pages/Movies/Movies";
import { Series } from "pages/Series/Series";
import { Bookmarked } from "pages/Bookmarked/Bookmarked";

export interface PageProps {
  data: Media[];
}

function App() {
  const [data, setData] = React.useState<Media[]>([]);

  const getData = async () => {
    const res = await fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    setData([...(await res.json())]);
  };

  const navigation = [
    { icon: <HomeIcon />, link: "", alt: "home" },
    { icon: <MoviesIcon />, link: "", alt: "movies" },
    { icon: <TvIcon />, link: "", alt: "tv" },
    { icon: <BookmarkIcon />, link: "", alt: "bookmark" },
  ];

  const Container = styled("div", {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1440px",
    height: "100%",

    "@tablet": {
      padding: "25px",
    },
    "@smallScreen": {
      flexDirection: "row",
      padding: "32px",
    },
  });

  const Header = styled("header", {
    position: "sticky",
    top: 0,
    zIndex: 1,

    "@tablet": {
      top: "25px",
    },

    "@smallScreen": {
      top: 32,
      height: "calc(100vh - 64px)",
    },
  });

  const Content = styled("div", {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    minHeight: "100vh",
    padding: "16px",
    boxSizing: "border-box",
    flexGrow: 1,

    "@tablet": {
      padding: "32px 0",
    },

    "@smallScreen": {
      padding: "0 32px",
      width: "calc(100% - 64px)",
    },
  });

  React.useEffect(() => {
    getData();
  }, []);

  


  return (
    <Container className="App">
      <Header>
        <Navbar navigation={navigation} />
      </Header>

      <Content>
        {data && <Bookmarked data={data}/>}
      </Content>
    </Container>
  );
}

export default App;
