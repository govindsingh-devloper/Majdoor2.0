import React, { useState } from 'react'
import "../../css/Chat.css"
import logo from "../../images/logo.png";
import { Link } from 'react-router-dom';

let user;

const sendUser = () =>{
    user = document.getElementById('joininput').value;
    document.getElementById('joininput').value = "";
}

const Join = () => {

    const [name, setname] = useState("")    
    
    return (
        <div className="JoinPage">
            <div className="JoinContainer">
                <img src={logo} alt='logo' />
                <h1>Chat</h1>
                <input onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter Your Name" id="joininput"/>
                <Link onClick={(event)=> !name ?event.preventDefault():null} to="/chat"><button onClick={sendUser} className="joinbtn">Login</button></Link>
            </div>
        </div>
  )
}

export default Join
export {user}
