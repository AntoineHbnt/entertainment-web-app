import * as React from "react";

import { PageProps } from "App";
import { CardType } from "components/MediaCard/MediaCard";
import { MediaGrid } from "components/MediaGrid/MediaGrid";
import SearchBar from "components/SearchBar/SearchBar";
import { Media } from "utils/dataTypes";

export function Movies(props: PageProps) {
    const { data } = props;

  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterData, setFilterData] = React.useState<Media[]>([]);
  const [movies, setMovies] = React.useState<Media[]>([]);


  const searchData = (term: string) => {
    const filteredData = movies.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilterData(filteredData);
  };

  const handleTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchTerm(value && value);
    searchData(value && value);
  };

  React.useEffect(() => {
    if (data) {
      setMovies(data.filter(elem => elem.category === "Movie"));
    }
  }, [data])

  return (
    <>
      <SearchBar
        placeholder="Search for movies"
        onChange={handleTermChange}
        value={searchTerm}
      />
      {searchTerm ? (
        <MediaGrid
          title={`Found ${filterData.length} results for '${searchTerm}'`}
          type={CardType.Regular}
          mediaArray={filterData}
        />
      ) : (
        <>
          <MediaGrid
            title="Movies"
            type={CardType.Regular}
            mediaArray={movies}
          />
        </>
      )}
    </>
  );
}
