import { Box, Typography, Button } from "@mui/material";
import verification from "../../../assets/verification.svg";

const SecurityAuthenticationPage = () => {
  const handleResendVerification = () => {
    // logic here
  };

  return (
    <Box sx={{ textAlign: "center", padding: "2rem" }}>
      <img
        src={verification}
        alt="email verification"
        style={{ maxWidth: "100%", height: "auto", marginBottom: "1rem" }}
      />
      <Box>
        <Typography variant="h6" gutterBottom>
          We have sent a verification link to your email. Go and check it.
        </Typography>
        <Typography variant="h6">
          If you received nothing, press
          <Button
            variant="text"
            color="primary"
            onClick={handleResendVerification}
            sx={{ textTransform: "capitalize", fontSize: "20px" }}
          >
            send again!
          </Button>
        </Typography>
      </Box>
    </Box>
  );
};

export default SecurityAuthenticationPage;
