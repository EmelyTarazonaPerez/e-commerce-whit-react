import { useContext, createContext, useState, useEffect } from "react";


const AuthContext = createContext({
    isAuthenticated: false,
    iduser: "",
})


function AuthProvider({ children }) {
    const [isAuthenticated, setAuthenticated] = useState();
    const [iduser, setIdUser] = useState()

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setAuthenticated, 
                iduser,
                setIdUser

            }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

export const useAuth = () => useContext(AuthContext)
