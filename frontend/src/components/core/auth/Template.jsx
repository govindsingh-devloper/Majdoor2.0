import { useSelector } from "react-redux";
import Loginform from "./Loginform";
import Signupform from "./Signupform";

function Template({title,description1,description2,formType}){
    const {loading}=useSelector((state)=>state.auth)

    return(
        <div>
            {loading?(<div>Loading.......</div>):(
               <>
               <p>{title}</p>
                <p></p>
                {formType === "signup" ? <Signupform /> : <Loginform />}
               </>
            )}
        </div>
    )
}

export default Template