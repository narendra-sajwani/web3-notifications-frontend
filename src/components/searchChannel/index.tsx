import React, { useState } from 'react';
import './index.scss';
import SearchIcon from '../../assets/search.svg';
import CloseIcon from '../../assets/icon_close.svg';

interface SearchChannelProps {
  query: string;
  onSelectValue: (value: string) => void;
}

const SearchChannel = ({ query, onSelectValue }: SearchChannelProps) => {
  const [value, setValue] = useState(query);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { currentTarget } = e;
    setValue(currentTarget.value);
  };

  const handleKeyPress = (e: any) => {
    if (e?.key === 'Enter') {
      onSelectValue(value);
    }
  };

  const handleClick = () => {
    onSelectValue(value);
  };

  const handleResetValue = () => {
    setValue('');
    onSelectValue('');
  };

  return (
    <div className="searchbar">
      <span onClick={handleClick} className="searchbar__search-icon">
        <img src={SearchIcon} alt="seachIcon" />
      </span>
      <input
        className="searchbar__input"
        type="text"
        name="value"
        onChange={handleChange}
        value={value}
        onKeyPress={handleKeyPress}
        placeholder="Search Channel"
      />
      {value && (
        <span onClick={handleResetValue} className="searchbar__cross-icon">
          <img src={CloseIcon} alt="crossIcon" />
        </span>
      )}
    </div>
  );
};

export default SearchChannel;