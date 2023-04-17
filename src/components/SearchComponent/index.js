import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

// import { Container } from './styles';

function SearchComponent({searchText, handleSearch, placeholder}) {
  return(
    <TextField  
        value={searchText} 
        onChange={handleSearch}
        placeholder={placeholder}
        style={{backgroundColor: '#f0f0ee', margin: '10px', borderRadius: '5px', width: '20em'}}
        InputProps={{
            startAdornment: (
                <InputAdornment position="start">
                <SearchIcon />
                </InputAdornment>
            ),
        }} 
    />
  );
}

export default SearchComponent;