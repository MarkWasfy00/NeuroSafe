import { useNavigate } from 'react-router-dom';
import styles from './Welcome.module.scss'

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <main className={styles.container}>
        <div className={styles.title}>
          <div className={styles.welcome}>Welcome To</div>
          <div className={styles.header}>NeuroSafe Drive</div>
        </div>
        <div className={styles.brain}>
          <img src="/brain.png" alt="brain" />
          <img className={styles.shadow} src="/brain.png" alt="brain" />
        </div>

        <div className={styles.agreement}>
          <div className={styles.top}>Health Watch on The Road</div>
          <p className={styles.bot}>An advanced system for monitoring an individuals vital signs, including brain waves, heart rate, respiration rate, and oxygen levels, with a stress detection alert system that activates upon identifying any abnormalities</p>
        </div>


        <button className={styles.btn} onClick={() => navigate("/signup", { replace: true })}>Next</button>
    </main>
  )
}

export default Welcome