import lottie from 'lottie-web';
import styles from './Home.module.scss'
import { useEffect, useRef, useState } from 'react';
import { IoIosNotifications } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { FaStethoscope } from "react-icons/fa";
import { PiHeartbeatBold } from "react-icons/pi";
import lungsData from "../../assets/animations/lungs.json"
import { useNavigate  } from "react-router-dom"

const Home = () => {
  const [stress, setStress] = useState(false);
  const navigate = useNavigate();

  const lungsContainer = useRef(null);

  useEffect(() => {
    const lungs = lottie.loadAnimation({
      container: lungsContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: lungsData,
    });

    // Clean up on unmount
    return () => {
      lungs.destroy()
    };
  }, [stress]);

  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.profilebar}>
          <div className={styles.profile}>
            <div className={styles.profilepic}>
              <img src="/profile-male.png" alt="profile picture" />
            </div>
            <div className={styles.profilename}>Hello, Adam!</div>
          </div>
          <div className={styles.notifier}>
            <IoIosNotifications />
          </div>
        </div>
        <div className={styles.sections}>
          <div className={styles.sectionshead}>
            <div className={styles.sectionsicon}><TbReportAnalytics /></div>
            <div className={styles.sectionstitle}>Health Diary</div>
          </div>
          <div className={styles.grid}>
              <div className={styles.respiration}>
                <div className={styles.respirationtitle}>Respiration rate</div>
                <div ref={lungsContainer} className={styles.respirationimg}>
                  {/* <img src="/rate.png" alt="respiration image" /> */}
                </div>
              </div>
              <div className={styles.oxygen}>
                <div className={styles.oxygentitle}>Oxygen in blood</div>
                <div className={styles.oxygenimg}>
                  <img src="/ox.png" alt="oxygen image" />
                </div>
                <div className={styles.oxygenrate}>98/71 <span>mmHg</span></div>
              </div>
              <div className={styles.heart} onClick={() => navigate("/heart-health")}>
                <div className={styles.heartinfo}>
                  <div className={styles.hearttitle}>Heart Health</div>
                  <div className={styles.heartblocks}>
                    <div className={styles.heartblock}>
                      <div className={styles.heartblockimg}><FaStethoscope /></div>
                      <div className={styles.heartblocktitle}>Heart pressure</div>
                      <div className={styles.heartblockrate}>123 <span>/80</span></div>
                    </div>
                    <div className={styles.heartblock}>
                    <div className={styles.heartblockimg}><PiHeartbeatBold /></div>
                      <div className={styles.heartblocktitle}>Heart Rhythm</div>
                      <div className={styles.heartblockrate}>67 <span>/min</span></div>
                    </div>
                  </div>
                </div>
                <div className={styles.heartimg}>
                  <img src="/heart.png" alt="heart image" />
                </div>
              </div>
              <div className={`${styles.stress} ${stress ? styles.danger: styles.normal}`} onClick={() => setStress(!stress)}>
                <div className={styles.stresstitle}>Stress Level</div>
                <div className={styles.stressinfo}>
                  <div className={styles.stressimg}>
                    <img src={stress ? "/high.png": "/normal.png"} alt="" />
                  </div>
                  <div className={styles.stresslevel}>{stress ? "High": "Normal"}</div>
                  </div>
                </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home