import styles from "./styles/RotatingGallery.module.css"
import img1 from "../assets/test_images/img1.jpg"
import img2 from "../assets/test_images/image.png"

import img3 from "../assets/test_images/IMG_4522.jpg"
import img4 from "../assets/test_images/IMG_7745.jpg"






import { CSSProperties } from "react"

function RotatingGallery() {
    let imgs:string[] = [img1,img2,img3,img4,img1,img2]
    let images: any = []

    for(let i = 0; i < 6; i++) {
        images.push(<span key={i} style={{"--i": i+1} as CSSProperties }><img src={imgs[i]} alt="" /></span>)
    }

    return(
        <div className={styles.container}>
            <div className={styles.slider}>
                { 
                images
}
            </div>
        </div>
    )
}

export default RotatingGallery