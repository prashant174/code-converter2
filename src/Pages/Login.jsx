import {  TextField } from '@mui/material'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/Authcontext'
import LoadingButton from '@mui/lab/LoadingButton';

const Login = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loading,setLoading]=useState(false)
    const {login}=useContext(AuthContext)
    const navigate=useNavigate()

   

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            setLoading(true)
            const res= await axios.post('https://codeconverter1.onrender.com/login',{email,password})
                
          login(res.data)
          setLoading(false)
                 navigate("/")
        } catch (error) {
            console.error('Login failed:', error);
        }
    }


  return (
    <>
    
    <form onSubmit={handleSubmit}>
        <TextField
        label='email'
        type='email'
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin='normal'
        />
        
        <TextField
        label='password'
        type='password'
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin='normal'
        />
        <LoadingButton loading={loading} variant="contained" color="primary" type="submit">Login</LoadingButton>
    </form>
      <h3>don't have an account?<Link to="/signup"><span>signup</span></Link></h3>
      
    </>
  )
}

export default Login