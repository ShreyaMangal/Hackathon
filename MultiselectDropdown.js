// MultiselectDropdown.js
import React, { useState } from 'react';

const MultiselectDropdown = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Alphabets', 'Numbers', 'Highest lowercase alphabet'];

  const handleSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div>
      <h4>Select options:</h4>
      {options.map((option) => (
        <div key={option}>
          <input
            type="checkbox"
            checked={selectedOptions.includes(option)}
            onChange={() => handleSelect(option)}
          />
          <span>{option}</span>
        </div>
      ))}
    </div>
  );
};

export default MultiselectDropdown;