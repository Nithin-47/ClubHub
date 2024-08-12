import { Outlet } from "react-router-dom";
import styles from "./styles/AuthLayoutStyles.module.css"
import svg from "../assets/undraw_mathematics.svg"

function AuthLayout() {
    return(
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img className={styles.svg} src={svg} alt="Generic Image" />
                </div>

                <Outlet />
            </div>
        </div>
    )
}

export default AuthLayout