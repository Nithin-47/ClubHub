import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "./styles/index.module.css"

function ClubDetails() {
    const { id } = useParams()

    const [club, setClub] = useState<any>({})

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/club/${id}`)
        .then(res => res.json())
        .then(data => {
            setClub(data)
        })
    }, [])

    return(
        <div className={styles.base}>
            <img src={`http://127.0.0.1:8000${club.logo}`}  />
            <p className={styles.clubName}>{club.name}</p>
            <p>{club.details}</p>

            <p className={styles.longDetailsHeading}>Details</p>
            <p className={styles.longDetails}>{club.longDetails}</p>
        </div>
    )
}

export default ClubDetails