import { useToast } from "@chakra-ui/react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react"
import {app, auth, provider} from "../firebase/firebase-config"

export const UserContext = createContext(null);

export const UserContextProvider = ({children}) => {
    const [userInfo,setUserInfo] = useState(null);

    useEffect(()=>{
        const subscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                setUserInfo(user)
            }
            else{
                setUserInfo(null)
            }
        })

        return () => {
            subscribe()
        }
    },[])

    const login = async() => {
        await signInWithPopup(auth,provider)
    }

    const  logout = async() => {
        await signOut(auth)
    }

    const  value = {
        userInfo,
        setUserInfo,
        login,
        logout,
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}

export default UserContext