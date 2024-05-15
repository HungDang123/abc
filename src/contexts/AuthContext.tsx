import React, { createContext, useContext, useEffect, useState } from "react";
import { User } from "../models/User";

interface AuthContextType {
    auth: User | null;
    setAuth: React.Dispatch<React.SetStateAction<User | null>>;
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  }

const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
      }
    return context;
  };
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Specify the type for children prop
  const [auth, setAuth] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(()=>{
//     // const subscribe = AuthService.subscribe((user)=>{
        
//     })
//   })

  const value = {
    auth,
    setAuth,
    isLoggedIn,
    setIsLoggedIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
