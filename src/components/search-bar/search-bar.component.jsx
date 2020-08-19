import React, { useState } from 'react';
import {
  SearchBarContainer,
  SearchForm,
  SearchInputContainer,
  SearchInputLabel,
  SearchInput,
  SearchButton,
  SearchButtonContainer,
  SearchButtonText,
} from './search-bar.styles';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
  const [location, setLocation] = useState('');
  const [departure, setDeparture] = useState('');
  const [startDate, setStartDate] = useState('');
  const [activityType, setActivityType] = useState('');

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log({
      location,
      departure,
      startDate,
      activityType,
    });
  };
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    switch (name) {
      case 'location':
        setLocation(value);
        break;
      case 'departure':
        setDeparture(value);
        break;
      case 'startDate':
        setStartDate(value);
        break;
      case 'activityType':
        setActivityType(value);
        break;
      default:
        return;
    }
  };
  return (
    <SearchBarContainer>
      <SearchForm onSubmit={handleOnSubmit}>
        <SearchInputContainer>
          <SearchInputLabel>目的地</SearchInputLabel>
          <SearchInput
            name="location"
            value={location}
            onChange={handleOnChange}
            placeholder="想去哪玩呢?"
          />
        </SearchInputContainer>
        <SearchInputContainer>
          <SearchInputLabel>出發地</SearchInputLabel>
          <SearchInput
            name="departure"
            value={departure}
            onChange={handleOnChange}
            placeholder="從哪出發呢?"
          />
        </SearchInputContainer>
        <SearchInputContainer>
          <SearchInputLabel>出發日期</SearchInputLabel>
          <SearchInput
            name="startDate"
            value={startDate}
            onChange={handleOnChange}
            placeholder="哪天去玩呢?"
          />
        </SearchInputContainer>
        <SearchInputContainer nobr>
          <SearchInputLabel>活動類型</SearchInputLabel>
          <SearchInput
            name="activityType"
            value={activityType}
            onChange={handleOnChange}
            placeholder="玩些什麼呢?"
          />
        </SearchInputContainer>
        <SearchButtonContainer>
          <SearchButton>
            <SearchIcon fontSize="default" color="inherit" />
            <SearchButtonText type="submit">搜尋</SearchButtonText>
          </SearchButton>
        </SearchButtonContainer>
      </SearchForm>
    </SearchBarContainer>
  );
};

export default SearchBar;
