import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { RxCountdownTimer } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { TsendOtp, TsignUp } from "../services/operations/ThekedarAuthAPI";
import { useNavigate } from "react-router-dom";
 // Make sure you have necessary styles in this file or add custom styles

function TVerifyEmail() {
  const [otp, setOtp] = useState("");
  const { signupData, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Only allow access to this route when user has filled the signup form
    if (!signupData) {
      navigate("/Tsignup");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVerifyAndSignup = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      location,
    } = signupData;

    dispatch(
      TsignUp(
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        location,
        otp,
        navigate
      )
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="max-w-[500px] p-4 lg:p-8 bg-white shadow-md rounded-lg">
          <h1 className="text-gray-900 font-semibold text-[1.875rem] leading-[2.375rem]">
            Verify Email
          </h1>
          <p className="text-[1.125rem] leading-[1.625rem] my-4 text-gray-600">
            A verification code has been sent to you. Enter the code below
          </p>
          <form onSubmit={handleVerifyAndSignup}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderInput={(props) => (
                <input
                  {...props}
                  placeholder="-"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(0, 0, 0, 0.1)",
                  }}
                  className="w-[48px] lg:w-[60px] border border-gray-300 bg-gray-200 rounded-[0.5rem] text-gray-900 aspect-square text-center focus:border-blue-500 focus:outline-none"
                />
              )}
              containerStyle={{
                justifyContent: "space-between",
                gap: "0 6px",
              }}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-[12px] px-[12px] rounded-[8px] mt-6 font-medium"
            >
              Verify Email
            </button>
          </form>
          <div className="mt-6 flex items-center justify-between">
            <Link to="/thekedar-signup">
              <p className="text-blue-600 flex items-center gap-x-2">
                <BiArrowBack /> Back To Signup
              </p>
            </Link>
            <button
              className="flex items-center text-blue-600 gap-x-2"
              onClick={() => dispatch(TsendOtp(signupData.email))}
            >
              <RxCountdownTimer />
              Resend it
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TVerifyEmail;
