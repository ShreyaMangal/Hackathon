// InputField.js
import React, { useState } from 'react';

const InputField = () => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    try {
      JSON.parse(inputValue);
      setError(null);
    } catch (error) {
      setError('Invalid JSON input');
    }
  };

  return (
    <div>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter JSON input"
      />
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
};

export default InputField;