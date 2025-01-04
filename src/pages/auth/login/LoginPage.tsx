import { Box, Button, Checkbox, FormControlLabel, Grid2, TextField } from "@mui/material"
import { Link } from "react-router";
import { Typography } from '@mui/material';
import { formContainer, formContainerBody, googleBtn, h1Text, haveAccont, imageContainer, loginPageContainer, pText, submitBtn } from "./LoginPage.style"
import melo from '../../../assets/melo.svg';
import Header from "../../../components/common/Header";
import Input from "../../../components/ui/input/Input";
import Google from "../../../components/icons/google";
const LoginPage = () => {
    return (
        <Box sx={{
            backgroundImage: "linear-gradient(34.75deg, #F5F2F4 11.19%, #E8F2FA 110.59%)",
            width: "100%",
            maxWidth: "1520px",
            mx: "auto",
        }}>
            <Header />
            <Box sx={loginPageContainer} >
                <Grid2 container spacing={4}>
                    <Grid2 sx={formContainer} size={6}>
                        <Box sx={{ mx: "auto" }}>
                            <img style={{ width: "50px", height: "50px" }} src={melo} alt="Logo" />
                        </Box>
                        <Typography sx={h1Text} component="h1">
                            Log in to your account
                        </Typography>
                        <Typography sx={pText} >
                            Welcome back! Please enter your details.
                        </Typography>
                        <form  >
                            <Input placeholder="Enter your email" label="Email" name="email" onChange={() => { }} />
                            <Input placeholder="*******" label="Password" name="password" onChange={() => { }} />
                            <Box
                                sx={formContainerBody}
                            >
                                <FormControlLabel
                                    control={<Checkbox defaultChecked />}
                                    label="Remember for 30 days"
                                />
                                <Link style={{ textDecoration: "none", color: "#2196F3" }} to="#" >
                                    Forgot password
                                </Link>

                            </Box>
                            <Button
                                sx={submitBtn}
                                variant="contained"
                                fullWidth
                                size="large"
                            >
                                sign in
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={
                                    googleBtn
                                }
                                size="large"
                            >
                                <Google />
                                <Typography sx={{ textTransform: "capitalize", color: "black", fontWeight: "500" }}  >
                                    Sign in with Google
                                </Typography>
                            </Button>
                        </form>
                        <Typography
                            textAlign="center"
                            variant="body2"
                            sx={haveAccont}
                            color="text.secondary"
                            mt={2}
                        >
                            Don’t have an account?{' '}
                            <Link style={{ textDecoration: "none", color: "#2196F3" }} to="/auth/register" >
                                Sign up
                            </Link>
                        </Typography>
                    </Grid2>
                    <Grid2 sx={imageContainer} size={6}>
                        <TextField id="outlined-basic" variant="outlined" />

                    </Grid2>
                </Grid2>
            </Box >
        </Box >



    )
}

export default LoginPage