export const RouteNames = {
    Auth: {
        getName() {
            return "/auth"
        },
        REGISTER_PAGE: "/auth/register",
        LOGIN_PAGE: "/auth/login",
    }, 
    Root: {
        getName() {
            return "/"
        },
        SHOWCASE_PAGE: "/showcase",
        DASHBOARD_PAGE: "/dashboard",
        EVENTS_PAGE: "/events",
        EVENT_DETAILS: "/event/:id",
        CLUBS_PAGE: "/clubs",
        CLUB_DETAILS: "/club/:id",
    }
}