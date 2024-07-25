import lottie from 'lottie-web';
import styles from './Home.module.scss'
import { useEffect, useRef, useState } from 'react';
import lungsData from "../../assets/animations/lungs.json"
import { useNavigate  } from "react-router-dom"
import { gsap } from "gsap"

import { TbReportAnalytics } from "react-icons/tb";
import { PiHeartbeatBold } from "react-icons/pi";
import { FaStethoscope } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaMessage } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";

const Home = () => {
  const [stress, setStress] = useState(false);
  const navigate = useNavigate();
  // const [logout, setLogout] = useState(false)
  const [menu, setMenu] = useState(false)
  
  const menuRef = useRef(null)
  const shadowRef = useRef(null)
  const itemsRef = useRef(null)
  // const [blocker, setBlocker] = useConfirmExit()
  // let blocker = useBlocker(
  //   ({ nextLocation }) =>
  //     nextLocation.pathname !== "/heart-health"
  // );
  

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


  const toggleMenu = () => {
    if (menu) {
      closeMenuAnimation()
      setMenu(false)
    } else {
      setMenu(true)
      openMenuAnimation()
    }
  }

  const closeMenu = () => {
    closeMenuAnimation()
    setMenu(false)
  }

  const openMenuAnimation = () => {
    gsap.fromTo(menuRef.current,{  opacity: 0, top: "-30rem", right: "-30rem" }, { opacity: 1, top: "-8rem", right: "-8rem", duration: 1})
    gsap.fromTo(shadowRef.current , { opacity: "0"} , { opacity: .5, duration: 1, display: "block" })
    gsap.fromTo(itemsRef.current , { opacity: "0"} , { opacity: 1, duration: .1 })
  
  }

  const closeMenuAnimation = () => {
    gsap.fromTo(menuRef.current, { opacity: 1, top: "-8rem", right: "-8rem"}, {  opacity: 0, top: "-30rem", right: "-30rem", duration: 1})
    gsap.fromTo(shadowRef.current , { opacity: .5, duration: 1 }, { opacity: "0", display: "none"})
    gsap.fromTo(itemsRef.current, { opacity: 1 }, { opacity: "0" , duration: .1})
  }

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
          <div className={styles.notifier} >
            <div className={`${styles.menu} ${menu ? styles.on : null}`}>
              <IoMenu onClick={() => toggleMenu()} />
            </div>
            <div ref={menuRef} className={`${styles.circle} `}>
              <div ref={itemsRef} className={styles.itmsupport}>
                <div className={styles.itemico}><BiSupport /></div>
                <div className={styles.itemname}>Support</div>
              </div>
              <div ref={itemsRef} className={styles.itmprofile}>
                <div className={styles.itemico}><CgProfile /></div>
                <div className={styles.itemname}>Profile</div>
              </div>
              <div ref={itemsRef} className={styles.itmmessage}>
                <div className={styles.itemico}><FaMessage /></div>
                <div className={styles.itemname}>Message</div>
              </div>
              <div ref={itemsRef} className={styles.itmlogout}>
                <div className={styles.itemico}><TbLogout2 /></div>
                <div className={styles.itemname}>Logout</div>
              </div>
            </div>
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
              <div className={styles.heart} onClick={() =>{navigate("/heart-health", { replace: true }) }}>
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
      {/* <ExitWindow state={logout} setState={setLogout} /> */}
      <div ref={shadowRef}  className={`${styles.backshadow}`} onClick={() => closeMenu()}></div>
    </main>
  )
}

export default Home