import { useNavigate } from 'react-router-dom'
import styles from './Login.module.scss'
import { useEffect, useRef } from 'react'
import { gsap } from "gsap"

const Login = () => {
    const container = useRef(null)
    const logo = useRef(null)
    const login = useRef(null)
    const inputs = useRef(null)
    const wave = useRef(null)
    const navigate = useNavigate()


    useEffect(() => {
        // const hasAnimated = sessionStorage.getItem('hasAnimated');

        gsap.fromTo(container.current, { y: 800 }, { y: 0, duration: .5 });
        // gsap.fromTo(logo.current, { y: -200 }, { y: 0, duration: 1 })
        // gsap.fromTo(inputs.current, { y: 200 }, { y: 0, duration: .5 })
        // gsap.fromTo(login.current, { y: 200 }, { y: 0, duration: 1 })
        // gsap.fromTo(wave.current, { y: 200 }, { y: 0, duration: 1 })
        // sessionStorage.setItem('hasAnimated', 'true');
        // if(!hasAnimated) {
        // }

        // return () => {
        //     localStorage.setItem('hasAnimated', false);
        // }
    }, [])

  return (
    <main ref={container} className={styles.container}>
        <div ref={logo} className={styles.logo}>
            <img src="/logo.png" alt="logo" />
        </div>

        <div ref={inputs} className={styles.inputs}>
            <div className={styles.usernameinput}>
                <div className={styles.title}>Email ID</div>
                <input type="text" className={styles.username} />
            </div>
            <div className={styles.passwordinput}>
                <div className={styles.title}>Password</div>
                <input type="password" className={styles.password} />
            </div>
        </div>

        <div ref={login} className={styles.login}>
            <button className={styles.loginbtn}>Login</button>
            <div className={styles.signup}>
                <p>{"Don't have an account ?"}</p>
                <a onClick={() => navigate("/welcome", { replace: true })} >Sign Up</a>
            </div>
        </div>
        <div ref={wave} className={styles.waver}>
           {/* <svg  id="svg" viewBox="330 0 610 690" xmlns="http://www.w3.org/2000/svg" className={` ${styles.wave} transition duration-300 ease-in-out delay-150`}><defs><linearGradient id="gradient" x1="47%" y1="0%" x2="53%" y2="100%"><stop offset="5%" stopColor="#63beb9"></stop><stop offset="95%" stopColor="#3fa2f7"></stop></linearGradient></defs><path d="M 0,700 L 0,262 C 119.14285714285714,232.03571428571428 238.28571428571428,202.07142857142856 348,237 C 457.7142857142857,271.92857142857144 558,371.75 665,375 C 772,378.25 885.7142857142858,284.92857142857144 1016,250 C 1146.2857142857142,215.07142857142856 1293.142857142857,238.53571428571428 1440,262 L 1440,700 L 0,700 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-0"></path></svg> */}
            
        </div>
    </main>
  )
}

export default Login