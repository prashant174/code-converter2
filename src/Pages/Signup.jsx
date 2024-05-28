import React, { useState } from 'react'
import {Button, TextField} from '@mui/material'
// import { AuthContext } from '../context/Authcontext'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'


const Signup = () => {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    // const {login}=useContext(AuthContext)
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            await axios.post('https://codeconverter1.onrender.com/signup',{name,email,password})

            navigate("/login")
            
        } catch (error) {
            console.error('Signup failed:', error)
        }

    }
    

  return (
   <>
   <form onSubmit={handleSubmit}>
    <TextField 
    label="name"
    onChange={(e) => setName(e.target.value)}
    fullWidth
    margin='normal'
    />

<TextField 
    label="email"
    type='email'
    onChange={(e) => setEmail(e.target.value)}
    fullWidth
    margin='normal'
    />

<TextField 
    label="password"
    type='password'
    onChange={(e) => setPassword(e.target.value)}
    fullWidth
    margin='normal'
    />
   <Button variant="contained" color="primary" type='submit'>signup</Button>
   </form>
   <h3>already have an account?<Link to='/login'><span>login</span></Link></h3>
   </>
  )
}

export default Signup