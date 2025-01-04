import { Box, Button, Checkbox, FormControlLabel, Grid2, TextField } from "@mui/material"
import { Link } from "react-router";
import { Typography } from '@mui/material';
import { formContainer, formContainerBody, googleBtn, h1Text, haveAccont, imageContainer, loginPageContainer, submitBtn } from "./CompanyInfoPage.style"
import Header from "../../../components/common/Header";
import Input from "../../../components/ui/input/Input";
import Google from "../../../components/icons/google";
import InputFile from "../../../components/ui/inputFile/InputFile";
const CompanyInfoPage = () => {
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

                        <Typography sx={h1Text} component="h1">
                            Information about your company
                        </Typography>
                        <form  >
                            <Input label="Name of the company" name="name_company" type="text" onChange={() => { }} />
                            <Input label="Address of the company" name="address_company" type="text" onChange={() => { }} />
                            <Input label="Description" name="description_company" type="text" onChange={() => { }} />
                            <InputFile label="Logo of the company" name="logo_company" />
                            {/* <Input label="Logo of the company" name="logo_company" type="file" onChange={() => { }} /> */}
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
                    <Grid2 sx={imageContainer} size={6}>
                        <TextField id="outlined-basic" variant="outlined" />
                    </Grid2>

                </Grid2>

            </Box >
        </Box >



    )
}

export default CompanyInfoPage