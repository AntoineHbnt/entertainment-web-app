import * as React from "react";
import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icon-search.svg";

interface SearchBarProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent) => void;
}

function SearchBar(props: SearchBarProps) {
  const { placeholder = "Search", onChange } = props;

  const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    height: 48px;
  `;

  const Input = styled.input`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.main.fontFamily};
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.main.pureWhite};
    caret-color: ${({ theme }) => theme.main.red};

    &:focus {
      margin-bottom: -1px;
      border-bottom: 1px solid ${({ theme }) => theme.main.greyishBlue};
    }
  `;

  return (
    <Container>
      <SearchIcon style={{ transform: "scale(0.75)" }} />
      <Input placeholder={placeholder} onChange={event => onChange && onChange(event)}/>
    </Container>
  );
}

export default SearchBar;
