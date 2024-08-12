import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styles from "./styles/index.module.css"
function ActivityDetails() {
    const { id } = useParams()

    const [event, setEvents] = useState<any>({})
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/event/${id}`)
        .then(res => res.json())
        .then(data => {
            setEvents(data)
        })
    }, [])

    return(
            <div className={styles.base}>
            <img src={`http://127.0.0.1:8000${event.poster}`}/>
            <p className={styles.eventName}>{event.name}</p>
            <p className={styles.longDetailsHeading}>{event.details}</p>
            <p className={styles.longDetails}>{event.longDetails}</p>
        </div>
    )
}

export default ActivityDetails

