import styles from "./styles/Card.module.css"

interface CardProps {
    infoHeading: string
    infoDescription: string
    image: string
    onClick?: () => void
}

function Card({ image, infoHeading, onClick }: CardProps) {
    return(
        <div className={styles.container} onClick={onClick}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={image}  alt={''}/>
            </div>

            <div className={styles.infoContainer}>
                <p className={styles.infoHeading}>{infoHeading}</p>
            </div>
        </div>
    )
} 

export default Card