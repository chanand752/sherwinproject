import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const currencies = [
    {
      value: 'ID',
      label: 'ID',
    },

]

function PriceList() {
    const [currency, setCurrency] = React.useState('ID');
    function handleChange(event) {
        setCurrency(event.target.value);
    };

    return (
        <div>
            <h2>Price List</h2>
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        // display: 'flex',
        // alignItems: 'center',
      }}
      noValidate
      autoComplete="off"
    >
         <label>Please Select a Brand to start</label>
      <div> 
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
    </TextField>
      </div>
    </Box>
    
        </div>
    );
}

export default PriceList;