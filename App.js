// App.js
import React, { useState } from 'react';
import axios from 'axios';
import InputField from './InputField';
import MultiselectDropdown from './MultiselectDropdown';

function App() {
  const [inputData, setInputData] = useState('');
  const [response, setResponse] = useState({});
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://your-backend-api.com/bfhl', { data: inputData });
      setResponse(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSelect = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const renderResponse = () => {
    if (!response) return null;
    const filteredResponse = {};
    if (selectedOptions.includes('Alphabets')) {
      filteredResponse.alphabets = response.alphabets;
    }
    if (selectedOptions.includes('Numbers')) {
      filteredResponse.numbers = response.numbers;
    }
    if (selectedOptions.includes('Highest lowercase alphabet')) {
      filteredResponse.highest_lowercase_alphabet = response.highest_lowercase_alphabet;
    }
    return (
      <div>
        {Object.keys(filteredResponse).map((key) => (
          <div key={key}>
            <h5>{key}:</h5>
            <ul>
              {filteredResponse[key].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1>{/* Your roll number */}</h1>
      <form onSubmit={handleSubmit}>
        <textarea value={inputData} onChange={(event) => setInputData(event.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <MultiselectDropdown />
      {renderResponse()}
    </div>
  );
}

export default App;