import React, { useContext, useRef, useState } from 'react'
import background from "../assets/Images/background.jpg"
import dp from "../assets/Images/dp.png"
import { dataContext } from '../context/UserContext'
import axios from "axios";
import { useNavigate } from "react-router-dom"



const SignUp = () => {
  const navigate = useNavigate();
  const file = useRef();
  const { serverUrl, userData, setUserData, getUserData } = useContext(dataContext);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [frontentImage, setFrontentImage] = useState(dp);
  const [backendImage, setBackendImage] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {

      const formData = new FormData();
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("userName", userName);
      formData.append("email", email);
      formData.append("password", password);

      if (backendImage) {
        formData.append("profileImage", backendImage);
      }

      console.log(backendImage);
      for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      const data = await axios.post(serverUrl + "/api/signup", formData, {
        withCredentials: true,
      });
      getUserData();
      setUserData(data);
      if(userData){
        console.log("nhii ho rhaa hn")
          navigate("/");
         }
    } catch (error) {
      console.log(error);
    }
  }

  function handleImage(e) {
    const file = e.target.files[0];
    setBackendImage(file);
    const imgUrl = URL.createObjectURL(file);
    setFrontentImage(imgUrl);

  }



  return (
    <div className="h-screen flex items-center ">
      {/* Left Image */}
      <div className="hidden lg:block lg:w-1/2 h-[95%] m-5  rounded-2xl overflow-hidden">
        <img
          src={background}
          alt=""
          className="w-full h-dvh object-cover object-right"
        />
      </div>

      {/* Right Form */}
      <div className="w-full lg:w-1/2 h-3/4 flex flex-col  h-1.5  p-20 items-center justify-center ">
        <form className="w-full max-w-md my-2.5 flex flex-col items-center" onSubmit={handleSignUp} >
          <h1 className=' font-mono text-3xl text-blue-500 font-extrabold my-5'>Sign Up</h1>
          <div className='w-[100px] h-[100px] rounded-full bg-amber-300 overflow-hidden flex  flex-col items-center justify-center border-2 border-gray-300 relative'>
            <img src={frontentImage} alt="" className='w-[100%] h-[100%]' />
            <input type="file" className='hidden ' ref={file} onChange={handleImage} />
            <div onClick={() => { file.current.click() }} className='absolute w-[100%] h-[100%] bg-black top-0 opacity-0 hover:opacity-50 flex justify-center items-center text-white font-extrabold text-5xl cursor-pointer'>+</div>
          </div>
          <div className='flex  justify-between w-full'>
            <input value={firstName} onChange={(e) => { setFirstName(e.target.value) }} className='border-blue-400 outline-none focus:border-blue-600 border-2 rounded-[5px] my-2.5 w-full mr-3 h-10 px-2' type="text" placeholder='First Name' required />
            <input value={lastName} onChange={(e) => { setLastName(e.target.value) }} className='border-blue-400 outline-none focus:border-blue-600 border-2 rounded-[5px] my-2.5 w-full h-10 px-2' type="text" placeholder='Last Name' required />
          </div>
          <input value={userName} onChange={(e) => { setUserName(e.target.value) }} className='border-blue-400 outline-none  focus:border-blue-600 border-2 rounded-[5px] my-2.5 w-full h-10 px-2' type="text" placeholder='User Name' required />
          <input value={email} onChange={(e) => { setEmail(e.target.value) }} className='border-blue-400 outline-none  focus:border-blue-600 border-2 rounded-[5px] my-2.5 w-full h-10 px-2' type="email" placeholder='Email' required />
          <input value={password} onChange={(e) => { setPassword(e.target.value) }} className='border-blue-400 outline-none  focus:border-blue-600 border-2 rounded-[5px] my-2.5 w-full h-10 px-2' type="password" placeholder='Password' required />
          <button className='bg-blue-700 text-white text-[18px] rounded-[5px] my-2.5 w-full h-10 px-2 ' type='submit' required>Sign Up</button>
          <p onClick={() => { navigate("/login"); }} className='cursor-pointer text-gray-400 font-bold'>Already have an account? <span className='text-blue-400'>Login here</span></p>
        </form>
      </div>
    </div>

  )
}

export default SignUp