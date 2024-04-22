import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo = {
          email:data.email,
          password:data.password
        }
        await axios.post("http://localhost:8080/user/Login", userInfo)
        .then((res) => {
          console.log(res.data)
          if(res.data){
            toast.success('Login Successful');
          }
          
          localStorage.setItem("Users", JSON.stringify(res.data.user))
          setTimeout(function() {
            window.location.replace('http://localhost:3000/');
          }, 1000);

        }).catch((err) => {
          if(err.response){
          console.log("Error : " + err)
          alert("Error : " + err.response.data.message)
          }
        });
        // console.log(data);
      }
      
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} style={{position:'relative', textAlign:'center', margin:'3rem'}}>
        Email :  <br></br>
        <input name='email' id='email' placeholder='Enter Email Id' {...register("email", { required: true })}/><br></br>
        {errors.email && <span style={{color:"red"}}>This field is required</span>}
        <br></br>
        <br></br>
        Password : <br></br>
        <input name='password' id='password' placeholder='Enter Password' {...register("password", { required: true })}/><br></br>
        {errors.password && <span style={{color:"red"}}>This field is required</span>}
        <br></br>
        <br></br>
        <button>Login</button><br></br>
        <Link to="/Signup">
        Don't have an Account? click here to Signup
        </Link>
      </form>
    </div>
  )
}
