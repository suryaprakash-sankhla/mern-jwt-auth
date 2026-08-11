import React, { useContext, useState } from 'react'
import background from "../assets/Images/background.jpg"
import { dataContext } from '../context/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LogIn = () => {
  const navigate = useNavigate();
  const { serverUrl, userData, setUserData, getUserData } = useContext(dataContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.post(serverUrl + "/api/login", {
        email,
        password
      }, { withCredentials: true })
      
      getUserData();
      setUserData(data.user);
      if (userData) {
        navigate("/");
      }
     
    } catch (error) {
      alert(error.response.data.message);
    }
  }
  return (
    <div className="h-screen flex items-center ">

      <div className="hidden lg:block lg:w-1/2 h-[95%] m-5  rounded-2xl overflow-hidden">
        <img
          src={background}
          alt=""
          className="w-full h-dvh object-cover object-right"
        />
      </div>


      <div className="w-full lg:w-1/2  flex flex-col  h-1.5  p-20 items-center justify-center ">
        <form className="w-full max-w-md my-2.5 flex flex-col items-center" onSubmit={handleLogin}  >
          <h1 className=' font-mono text-3xl text-blue-500 font-extrabold my-5'>Login</h1>
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='border-blue-400 outline-none  focus:border-blue-600 border-2 rounded-[5px] my-2.5 w-full h-10 px-2' type="email" placeholder='Email' required />
          <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='border-blue-400 outline-none  focus:border-blue-600 border-2 rounded-[5px] my-2.5 w-full h-10 px-2' type="password" placeholder='Password' required />
          <button className='bg-blue-700 text-white text-[18px] rounded-[5px] my-2.5 w-full h-10 px-2 ' type='submit' required>Login</button>
          <p onClick={() => { navigate("/signup"); }} className='cursor-pointer text-gray-400 font-bold'>Don't have an account? <span className='text-blue-400'>SignUp here</span></p>

        </form>
      </div>
    </div>
  )
}

export default LogIn