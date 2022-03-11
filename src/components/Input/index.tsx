import React from 'react'

import TextField from '@mui/material/TextField'

interface IInput {
  label: string
  type?: 'text' | 'number' | 'date' | 'password' | 'file'
  name: string
  value?: string
  onBlur?: any
  onFocus?: any
  onKeyPress?: any
  disabled?: boolean
  shrink?: boolean
  error?: string
  size?: 'medium' | 'small'
  mask?: string
  multiline?: boolean
  rows?: number
  placeholder?: string
  onChange?: any
  endAdornment?: any
  autoFocus?: any
}

const Input: React.FC<IInput> = ({
  mask,
  label,
  type = 'text',
  name,
  value,
  onBlur,
  onFocus,
  onKeyPress,
  disabled = false,
  shrink = false,
  error,
  size = 'medium',
  multiline = false,
  rows,
  placeholder,
  onChange,
  autoFocus
}) => {
  let text = value

  return (
    <TextField
      id="outlined-textarea"
      type={type}
      name={name}
      error={!!error}
      size={size}
      style={{ width: '100%' }}
      variant="outlined"
      label={label}
      disabled={disabled}
      value={text}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyPress={onKeyPress}
      multiline={multiline}
      rows={rows}
      placeholder={placeholder}
      helperText={error}
      onChange={onChange}
      autoFocus={autoFocus}
      InputLabelProps={
        shrink
          ? {
              shrink
            }
          : {}
      }
    />
  )
}

export default Input
