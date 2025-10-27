import { createContext, useState } from "react";

const AuthContext = createContext()

function AuthProvider({children}){
    const [isAuth, setIsAuth] = useState(false)

    function toggleAuth(){
        return setIsAuth(prev=>!prev)
    }



    return(
        <AuthContext.Provider value={{isAuth,toggleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}


export  {
    AuthContext,
    AuthProvider
};