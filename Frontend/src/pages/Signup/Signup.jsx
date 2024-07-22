import { useEffect, useRef } from "react"
import styles from "./Signup.module.scss"
import { gsap } from "gsap"
import { useNavigate  } from "react-router-dom"

const Signup = () => {
  const waver = useRef(null)
  const navigate = useNavigate();
  


  const goToGenderPage = () => {
    navigate('/gender');
  };

  useEffect(() => {
    gsap.fromTo(waver.current, { y: 200 }, { y: 0, duration: 1 })
  }, [])

  return (
    <main className={styles.container}>
      <div className={styles.logo}>
        <div className={styles.logoimg}>
          <img src="/signal-logo.png" alt="" />
        </div>
        <div className={styles.logotitle}>NeuroSafe Drive</div>
      </div>

      <div className={styles.form}>
        <div className={styles.holder}>
          <div className={styles.text}>Name</div>
          <input name="name" type="text" className={styles.input} />
        </div>
        <div className={styles.holder}>
          <div className={styles.text}>Email ID</div>
          <input id="email" name="name" type="text" className={styles.input} />
        </div>
        <div className={styles.holder}>
          <div className={styles.text}>Password</div>
          <input name="name" type="password" className={styles.input} />
        </div>
        <div className={styles.holder}>
          <div className={styles.text}>Confirm Password</div>
          <input name="name" type="password" className={styles.input} />
        </div>

        <button className={styles.btn} onClick={goToGenderPage}>Sign Up</button>
      </div>

      <div ref={waver} className={styles.waver}></div>
    </main>
  )
}

export default Signup