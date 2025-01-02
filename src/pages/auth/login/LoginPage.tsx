import { Box, Grid2, TextField } from "@mui/material"
import { Typography } from '@mui/material';
import { formContainer, h1Text, imageContainer, loginPageContainer, pText } from "./LoginPage.style"
import melo from '../../assets/melo.svg';
const LoginPage = () => {
    return (
        <Box sx={loginPageContainer} >
            <Grid2 container sx={{ border: "2px blue solid" }} spacing={4}>
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
                    <TextField id="outlined-basic" variant="outlined" />

                </Grid2>
                <Grid2 sx={imageContainer} size={6}>
                    <TextField id="outlined-basic" variant="outlined" />

                </Grid2>
            </Grid2>
            {/* <Grid2 container spacing={2}>
                <Grid2 sx={{ border : "2px red solid" }} size={8}>
                    <h1>size=8</h1>
                </Grid2>
                <Grid2 sx={{ border : "2px red solid" }} size={4}>
                    <h1>size=4</h1>
                </Grid2>
                <Grid2  sx={{ border : "2px red solid" }} size={4}>
                    <h1>size=4</h1>
                </Grid2>
                <Grid2 sx={{ border : "2px red solid" }} size={8}>
                    <h1>size=8</h1>
                </Grid2>
            </Grid2> */}
        </Box>


    )
}

export default LoginPage