import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{
        padding: "0 32px 0",
        backgroundColor: "transparent",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              gap: 6,
            }}
          >
            <Logo />
            <Navigation />
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: "12px",
            }}
          >
            <Button
              sx={{
                padding: "10px 18px",
                color: "#FBFBFB",
                background:
                  "linear-gradient(52.07deg, #2196F3 -7.59%, #ADC4D7 129.4%)",
                borderRadius: "8px",
                textTransform: "capitalize",
              }}
            >
              Log in
            </Button>
            <Button
              sx={{
                padding: "10px 18px",
                color: "#414141",
                borderRadius: "8px",
                textTransform: "capitalize",
              }}
            >
              Sign up
            </Button>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
