import { createContext, useState } from "react";

export const UserContext = createContext()
 
export default function UserContextProvider({children}){
    const [user, setUser] = useState()

    function handleSubmit(user){
        setUser(user)
    }
    console.log("entrouContext")
    console.log(user)

    return(
        <UserContext.Provider value={{user, submit: handleSubmit}} >
            {children}
        </UserContext.Provider>
    )

}