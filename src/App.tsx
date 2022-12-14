import React from "react";
import { Home } from "pages/Home/Home";
import { Media } from "utils/dataTypes";
import { Movies } from "pages/Movies/Movies";
import { Series } from "pages/Series/Series";
import { Bookmarked } from "pages/Bookmarked/Bookmarked";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "components/Navbar/Navbar";
import { ReactComponent as HomeIcon } from "assets/icon-nav-home.svg";
import { ReactComponent as MoviesIcon } from "assets/icon-nav-movies.svg";
import { ReactComponent as BookmarkIcon } from "assets/icon-nav-bookmark.svg";
import { ReactComponent as TvIcon } from "assets/icon-nav-tv-series.svg";
import { styled } from "stitches.config";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "app/store";
import { fetchData } from "features/media/mediaSlice";



function App() {
  const dispatch = useDispatch()<any>;
  const data = useSelector((state: RootState) => state.media).list;

  const navigation = [
    { icon: <HomeIcon />, link: "/", alt: "home" },
    { icon: <MoviesIcon />, link: "/movies", alt: "movies" },
    { icon: <TvIcon />, link: "/series", alt: "series" },
    { icon: <BookmarkIcon />, link: "/bookmarked", alt: "bookmarked" },
  ];

  React.useEffect(() => {
    dispatch(fetchData())
  }, [dispatch]);

  const Wrapper = styled("div", {
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

  const Content = styled("main", {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    minHeight: "100vh",
    padding: "16px",
    boxSizing: "border-box",
    flexGrow: 1,

    "@tablet": {
      padding: "32px",
    },

    "@smallScreen": {
      width: "calc(100% - 64px)",
    },
  });

  return (
    <Wrapper>
      <Header>
        <Navbar navigation={navigation} />
      </Header>

      <Content>
        <Routes>
          <Route index element={<Home  />} />
          <Route path="movies" element={<Movies  />} />
          <Route path="series" element={<Series  />} />
          <Route path="bookmarked" element={<Bookmarked  />} />
        </Routes>
      </Content>
    </Wrapper>
  );
}

export default App;
