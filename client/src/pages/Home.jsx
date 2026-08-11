import React, { useContext, useEffect } from "react";
import { dataContext } from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { serverUrl, userData ,setUserData, getUserData} = useContext(dataContext);

  const navigate = useNavigate;

  useEffect(()=>{
    if (!userData) {
    navigate("/login");
  }
  },[userData]);

  const handleLogout = async()=>{
    try {
         let data = await axios.post(serverUrl +"/api/logout",{},{
            withCredentials:true,
         });
         setUserData(null);
         console.log(data);
    } catch (error) {
        console.log(error.message);
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">

        <div className="flex flex-col items-center">
          <img
            src={userData.profileImage}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
          />

          <h1 className="text-3xl font-bold mt-5">
            {userData.firstName} {userData.lastName}
          </h1>

          <p className="text-gray-500">@{userData.userName}</p>
        </div>

        <div className="mt-8 space-y-5">

          <div>
            <p className="text-sm text-gray-500">First Name</p>
            <p className="text-lg font-semibold">{userData.firstName}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Last Name</p>
            <p className="text-lg font-semibold">{userData.lastName}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Username</p>
            <p className="text-lg font-semibold">@{userData.userName}</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="text-lg font-semibold break-all">
              {userData.email}
            </p>
          </div>

        </div>

        <button onClick={handleLogout} type="button" className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
          Log Out
        </button>

      </div>
    </div>
  );
};

export default Home;