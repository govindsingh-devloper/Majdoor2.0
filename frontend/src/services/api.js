const BASE_URL=process.env.REACT_APP_BASE_URL




//Auth Endpoints

export const endpoints={
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    LOGIN_API: BASE_URL + "/auth/login",
    SIGNUP_API:BASE_URL + "/auth/signup",
    RESETPASSTOKEN_API:BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API:BASE_URL + "auth/reset-password",
}

export const settingsEndpoints={
    UPDATE_PROFILE_API: BASE_URL + "/profile/updateProfile",
}