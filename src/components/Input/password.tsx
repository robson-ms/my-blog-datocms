import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import OutlinedInput from '@mui/material/OutlinedInput/OutlinedInput';

interface IInputPassword {
  value: any;
  onChange: any;
  label: string;
  error?: string;
  name: string;
  setOnFocus?: any;
}

const InputPassword: React.FC<IInputPassword> = ({
  value,
  onChange,
  label,
  error,
  name,
  setOnFocus,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleOnMouseDown = () => {
    setShowPassword(true);
    setOnFocus(false);
  };

  const handleOnMouseUp = () => {
    setShowPassword(false);
    setOnFocus(true);
  };

  return (
    <div>
      <div>
        <FormControl>
          <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
          <OutlinedInput
            name={name}
            label={label}
            error={!!error}
            type={showPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            onFocus={setOnFocus}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onMouseDown={handleOnMouseDown}
                  onMouseUp={handleOnMouseUp}
                >
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </div>
  );
};

export default InputPassword;
