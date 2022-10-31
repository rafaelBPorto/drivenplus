import { createContext, useState } from "react";

export const UserContext = createContext()
 
export default function UserContextProvider({children}){
    const [user, setUser] = useState(undefined)
    const [loginUser, setLoginUser] = useState(undefined)


    function handleSubmit(userData){
        setUser(userData)
    }


    return(
        <UserContext.Provider value={{user, submit: handleSubmit, loginUser, setLoginUser} } >
            {children}
        </UserContext.Provider>
    )

}