import React, { useState } from "react";
import { Box, Button, Typography, Input } from "@mui/material";

interface InputFileProps {
    label: string,
    name: string | undefined,
}


const InputFile = ({ label, name }: InputFileProps) => {
    const [fileName, setFileName] = useState<string>("No File Chosen");

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1}>
            <Typography variant="subtitle1">
                {label}
            </Typography>
            <Box sx={{
                padding: "10px 14px 10px 14px",
                borderRadius: "8px 0px 0px 0px",
                opacity: "0px",
                width: "100%",
                display: "flex",
                alignItems: "center", 
                gap: "2rem",
                border: "1px solid #D5D7DA",
                boxShadow: "0px 1px 2px 0px #0A0D120D",
            }} >
                <Button variant="outlined" component="label">
                    Choose File
                    <Input
                        type="file"
                        hidden
                        sx={{
                            padding: "10px 14px 10px 14px",
                            gap: "8px",
                            borderRadius: "8px 0px 0px 0px",
                            opacity: "0px",
                            display: "none",
                            border: "1px solid #D5D7DA",
                            boxShadow: "0px 1px 2px 0px #0A0D120D",
                        }}
                        name={name}
                        onChange={handleFileChange}
                    />
                </Button>
                <Typography variant="body1" color="textSecondary">
                    {fileName}
                </Typography>
            </Box>
        </Box>
    );
};

export default InputFile;
