import { RootLayout } from "./layouts"
import ShowcasePage from "./pages/Showcase"
import LoginPage from "./pages/Login"
import ActivitiesPage from "./pages/Activity"
import { Route, Routes, Navigate, RouterProvider } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "./contexts/AuthContext"
import { router } from "./utils"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Fuck you, lol
function App() {
    const contextData = useContext(AuthContext)

    return (
        <div className="background primary-text">
            {/* {
                !contextData?.user ?
                    <Navigate to="/login" replace />
                    :
                    null
            } */}
            <ToastContainer />
            <RouterProvider router={router} />
        </div>
    )
}

export default App
