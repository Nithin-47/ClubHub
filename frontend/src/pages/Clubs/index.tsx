import { useState, useEffect, ReactNode } from "react"
import styles from "./styles/index.module.css"
import { Card } from "../../components"
import { useNavigate } from "react-router-dom"
import { RouteNames } from "../../constants"

interface Club {
    id: number
    name: string
    logo: string
    details: string
}

const ClubsPage = () => {
    const [clubs, setClubs] = useState<Club[]>([])

    const navigate = useNavigate()

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/clubs")
        .then(res => res.json())
        .then(data => {
            const clubs: Club[] = []

            data.forEach((club: Club) => {
                clubs.push(club)
            })

            setClubs(clubs)
        })
    }, [])

    return (
        <div className={styles.base}>
            
            <p className={styles.title}>Clubs</p>

            <div className={styles.gridContainer}>
                {clubs.map(club => {
                    return(
                        <Card 
                            key={club.id}
                            image={`http://127.0.0.1:8000/${club.logo}`} 
                            infoDescription={club.details} 
                            infoHeading={club.name}
                            onClick={() => {
                                navigate(`/club/${club.id}`)
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}
 
export default ClubsPage