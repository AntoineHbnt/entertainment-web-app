import * as React from "react";
import { Media } from "utils/dataTypes";
import SearchBar from "components/SearchBar/SearchBar";
import { MediaGrid } from "components/MediaGrid/MediaGrid";
import { CardType } from "components/MediaCard/MediaCard";
import { useSelector } from "react-redux";
import { RootState } from "app/store";

export function Home() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filterData, setFilterData] = React.useState<Media[]>([]);
  const [trending, setTrending] = React.useState<Media[]>([]);
  const [recommended, setRecommanded] = React.useState<Media[]>([]);

  const data = useSelector((state: RootState) => state.media.list);

  const searchData = (term: string) => {
    const filteredData = data.filter((item) =>
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
      setTrending(data.filter((item) => item.isTrending));
      setRecommanded(data.filter((item) => !item.isTrending));
    }
  }, [data]);

  return (
    <>
      <SearchBar
        placeholder="Search for movies or TV series"
        onChange={handleTermChange}
        value={searchTerm}
      />
      {searchTerm ? (
        filterData.length > 0 && <MediaGrid
          title={`Found ${filterData.length} results for '${searchTerm}'`}
          type={CardType.Regular}
          mediaArray={filterData}
        />
      ) : (
        <>
          {trending.length > 0 && <MediaGrid
            title="Trending"
            type={CardType.Trending}
            mediaArray={trending}
          />}
          {recommended.length > 0 && <MediaGrid
            title="Recommended for you"
            type={CardType.Regular}
            mediaArray={recommended}
          />}
        </>
      )}
    </>
  );
}
