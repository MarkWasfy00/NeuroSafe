import styles from "./Health.module.scss"
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';


const Health = () => {
    const navigate = useNavigate();

    const error = console.error;
    console.error = (...args) => {
    if (/defaultProps/.test(args[0])) return;
    if (/ React does not/.test(args[0])) return;
    error(...args);
    };

    const data = [
        {
          name: '71',
          ts: 21,
        }
    ];


  return (
    <main className={styles.container}>
        <div className={styles.circle}></div>
        <div className={styles.navbar}>
            <div className={styles.back} onClick={() => navigate("/home", { replace: true })} ><IoMdArrowRoundBack /></div>
            <div className={styles.navtitle}>Heart Health</div>
        </div>
        <div className={styles.dashboard}>
            <div className={styles.title}>
                <div className={styles.titlehead}>Details</div>
                <div className={styles.titledate}>Jul 18,2023 - Jul 18,2024</div>
            </div>
            <div className={styles.average}>
                <div className={styles.averagetitle}>24h Average</div>
                <div className={styles.analytics}>
                        <div className={styles.measures}>
                            <div className={styles.systolic}>
                                <div className={styles.text}>Systolic</div>
                                <div className="">98</div>
                                <div className={styles.rating}>mmHg</div>
                            </div>
                            <div className={styles.diastolic}>
                                <div className={styles.text}>Diastolic</div>
                                <div className="">71</div>
                                <div className={styles.rating}>mmHg</div>
                            </div>
                            <div className={styles.pulse}>
                                <div className={styles.text}>Pulse</div>
                                <div className="">78</div>
                                <div className={styles.rating}>BPM</div>
                            </div>
                        </div>
                        <div className={styles.chart}>
                            <ResponsiveContainer width="99%" height={"100%"} >
                                <BarChart
                                data={data}
                                barSize= {"10%"}
                                margin={{
                                    right: 15,
                                    left: 15,
                                }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" verticalCoordinatesGenerator={1} />
                                    <XAxis axisLine={false} dataKey="ts" tickLine={false}  />
                                    <YAxis axisLine={false} dataKey="ts" tickLine={false} width={10}/>
                                    <Bar shape={<rect rx={10} ry={10} />} dataKey="ts" fill="#abe3b4" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                </div>
            </div>
            <div className={styles.overall}>
                <div className={styles.overallwrapper}>
                    <div className={styles.overallhead}>
                        <div className={styles.mmhg}>
                            <div className={styles.numberone}>98</div>
                            <div className={styles.numberone}>71</div>
                            <div className={styles.rate}>mmHg</div>
                        </div>
                        <span className={styles.line}></span>
                        <div className={styles.analyze}>
                            <div className={styles.state}>Normal</div>
                            <div className={styles.plus}>Plus: 78 BPM</div>
                            <div className={styles.analyzedate}>2024-07-17 17:01</div>
                        </div>
                    </div>
                    <button className={styles.btn} onClick={() => navigate("/result", { replace: true })}>Result</button>
                </div>
            </div>
            <div className={styles.logo}>
                <img src="/logo.png" alt="logo" />
            </div>
        </div>
        
    </main>
  )
}

export default Health