import { createContext, useEffect, useState } from "react"
import jwt_decode from "jwt-decode"
import { ReactNode } from "react"

interface AuthProviderProps {
    children?: ReactNode
}

interface AuthContextType {
    user: {
        email: string,
        name: string
    } | null
}

const AuthContext = createContext<AuthContextType>({ user: null })

export default AuthContext

export const AuthProvider = ({ children }: AuthProviderProps) => {
    // const [authTokens, setAuthTokens] = useState(() => localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens") ?? "") : null) 
    // const [user, setUser] = useState(() => localStorage.getItem("authTokens") ? jwt_decode(localStorage.getItem("authTokens") ?? "") : null)

    const [user, setUser] = useState<AuthContextType>({ user: null })

    function handleAuthTokensChange(e: StorageEvent) {
        const localRaw: string | null = localStorage.getItem("authTokens")

        if(localRaw === null) {
            return
        }

        const local = JSON.parse(localRaw)

        interface decodedInterface {
            email: string
            name: string
        }

        const decoded = jwt_decode(local.access) as decodedInterface

        setUser({
            user: {
                email: decoded.email,
                name: decoded.name
            }
        })
    }

    useEffect(() => {
        addEventListener("storage", handleAuthTokensChange)        

        return () => {
            removeEventListener("storage", handleAuthTokensChange)
        }
    }, [])

    return(
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}
