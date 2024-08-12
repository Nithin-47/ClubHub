import styles from "../styles/authForms.module.css"

import { useEffect, useState } from "react"
import { UseRegisterReturns, useRegister } from "../../hooks"
import { errorToast } from "../../utils"
import { Input } from "../../components"
import { MdOutlineEmail, MdOutlinePassword, MdPersonOutline } from "react-icons/md"
import { AiOutlineIdcard } from "react-icons/ai"
import { Link } from "react-router-dom"
import { RouteNames } from "../../constants"

function RegisterPage() {
    const [name, setName] = useState<string>("")
    const [usn, setUsn] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password1, setPassword1] = useState<string>("")
    const [password2, setPassword2] = useState<string>("")

    const [loading, error, register]: UseRegisterReturns = useRegister()

    useEffect(() => {
        if(error) {
            errorToast((error as Error).message)
        }
    }, [error])

    function onFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if(password1 !== password2) {
            errorToast("Passwords don't match")
            setPassword1("")
            setPassword2("")
            return 
        }

        const usnRE = /1BM\d\d\w\w\d\d\d/
        if(!usnRE.test(usn)) {
            errorToast("Please enter a correct USN")
            return
        }

        const emailRE = /\w*\.\w\w\d\d@bmsce.ac.in/
        if(!emailRE.test(email)) {
            errorToast("Please enter a correct College mail")
            return
        }

        register({ email, password1, password2, name, usn })
    }

    if(loading) {
        return <p>Loading...</p>
    }

    return(
        <div className={styles.formContainer}>
            <p className={styles.title}>ClubHub</p>
            <p className={styles.formTitle}>Register</p>

            <form onSubmit={e => onFormSubmit(e)}>
                <Input 
                    label="Name"
                    name="name"
                    value={name}
                    onValueChange={setName}
                    type="text"
                    icon={<MdPersonOutline />}
                    required
                />

                <Input 
                    label="USN"
                    name="usn"
                    value={usn}
                    onValueChange={setUsn}
                    type="text"
                    icon={<AiOutlineIdcard />}
                    required
                />

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
                    name="password1"
                    value={password1}
                    onValueChange={setPassword1}
                    type="password"
                    icon={<MdOutlinePassword />}
                    required
                />

                <Input 
                    label="Confirm Password"
                    name="password2"
                    value={password2}
                    onValueChange={setPassword2}
                    type="password"
                    icon={<MdOutlinePassword />}
                    required
                />

                <button type="submit">Register</button>
            </form>

            <Link to={RouteNames.Auth.LOGIN_PAGE}>Already registered?</Link>
        </div>
    )
}

export default RegisterPage