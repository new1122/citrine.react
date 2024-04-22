import React from 'react'
import { useAuth } from './AuthProvider';
import toast from "react-hot-toast"

export default function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () =>{
    try {
      setAuthUser({
        ...authUser,
        user:null
      })
      localStorage.removeItem("Users")
      toast.success("Logout Successfully!!!")
      window.location.reload();
    } catch (error) {
      toast.error("Error : "+ error.message)
    }
  }
  return (
    <div>
      <button style={{backgroundColor:'red'}} onClick={handleLogout}>Logout</button>
    </div>
  )
}
