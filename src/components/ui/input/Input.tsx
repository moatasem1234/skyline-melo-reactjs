// components/ReusableInput.tsx
import React from "react";
import TextField from "@mui/material/TextField";
import { InputLabel } from '@mui/material';
import { inputStyle, labelStyle } from "./input.style";
interface ReusableInputProps {
    label: string;
    name: string;
    value?: string | number;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    error?: boolean;
    helperText?: string;
    disabled?: boolean;
    fullWidth?: boolean;
}

const Input: React.FC<ReusableInputProps> = ({
    label,
    name,
    value,
    onChange,
    type = "text",
    placeholder = "",
    error = false,
    helperText = "",
    disabled = false,
    fullWidth = true,
}) => {
    return (
        <>
            <InputLabel sx={labelStyle}>
                {label}
            </InputLabel>
            <TextField
                sx={inputStyle}
                name={name}
                value={value}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                error={error}
                helperText={helperText}
                disabled={disabled}
                fullWidth={fullWidth}
                variant="outlined"
            />
        </>

    );
};

export default Input;
