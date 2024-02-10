import React, { useState } from 'react';
import axios from 'axios';

const SearchText: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.get(`https://bible-api.com/search?q=${searchTerm}`);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching:', error);
      // Optionally handle errors or display a message to the user
    }
  };

  return (
    <div className='flex flex-col-2 items-center justify-center space-x-4 mt-[15rem]'>
      <h1 className='text-3xl text-center'>Bible Search</h1>
      <form onSubmit={handleSearch} className='space-x-2'>
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
          className='border-2 border-black rounded pl-2 pr-[7rem] py-2 text-start'
        />
        <button type="submit" className='text-[#000000] border-solid border border-[#000000] border-padding px-2 py-1 shadow-2xl shadow-[#000000] transition-shadow ease-in-out rounded text-xl text-bolder transform hover:scale-105 bg-gradient-to-br from-gray-300 to-gray-500'>Search</button>
      </form>
      {searchResults.length > 0 && (
        <div className='flex flex-col items-center justify-center text-center'>
          <h2 className='text-3xl text-black'>Search Results</h2>
          <ul>
            {searchResults.map(result => (
              <li key={result.id} className='text-xl text-black'>{result.text}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchText;



