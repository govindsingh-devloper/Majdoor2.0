const BASE_URL=process.env.REACT_APP_BASE_URL


//Auth Endpoints

export const endpoints={
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    LOGIN_API: BASE_URL + "/auth/login",
    SIGNUP_API:BASE_URL + "/auth/signup",
    RESETPASSTOKEN_API:BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API:BASE_URL + "auth/reset-password",

    // Majdoor Auth Login
    LOGIN_API_M: BASE_URL + "/auth/majdoor-login",
    SIGNUP_API_M:BASE_URL + "/auth/majdoor-signup",

    // Thekedar Auth Login
    LOGIN_API_T: BASE_URL + "/auth/thekedar-login",
    SIGNUP_API_T:BASE_URL + "/auth/thekedar-signup",
}
//Profile Endpoints
export const settingsEndpoints={
    UPDATE_PROFILE_API: BASE_URL + "/auth/updateProfile",
    UPDATE_DISPLAY_PICTURE_API:BASE_URL + "/auth/updateDisplayPicture"

}

//Contact Api
export const contactusEndpoint = {
    CONTACT_US_API: BASE_URL + "/reach/contact",
  }

  //Search Api

  export const SearchEndpoint={
    SEARCH_API:BASE_URL + "/auth/searchMajdoor"
  }