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
    SENDOTP_API_T: BASE_URL + "/auth/t-sendotp",
    LOGIN_API_T: BASE_URL + "/auth/thekedar-login",
    SIGNUP_API_T:BASE_URL + "/auth/thekedar-signup",
    RESETPASSTOKEN_API_T:BASE_URL + "/auth/t-reset-password-token",
    RESETPASSWORD_API_T:BASE_URL + "auth/t-reset-password",
    THEKEDAR_MAJDOORS: BASE_URL + "/auth/ThekadarMajdoors",
}
//Profile Endpoints
export const settingsEndpoints={
    UPDATE_PROFILE_API: BASE_URL + "/auth/updateProfile",
    UPDATE_DISPLAY_PICTURE_API: BASE_URL + "/auth/updateDisplayPicture",
    DELETE_PROFILE_API: BASE_URL + "/auth/deleteProfile",

}

//Contact Api
export const contactusEndpoint = {
    CONTACT_US_API: BASE_URL + "/reach/contact",
  }

  //Search Api

  export const SearchEndpoint={
    SEARCH_API:BASE_URL + "/auth/searchMajdoor",
    ALL_CATEGORIES:BASE_URL+ "/auth/CustomerHome",
    SINGLE_SERVICE:BASE_URL + "/auth/searchMajdoor/:id",
    SEARCH_LOCATION:BASE_URL + "/auth/searchlocation"
  }

  export const ORDER_ENDPOINT={
    ORDER_API:BASE_URL + "/auth/orders",
    BOOKING_API:BASE_URL + "/auth/CustomerOrder",
    MAJDOORBOOKING_API:BASE_URL + "/auth/MajdoorBookings",
    STATUSUPDATE_API:BASE_URL + "/auth/updateStatus",


    // THEKEDARBOOKING_API:BASE_URL + "/auth/ThekedarBookings",
    THEKEDARBOOKING_API:BASE_URL + "/auth/TCustomerOrder",

    THEKEDAR_BOOKING:BASE_URL + "/auth/ThekedarBookings",
    STATUS_UPDATE_T:BASE_URL + "/auth/TupdateStatus",
    THEKEDAARBOOKING_API:BASE_URL + "/auth/ThekedarOrder"

  }

  //Rating API
  export const RATING_ENDPOINT={
    RATING_API:BASE_URL +"/auth/rating"
  }
  

