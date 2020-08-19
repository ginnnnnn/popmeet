import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 4.5rem;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-top: 3rem;
`;
export const SearchForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const SearchInputContainer = styled.div`
  width: 20%;
  height: 70%;
  display: flex;
  flex-direction: column;
  border-right: ${({ nobr }) => (nobr ? '' : '1px solid lightgrey')};
  padding: 0 1rem;
  justify-content: center;
`;
export const SearchInputLabel = styled.label`
  font-size: 0.3em;
  margin-bottom: 5px;
`;
export const SearchInput = styled.input`
  font-size: 1rem;
  border: none;
  outline: 0;
`;
export const SearchButtonContainer = styled.div`
  width: 20%;
  height: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 1rem;
`;
export const SearchButton = styled.button`
  width: 7.5rem;
  height: 100%;
  border: none;
  border-radius: 8px;
  background: #53b9de;
  outline: none;
  color: white;
  padding: 1rem;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SearchButtonText = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
