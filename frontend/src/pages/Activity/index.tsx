import styles from "./styles/index.module.css"
import { Card } from "../../components"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"


const ActivitiesPage = () => {
    // TODO: change the 'any' type
    const [events, setEvents] = useState<any>([])
    const [pastEvents, setPastEvents] = useState<any>([])

    const navigate=useNavigate()
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/events/")
        .then(res => res.json())
        .then(data => {
            const events: any = []
            const pastEvents: any = []

            data.forEach((event: any) => {
                if(event.eventType == "upcoming") {
                    events.push(event)
                } else if(event.eventType == "past") {
                    pastEvents.push(event)
                }
            })

            setEvents(events)
            setPastEvents(pastEvents)
        })
    }, [])

    return (
        <div className={styles.base}>
            
            <p className={styles.title}>Upcoming Events</p>

            <div className={styles.gridContainer}>
                {events.map((event: any) => {
                    return(
                        <Card 
                            key={event.id}
                            image={`http://127.0.0.1:8000/${event.poster}`}
                            infoHeading={event.name}
                            infoDescription={event.details}
                            onClick={() => {
                                navigate(`/event/${event.id}`)
                            }}
                        />
                    )
                })}
            </div>

            <p className={styles.title}>Past Events</p>

            <div className={styles.gridContainer}>
                {pastEvents.map((event: any) => {
                    return(
                        <Card 
                            key={event.id}
                            image={`http://127.0.0.1:8000/${event.poster}`}
                            infoHeading={event.name}
                            infoDescription={event.details}
                            onClick={() => {
                                navigate(`/event/${event.id}`)
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}
 
export default ActivitiesPage