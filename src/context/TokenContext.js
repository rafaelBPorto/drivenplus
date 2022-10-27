import { createContext, useState } from "react";

export const TokenContex = createContext()
 
export default function TokenContexProvider({children}){
    const [token, setToken] = useState(undefined)

    function handleSubmit({token}){
        setToken(token)
    }

    return(
        <TokenContex.Provider value={{token, subimit: handleSubmit}} >
            {children}
        </TokenContex.Provider>
    )

}