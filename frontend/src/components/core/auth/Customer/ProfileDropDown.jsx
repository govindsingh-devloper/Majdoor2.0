import { useRef, useState } from "react"
import { AiOutlineCaretDown } from "react-icons/ai"
import { VscDashboard, VscSignOut } from "react-icons/vsc"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

import useOnClickOutside from "../../../hooks/useOnClickOutside"
import { logout } from "../../../services/operations/authAPI"

export default function ProfileDropdown() {
  const { user } = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useOnClickOutside(ref, () => setOpen(false))

  if (!user) return null

  return (
    <button onClick={() => setOpen(true)}>
      <div>
        <img
          src={user?.image}
          alt={`profile-${user?.firstName}`}
        />
        <AiOutlineCaretDown  />
      </div>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
        
          ref={ref}
        >
          <Link to="/CustomerDashboard" onClick={() => setOpen(false)}>
            <div >
              <VscDashboard className="text-lg" />
              Dashboard
            </div>
          </Link>
          <div
            onClick={() => {
              dispatch(logout(navigate))
              setOpen(false)
            }}
          >
            <VscSignOut />
            Logout
          </div>
        </div>
      )}
    </button>
  )
}