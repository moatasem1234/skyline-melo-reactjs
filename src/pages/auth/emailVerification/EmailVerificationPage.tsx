import { Box, Button, Stack, Typography } from "@mui/material";
import melo from "../../../assets/melo.svg";
import Input from "../../../components/ui/input/Input";

const EmailVerificationPage = () => {
  return (
    <Box sx={{ width: "360px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        <img style={{ width: "50px", height: "50px" }} src={melo} alt="Logo" />

        <Typography
          variant="h6"
          sx={{ textAlign: "center", fontSize: "16px", color: "#535862" }}
        >
          Enter your email so we send you a verification link
        </Typography>
      </Box>

      <Stack spacing={1} sx={{ mt: 1 }}>
        <Input
          label="Email"
          placeholder="Enter your email"
          name=""
          onChange={() => {}}
        />
      </Stack>
      <Button
        variant="contained"
        sx={{ textTransform: "capitalize", mt: 2, width: "100%" }}
      >
        Send Verification Link
      </Button>
    </Box>
  );
};

export default EmailVerificationPage;
