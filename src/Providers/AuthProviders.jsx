import {createContext, useEffect, useState} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import app from "../Firebase/firebase.config";





export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProviders = ({children}) => {

   const [user,setUser] = useState(null);
   const [loading,setLoading] = useState(true);












    const authInfo = {
        user,
        loading,


    }



    // ========== user observer =================
    useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
        } )
        return ()=>{
            return unsubscribe;
        }

    },[])








    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
        
    
};

export default AuthProviders;