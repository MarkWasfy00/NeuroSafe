import { useEffect, useRef, useState } from 'react'
import styles from './Gender.module.scss'
import { gsap } from "gsap"
import { useNavigate  } from "react-router-dom"

const Gender = () => {
    const waver = useRef(null)
    const [gender, setGender] = useState(true);
    const navigate = useNavigate();
  


    const goToHomePage = () => {
        navigate('/home', { replace: true });
    };

    useEffect(() => {
        gsap.fromTo(waver.current, { y: 200 }, { y: 0, duration: 1 })
    }, [])
    

  return (
    <main className={styles.container}>
        <div className={styles.genderphotos}>
            <div className={`${styles.male} ${gender ? styles.clicked: null} `} onClick={() => setGender(true)}>
                <img src="/male.png" alt="" />
            </div>

            <div className={`${styles.female} ${!gender ? styles.clicked: null}`} onClick={() => setGender(false)}>
                <img src="/female.png" alt="" />
            </div>
        </div>

        <div className={styles.age}>
            <div className={styles.agetitle}>Your Age</div>
            <input type="number" min="10" max="100"  className={styles.input} />
        </div>

        <button className={styles.btn} onClick={goToHomePage}>Confirm</button>


        <div ref={waver} className={styles.waver}></div>
    </main>
  )
}

export default Gender