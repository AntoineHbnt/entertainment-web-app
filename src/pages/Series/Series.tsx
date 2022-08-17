import * as React from "react";

import { CardType } from "components/MediaCard/MediaCard";
import { MediaGrid } from "components/MediaGrid/MediaGrid";
import SearchBar from "components/SearchBar/SearchBar";
import { Media } from "utils/dataTypes";
import { useSelector } from "react-redux";
import { RootState } from "app/store";

export function Series() {
  const data = useSelector((state: RootState) => state.media.list);

  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterData, setFilterData] = React.useState<Media[]>([]);
  const [series, setSeries] = React.useState<Media[]>([]);


  const searchData = (term: string) => {
    const filteredData = series.filter((item) =>
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
      setSeries(data.filter(elem => elem.category === "TV Series"));
    }
  }, [data])

  return (
    <>
      <SearchBar
        placeholder="Search for TV series"
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
            title="TV Series"
            type={CardType.Regular}
            mediaArray={series}
          />
        </>
      )}
    </>
  );
}
