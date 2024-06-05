import React, { useState } from 'react'
import {useSpring} from '@react-spring/web'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
import {Hourglass } from 'react-loader-spinner'
import {Button, Container, Form, Input, InputWrapper, TogglePasswordButton} from '../Styled/styled'
import { GlobalStyles } from '../Componants/GlobalStyles'

const Signup = () => {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [loading, setLoading]=useState(false)
    const [showPassword, setShowPassword] = useState(false);
    const navigate=useNavigate()
    const formProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            if(name===''||email===''||password===''){
                alert('Please fill all details')
            }
            else{
                setLoading(true)
            await axios.post('https://codeconverter1.onrender.com/signup',{name,email,password})

            navigate("/login")
            setLoading(false) 
            }
           
        } catch (error) {
            console.error('Signup failed:', error)
        }

    }
    

  return (
   <>
   <GlobalStyles/>

<Container>
    
    <Form initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} style={formProps} onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <Input
          type="text"
          placeholder="Your Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Your Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputWrapper>
        <Input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TogglePasswordButton onClick={() => setShowPassword(!showPassword)}>
          {showPassword?<FaEyeSlash/>:<FaEye/>}
        </TogglePasswordButton>
        </InputWrapper>
         <Button type="submit" disabled={loading} >
          {loading ? <Hourglass
  visible={loading}
  height="17"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['white', 'white']}
  /> : 'Signup'}
        </Button>
        
       
        <h3>already have an account?<Link to='/login'><span>login</span></Link></h3>
      </Form>
      
    </Container>

   {/* <form onSubmit={handleSubmit}>
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
   {/* <Button variant="contained" color="primary" type='submit'>signup</Button> 
   <LoadingButton loading={loading} variant="contained" color="primary" type='submit'>signup</LoadingButton>
   </form>
   <h3>already have an account?<Link to='/login'><span>login</span></Link></h3> */}
   </>
  )
}

export default Signup