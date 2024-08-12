import { useNavigate } from "react-router-dom"
import { RouteNames } from "../constants"

type UseLogoutReturns = [
    logout: () => void
]

function useLogout(): UseLogoutReturns {
    const navigate = useNavigate()
    
    function logout() {
        localStorage.removeItem("authTokens")
        dispatchEvent(new StorageEvent("storage"))
        navigate(RouteNames.Auth.LOGIN_PAGE)
    }

    return [logout] 
}

export { useLogout }
export type { UseLogoutReturns }