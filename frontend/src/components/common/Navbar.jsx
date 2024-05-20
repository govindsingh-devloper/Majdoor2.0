import React from 'react'
import { Link } from 'react-router-dom'
import { NavbarLinks } from '../../data/navbarLinks'
import { useSelector } from 'react-redux'
import ProfileDropDown from '../core/auth/ProfileDropDown'

const Navbar = () => {

    const {token}=useSelector((state)=>state.auth);
  return (
    <div>
        <div>
            <nav>
                <ul>
                    {NavbarLinks.map((link,index)=>(
                        <li key={index}>
                        { link.title==="Categories" ?(<div></div>):(
                            <Link to={link?.path}>
                            <p>
                                {link.title}
                            </p>

                            </Link>
                        )}

                        </li>
                    ))}
                </ul>
            </nav>
            {/* Login Signup */}
            <div>
                {
                    token===null &&(
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    )
                }
                {
                    token===null &&(
                        <Link to="/signup">
                            <button>Signup</button>
                        </Link>
                    )
                }
                {
                    token!==null && <ProfileDropDown/>
                }
            </div>
        </div>
    </div>
  )
}

export default Navbar