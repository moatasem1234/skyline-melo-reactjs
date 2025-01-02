import { Box, Typography } from "@mui/material";

export default function Logo() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <img src="../../../public/Logo.png" alt="Logo Melo" />
      <Typography
        variant="body1"
        sx={{
          fontSize: "24px",
          fontWeight: "600",
          color: "#2196F3",
        }}
      >
        Melo
      </Typography>
    </Box>
  );
}
