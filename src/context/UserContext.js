import { createContext, useState } from "react";

export const UserContext = createContext()
 
export default function UserContextProvider({children}){
    const [user, setUser] = useState(undefined)

    function handleSubmit(userData){
        setUser(userData)
    }
    console.log("entrouContext")
    console.log(user)

    return(
        <UserContext.Provider value={{user, submit: handleSubmit}} >
            {children}
        </UserContext.Provider>
    )

}