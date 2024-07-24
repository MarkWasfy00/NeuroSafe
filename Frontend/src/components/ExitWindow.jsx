import styles from './ExitWindow.module.scss'
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ExitWindow = ({ state, setState }) => {
  const navigate = useNavigate();

  return (
    state ? <div className={styles.exit}>
        <div className={styles.window} onClick={() => setState(false)}>
            <div className={styles.title}>Are you sure you want to logout ?</div>
            <div className={styles.options}>
                <div className={styles.yes} onClick={() =>{  navigate('/', { replace: true }) }}>Yes</div>
                <div className={styles.no}  onClick={() => { setState(false) }} >No</div>
            </div>
        </div>
    </div> : null
  )
}

ExitWindow.propTypes = {
  state: PropTypes.bool.isRequired,
  setState: PropTypes.func.isRequired,
};


export default ExitWindow