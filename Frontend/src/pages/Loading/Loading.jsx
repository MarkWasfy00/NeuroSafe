import styles from "./Loading.module.scss"
import loadingData from "../../assets/animations/loading.json"
import { useEffect, useRef } from "react";
import Lottie from "lottie-web";

const Loading = () => {
  const loadingContainer = useRef(null);

  useEffect(() => {
    const loading = Lottie.loadAnimation({
      container: loadingContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loadingData,
    });
    

    return () => {
      loading.destroy()
    };
  }, [])

  return (
    <main className={styles.container}>
      <div className={styles.gif}>
        <img src="/loading.gif" alt="loading" />
      </div>
    </main>
  )
}

export default Loading