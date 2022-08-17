import React from "react";
import { Home } from "pages/Home/Home";
import { Media } from "utils/dataTypes";
import { Movies } from "pages/Movies/Movies";
import { Series } from "pages/Series/Series";
import { Bookmarked } from "pages/Bookmarked/Bookmarked";
import { Route, Routes } from "react-router-dom";

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

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Routes>
      <Route index element={<Home data={data} />} />
      <Route path="movies" element={<Movies data={data} />} />
      <Route path="series" element={<Series data={data} />} />
      <Route path="bookmarked" element={<Bookmarked data={data} />} />
    </Routes>
  );
}

export default App;
