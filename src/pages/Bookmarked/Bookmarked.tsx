import * as React from "react";
import { Media } from "utils/dataTypes";
import SearchBar from "components/SearchBar/SearchBar";
import { MediaGrid } from "components/MediaGrid/MediaGrid";
import { CardType } from "components/MediaCard/MediaCard";
import { PageProps } from "App";

export function Bookmarked(props: PageProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterData, setFilterData] = React.useState<Media[]>([]);
  const [bookmarked, setBookmarked] = React.useState<Media[]>([]);
  const [movies, setMovies] = React.useState<Media[]>([]);
  const [series, setSeries] = React.useState<Media[]>([]);

  const { data } = props;

  const searchData = (term: string) => {
    const filteredData = bookmarked.filter((item) =>
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
      const bookmarked = data.filter(elem => elem.isBookmarked);
      setBookmarked(bookmarked);
      setSeries(bookmarked.filter(elem => elem.category === "TV Series"));
      setMovies(bookmarked.filter(elem => elem.category === "Movie"));
    }
  }, [data]);

  return (
    <>
      <SearchBar
        placeholder="Search for bookmarked shows"
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
          {movies.length > 0 && <MediaGrid
            title="Bookmarked Movies"
            type={CardType.Regular}
            mediaArray={movies}
          />}
          {series.length > 0 && <MediaGrid
            title="BookMarked TV Series"
            type={CardType.Regular}
            mediaArray={series}
          />}
        </>
      )}
    </>
  );
}
