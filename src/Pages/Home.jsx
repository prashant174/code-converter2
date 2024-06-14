import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/Authcontext'
import { CodeInputform } from '../Componants/CodeInputform'
import Nav from "../Componants/Nav"
import ResultDisplay from '../Componants/ResultDisplay'
// import WelcomePage from './WelcomePage'
import WelcomePageTest from './WelcomePage'
import axios from 'axios'
import { toast } from 'react-toastify'


const Home = () => {
  const {user,logout}=useContext(AuthContext)
  const [result,setResult]=useState(null)
  // const navigate=useNavigate()

  
  return (
    <>
   
   
   <div>
    {user?(<>

    <Nav   />
     
    <CodeInputform setResult={setResult} />
    {result && <ResultDisplay result={result} />}

    </>):(
     
   
  <WelcomePageTest/>

    )}
   </div>

    </>

  )
}

export default Home