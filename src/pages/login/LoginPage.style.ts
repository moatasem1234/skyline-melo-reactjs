import { SxProps, Theme } from "@mui/system";

export const loginPageContainer: SxProps<Theme> = {
  backgroundImage: "linear-gradient(34.75deg, #F5F2F4 11.19%, #E8F2FA 110.59%)",
  minHeight: "100vh",
  flexDirection: "column",
  justifyItems: "center",
  justifyContent: "center",
  display: "flex",
};

export const formContainer: SxProps<Theme> = {
  display: "flex",
  px: 16,
  flexDirection: "column",
  gap: "10px",
  justifyItems: "center",
  justifyContent: "center",
};
export const imageContainer: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyItems: "center",
  justifyContent: "center",
};

export const h1Text: SxProps<Theme> = {
  fontSize: "30px",
  fontWeight: "600",
  lineHeight: "38px",
  textAlign: "center",
};
export const pText: SxProps<Theme> = {
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "24px",
  textAlign: "center",
};

//styleName: Display sm/Semibold;
//styleName: Text md/Regular;
