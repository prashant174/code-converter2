import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { AuthProvider } from './context/Authcontext';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
 <>
 <h1>Code-converter</h1>
 <AuthProvider>

  <Router>
    <Routes>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
  </Router>

     
 </AuthProvider>

 </>
  );
}

export default App;
