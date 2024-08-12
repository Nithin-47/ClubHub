import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { RouteNames } from "../constants"

interface UserRegisterCreds {
    email: string
    password1: string
    password2: string
    name: string
    usn: string
}

type UseRegisterReturns = [
    loading: boolean,
    error: unknown,
    register: (credentials: UserRegisterCreds) => Promise<void>
]

function useRegister(): UseRegisterReturns {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<unknown>(undefined)

    const navigate = useNavigate()

    async function register({ email, password1, password2, name, usn }: UserRegisterCreds) {
        try {
            setLoading(true)

            if(email === "" || password1 === "" || password2 === "") {
                throw new Error("Fill all the Fields")
            }

            const response = await fetch("http://127.0.0.1:8000/api/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    "email": email,
                    "password": password1,
                    "name": name,
                    "usn": usn,
                })
            })

            const data = await response.json()

            if(response.status !== 200) {
                throw new Error("Something went wrong (Error Code != 200)")
            }

            if(data?.error) {
                throw new Error(data.error.message)
            }

            navigate(RouteNames.Auth.LOGIN_PAGE) 
            setLoading(false)

        } catch(e: unknown) {
            setError(e)
            setLoading(false)
        }
    }

    return [loading, error, register]
}

export { useRegister }
export type { UseRegisterReturns }