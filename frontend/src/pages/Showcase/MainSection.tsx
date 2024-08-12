import styles from "./styles/MainSection.module.css"
import svgDroneFlying from "../../assets/undraw_analyze.svg"
import woman from "../../assets/woman.svg"
import creativity from "../../assets/creativity.svg"
import thoughts from "../../assets/thoughts.svg"
import trip from "../../assets/trip.svg"
import "./styles/home.css"
import "./styles/homeDropText.css"
import "./styles/homeEvents.css"
import "./styles/homeImageGallery.css"
import "./styles/homeIntroText.css"

import RotatingGallery from "../../components/RotatingGallery"

const MainSection = () => {
    return (
        <>
            <div className={styles.mainSection}>
                <div className={styles.decorator1}></div>

                <svg className={styles.decorator2} width="200" height="200" fill="none" viewBox="0 0 59 55">
                    <path className={styles.shapeFill} d="M29.4 54.8c-2.3 0-4.1-4.7-6.3-5.2-2.3-.5-5.9 2.8-7.9 1.7-2-1.1-1.4-6-3.1-7.5-1.7-1.5-6.5-.4-7.8-2.3-1.2-1.9 1.8-5.8 1.1-8-.6-2.1-5.3-3.8-5.3-6.1s4.7-4 5.3-6.1c.7-2.2-2.4-6.1-1.1-8 1.2-1.9 6.1-.8 7.8-2.3 1.7-1.5 1-6.4 3.1-7.5 2-1 5.7 2.3 7.9 1.7C25.3 4.7 27 0 29.3 0c2.3 0 4.1 4.7 6.3 5.2 2.3.5 5.9-2.8 7.9-1.7 2 1.1 1.4 6 3.1 7.5 1.7 1.5 6.5.4 7.8 2.3 1.2 1.9-1.8 5.8-1.1 8 .6 2.1 5.3 3.8 5.3 6.1s-4.7 4-5.3 6.1c-.7 2.2 2.4 6.1 1.2 8-1.2 1.9-6.1.8-7.8 2.3-1.7 1.5-1 6.4-3.1 7.5-2 1-5.7-2.3-7.9-1.7-2.3.5-4 5.2-6.3 5.2Z"></path>
                </svg>
        
                <img className={styles.mainSVG} src={svgDroneFlying} alt="" />

                <p className={styles.mainText}>Welcome to<br/>BMSCE<br/>ClubHub</p>
            </div>

            <div className={styles.wave}>
                <svg data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path className={styles.shapeFill} d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
                </svg>
            </div>
            <img className={styles.woman} src={woman} alt="" />
            <RotatingGallery />

            {/* <!-- IntroText --> */}
    <div className="Head_for_introtext">
        <h2>Interested in clubs?</h2>
        <div className="line"></div>
    </div>
    <div className="container_for_introtext">
        <div className="introtext">
            <div className="guitar_guy_holder">
                <div className="TextHolder1">Ever felt like trying to push out 
of your boundaries of known 
talents and
checking out new stuff 
and pick up new hobbies?</div>
    
                <img className="guitar_guy" src={`http://127.0.0.1:8000/images/guitar.jpg`} alt="singing_guy" />
            </div>
        </div>
        <div className="introtext2">
            <div className="club_people">
                <div className="TextHolder2 " >
                    Ever wanted to be free from the periodic 
grudgeful exams and ever pending 
project submissions?</div>
    
                <img src={`http://127.0.0.1:8000/images/nachi.jpg`} alt="comp_guy" />
            </div>
        </div>
        <div className="introtext3">
            <div className="happy_holder">
                <div className="TextHolder1">Well No need to worry,
since BMS has it all. You can choose to apply 
to any of the wide variety of clubs present 
here in BMSCE offering to supplement your 
co-curriculum activities and interests</div>
    
                <img className="happy_guy" src="https://github.com/Nachiketha237/Image/blob/main/Main%20Page/DSC_1035.JPG?raw=true" alt="happy_Guy" />
            </div>
        </div>
    </div>

    {/* <!-- DropText --> */}
    <div className="Head_for_drop_text">
        <h2>Why are clubs revered in BMSCE?</h2>
        <div className="dropLine"></div>
    </div>
    <div className="some_stuff">
		<div className="some">
            <img className="passion" src={thoughts} alt="bmsce_img" />
            <div className="drop" style={{color:"#ff0f5b"}}>
                <div className="stuffs">
                    <h1>01</h1>
<div className="TextHolder3">
Joining clubs allows 
you to connect to peer groups that shares similar 
interests as you. The connections 
that you make here 
can also possibly lead 
to life-long relationships</div>
                    {/* <!-- <a href="#">Read More</a> --> */}
                </div>
            </div>
            <a href="https://bmsce.ac.in/"><img className="bmsce" src={creativity} alt="bmsce_img" /></a>

            <div className="drop" style={{color:"#be01fe"}}>
                <div className="stuffs">
                    <h1>02</h1>
                    <div className="TextHolder4">
Being a part of a club or a society helps you 
to gain knowledge and experience in leadership, 
communication, problem-solving, 
group development and management, 
presentation and public speaking. 
You will feel the change in yourself. </div>
                    {/* <!-- <a href="#">Read More</a> --> */}
                </div>
            </div>
            <img className="style" src={trip} alt="bmsce_img" />

            <div className="drop" style={{color: "#01b4ff"}}>
                <div className="stuffs">
                    <h1>03</h1>
                    <div className="TextHolder3">
Its one of the best ways to Travel.
From cultural galas to volunteer trip, 
you never know what experiences are 
waiting for you on the other side of the road. 
Being part of a club provides 
you with that experience.
</div>
                    {/* <!-- <a href="#">Read More</a> --> */}
                </div>
            </div> 
		</div>
	</div>

    {/* <!-- EventsText --> */}
    <div className="Head_for_introtext">
        {/* <h2>Featured Events</h2> */}
        <div className="line"></div>
    </div>

    <div className="ok">
		<div className="container events">
			
		</div>
	  </div>

    {/* <footer>
        <p>Copyright © 2022 The Example Company</p>
        <p>
            <a href="about.html">About</a> 
            <a href="policy.html">Privacy Policy</a> 
            <a href="contact.html">Contact Us</a>
        </p>
    </footer> */}
        </>
    )
}

export default MainSection