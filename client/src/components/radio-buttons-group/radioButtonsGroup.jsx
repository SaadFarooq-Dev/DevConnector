import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function RadioButtonsGroup() {
  return (
      <RadioGroup
        row
        defaultValue="female"
        name="gender"
        id="gender"
        sx={{ml:1}}
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
      </RadioGroup>
  );
}
