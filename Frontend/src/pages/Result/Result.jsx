import { useNavigate } from 'react-router-dom';
import styles from './Result.module.scss'
import { IoMdArrowRoundBack } from "react-icons/io";


const Result = () => {
    const navigate = useNavigate();

  return (
    <main className={styles.container}>
        <div className={styles.circle}></div>
        <div className={styles.navbar}>
            <div className={styles.back} onClick={() => navigate("/heart-health", { replace: true })} ><IoMdArrowRoundBack /></div>
            <div className={styles.navtitle}>Result</div>
        </div>
        <div className={styles.dashboard}>
            <div className={styles.measures}>
                <div className={styles.measureswrapper}>
                    <div className={styles.results}>
                        <div className={styles.systolic}>
                            <div className={styles.text}>Systolic</div>
                            <div className={styles.percent}>98</div>
                            <div className={styles.rating}>mmHg</div>
                        </div>
                        <div className={styles.diastolic}>
                            <div className={styles.text}>Diastolic</div>
                            <div className={styles.percent}>71</div>
                            <div className={styles.rating}>mmHg</div>
                        </div>
                        <div className={styles.pulse}>
                            <div className={styles.text}>Pulse</div>
                            <div className={styles.percent}>78</div>
                            <div className={styles.rating}>BPM</div>
                        </div>
                    </div>
                    <div className={styles.date}>2024-07-17 17:01</div>
                </div>
            </div>
            <div className={styles.visualize}>
               <div className={styles.visualizewrapper}>
                    <div className={styles.visualtitle}>Normal</div>
                    <div className={styles.visualinfo}>SYS 90-119 and DIA 60-79</div>
                    <div className={styles.visual}>
                        <div className={styles.line}></div>
                        <div className={styles.indicator}></div>
                    </div>
               </div>
            </div>
            <div className={styles.advice}>
              <div className={styles.advicewrapper}>
                    <div className={styles.advicetitle}>Exclusive Advice</div>
                    <div className={styles.pressure}>
                        Your blood pressure is <span className={styles.state}>normal</span>, keep it
                    </div>
                    <div className={styles.lifestyle}>● Lifestyle Modifications</div>
                    <p className={styles.text}>
                        Adopt a healthy lifestyle by incorporating regular <br/> physical activity, main a balanced diet rich in fruits, vegetables, and whole grains, and limiting salt intake.
                    </p>
              </div>
            </div>
            <div className={styles.logo}>
                <img src="/logo.png" alt="logo" />
            </div>
        </div>
    </main>
  )
}

export default Result