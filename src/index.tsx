import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Navbar } from "components/Navbar/Navbar";
import { styled } from "stitches.config";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactComponent as HomeIcon } from "assets/icon-nav-home.svg";
import { ReactComponent as MoviesIcon } from "assets/icon-nav-movies.svg";
import { ReactComponent as BookmarkIcon } from "assets/icon-nav-bookmark.svg";
import { ReactComponent as TvIcon } from "assets/icon-nav-tv-series.svg";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const navigation = [
  { icon: <HomeIcon />, link: "/", alt: "home" },
  { icon: <MoviesIcon />, link: "/movies", alt: "movies" },
  { icon: <TvIcon />, link: "/series", alt: "series" },
  { icon: <BookmarkIcon />, link: "/bookmarked", alt: "bookmarked" },
];


const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  background: "$darkBlue",
});

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
    padding: "32px 0",
  },

  "@smallScreen": {
    padding: "0 32px",
    width: "calc(100% - 64px)",
  },
});

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <Wrapper>
          <Header>
            <Navbar navigation={navigation} />
          </Header>

          <Content>
            <App/>
          </Content>
        </Wrapper>
      </Container>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
