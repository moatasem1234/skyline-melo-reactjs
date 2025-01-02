import { Box, Button, Typography } from "@mui/material";
import melo from "../../../assets/melo.svg";
import Input from "../../../components/ui/input/Input";

const ResetPasswordPage = () => {
  return (
    <Box sx={{ width: "360px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <img src={melo} alt="melo logo" width="50" height="50" />
        <Typography
          variant="body2"
          component="h2"
          sx={{ fontSize: "18px", color: "#535862" }}
        >
          set a new password!
        </Typography>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Input
          label="New Password"
          name="password"
          type="password"
          onChange={() => {}}
        />
        <Input
          label="Confirm new password"
          name="confirm"
          type="confirm"
          onChange={() => {}}
        />
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize", mt: 3, width: "100%" }}
        >
          Change password
        </Button>
      </Box>
    </Box>
  );
};

export default ResetPasswordPage;
