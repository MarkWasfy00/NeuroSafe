import styles from './Home.module.scss'
import { IoIosNotifications } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { FaStethoscope } from "react-icons/fa";
import { PiHeartbeatLight } from "react-icons/pi";

const Home = () => {
  return (
    <main>
      <div className={styles.profilebar}>
        <div className={styles.profile}>
          <div className={styles.profilepic}>
            <img src="/male.png" alt="profile picture" />
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
              <div className={styles.respirationimg}>
                <img src="/rate.png" alt="respiration image" />
              </div>
            </div>
            <div className={styles.oxygen}>
              <div className={styles.oxygentitle}>Oxygen in blood</div>
              <div className={styles.oxygenimg}>
                <img src="/ox.png" alt="oxygen image" />
              </div>
              <div className={styles.oxygenrate}>98/71 mmHg</div>
            </div>
            <div className={styles.heart}>
              <div className={styles.heartinfo}>
                <div className={styles.hearttitle}>Heart Health</div>
                <div className={styles.heartblock}>
                  <div className={styles.heartblockimg}><FaStethoscope /></div>
                  <div className={styles.heartblocktitle}>Heart pressure</div>
                  <div className={styles.heartblockrate}>123 <span>/80</span></div>
                </div>
                <div className={styles.heartblock}>
                <div className={styles.heartblockimg}><PiHeartbeatLight /></div>
                  <div className={styles.heartblocktitle}>Heart Rhythm</div>
                  <div className={styles.heartblockrate}>123 <span>/80</span></div>
                </div>
              </div>
              <div className={styles.heartimg}>
                <img src="/heart.png" alt="heart image" />
              </div>
            </div>
            <div className={styles.stress}>
              <div className={styles.stressimg}></div>
              <div className={styles.stresslevel}>Normal</div>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Home