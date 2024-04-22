import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const userInfo = {
      name:data.name,
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:8080/user/signup", userInfo)
    .then((res) => {
      console.log(res.data)
      if(res.data){
        alert("Sign up Successful ")
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user))
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
        Name :  <br></br>
        <input name='name' id='name' placeholder='Enter Your Name' {...register("name", { required: true })}/>
        <br></br>
        {errors.name && <span style={{color:"red"}}>This field is required</span>}
        <br></br>
        Email :  <br></br>
        <input name='email' id='email' placeholder='Enter Email Id' {...register("email", { required: true })}/>
        <br></br>
        {errors.email && <span style={{color:"red"}}>This field is required</span>}
        <br></br>
        Password : <br></br>
        <input name='password' id='password' placeholder='Enter Password' {...register("password", { required: true })}/>
        <br></br>
        {errors.password && <span style={{color:"red"}}>This field is required</span>}
        <br></br>
        <button>Login</button><br></br>
        <Link to="/Login">
        Already have an Account? click here to Login
        </Link>
      </form>
    </div>
  )
}
