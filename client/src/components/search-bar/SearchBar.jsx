import React from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (props) => {
  return (
    <FormControl sx={{ p: 1, width: 'auto' }}>
      <OutlinedInput
      sx={{borderRadius:4}}
        id='outlined-adornment-amount'
        onChange={(e) => props.onSearch(e.target.value.toLowerCase())}
        value={props.value}
        placeholder="Search Something..."
        startAdornment={
          <InputAdornment position='end'>
            <SearchIcon sx={{mr:1}}/>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};
export default SearchBar;
