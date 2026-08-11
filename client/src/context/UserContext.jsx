import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const dataContext = createContext();

const UserContext = ({ children }) => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState()

    const serverUrl="https://mern-jwt-auth-0spg.onrender.com" 

    const getUserData = async () => {
        try {
            let {data} = await axios.get(serverUrl +"/api/getuserdata",{withCredentials:true});
            setUserData(data);   
        } catch (error) {
            navigate('/login');
            console.log(error);
        }
    }

    const value = {
        serverUrl,userData,setUserData,getUserData
    }

    useEffect(() => {
        getUserData();
    },[]);

    return (

        <dataContext.Provider value={value}>
            {children}
        </dataContext.Provider>


    )
}

export default UserContext