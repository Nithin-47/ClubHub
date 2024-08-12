import styles from "../styles/authForms.module.css";

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Input } from "../../components"
import { RouteNames } from "../../constants"
import { MdOutlineEmail, MdOutlinePassword } from "react-icons/md"
import { UseLoginReturns, useLogin } from "../../hooks";
import { errorToast } from "../../utils";

function LoginPage() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [loading, error, login]: UseLoginReturns = useLogin()

    useEffect(() => {
        if(error) {
            errorToast((error as Error).message)
        } 
    }, [error])

    function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        login({ email, password })
    }

    if(loading) {
        return <p>Loading...</p>
    }

    return (
        <div className={styles.formContainer}>
            <p className={styles.title}>ClubHub</p>
            <p className={styles.formTitle}>Login</p>

            <form onSubmit={e => onFormSubmit(e)}>
                <Input 
                    label="Email"
                    name="email"
                    value={email}
                    onValueChange={setEmail}
                    type="email"
                    icon={<MdOutlineEmail />}
                    required
                />

                <Input
                    label="Password"
                    name="password"
                    value={password}
                    onValueChange={setPassword}
                    type="password"
                    icon={<MdOutlinePassword />}
                    required
                />

                <button type="submit">Login</button>
            </form>

            <Link to={RouteNames.Auth.REGISTER_PAGE}>Not Registered?</Link>
        </div>
    )
}
 
export default LoginPage