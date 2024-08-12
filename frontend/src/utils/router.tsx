import { createBrowserRouter } from "react-router-dom";
import { RouteNames } from "../constants";
import { AuthLayout, RootLayout } from "../layouts";
import LoginPage from "../pages/Login";
import ShowcasePage from "../pages/Showcase";
import ActivitiesPage from "../pages/Activity";
import RegisterPage from "../pages/Register";
import ClubsPage from "../pages/Clubs";
import ClubDetails from "../pages/ClubDetails";
import ActivityDetails from "../pages/ActivityDetails";

const router = createBrowserRouter([
    {
        path: RouteNames.Auth.getName(),
        element: <AuthLayout />,
        children: [
            {
                path: RouteNames.Auth.REGISTER_PAGE,
                element: <RegisterPage />
            },
            {
                path: RouteNames.Auth.LOGIN_PAGE,
                element: <LoginPage />
            },
        ]
    },
    {
        path: RouteNames.Root.getName(),
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <ShowcasePage />
            },
            {
                path: RouteNames.Root.DASHBOARD_PAGE,
                element: <p>This is gonna be the Dashboard Page</p>
            },
            {
                path: RouteNames.Root.EVENTS_PAGE,
                element: <ActivitiesPage />
            },
            {
                path: RouteNames.Root.CLUBS_PAGE,
                element: <ClubsPage />
            },
            {
                path: RouteNames.Root.CLUB_DETAILS,
                element: <ClubDetails />
            },
            {
                path: RouteNames.Root.EVENT_DETAILS,
                element: <ActivityDetails />
            }
        ]
    }
])

export { router }