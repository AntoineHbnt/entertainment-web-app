import * as React from "react";
import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import { styled } from "stitches.config";

export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "16px",
  height: "48px",

  "& > svg": {
    transform: "scale(0.75)",
    "@tablet": {
      transform: "scale(1)",
    }
  }
});

const Input = styled("input", {
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
  fontFamily: "$outfit",
  fontSize: "1rem",
  fontWeight: "300",
  color: "$pureWhite",
  caretColor: "$red",

  "&:focus": {
    marginBottom: "-1px",
    borderBottom: "1px solid $greyishBlue",
  },

  "@tablet": {
    fontSize: "1.5rem",
  },
});

function SearchBar(props: SearchBarProps) {
  const { placeholder = "Search", value = "", onChange } = props;

  return (
    <Container>
      <SearchIcon/>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange && onChange(event)}
      />
    </Container>
  );
}

export default SearchBar;
