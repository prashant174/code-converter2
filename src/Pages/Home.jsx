import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/Authcontext'
import { CodeInputform } from '../Componants/CodeInputform'
import { Link } from 'react-router-dom'
import ResultDisplay from '../Componants/ResultDisplay'


const Home = () => {
  const {user,logout}=useContext(AuthContext)
  const [result,setResult]=useState(null)
  // const navigate=useNavigate()
  return (
    <>
   
   
   <div>
    {user?(<>
      <div>Home</div>
    <button onClick={logout} >Logout</button>
    <CodeInputform setResult={setResult} />
    {result && <ResultDisplay result={result} />}

    </>):(
     
     <p>please login first <Link to="/login" ><span>login</span></Link></p>

    )}
   </div>

    </>

  )
}

export default Home