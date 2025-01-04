import { Box, Button, Checkbox, FormControlLabel, Grid2, TextField } from "@mui/material"
import { Link } from "react-router";
import { Typography } from '@mui/material';
import { formContainer, formContainerBody, googleBtn, h1Text, haveAccont, imageContainer, loginPageContainer, pText, submitBtn } from "./RegisterPage.style"
import melo from '../../../assets/melo.svg';
import Header from "../../../components/common/Header";
import Input from "../../../components/ui/input/Input";
import Google from "../../../components/icons/google";
const RegisterPage = () => {
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

                    <Grid2 sx={imageContainer} size={6}>
                        <TextField id="outlined-basic" variant="outlined" />
                    </Grid2>
                    <Grid2 sx={formContainer} size={6}>
                        <Box sx={{ mx: "auto" }}>
                            <img style={{ width: "50px", height: "50px" }} src={melo} alt="Logo" />
                        </Box>
                        <Typography sx={h1Text} component="h1">
                            Sign up a new account
                        </Typography>
                        <Typography sx={pText} >
                            join us and make success with our family!
                        </Typography>
                        <form  >
                            <Input label="Company phone number" name="email" type="text" onChange={() => { }} />
                            <Input label="Company email" name="password" type="password" onChange={() => { }} />
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
                                sign up
                            </Button>
                            <Button
                                variant="outlined"
                                fullWidth
                                sx={googleBtn}
                                size="large"
                            >
                                <Google />
                                <Typography sx={{ textTransform: "capitalize", color: "black", fontWeight: "500" }}  >
                                    Sign up with Google
                                </Typography>
                            </Button>
                        </form>
                        <Typography
                            textAlign="center"
                            sx={haveAccont}
                            color="text.secondary"
                            mt={2}
                        >
                            already have accout?
                            <Link style={{ textDecoration: "none", color: "#2196F3" }} to="/auth/login" >
                                Sign in
                            </Link>
                        </Typography>
                    </Grid2>
                </Grid2>
            
            </Box >
        </Box >



    )
}

export default RegisterPage