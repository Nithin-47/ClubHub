import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RouteNames } from "../constants"

interface UserLoginCreds {
    email: string
    password: string
}

type UseLoginReturns = [
    loading: boolean,
    error: unknown,
    register: (credentials: UserLoginCreds) => Promise<void>
]

function useLogin(): UseLoginReturns {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<unknown>(undefined)

    const navigate = useNavigate()

    async function login({ email, password }: UserLoginCreds) {
        try {
            setLoading(true)
            
            if(email === "" || password === "") {
                throw new Error("Fill all the Fields")
            }

            const response = await fetch("http://127.0.0.1:8000/api/token/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password,
                })
            })

            const data = await response.json()

            if(response.status !== 200) {
                throw new Error("Something went wrong (Error Code != 200)")
            }

            if(data?.detail && data.detail == "No active account found with the given credentials") {
                throw new Error("The entered user doesn't exist")
            }

            localStorage.setItem("authTokens", JSON.stringify(data))
            dispatchEvent(new StorageEvent("storage"))
            navigate("/")
            setLoading(false)
        } catch(e: unknown) {
            setError(e)
            setLoading(false)
        }
    }

    return [loading, error, login]
}

export { useLogin }
export type { UseLoginReturns }