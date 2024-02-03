import { createContext, useEffect, useState } from "react";
import { axiosInstance } from "../utils/fetchUtitls";
import {useNavigate} from 'react-router-dom'
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUserData, setCurrentUserData] = useState(null);
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    if (redirected) {
      return; // Skip making the API call
    }
    axiosInstance.get("api/user-details", {})
    .then((data) => {
      console.log({ "user-context-data": data });
      setCurrentUserData(data);
      setRedirected(true);
    })
    .catch((error)=>{
      if (error.response && error.response.status === 401) {
        // Handle 401 Unauthorized error
        console.log('Unauthorized: Redirect or show login page');
      }
    })
  }, []);

  return (
    <UserContext.Provider value={{ currentUserData ,setCurrentUserData}}>
      {children}
    </UserContext.Provider>
  );
};
