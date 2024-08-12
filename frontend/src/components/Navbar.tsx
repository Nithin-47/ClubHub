import { useRef, useState } from "react"
import styles from "./styles/Navbar.module.css"
import { MdMenu, MdOutlineClose } from "react-icons/md"
import { NavLink, Route } from "react-router-dom"
import { UseLogoutReturns, useLogout } from "../hooks"
import { RouteNames } from "../constants"

function Navbar() {
    const navLinksRef = useRef<HTMLUListElement>(null)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const [logout]: UseLogoutReturns = useLogout()

    function onMenuClick() {
        if(navLinksRef.current === null) return;

        navLinksRef.current.classList.toggle(styles.showNavLinks)

        if(isMenuOpen) {
            setIsMenuOpen(false)
        } else {
            setIsMenuOpen(true)
        }
    }
    
    return (
        <header className={styles.header}>
            <nav className={styles.container}>

                {/* for mobile devices */}
                <button onClick={onMenuClick} className={styles.menuIconButton}>
                    {
                        isMenuOpen ?  
                            <MdOutlineClose className={`secondary-text display-medium`} />
                        :
                            <MdMenu className={`secondary-text display-medium`} />
                    }
                </button>

                <p className={`display-medium ${styles.title}`}>ClubHub</p>

                <ul ref={navLinksRef} className={`title-large ${styles.navLinks}`}>
                    <li className={styles.navLink}>
                        <NavLink to={"/"}>Home</NavLink>
                        <div className={styles.linkUnderline}></div>
                    </li>
                    <li className={styles.navLink}>
                        <NavLink to={RouteNames.Root.EVENTS_PAGE}>Activities</NavLink>
                        <div className={styles.linkUnderline}></div>
                    </li>
                    <li className={styles.navLink}>
                        <NavLink to={RouteNames.Root.CLUBS_PAGE}>Clubs</NavLink>
                        <div className={styles.linkUnderline}></div>
                    </li>
                    <li 
                        className={styles.navLink} 
                        onClick={() => {
                            logout()
                        }}
                    >
                        <p>Logout</p>
                        <div className={styles.linkUnderline}></div>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar